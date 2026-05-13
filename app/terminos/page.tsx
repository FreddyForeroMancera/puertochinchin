import { generateOpenGraph } from '@/lib/seo';

export const metadata = {
  title: 'Términos y condiciones | Puerto ChinChin Campestre',
  description: 'Términos y condiciones del sitio web de Puerto ChinChin Campestre.',
  openGraph: generateOpenGraph('Términos y condiciones | Puerto ChinChin Campestre', 'Términos y condiciones del sitio web de Puerto ChinChin Campestre.')
};

export default function TermsPage() {
  return (
    <main className="section-content mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <h1 className="text-center text-3xl font-semibold text-brand-dark">Términos y condiciones</h1>
      <div className="mt-8 space-y-6 rounded-[2rem] border border-brand-cream bg-white p-10 shadow-card text-brand-dark/90">
        <p>
          El uso de este sitio web implica la aceptación de las políticas y condiciones de Puerto ChinChin Campestre. Nos reservamos el derecho de modificar la información de menús, precios y servicios sin previo aviso.
        </p>
        <p>
          Las reservas y cotizaciones se realizan a través de nuestros canales oficiales y están sujetas a disponibilidad. Para eventos empresariales, se requiere confirmación previa de espacio y condiciones de servicio.
        </p>
        <p>
          Nuestro objetivo es brindar una experiencia auténtica y campestre, así que cualquier cambio en tus solicitudes debe ser comunicado con anticipación al equipo de Puerto ChinChin.
        </p>
      </div>
    </main>
  );
}
