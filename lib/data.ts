import type { EventPackage, GalleryCategory, GalleryImage, MenuCategory, MenuItem, RestaurantInfo, RestaurantLocation, TestimonialItem } from '@/types';

export const restaurantInfo: RestaurantInfo = {
  name: 'Piqueteadero Puerto ChinChin',
  slogan: 'Campestre, cálido y listo para compartir',
  description: 'Restaurante campestre con sedes en Chía y Sopó. Picadas abundantes, ambiente familiar y eventos empresariales memorables.',
  address: 'Sedes Chía y Sopó, Cundinamarca',
  city: 'Chía y Sopó',
  region: 'Sabana de Bogotá',
  whatsapp: '+573174380606',
  phone: '+57 1 801 0672',
  email: 'puertochinchin@gmail.com',
  openingHours: 'Lun - Dom: 10:00 a.m. - 8:00 p.m.',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.000000!2d-73.9855!3d4.8935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2zMzDCsDUzJzUwLjAiUyA3M8KwNTgnMzMuMCJX!5e0!3m2!1ses!2sco!4v0000000000000',
  googleMapsUrl: 'https://maps.app.goo.gl/example'
};

export const locations: RestaurantLocation[] = [
  {
    id: 'sopo',
    name: 'Sede Sopó',
    city: 'Sopó',
    address: 'Km 7 vía La Calera, Sopó, Cundinamarca',
    description: 'Ambiente campestre, zonas verdes y acceso cómodo para familias, grupos y eventos cerca de Bogotá.',
    mapUrl: restaurantInfo.mapUrl,
    googleMapsUrl: restaurantInfo.googleMapsUrl
  },
  {
    id: 'chia',
    name: 'Sede Chía',
    city: 'Chía',
    address: 'Dirección por confirmar, Chía, Cundinamarca',
    description: 'La experiencia Puerto ChinChin también disponible en Chía para picadas, reservas y encuentros familiares.',
    googleMapsUrl: restaurantInfo.googleMapsUrl
  }
];

export const menuCategories: MenuCategory[] = [
  { id: 'picadas', name: 'Picadas', slug: 'picadas', order: 1 },
  { id: 'especialidades', name: 'Especialidades', slug: 'especialidades', order: 2 },
  { id: 'bebidas', name: 'Bebidas', slug: 'bebidas', order: 3 },
  { id: 'combos', name: 'Combos', slug: 'combos', order: 4 },
  { id: 'opcionales', name: 'Opcionales', slug: 'opcionales', order: 5 }
];

export const menuItems: MenuItem[] = [
  {
    id: 'picada-chicharron',
    name: 'Picada de Chicharrón',
    slug: 'picada-de-chicharron',
    description: 'Crujiente, doradito y acompañado de papa criolla y ají casero.',
    price: 78900,
    imageUrl: '/images/picada-premium.png',
    featured: true,
    badge: 'Más pedido',
    serves: '2-3 personas',
    active: true,
    categorySlug: 'picadas'
  },
  {
    id: 'picada-mixta',
    name: 'Picada Mixta Especial',
    slug: 'picada-mixta-especial',
    description: 'Chicharrón, carne, chorizo, papa, morcilla y arepa tradicional.',
    price: 89900,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
    featured: true,
    badge: 'Picada estrella',
    serves: '3-4 personas',
    active: true,
    categorySlug: 'picadas'
  },
  {
    id: 'chorizo-relleno',
    name: 'Chorizo Relleno',
    slug: 'chorizo-relleno',
    description: 'Relleno de carne y especias, acompañado de papa criolla y chimichurri.',
    price: 42900,
    imageUrl: 'https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=900&q=85',
    featured: true,
    badge: 'Firme',
    serves: '1-2 personas',
    active: true,
    categorySlug: 'especialidades'
  },
  {
    id: 'picada-carne',
    name: 'Picada de Carne',
    slug: 'picada-de-carne',
    description: 'Jugosa carne a la parrilla con papa criolla y chimichurri fresco.',
    price: 75900,
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85',
    featured: true,
    badge: 'Popular',
    serves: '2-3 personas',
    active: true,
    categorySlug: 'picadas'
  },
  {
    id: 'jugo-maracuya',
    name: 'Jugo natural de Maracuyá',
    slug: 'jugo-natural-de-maracuya',
    description: 'Refresco fresco preparado en casa con fruta del día.',
    price: 12900,
    imageUrl: 'https://images.unsplash.com/photo-1510626176961-4b96c1b82b8e?auto=format&fit=crop&w=900&q=80',
    active: true,
    categorySlug: 'bebidas'
  },
  {
    id: 'cerveza-artesanal',
    name: 'Cerveza artesanal',
    slug: 'cerveza-artesanal',
    description: 'Selección de cervezas frías que acompañan perfecto la picada.',
    price: 14900,
    imageUrl: 'https://images.unsplash.com/photo-1510936111840-8267a48a2f3f?auto=format&fit=crop&w=900&q=80',
    active: true,
    categorySlug: 'bebidas'
  },
  {
    id: 'combo-familiar',
    name: 'Combo Familiar Campestre',
    slug: 'combo-familiar-campestre',
    description: 'Picada mixta, cerveza artesanal, jugos y postre para compartir.',
    price: 169900,
    imageUrl: 'https://images.unsplash.com/photo-1481931715705-36f8e4b0b4ed?auto=format&fit=crop&w=900&q=80',
    active: true,
    categorySlug: 'combos'
  },
  {
    id: 'extra-arepa',
    name: 'Arepa de maíz con queso',
    slug: 'arepa-de-maz-y-queso',
    description: 'Arepa caliente para compartir con el mejor sabor campestre.',
    price: 8900,
    imageUrl: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=900&q=80',
    active: true,
    categorySlug: 'opcionales'
  }
];

export const galleryCategories: GalleryCategory[] = [
  { id: 'restaurante', name: 'Restaurante', slug: 'restaurante' },
  { id: 'picadas', name: 'Picadas', slug: 'picadas' },
  { id: 'verdes', name: 'Zonas verdes', slug: 'verdes' },
  { id: 'eventos', name: 'Eventos', slug: 'eventos' },
  { id: 'familiares', name: 'Ambiente familiar', slug: 'familiares' }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Terraza campestre',
    imageUrl: '/images/hero-campestre.png',
    alt: 'Mesas al aire libre en restaurante campestre',
    categorySlug: 'restaurante',
    featured: true
  },
  {
    id: 'g2',
    title: 'Picada abundante',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
    alt: 'Picada tradicional para compartir',
    categorySlug: 'picadas'
  },
  {
    id: 'g3',
    title: 'Zona verde',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    alt: 'Área verde y árboles alrededor del restaurante',
    categorySlug: 'verdes'
  },
  {
    id: 'g4',
    title: 'Celebración familiar',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85',
    alt: 'Mesa con plato campestre y ambiente familiar',
    categorySlug: 'familiares'
  },
  {
    id: 'g5',
    title: 'Evento empresarial',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
    alt: 'Espacio para evento empresarial al aire libre',
    categorySlug: 'eventos'
  },
  {
    id: 'g6',
    title: 'Ambiente campestre',
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
    alt: 'Vista panorámica del ambiente campestre y natural',
    categorySlug: 'verdes'
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Carlos R.',
    text: 'El lugar es hermoso, tranquilo y perfecto para ir en familia. La picada mixta es deliciosa y las porciones son generosas.',
    rating: 5,
    location: 'Sopó'
  },
  {
    id: 't2',
    name: 'María P.',
    text: 'Celebramos el cumpleaños de mi papá y todo fue perfecto. Excelente atención, comida y ambiente campestre único.',
    rating: 5,
    location: 'Bogotá'
  },
  {
    id: 't3',
    name: 'Andrés G.',
    text: 'El mejor chicharrón que he probado en la sabana. Muy recomendado, volveremos sin duda.',
    rating: 5,
    location: 'Chía'
  }
];

export const eventPackages: EventPackage[] = [
  {
    id: 'empresa-familiar',
    title: 'Encuentro empresarial campestre',
    description: 'Evento corporativo cerca de Bogotá con comida auténtica y espacios verdes para reuniones y networking relajado.',
    highlights: ['Zona privada para grupos', 'Wifi y parqueadero', 'Opciones de catering personalizado', 'Sedes en Chía y Sopó'],
    startingPrice: 'Desde $250.000 por persona'
  },
  {
    id: 'fin-de-ano',
    title: 'Fin de año empresarial',
    description: 'Celebración de fin de año con paquete completo, montaje elegante y atención para equipos medianos y grandes.',
    highlights: ['Montaje temático', 'Actividad de integración', 'Amplio parqueadero', 'Servicio premium'],
    startingPrice: 'Desde $280.000 por persona'
  },
  {
    id: 'celebracion-familiar',
    title: 'Reunión familiar y cumpleaños',
    description: 'Ambiente campestre para compartir con familia y amigos, con menú especial y espacios al aire libre.',
    highlights: ['Salón abierto', 'Menú para compartir', 'Zona infantil', 'Atención personalizada'],
    startingPrice: 'Desde $180.000 por persona'
  }
];
