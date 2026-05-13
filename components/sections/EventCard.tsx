'use client';

import { motion } from 'framer-motion';
import type { EventPackage } from '@/types';
import { CheckCircle2 } from 'lucide-react';

export function EventCard({ eventPackage }: { eventPackage: EventPackage }) {
  return (
    <motion.article initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="rounded-[2rem] border border-brand-cream bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-red">Paquete</p>
        <h3 className="mt-3 text-2xl font-semibold text-brand-dark">{eventPackage.title}</h3>
      </div>
      <p className="mb-6 leading-7 text-brand-dark/80">{eventPackage.description}</p>
      <ul className="space-y-3 text-sm text-brand-dark/80">
        {eventPackage.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-4 w-4 text-brand-red" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm uppercase tracking-[0.32em] text-brand-dark/70">Precio sugerido</p>
      <p className="mt-2 text-xl font-semibold text-brand-red">{eventPackage.startingPrice}</p>
    </motion.article>
  );
}
