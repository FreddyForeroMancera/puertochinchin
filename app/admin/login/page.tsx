import type { Metadata } from 'next';
import { AdminLoginForm } from './AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin | Puerto ChinChin'
};

export const dynamic = 'force-dynamic';

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-cream px-5 pb-16 pt-32 lg:pt-40">
      <AdminLoginForm />
    </main>
  );
}
