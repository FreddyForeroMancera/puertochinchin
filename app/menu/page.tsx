import { MenuCatalog } from '@/components/sections/MenuCatalog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { menuItems } from '@/lib/data';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Menú campestre | Puerto ChinChin Campestre',
  description: 'Menú de picadas, especialidades y bebidas para compartir en Chía y Sopó.',
  openGraph: generateOpenGraph('Menú campestre | Puerto ChinChin Campestre', 'Menú de picadas, especialidades y bebidas para compartir en Chía y Sopó.')
};

export default function MenuPage() {
  const featuredItem = menuItems.find((item) => item.featured) ?? menuItems[0];

  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Menú</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Menú campestre para compartir, celebrar y disfrutar en Chía y Sopó.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Descubre nuestras categorías de picadas, especialidades, bebidas y combos diseñados para grupos y eventos en el entorno natural de Puerto ChinChin.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <SectionHeading
            eyebrow="Menú completo"
            title="Filtra nuestra carta por categoría"
            description="Selecciona la categoría que deseas y encuentra el plato ideal para tu visita o tu evento." 
          />
          <MenuCatalog />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-red">Recomendado</p>
              <h2 className="mt-4 text-3xl font-semibold text-brand-dark">Nuestra picada estrella</h2>
              <p className="mt-4 max-w-xl leading-8 text-brand-dark/80">
                Esta selección refleja la experiencia más auténtica en Puerto ChinChin. Perfecta para compartir en grupo con carne, chorizo, chicharrón y papas criollas.
              </p>
            </div>
            <div className="rounded-[2rem] border border-brand-cream bg-brand-cream p-8 shadow-card">
              <h3 className="text-2xl font-semibold text-brand-dark">{featuredItem.name}</h3>
              <p className="mt-4 text-lg font-semibold text-brand-red">${featuredItem.price.toLocaleString()}</p>
              <p className="mt-5 leading-7 text-brand-dark/80">{featuredItem.description}</p>
              <p className="mt-5 rounded-full bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red">{featuredItem.badge ?? 'Opción destacada'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
