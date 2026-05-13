import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

export function StickyWhatsAppCTA() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Puerto ChinChin, quiero reservar o cotizar un evento.')}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center bg-brand-dark px-4 py-3 text-white shadow-xl shadow-brand-dark/20 sm:hidden">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold transition hover:bg-[#90261f]"
      >
        <MessageSquare className="h-5 w-5" />
        Reservar WhatsApp
      </Link>
    </div>
  );
}
