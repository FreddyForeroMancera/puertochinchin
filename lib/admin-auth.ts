import { createHash } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const adminCookieName = 'puerto_admin_session';

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || (process.env.NODE_ENV === 'production' ? '' : 'admin123');
}

function createAdminToken(password: string) {
  return createHash('sha256').update(`puerto-chinchin:${password}`).digest('hex');
}

export async function isAdminAuthenticated() {
  const password = getAdminPassword();
  if (!password) return false;

  const cookieStore = await cookies();
  return cookieStore.get(adminCookieName)?.value === createAdminToken(password);
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login');
  }
}

export async function setAdminSession() {
  const password = getAdminPassword();
  if (!password) return;

  const cookieStore = await cookies();
  cookieStore.set(adminCookieName, createAdminToken(password), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/admin',
    maxAge: 60 * 60 * 8
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(adminCookieName);
}
