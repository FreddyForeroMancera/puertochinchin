import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/sections/ProductCard';
import { menuItems } from '@/lib/data';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Picadas en Chía y Sopó | Puerto ChinChin Campestre',
  description: 'Descubre nuestras picadas para compartir en Puerto ChinChin, Chía y Sopó.',
  openGraph: generateOpenGraph('Picadas en Chía y Sopó | Puerto ChinChin Campestre', 'Descubre nuestras picadas para compartir en Puerto ChinChin, Chía y Sopó.')
};

export default function PicadasPage() {
  const picadas = menuItems.filter((item) => item.categorySlug === 'picadas');

  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center py-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Picadas</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Las picadas más generosas de Chía y Sopó.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Compartir nunca fue tan fácil. Elige entre nuestras picadas tradicionales y descubre por qué son la elección favorita de las familias y amigos.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <SectionHeading
            eyebrow="Especialidad del restaurante"
            title="Nuestras picadas para grupos"
            description="Cada picada está pensada para que disfrutes con tu familia, amigos o equipo de trabajo en un ambiente campestre." 
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {picadas.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
