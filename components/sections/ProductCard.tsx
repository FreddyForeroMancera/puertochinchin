'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { MenuItem } from '@/types';
import { restaurantInfo } from '@/lib/data';

export function ProductCard({ item }: { item: MenuItem }) {
  const whatsAppUrl = `https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola, quiero pedir ${item.name} desde el sitio web Puerto ChinChin.`)}`;

  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-cream bg-white p-4 shadow-sm transition hover:shadow-lg"
    >
      <div className="relative mb-4 h-48 overflow-hidden rounded-lg sm:h-52">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {item.featured && (
          <span className="absolute left-0 top-3 rounded-r-full bg-[#8a1912] py-1.5 pl-3 pr-4 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
            Más pedido
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col text-center">
        <h3 className="text-xl font-black uppercase leading-tight text-[#26201f]">{item.name}</h3>
        <p className="mt-2 text-sm leading-snug text-gray-600 line-clamp-2">{item.description}</p>
        <div className="mt-auto pt-4">
          <p className="text-2xl font-black text-[#8a1912]">
            $ {item.price.toLocaleString('es-CO').replace(',', '.')}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
