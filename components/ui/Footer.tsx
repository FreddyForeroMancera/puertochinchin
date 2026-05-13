import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Globe, Camera, Music } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-[#26201f] py-12 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo-puerto-chinchin.png"
                alt="Puerto ChinChin Logo"
                className="h-20 w-20 object-contain brightness-0 invert"
              />
              <div>
                <h2 className="text-xl font-black uppercase leading-tight">
                  Piqueteadero <br />
                  <span className="text-brand-red">Puerto Chin Chin</span>
                </h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Campestre - Sopó</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Tradición, sabor y naturaleza en un solo lugar. <br />
              ¡Te esperamos!
            </p>
            <div className="flex gap-2">
              <Link href="#" className="text-gray-400 hover:text-white"><Globe className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Camera className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Music className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-white">Contáctanos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>317 438 0606</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>601 801 0672</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-brand-red" />
                <span>puertochinchin@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="h-4 w-4 text-brand-red" />
                <span>Lun - Dom: 10:00 a.m. - 8:00 p.m.</span>
              </li>
            </ul>
          </div>

          {/* Location Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-white">Ubicación</h3>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-400">
                Sopó Km7 vía a La Calera <br />
                Sopó, Cundinamarca, Colombia
              </p>
              <Link
                href="/como-llegar"
                className="inline-flex items-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-xs font-bold uppercase tracking-wider transition hover:bg-white hover:text-brand-dark"
              >
                <MapPin className="h-3.3 w-3.3" />
                Cómo llegar
              </Link>
              {/* Mini Map Placeholder */}
              <div className="h-24 w-full overflow-hidden rounded-md border border-gray-800 bg-gray-900/50 flex items-center justify-center">
                 <MapPin className="h-8 w-8 text-gray-700 opacity-50" />
              </div>
            </div>
          </div>

          {/* Social/Follow Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-white">Síguenos</h3>
            <p className="text-sm text-gray-400">@puertochinchin</p>
            <div className="flex gap-4">
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-brand-red">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-brand-red">
                <Camera className="h-5 w-5" />
              </Link>
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-brand-red">
                <Music className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 text-[10px] text-gray-500">
              <p>© 2024 Piqueteadero Puerto Chin Chin. <br /> Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
