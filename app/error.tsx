'use client';

import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  return (
    <main className="section-content mx-auto flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.28em] text-brand-red">Error de la aplicación</p>
      <h1 className="mt-4 text-4xl font-semibold text-brand-dark">Algo salió mal</h1>
      <p className="mt-4 max-w-xl leading-8 text-brand-dark/75">{error.message || 'Hubo un problema al cargar esta página. Intenta nuevamente.'}</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#90261f]">
        Ir al inicio
      </Link>
    </main>
  );
}
