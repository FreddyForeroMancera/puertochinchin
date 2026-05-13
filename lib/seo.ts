export const siteMeta = {
  title: 'Puerto ChinChin Campestre | Restaurante y Eventos en Chía y Sopó',
  description: 'Restaurante campestre con sedes en Chía y Sopó. Picadas abundantes, ambiente familiar y eventos empresariales con vista verde.',
  siteUrl: 'https://www.puertochinchin.com',
  author: 'Puerto ChinChin Campestre',
  openGraphImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  whatsapp: '+573174380606'
};

export function generateOpenGraph(title: string, description: string) {
  return {
    title,
    description,
    images: [
      {
        url: siteMeta.openGraphImage,
        alt: 'Puerto ChinChin Campestre - restaurante campestre en Chía y Sopó'
      }
    ]
  };
}
