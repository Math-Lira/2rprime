'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { ReactNode } from 'react';

export function UserProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </SessionProvider>
  );
}

function AuthWrapper({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

//   if (!session) {
//     return <div>You are not authenticated</div>;
//   }

  return <>{children}</>;
}