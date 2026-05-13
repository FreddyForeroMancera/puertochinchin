import Link from 'next/link';
import { CalendarDays, ImageIcon, Scissors, TreePine } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { ProductCard } from '@/components/sections/ProductCard';
import { ImageGallery } from '@/components/sections/ImageGallery';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { ContactBlock } from '@/components/sections/ContactBlock';
import { MapSection } from '@/components/sections/MapSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { eventPackages, galleryImages, menuItems, testimonials } from '@/lib/data';
import { generateOpenGraph, siteMeta } from '@/lib/seo';

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: generateOpenGraph(siteMeta.title, siteMeta.description)
};

export default function HomePage() {
  const featuredPicadas = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="bg-cream">
      <HeroSection />
      <FeatureGrid />

      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
          <SectionHeading title="Nuestras picadas destacadas" />
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredPicadas.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/menu" className="inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-black text-white shadow-card transition hover:bg-[#90261f]">
              <Scissors className="h-4 w-4" />
              Ver menú completo
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          <article className="flex flex-col rounded-xl border border-[#e2d2b7] bg-white p-6 shadow-sm">
            <div className="mb-6 flex gap-4">
              <TreePine className="h-10 w-10 shrink-0 text-[#496845]" />
              <div>
                <h3 className="text-xl font-black uppercase leading-tight text-[#26201f]">Gran espacio para disfrutar</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Más de 5.000 m2 de zonas verdes para que los niños jueguen y los adultos se relajen.</p>
              </div>
            </div>
            <img src="/images/hero-campestre.png" alt="Zonas verdes" className="mt-auto h-48 w-full rounded-lg object-cover" />
          </article>

          <article className="flex flex-col rounded-xl border border-[#e2d2b7] bg-white p-6 shadow-sm">
            <div className="mb-6 flex gap-4">
              <CalendarDays className="h-10 w-10 shrink-0 text-[#b87c52]" />
              <div>
                <h3 className="text-xl font-black uppercase leading-tight text-[#26201f]">Eventos y celebraciones</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Cumpleaños, reuniones familiares, eventos empresariales y fechas especiales.</p>
                <Link href="/eventos" className="mt-4 inline-flex rounded-md border border-brand-red px-5 py-2 text-xs font-black uppercase tracking-wider text-brand-red transition hover:bg-brand-red hover:text-white">
                  Cotiza tu evento
                </Link>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80" alt="Eventos" className="mt-auto h-48 w-full rounded-lg object-cover" />
          </article>

          <article className="flex flex-col rounded-xl border border-[#e2d2b7] bg-white p-6 shadow-sm">
            <div className="mb-6 flex gap-4">
              <ImageIcon className="h-10 w-10 shrink-0 text-[#26201f]" />
              <div>
                <h3 className="text-xl font-black uppercase leading-tight text-[#26201f]">Fines de semana inolvidables</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Música, buen ambiente y el mejor sabor campestre para compartir.</p>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" alt="Ambiente" className="mt-auto h-48 w-full rounded-lg object-cover" />
          </article>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <SectionHeading title="Galería" />
          <div className="mt-8">
            <ImageGallery />
          </div>
          <div className="mt-10 text-center">
            <Link href="/galeria" className="inline-flex items-center gap-2 rounded-md bg-[#8a1912] px-8 py-3.5 text-sm font-black uppercase text-white shadow-lg transition hover:bg-[#72140f]">
              <ImageIcon className="h-4 w-4" />
              Ver galería completa
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9ec] py-12">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
          <SectionHeading title="Lo que dicen nuestros clientes" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
