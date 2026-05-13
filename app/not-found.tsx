import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section-content mx-auto flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.28em] text-brand-red">Página no encontrada</p>
      <h1 className="mt-4 text-5xl font-semibold text-brand-dark">404</h1>
      <p className="mt-4 max-w-xl leading-8 text-brand-dark/75">La página que buscas no existe o se ha movido. Regresa al inicio y explora nuestro menú y eventos.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#90261f]">
        Volver al inicio
      </Link>
    </main>
  );
}
