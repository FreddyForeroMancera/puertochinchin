import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Política de privacidad | Puerto ChinChin Campestre',
  description: 'Política de privacidad de Puerto ChinChin Campestre para manejo de datos de contacto y formularios.',
  openGraph: generateOpenGraph('Política de privacidad | Puerto ChinChin Campestre', 'Política de privacidad de Puerto ChinChin Campestre para manejo de datos de contacto y formularios.')
};

export default function PrivacyPage() {
  return (
    <main className="section-content mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <h1 className="text-center text-3xl font-semibold text-brand-dark">Política de privacidad</h1>
      <div className="mt-8 space-y-6 rounded-[2rem] border border-brand-cream bg-white p-10 shadow-card text-brand-dark/90">
        <p>
          En Puerto ChinChin Campestre nos comprometemos a proteger tus datos personales. Usamos la información recibida únicamente para responder a tus consultas y cotizaciones.
        </p>
        <p>
          Recopilamos nombre, correo, teléfono y mensaje cuando envías formularios de contacto o eventos. Esa información se almacena de forma segura y no se comparte con terceros sin tu autorización.
        </p>
        <p>
          Si tienes preguntas sobre la política de privacidad, contáctanos al correo puertochinchin@gmail.com o por WhatsApp al +57 317 438 0606.
        </p>
      </div>
    </main>
  );
}
