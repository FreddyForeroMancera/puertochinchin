'use client';

import { useMemo, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { galleryCategories, galleryImages } from '@/lib/data';
import type { GalleryImage } from '@/types';

export function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState('restaurante');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(
    () => galleryImages.filter((image) => image.categorySlug === activeCategory),
    [activeCategory]
  );

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {galleryCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.slug
                ? 'border-brand-red bg-brand-red text-white'
                : 'border-brand-cream bg-white text-brand-dark hover:bg-brand-cream'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group overflow-hidden rounded-[2rem] border border-brand-cream bg-white shadow-card"
          >
            <img src={image.imageUrl} alt={image.alt} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-4 text-left">
              <p className="text-sm font-medium text-brand-dark">{image.title}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark shadow-lg"
              aria-label="Cerrar galería"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={selectedImage.imageUrl} alt={selectedImage.alt} className="h-[min(70vh,600px)] w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand-dark">{selectedImage.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-dark/75">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
