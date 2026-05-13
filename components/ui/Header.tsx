'use client';
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/menu', label: 'Menú' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/galeria', label: 'Galería' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/como-llegar', label: 'Cómo llegar' },
  { href: '/contacto', label: 'Contacto' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="absolute left-0 top-0 z-40 w-full border-b border-[#d8c7ac] bg-[#fff9ec]/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1536px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-12 lg:px-4 xl:px-6">
        <Link href="/" className="relative z-20 self-start text-brand-dark lg:-mb-16" aria-label="Ir al inicio">
          <div className="flex h-16 items-center gap-3 lg:block lg:h-auto">
            <img
              src="/brand/logo-puerto-chinchin.png"
              alt="Piqueteadero Puerto ChinChin Campestre"
              className="h-14 w-14 object-contain drop-shadow-lg sm:h-16 sm:w-16 lg:h-52 lg:w-52 lg:drop-shadow-2xl xl:h-56 xl:w-56"
            />
            <div className="lg:hidden">
              <p className="text-[10px] font-black uppercase leading-none tracking-[0.12em] text-brand-red">Piqueteadero</p>
              <p className="text-base font-black uppercase leading-none">Puerto ChinChin</p>
              <p className="text-[10px] font-black uppercase leading-none text-brand-green">Chía y Sopó</p>
            </div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 pl-52 lg:flex xl:gap-10 xl:pl-60">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="border-b-2 border-transparent py-3 text-sm font-black text-brand-dark transition hover:border-brand-red hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Puerto ChinChin, quiero reservar o cotizar un evento.')}`}
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-sm font-black text-white shadow-card transition hover:bg-[#90261f]"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir por WhatsApp
          </Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d8c7ac] bg-white text-brand-dark lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#d8c7ac] bg-[#fff9ec] px-4 pb-5 pt-3 shadow-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-[#e2d2b7] bg-white px-4 py-3 text-sm font-black text-brand-dark transition hover:bg-brand-cream"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Puerto ChinChin, quiero reservar o cotizar un evento.')}`}
              className="mt-2 rounded-md bg-brand-red px-4 py-3 text-center text-sm font-black text-white transition hover:bg-[#90261f]"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Reservar por WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
