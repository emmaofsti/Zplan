'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PasswordForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set cookie and redirect
    document.cookie = `site-auth=${password}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
    // Try navigating - middleware will check the cookie
    router.push(next);
    router.refresh();
    // If we're still here after a moment, password was wrong
    setTimeout(() => {
      setError(true);
    }, 500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fef9f4',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '48px',
        maxWidth: '400px',
        width: '100%',
        margin: '0 16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px', color: '#1a1a1a' }}>
          <span style={{ color: '#e8728a', position: 'relative', display: 'inline-block' }}>
            Z
            <span style={{
              position: 'absolute', bottom: '2px', left: 0, width: '100%',
              height: '6px', background: 'rgba(245, 200, 66, 0.4)', zIndex: 0,
            }} />
          </span>
          <span>plan</span>
        </div>
        <p style={{ color: '#8a8a8a', marginBottom: '32px', fontSize: '14px' }}>
          Siden er under utvikling
        </p>

        {error && (
          <p style={{ color: '#dc2626', marginBottom: '16px', fontSize: '14px' }}>
            Feil passord
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Skriv inn passord"
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '2px solid #f0d9d9',
              fontSize: '16px',
              outline: 'none',
              marginBottom: '16px',
              boxSizing: 'border-box',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '999px',
              background: '#e8728a',
              color: 'white',
              fontWeight: 700,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Gå videre
          </button>
        </form>
      </div>
    </div>
  );
}

export default function PasswordPage() {
  return (
    <Suspense>
      <PasswordForm />
    </Suspense>
  );
}
