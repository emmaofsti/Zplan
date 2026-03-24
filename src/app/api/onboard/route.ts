import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { businessName, contactName, email, phone, password, employees, shifts } = body;

        // Validate required fields
        if (!businessName || !contactName || !email || !password) {
            return NextResponse.json(
                { error: 'Alle obligatoriske felt må fylles ut' },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Passordet må være minst 6 tegn' },
                { status: 400 }
            );
        }

        // Check if email is already in use
        const existingUser = await prisma.user.findUnique({
            where: { email: email.toLowerCase().trim() },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'Denne e-postadressen er allerede i bruk' },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create everything in a transaction
        const result = await prisma.$transaction(async (tx) => {
            // 1. Create business
            const business = await tx.business.create({
                data: {
                    name: businessName.trim(),
                    email: email.toLowerCase().trim(),
                    phone: phone?.trim() || null,
                },
            });

            // 2. Create admin user
            const adminUser = await tx.user.create({
                data: {
                    name: contactName.trim(),
                    email: email.toLowerCase().trim(),
                    password: hashedPassword,
                    role: 'ADMIN',
                    businessId: business.id,
                },
            });

            // 3. Create employee users
            const createdEmployees: { id: string; name: string }[] = [];
            if (employees && Array.isArray(employees)) {
                for (const emp of employees) {
                    if (emp.name?.trim()) {
                        const employee = await tx.user.create({
                            data: {
                                name: emp.name.trim(),
                                email: emp.email?.trim().toLowerCase() || `${emp.name.trim().toLowerCase().replace(/\s+/g, '.')}@${businessName.trim().toLowerCase().replace(/\s+/g, '')}.zplan.no`,
                                role: 'EMPLOYEE',
                                businessId: business.id,
                            },
                        });
                        createdEmployees.push({ id: employee.id, name: employee.name });
                    }
                }
            }

            // 4. Create shifts and assignments
            if (shifts && Array.isArray(shifts)) {
                for (const shift of shifts) {
                    if (shift.title?.trim() && shift.startsAt && shift.endsAt) {
                        const createdShift = await tx.shift.create({
                            data: {
                                title: shift.title.trim(),
                                startsAt: new Date(shift.startsAt),
                                endsAt: new Date(shift.endsAt),
                                location: shift.location?.trim() || '',
                                businessId: business.id,
                            },
                        });

                        // Assign employee if specified
                        if (shift.assigneeIndex !== undefined && shift.assigneeIndex !== null && shift.assigneeIndex >= 0) {
                            const assignee = createdEmployees[shift.assigneeIndex];
                            if (assignee) {
                                await tx.shiftAssignment.create({
                                    data: {
                                        shiftId: createdShift.id,
                                        userId: assignee.id,
                                    },
                                });
                            }
                        }
                    }
                }
            }

            return { adminUser, business };
        });

        return NextResponse.json(
            {
                user: {
                    id: result.adminUser.id,
                    name: result.adminUser.name,
                    email: result.adminUser.email,
                    role: result.adminUser.role,
                },
                business: {
                    id: result.business.id,
                    name: result.business.name,
                },
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.error('Onboard error:', error);
        const isDbError =
            error instanceof Error &&
            (error.constructor.name === 'PrismaClientInitializationError' ||
                error.message?.includes("Can't reach database"));
        return NextResponse.json(
            {
                error: isDbError
                    ? 'Kan ikke koble til databasen. Kontakt support eller prøv igjen senere.'
                    : 'Noe gikk galt. Prøv igjen.',
            },
            { status: 500 }
        );
    }
}
