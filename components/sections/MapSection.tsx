import { MapPin } from 'lucide-react';
import { locations, restaurantInfo } from '@/lib/data';

export function MapSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-content px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-red">Encuéntranos</p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">Sedes Chía y Sopó</h2>
            <p className="max-w-xl leading-8 text-brand-dark/80">
              Estamos cerca de Bogotá, con opciones para disfrutar en Chía y Sopó. Ideal para reuniones de fin de semana, almuerzos familiares y eventos empresariales con ambiente campestre.
            </p>
            <div className="grid gap-4">
              {locations.map((location) => (
                <div key={location.id} className="rounded-[2rem] border border-brand-cream bg-cream p-6 shadow-card">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-brand-red">{location.name}</p>
                      <p className="mt-2 text-lg font-semibold text-brand-dark">{location.address}</p>
                      <p className="mt-2 text-sm leading-6 text-brand-dark/70">{location.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-brand-cream bg-brand-dark/5 shadow-card">
            <iframe
              title="Mapa Puerto ChinChin"
              src={restaurantInfo.mapUrl}
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
