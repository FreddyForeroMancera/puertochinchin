export type MenuCategory = {
  id: string;
  name: string;
  slug: string;
  order: number;
};

export type MenuItem = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  imageUrl: string;
  featured?: boolean;
  badge?: string;
  serves?: string;
  active: boolean;
  categorySlug: string;
};

export type GalleryCategory = {
  id: string;
  name: string;
  slug: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  categorySlug: string;
  featured?: boolean;
};

export type TestimonialItem = {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
};

export type RestaurantInfo = {
  name: string;
  slogan: string;
  description: string;
  address: string;
  city: string;
  region: string;
  whatsapp: string;
  phone: string;
  email: string;
  openingHours: string;
  mapUrl: string;
  googleMapsUrl: string;
};

export type RestaurantLocation = {
  id: string;
  name: string;
  city: string;
  address: string;
  description: string;
  mapUrl?: string;
  googleMapsUrl?: string;
};

export type EventPackage = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  startingPrice: string;
};
