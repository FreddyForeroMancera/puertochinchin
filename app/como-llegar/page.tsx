import { SectionHeading } from '@/components/ui/SectionHeading';
import { locations, restaurantInfo } from '@/lib/data';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Ubicación | Puerto ChinChin Campestre',
  description: 'Información de ubicación, mapa y rutas para llegar a las sedes Puerto ChinChin en Chía y Sopó.',
  openGraph: generateOpenGraph('Ubicación | Puerto ChinChin Campestre', 'Información de ubicación, mapa y rutas para llegar a las sedes Puerto ChinChin en Chía y Sopó.')
};

export default function LocationPage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Ubicación</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Encuentra Puerto ChinChin en Chía y Sopó.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Dos sedes campestres cerca de Bogotá para disfrutar picadas, reservas familiares y eventos con el sabor de siempre.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Ubicación"
                title="Elige tu sede más cercana"
                description="Ven en auto propio o en servicio de transporte privado desde Bogotá. Te esperamos en Chía y Sopó con ambiente campestre, sabor tradicional y atención cercana." 
              />
              <div className="mt-8 grid gap-5">
                {locations.map((location) => (
                  <div key={location.id} className="space-y-3 rounded-[2rem] border border-brand-cream bg-cream p-8 shadow-card">
                    <p className="text-sm uppercase tracking-[0.28em] text-brand-red">{location.name}</p>
                    <p className="text-lg font-semibold text-brand-dark">{location.address}</p>
                    <p className="leading-7 text-brand-dark/80">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-brand-cream bg-brand-dark/5 shadow-card">
              <iframe
                title="Mapa Puerto ChinChin"
                src={restaurantInfo.mapUrl}
                className="h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
