import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EventCard } from '@/components/sections/EventCard';
import { LeadForm } from '@/components/forms/LeadForm';
import { eventPackages } from '@/lib/data';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Eventos campestres | Puerto ChinChin Campestre',
  description: 'Organiza reuniones empresariales, fin de año y celebraciones familiares en Chía y Sopó con menú y espacio natural.',
  openGraph: generateOpenGraph('Eventos campestres | Puerto ChinChin Campestre', 'Organiza reuniones empresariales, fin de año y celebraciones familiares en Chía y Sopó con menú y espacio natural.')
};

export default function EventsPage() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Eventos</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Eventos empresariales y familiares con sabor campestre.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Espacios verdes, menús compartidos y atención personalizada para reuniones, cumpleaños, fin de año e integraciones de equipo.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <SectionHeading
            eyebrow="¿Por qué elegirnos?"
            title="Eventos que encantan a equipos y familias"
            description="Tenemos todo listo para tu planificación: sedes estratégicas, parqueaderos, menú a medida y ambiente natural." 
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {eventPackages.map((item) => (
              <EventCard key={item.id} eventPackage={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Cotiza tu evento"
                title="Cuéntanos tu plan y te contactamos con una propuesta" 
                description="Completa el formulario, describe tu evento y recibe una cotización personalizada para tu grupo." 
              />
              <p className="mt-6 max-w-2xl leading-8 text-brand-dark/80">
                Aplicamos un enfoque cercano para que tu reunión de empresa o celebración familiar sea memorable en un entorno campestre.
              </p>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-brand-dark/70">
            <p>¿Buscas algo aún más exclusivo? <Link href="/eventos/empresariales" className="font-semibold text-brand-red underline">Conoce la landing para eventos empresariales</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
