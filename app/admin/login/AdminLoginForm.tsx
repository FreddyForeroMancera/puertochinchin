'use client';

import { useActionState } from 'react';
import { LockKeyhole } from 'lucide-react';
import { loginAdmin } from '../actions';

const initialState = { ok: false, message: '' };

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, initialState);

  return (
    <form action={formAction} className="mx-auto max-w-md space-y-5 rounded-lg border border-brand-cream bg-white p-8 shadow-card">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-red/10 text-brand-red">
        <LockKeyhole className="h-6 w-6" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-black text-brand-dark">Panel de administración</h1>
        <p className="mt-2 text-sm leading-6 text-brand-dark/70">Ingresa la clave del administrador para gestionar el sitio.</p>
      </div>
      <label className="block space-y-2 text-sm font-black text-brand-dark">
        Clave
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          className="w-full rounded-md border border-brand-cream bg-brand-cream/60 px-4 py-3 text-sm outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10"
          required
        />
      </label>
      {state?.message ? <p className="rounded-md bg-brand-red/10 px-4 py-3 text-sm font-semibold text-brand-red">{state.message}</p> : null}
      <button type="submit" disabled={isPending} className="w-full rounded-md bg-brand-red px-5 py-3 text-sm font-black text-white transition hover:bg-[#90261f] disabled:cursor-not-allowed disabled:opacity-70">
        {isPending ? 'Ingresando...' : 'Entrar al panel'}
      </button>
      <p className="text-center text-xs leading-5 text-brand-dark/60">En desarrollo, la clave temporal es <span className="font-black">admin123</span> si no configuras ADMIN_PASSWORD.</p>
    </form>
  );
}
