import { ContactForm } from '@/components/forms/ContactForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { restaurantInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Clock3 } from 'lucide-react';
import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Contacto | Puerto ChinChin Campestre',
  description: 'Contacta a Puerto ChinChin para reservas, pedidos y cotizaciones de eventos.',
  openGraph: generateOpenGraph('Contacto | Puerto ChinChin Campestre', 'Contacta a Puerto ChinChin para reservas, pedidos y cotizaciones de eventos.')
};

export default function ContactPage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="section-content relative px-6 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-cream/80">Contacto</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Contáctanos para reservar, pedir picadas o cotizar un evento.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/90 sm:text-lg">
            Usa el formulario, escríbenos por WhatsApp o llama directamente. Nuestro equipo responde rápidamente para ayudarte con tu plan campestre.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="section-content px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeading eyebrow="Comunícate" title="Todos los canales para tu visita" />
              <div className="grid gap-4 rounded-[2rem] border border-brand-cream bg-white p-8 shadow-card">
                <div className="flex items-center gap-3 text-brand-dark">
                  <Phone className="h-5 w-5 text-brand-red" />
                  <span>{restaurantInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-dark">
                  <Mail className="h-5 w-5 text-brand-red" />
                  <span>{restaurantInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-dark">
                  <MapPin className="h-5 w-5 text-brand-red" />
                  <span>{restaurantInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-dark">
                  <Clock3 className="h-5 w-5 text-brand-red" />
                  <span>{restaurantInfo.openingHours}</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
