'use client';

import { useMemo, useState } from 'react';
import { menuCategories, menuItems } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/Button';

export function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState('picadas');
  const categories = menuCategories;

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.categorySlug === activeCategory),
    [activeCategory]
  );

  return (
    <section className="py-16 sm:py-20">
      <div className="section-content px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.slug}
              type="button"
              variant={category.slug === activeCategory ? 'primary' : 'ghost'}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
