'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const mockSession = {
    user: {
        id: 'demo-user',
        name: 'Emma',
        email: 'emma@zplan.no',
        role: 'ADMIN',
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    const pathname = usePathname();
    const isDemo = pathname?.startsWith('/demo');

    return (
        <SessionProvider session={isDemo ? (mockSession as any) : undefined}>
            {children}
        </SessionProvider>
    );
}
