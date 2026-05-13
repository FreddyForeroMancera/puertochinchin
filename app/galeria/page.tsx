import { SectionHeading } from '@/components/ui/SectionHeading';
import { GalleryFilter } from '@/components/sections/GalleryFilter';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Galería | Puerto ChinChin Campestre',
  description: 'Recorre nuestra galería de fotos y conoce el ambiente campestre, las picadas y los eventos en Chía y Sopó.',
  openGraph: generateOpenGraph('Galería | Puerto ChinChin Campestre', 'Recorre nuestra galería de fotos y conoce el ambiente campestre, las picadas y los eventos en Chía y Sopó.')
};

export default function GalleryPage() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Galería</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Ver el ambiente, las picadas y los eventos en imágenes.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Una selección de fotos que muestra la experiencia campestre en Puerto ChinChin, desde el restaurante hasta los espacios verdes y celebraciones.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <GalleryFilter />
        </div>
      </section>
    </div>
  );
}
