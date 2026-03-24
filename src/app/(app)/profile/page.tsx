import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import ProfileClient from './ProfileClient';

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    let userSafe;
    let hasPassword = false;

    try {
        const prisma = (await import('@/lib/prisma')).default;
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                password: true,
                birthday: true,
                createdAt: true,
            },
        });

        if (!user) {
            redirect('/login');
        }

        hasPassword = !!user.password;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...rest } = { ...user, hasPassword };
        userSafe = rest;
    } catch {
        // Database not available — use session data
        userSafe = {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            phone: null,
            role: session.user.role,
            birthday: null,
            createdAt: new Date(),
            hasPassword: false,
        };
    }

    return <ProfileClient user={userSafe} hasPassword={hasPassword} />;
}
