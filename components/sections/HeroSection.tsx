'use client';

import Link from 'next/link';
import { CalendarDays, MapPin, MessageCircle, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import { restaurantInfo } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-campestre.png"
          alt="Restaurante Puerto ChinChin Sopó"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Large Plate Image - Now in background to avoid covering text */}
        <div className="absolute -bottom-10 -right-20 hidden lg:block lg:w-[500px] xl:w-[600px] opacity-60">
          <img
            src="/images/picada-premium.png"
            alt="Picada Puerto ChinChin"
            className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-5 pt-40 pb-16 lg:pt-56">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-5xl">
            <p className="font-serif text-3xl italic text-[#f7e38e] drop-shadow-md sm:text-4xl lg:text-5xl">
              El mejor sabor
            </p>
            <h1 className="mt-2 text-5xl font-black uppercase leading-[0.85] tracking-tight text-white drop-shadow-xl sm:text-7xl lg:text-8xl">
              <span className="whitespace-nowrap">Campestre en</span> <br />
              <span className="text-white text-4xl sm:text-6xl lg:text-7xl">Chía y Sopó</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-bold text-white drop-shadow-md">
              Más de <span className="text-[#f7e38e]">40 años de tradición</span> que inició en Chía, ahora en nuestra nueva sede campestre en Sopó. Picadas generosas y ambiente familiar en el Km 7 vía a La Calera.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/menu"
                className="flex items-center gap-2 rounded-md bg-[#8a1912] px-8 py-3.5 text-sm font-black uppercase text-white shadow-lg transition hover:bg-[#72140f]"
              >
                <Utensils className="h-4 w-4" />
                Ver menú
              </Link>
              <Link
                href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-black uppercase text-brand-dark shadow-lg transition hover:bg-gray-100"
              >
                <CalendarDays className="h-4 w-4" />
                Reservar
              </Link>
              <Link
                href="/como-llegar"
                className="flex items-center gap-2 rounded-md bg-[#26201f] px-8 py-3.5 text-sm font-black uppercase text-white shadow-lg transition hover:bg-black"
              >
                <MapPin className="h-4 w-4" />
                Cómo llegar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
