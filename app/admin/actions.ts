'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';
import { clearAdminSession, getAdminPassword, setAdminSession } from '@/lib/admin-auth';
import { prisma } from '@/lib/prisma';

function requireDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL no está configurada. Conecta PostgreSQL para guardar cambios desde el admin.');
  }
}

function textValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function optionalTextValue(formData: FormData, key: string) {
  const value = textValue(formData, key);
  return value.length ? value : null;
}

function boolValue(formData: FormData, key: string) {
  return formData.get(key) === 'on';
}

export async function loginAdmin(_: unknown, formData: FormData) {
  const password = textValue(formData, 'password');
  const adminPassword = getAdminPassword();

  if (!adminPassword) {
    return { ok: false, message: 'Configura ADMIN_PASSWORD para activar el acceso al panel.' };
  }

  if (password !== adminPassword) {
    return { ok: false, message: 'Clave incorrecta.' };
  }

  await setAdminSession();
  redirect('/admin');
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect('/admin/login');
}

const restaurantSchema = z.object({
  name: z.string().min(2),
  slogan: z.string().min(2),
  description: z.string().min(10),
  address: z.string().min(2),
  city: z.string().min(2),
  region: z.string().min(2),
  whatsapp: z.string().min(7),
  phone: z.string().min(7),
  email: z.string().email(),
  openingHours: z.string().min(2),
  mapUrl: z.string().min(8),
  googleMapsUrl: z.string().min(8)
});

export async function saveRestaurantInfo(formData: FormData) {
  requireDatabase();
  const data = restaurantSchema.parse({
    name: textValue(formData, 'name'),
    slogan: textValue(formData, 'slogan'),
    description: textValue(formData, 'description'),
    address: textValue(formData, 'address'),
    city: textValue(formData, 'city'),
    region: textValue(formData, 'region'),
    whatsapp: textValue(formData, 'whatsapp'),
    phone: textValue(formData, 'phone'),
    email: textValue(formData, 'email'),
    openingHours: textValue(formData, 'openingHours'),
    mapUrl: textValue(formData, 'mapUrl'),
    googleMapsUrl: textValue(formData, 'googleMapsUrl')
  });

  await prisma.restaurantInfo.upsert({
    where: { id: 'restaurant-info' },
    create: { id: 'restaurant-info', ...data },
    update: data
  });

  revalidatePath('/');
  revalidatePath('/admin');
}

const categorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  order: z.coerce.number().int().min(0)
});

export async function saveMenuCategory(formData: FormData) {
  requireDatabase();
  const id = textValue(formData, 'id');
  const data = categorySchema.parse({
    name: textValue(formData, 'name'),
    slug: textValue(formData, 'slug'),
    order: textValue(formData, 'order')
  });

  if (id) {
    await prisma.menuCategory.update({ where: { id }, data });
  } else {
    await prisma.menuCategory.create({ data });
  }

  revalidatePath('/menu');
  revalidatePath('/admin');
}

const menuItemSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  price: z.coerce.number().int().min(0),
  imageUrl: z.string().url(),
  featured: z.boolean(),
  badge: z.string().nullable(),
  serves: z.string().nullable(),
  active: z.boolean(),
  categoryId: z.string().min(1)
});

export async function saveMenuItem(formData: FormData) {
  requireDatabase();
  const id = textValue(formData, 'id');
  const data = menuItemSchema.parse({
    name: textValue(formData, 'name'),
    slug: textValue(formData, 'slug'),
    description: textValue(formData, 'description'),
    price: textValue(formData, 'price'),
    imageUrl: textValue(formData, 'imageUrl'),
    featured: boolValue(formData, 'featured'),
    badge: optionalTextValue(formData, 'badge'),
    serves: optionalTextValue(formData, 'serves'),
    active: boolValue(formData, 'active'),
    categoryId: textValue(formData, 'categoryId')
  });

  if (id) {
    await prisma.menuItem.update({ where: { id }, data });
  } else {
    await prisma.menuItem.create({ data });
  }

  revalidatePath('/');
  revalidatePath('/menu');
  revalidatePath('/admin');
}

export async function deleteMenuItem(formData: FormData) {
  requireDatabase();
  await prisma.menuItem.delete({ where: { id: textValue(formData, 'id') } });
  revalidatePath('/');
  revalidatePath('/menu');
  revalidatePath('/admin');
}

const galleryCategorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2)
});

export async function saveGalleryCategory(formData: FormData) {
  requireDatabase();
  const id = textValue(formData, 'id');
  const data = galleryCategorySchema.parse({
    name: textValue(formData, 'name'),
    slug: textValue(formData, 'slug')
  });

  if (id) {
    await prisma.galleryCategory.update({ where: { id }, data });
  } else {
    await prisma.galleryCategory.create({ data });
  }

  revalidatePath('/galeria');
  revalidatePath('/admin');
}

const galleryImageSchema = z.object({
  title: z.string().min(2),
  imageUrl: z.string().url(),
  alt: z.string().min(4),
  featured: z.boolean(),
  categoryId: z.string().min(1)
});

export async function saveGalleryImage(formData: FormData) {
  requireDatabase();
  const id = textValue(formData, 'id');
  const data = galleryImageSchema.parse({
    title: textValue(formData, 'title'),
    imageUrl: textValue(formData, 'imageUrl'),
    alt: textValue(formData, 'alt'),
    featured: boolValue(formData, 'featured'),
    categoryId: textValue(formData, 'categoryId')
  });

  if (id) {
    await prisma.galleryImage.update({ where: { id }, data });
  } else {
    await prisma.galleryImage.create({ data });
  }

  revalidatePath('/');
  revalidatePath('/galeria');
  revalidatePath('/admin');
}

const testimonialSchema = z.object({
  name: z.string().min(2),
  text: z.string().min(10),
  rating: z.coerce.number().int().min(1).max(5),
  location: z.string().min(2),
  active: z.boolean()
});

export async function saveTestimonial(formData: FormData) {
  requireDatabase();
  const id = textValue(formData, 'id');
  const data = testimonialSchema.parse({
    name: textValue(formData, 'name'),
    text: textValue(formData, 'text'),
    rating: textValue(formData, 'rating'),
    location: textValue(formData, 'location'),
    active: boolValue(formData, 'active')
  });

  if (id) {
    await prisma.testimonial.update({ where: { id }, data });
  } else {
    await prisma.testimonial.create({ data });
  }

  revalidatePath('/');
  revalidatePath('/admin');
}
