export default function Loading() {
  return (
    <main className="section-content mx-auto flex min-h-[60vh] items-center justify-center px-6 py-24 text-brand-dark">
      <div className="inline-flex items-center gap-3 rounded-full bg-brand-cream px-6 py-4 shadow-card">
        <div className="h-4 w-4 animate-pulse rounded-full bg-brand-red" />
        <span>Cargando contenido...</span>
      </div>
    </main>
  );
}
