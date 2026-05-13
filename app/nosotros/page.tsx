import { SectionHeading } from '@/components/ui/SectionHeading';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Nosotros | Puerto ChinChin Campestre',
  description: 'Conoce la historia de Puerto ChinChin, un restaurante familiar campestre en Chía y Sopó.',
  openGraph: generateOpenGraph('Nosotros | Puerto ChinChin Campestre', 'Conoce la historia de Puerto ChinChin, un restaurante familiar campestre en Chía y Sopó.')
};

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Nosotros</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">Tradición campestre en Chía y Sopó.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Somos un restaurante familiar que mezcla recetas tradicionales con un ambiente natural, pensado para compartir y celebrar momentos importantes.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nuestra historia"
            title="Pasión por la cocina campestre y el ambiente familiar"
            description="Desde el primer día, nuestro objetivo es ofrecer platos abundantes y un espacio donde las familias, amigos y equipos de trabajo se sientan bienvenidos." 
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
            <div className="space-y-6 rounded-[2rem] border border-brand-cream bg-white p-10 shadow-card">
              <p className="text-lg leading-8 text-brand-dark/80">
                Puerto ChinChin nació hace <span className="font-bold text-brand-red">40 años en Chía</span> como un sueño familiar de llevar el sabor auténtico del campo a la mesa. Nuestra historia comenzó con picadas generosas que se convirtieron en leyenda local.
              </p>
              <p className="leading-8 text-brand-dark/80">
                Hoy, esa tradición continúa y crece con nuestra <span className="font-bold text-brand-red">nueva sede campestre en Sopó</span>, donde mantenemos la misma esencia, abundancia y calor de hogar que nos ha caracterizado por cuatro décadas.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-brand-cream bg-brand-red/5 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-red">Misión</p>
                <p className="mt-3 leading-7 text-brand-dark/80">Ofrecer un restaurante campestre que conecte familias y empresas con los sabores tradicionales y un entorno natural memorable.</p>
              </div>
              <div className="rounded-[2rem] border border-brand-cream bg-brand-wood/5 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-red">Visión</p>
                <p className="mt-3 leading-7 text-brand-dark/80">Ser el destino preferido en Chía y Sopó para picadas familiares y eventos empresariales con servicio cálido y experiencia premium-popular.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
