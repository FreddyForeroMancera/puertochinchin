'use client';

import { Award, Leaf, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Leaf, title: '100% Campestre', description: 'Naturaleza, aire puro y mucho espacio.' },
  { icon: Users, title: 'Ambiente Familiar', description: 'Ideal para compartir en familia y con amigos.' },
  { icon: ShieldCheck, title: 'Sabor Auténtico', description: 'Recetas tradicionales con los mejores ingredientes.' },
  { icon: Award, title: 'Experiencia Premium', description: 'Calidad, servicio y sabor en cada detalle.' }
];

export function FeatureGrid() {
  return (
    <section className="border-b border-[#e2d2b7] bg-[#fff9ec] py-6">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-center gap-3"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8c7ac] bg-white text-[#26201f]">
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase leading-tight text-[#26201f]">{feature.title}</h3>
                  <p className="text-[11px] leading-tight text-gray-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
