import { MapPin, Phone, Mail, Clock3 } from 'lucide-react';
import { locations, restaurantInfo } from '@/lib/data';

export function ContactBlock() {
  return (
    <section className="bg-brand-red text-white py-16 sm:py-20">
      <div className="section-content px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/90">Contacto rápido</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Listos para tu reserva y cotización</h2>
            <p className="max-w-xl leading-8 text-white/90">
              Escríbenos por WhatsApp o usa nuestros canales directos para confirmar tu visita, solicitar una cotización de evento o pedir picadas para llevar.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-white/80">WhatsApp</p>
                <p className="mt-3 text-lg font-semibold">{restaurantInfo.whatsapp}</p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-white/80">Correo</p>
                <p className="mt-3 text-lg font-semibold">{restaurantInfo.email}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] bg-white/10 p-8 text-sm text-white/90 shadow-card">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              <span>{locations.map((location) => location.city).join(' y ')}, Cundinamarca</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span>{restaurantInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5" />
              <span>{restaurantInfo.openingHours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
