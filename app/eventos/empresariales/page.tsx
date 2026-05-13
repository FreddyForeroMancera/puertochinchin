import { SectionHeading } from '@/components/ui/SectionHeading';
import { LeadForm } from '@/components/forms/LeadForm';
import { eventPackages } from '@/lib/data';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Eventos empresariales | Puerto ChinChin Campestre',
  description: 'Landing para eventos empresariales en Chía y Sopó: fin de año, integración de equipos y reuniones corporativas campestres.',
  openGraph: generateOpenGraph('Eventos empresariales | Puerto ChinChin Campestre', 'Landing para eventos empresariales en Chía y Sopó: fin de año, integración de equipos y reuniones corporativas campestres.')
};

const faqs = [
  { question: '¿Cuántas personas pueden asistir?', answer: 'Tenemos espacio para grupos desde 20 hasta 150 personas, con opciones de montaje personalizadas.' },
  { question: '¿Qué incluye la cotización?', answer: 'Incluye menú, logística, parqueadero y atención básica. También podemos sumar ambientación para fin de año.' },
  { question: '¿Cómo llego desde Bogotá?', answer: 'Tenemos sedes en Chía y Sopó, cerca de Bogotá y con acceso cómodo para equipos y familias.' }
];

export default function BusinessEventsPage() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center py-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Eventos empresariales</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Fin de año y reuniones corporativas en un entorno campestre.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Diseñamos experiencias para equipos de Bogotá y la Sabana, con menú tradicional, zonas verdes y montaje confiable.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <SectionHeading
            eyebrow="Propuesta B2B"
            title="Eventos empresariales que suman valor a tu equipo"
            description="Espacio natural, menú compartido y una experiencia diferente para reuniones de fin de año, integraciones y presentaciones corporativas." 
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {eventPackages.map((item) => (
              <div key={item.id} className="rounded-[2rem] border border-brand-cream bg-brand-cream p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-4 leading-7 text-brand-dark/80">{item.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-brand-dark/80">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm uppercase tracking-[0.32em] text-brand-red">Desde</p>
                <p className="mt-2 text-xl font-semibold text-brand-dark">{item.startingPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Cotiza con confianza"
                title="Deja tu solicitud y te contactamos con una propuesta empresarial"
                description="Nuestro equipo te ayuda a escoger el mejor formato para tu evento y a garantizar una experiencia memorable." 
              />
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-[2rem] border border-brand-cream bg-cream p-8 shadow-card">
                <h3 className="text-lg font-semibold text-brand-dark">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-dark/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
