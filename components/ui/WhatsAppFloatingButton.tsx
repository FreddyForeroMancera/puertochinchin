import { MessageSquare } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Puerto ChinChin, quiero reservar o cotizar un evento.')}`;

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-5 z-50 hidden md:block">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 rounded-full bg-brand-red px-5 py-3 text-sm font-medium text-white shadow-card transition hover:bg-[#90261f]"
      >
        <MessageSquare className="h-5 w-5" />
        Cotiza por WhatsApp
      </a>
    </div>
  );
}
