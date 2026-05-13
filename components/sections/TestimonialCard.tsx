'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { TestimonialItem } from '@/types';

export function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <motion.article initial={{ y: 22, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }} className="rounded-lg border border-brand-cream bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-red">
          <Star className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-black text-brand-dark">{testimonial.name}</p>
          <p className="text-sm text-brand-dark/70">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-sm leading-6 text-brand-dark/85">"{testimonial.text}"</p>
      <div className="mt-4 flex gap-1 text-amber-400">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-5 w-5" />
        ))}
      </div>
    </motion.article>
  );
}
