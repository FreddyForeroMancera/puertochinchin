import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.menuCategory.createMany({
    data: [
      { name: 'Picadas', slug: 'picadas', order: 1 },
      { name: 'Especialidades', slug: 'especialidades', order: 2 },
      { name: 'Bebidas', slug: 'bebidas', order: 3 },
      { name: 'Combos', slug: 'combos', order: 4 },
      { name: 'Opcionales', slug: 'opcionales', order: 5 }
    ],
    skipDuplicates: true
  });

  const picadas = await prisma.menuCategory.findUnique({ where: { slug: 'picadas' } });
  const especialidades = await prisma.menuCategory.findUnique({ where: { slug: 'especialidades' } });
  const bebidas = await prisma.menuCategory.findUnique({ where: { slug: 'bebidas' } });
  const combos = await prisma.menuCategory.findUnique({ where: { slug: 'combos' } });
  const opcionales = await prisma.menuCategory.findUnique({ where: { slug: 'opcionales' } });

  if (!picadas || !especialidades || !bebidas || !combos || !opcionales) {
    throw new Error('No se pudieron crear las categorías de menú.');
  }

  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Picada de Chicharrón',
        slug: 'picada-de-chicharron',
        description: 'Crujiente, doradito y acompañado de papa criolla y ají casero.',
        price: 78900,
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
        featured: true,
        badge: 'Más pedido',
        serves: '2-3 personas',
        active: true,
        categoryId: picadas.id
      },
      {
        name: 'Picada Mixta Especial',
        slug: 'picada-mixta-especial',
        description: 'Chicharrón, carne, chorizo, papa, morcilla y arepa tradicional.',
        price: 89900,
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        featured: true,
        badge: 'Picada estrella',
        serves: '3-4 personas',
        active: true,
        categoryId: picadas.id
      },
      {
        name: 'Chorizo Relleno',
        slug: 'chorizo-relleno',
        description: 'Relleno de carne y especias, acompañado de papa criolla y chimichurri.',
        price: 42900,
        imageUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80',
        active: true,
        categoryId: especialidades.id
      },
      {
        name: 'Picada de Carne',
        slug: 'picada-de-carne',
        description: 'Jugosa carne a la parrilla con papa criolla y chimichurri fresco.',
        price: 75900,
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
        featured: true,
        badge: 'Popular',
        serves: '2-3 personas',
        active: true,
        categoryId: picadas.id
      },
      {
        name: 'Jugo natural de Maracuyá',
        slug: 'jugo-natural-de-maracuya',
        description: 'Refresco fresco preparado en casa con fruta del día.',
        price: 12900,
        imageUrl: 'https://images.unsplash.com/photo-1510626176961-4b96c1b82b8e?auto=format&fit=crop&w=900&q=80',
        active: true,
        categoryId: bebidas.id
      },
      {
        name: 'Cerveza artesanal',
        slug: 'cerveza-artesanal',
        description: 'Selección de cervezas frías que acompañan perfecto la picada.',
        price: 14900,
        imageUrl: 'https://images.unsplash.com/photo-1510936111840-8267a48a2f3f?auto=format&fit=crop&w=900&q=80',
        active: true,
        categoryId: bebidas.id
      },
      {
        name: 'Combo Familiar Campestre',
        slug: 'combo-familiar-campestre',
        description: 'Picada mixta, cerveza artesanal, jugos y postre para compartir.',
        price: 169900,
        imageUrl: 'https://images.unsplash.com/photo-1481931715705-36f8e4b0b4ed?auto=format&fit=crop&w=900&q=80',
        active: true,
        categoryId: combos.id
      },
      {
        name: 'Arepa de maíz con queso',
        slug: 'arepa-de-maz-y-queso',
        description: 'Arepa caliente para compartir con el mejor sabor campestre.',
        price: 8900,
        imageUrl: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=900&q=80',
        active: true,
        categoryId: opcionales.id
      }
    ],
    skipDuplicates: true
  });

  await prisma.galleryCategory.createMany({
    data: [
      { name: 'Restaurante', slug: 'restaurante' },
      { name: 'Picadas', slug: 'picadas' },
      { name: 'Zonas verdes', slug: 'verdes' },
      { name: 'Eventos', slug: 'eventos' },
      { name: 'Ambiente familiar', slug: 'familiares' }
    ],
    skipDuplicates: true
  });

  const restauranteCat = await prisma.galleryCategory.findUnique({ where: { slug: 'restaurante' } });
  const picadasCat = await prisma.galleryCategory.findUnique({ where: { slug: 'picadas' } });
  const verdesCat = await prisma.galleryCategory.findUnique({ where: { slug: 'verdes' } });
  const eventosCat = await prisma.galleryCategory.findUnique({ where: { slug: 'eventos' } });
  const familiaresCat = await prisma.galleryCategory.findUnique({ where: { slug: 'familiares' } });

  if (!restauranteCat || !picadasCat || !verdesCat || !eventosCat || !familiaresCat) {
    throw new Error('No se pudieron crear las categorías de galería.');
  }

  await prisma.galleryImage.createMany({
    data: [
      {
        title: 'Terraza campestre',
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        alt: 'Mesas al aire libre en restaurante campestre',
        featured: true,
        categoryId: restauranteCat.id
      },
      {
        title: 'Picada abundante',
        imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
        alt: 'Picada tradicional para compartir',
        categoryId: picadasCat.id
      },
      {
        title: 'Zona verde',
        imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
        alt: 'Área verde y árboles alrededor del restaurante',
        categoryId: verdesCat.id
      },
      {
        title: 'Celebración familiar',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
        alt: 'Mesa con plato campestre y ambiente familiar',
        categoryId: familiaresCat.id
      },
      {
        title: 'Evento empresarial',
        imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
        alt: 'Espacio para evento empresarial al aire libre',
        categoryId: eventosCat.id
      }
    ],
    skipDuplicates: true
  });

  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Carlos R.',
        text: 'El lugar es hermoso, tranquilo y perfecto para ir en familia. La picada mixta es deliciosa y las porciones son generosas.',
        rating: 5,
        location: 'Sopó',
        active: true
      },
      {
        name: 'María P.',
        text: 'Celebramos el cumpleaños de mi papá y todo fue perfecto. Excelente atención, comida y ambiente campestre único.',
        rating: 5,
        location: 'Bogotá',
        active: true
      },
      {
        name: 'Andrés G.',
        text: 'El mejor chicharrón que he probado en la sabana. Muy recomendado, volveremos sin duda.',
        rating: 5,
        location: 'Chía',
        active: true
      }
    ],
    skipDuplicates: true
  });

  await prisma.restaurantInfo.upsert({
    where: { id: 'restaurant-info' },
    update: {
      name: 'Piqueteadero Puerto ChinChin',
      slogan: 'Campestre, cálido y listo para compartir',
      description: 'Restaurante campestre en Sopó Km 7 vía La Calera. Picadas abundantes, ambiente familiar y eventos empresariales memorables.',
      address: 'Km 7 vía La Calera, Sopó, Cundinamarca',
      city: 'Sopó',
      region: 'Sabana de Bogotá',
      whatsapp: '+573174380606',
      phone: '+57 1 801 0672',
      email: 'puertochinchin@gmail.com',
      openingHours: 'Lun - Dom: 10:00 a.m. - 8:00 p.m.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.000000!2d-73.9855!3d4.8935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2zMzDCsDUzJzUwLjAiUyA3M8KwNTgnMzMuMCJX!5e0!3m2!1ses!2sco!4v0000000000000',
      googleMapsUrl: 'https://maps.app.goo.gl/example'
    },
    create: {
      id: 'restaurant-info',
      name: 'Piqueteadero Puerto ChinChin',
      slogan: 'Campestre, cálido y listo para compartir',
      description: 'Restaurante campestre en Sopó Km 7 vía La Calera. Picadas abundantes, ambiente familiar y eventos empresariales memorables.',
      address: 'Km 7 vía La Calera, Sopó, Cundinamarca',
      city: 'Sopó',
      region: 'Sabana de Bogotá',
      whatsapp: '+573174380606',
      phone: '+57 1 801 0672',
      email: 'puertochinchin@gmail.com',
      openingHours: 'Lun - Dom: 10:00 a.m. - 8:00 p.m.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.000000!2d-73.9855!3d4.8935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2zMzDCsDUzJzUwLjAiUyA3M8KwNTgnMzMuMCJX!5e0!3m2!1ses!2sco!4v0000000000000',
      googleMapsUrl: 'https://maps.app.goo.gl/example'
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
