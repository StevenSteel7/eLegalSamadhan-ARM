// app/admin/layout.tsx
'use client'; // Enabling client-side rendering for interactive session control

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession();

  // Loading State Management
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-600 animate-pulse">Loading session...</p>
      </div>
    );
  }

  // Access Control Layer
  // Middleware enforces primary gatekeeping — this is a UX fallback
  if (status === 'unauthenticated' || (session && session.user?.role !== 'admin')) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-gray-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-700 mb-6">
          You do not have permission to view this page or your session has expired.
        </p>
        <Link
          href="/admin-login"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Go to Login
        </Link>
      </section>
    );
  }

  // Authorized Layout Rendering
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/admin/judgements" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            Admin Panel
          </Link>
          {session && (
            <div className="flex items-center pr-5">
              {/* Ideally this should pull the dynamic user name */}
              <span className="text-xl font-bold">Welcome, Vikram</span>
           
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
