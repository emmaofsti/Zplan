import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    let shifts: any[] = [];

    try {
        const prisma = (await import('@/lib/prisma')).default;
        const assignments = await prisma.shiftAssignment.findMany({
            where: {
                userId: session.user.id,
                shift: {
                    startsAt: { gte: new Date() },
                },
            },
            include: {
                shift: {
                    include: {
                        assignments: {
                            include: {
                                user: {
                                    select: {
                                        id: true,
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                shift: {
                    startsAt: 'asc',
                },
            },
        });

        shifts = assignments.map((a) => ({
            ...a.shift,
            assignmentId: a.id,
            assignmentStatus: a.assignmentStatus,
        }));
    } catch {
        // Database not available — render with empty shifts
    }

    return <DashboardClient shifts={shifts} userName={session.user.name} userId={session.user.id} userRole={session.user.role} />;
}
