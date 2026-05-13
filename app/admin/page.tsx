import type { Metadata } from 'next';
import { BarChart3, Eye, ImageIcon, MapPin, MessageSquare, Star, Utensils } from 'lucide-react';
import { requireAdmin } from '@/lib/admin-auth';
import { prisma } from '@/lib/prisma';
import { galleryCategories as fallbackGalleryCategories, galleryImages as fallbackGalleryImages, locations, menuCategories as fallbackMenuCategories, menuItems as fallbackMenuItems, restaurantInfo as fallbackRestaurantInfo, testimonials as fallbackTestimonials } from '@/lib/data';
import { deleteMenuItem, logoutAdmin, saveGalleryCategory, saveGalleryImage, saveMenuCategory, saveMenuItem, saveRestaurantInfo, saveTestimonial } from './actions';

export const metadata: Metadata = {
  title: 'Panel admin | Puerto ChinChin'
};

export const dynamic = 'force-dynamic';

type AdminData = Awaited<ReturnType<typeof getAdminData>>;

async function getAdminData() {
  if (!process.env.DATABASE_URL || !prisma) {
    return {
      databaseReady: false,
      restaurantInfo: fallbackRestaurantInfo,
      menuCategories: fallbackMenuCategories.map((category) => ({ ...category, id: category.id })),
      menuItems: fallbackMenuItems.map((item) => ({
        ...item,
        categoryId: item.categorySlug,
        category: fallbackMenuCategories.find((category) => category.slug === item.categorySlug) ?? null
      })),
      galleryCategories: fallbackGalleryCategories.map((category) => ({ ...category, id: category.id })),
      galleryImages: fallbackGalleryImages.map((image) => ({
        ...image,
        categoryId: image.categorySlug,
        category: fallbackGalleryCategories.find((category) => category.slug === image.categorySlug) ?? null
      })),
      testimonials: fallbackTestimonials.map((testimonial) => ({ ...testimonial, active: true, createdAt: null })),
      contactLeads: [],
      eventLeads: []
    };
  }

  const [restaurantInfo, menuCategories, menuItems, galleryCategories, galleryImages, testimonials, contactLeads, eventLeads] = await Promise.all([
    prisma.restaurantInfo.findUnique({ where: { id: 'restaurant-info' } }),
    prisma.menuCategory.findMany({ orderBy: { order: 'asc' } }),
    prisma.menuItem.findMany({ include: { category: true }, orderBy: { createdAt: 'desc' } }),
    prisma.galleryCategory.findMany({ orderBy: { name: 'asc' } }),
    prisma.galleryImage.findMany({ include: { category: true }, orderBy: { createdAt: 'desc' } }),
    prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.contactLead.findMany({ orderBy: { createdAt: 'desc' }, take: 20 }),
    prisma.eventLead.findMany({ orderBy: { createdAt: 'desc' }, take: 20 })
  ]);

  return {
    databaseReady: true,
    restaurantInfo: restaurantInfo ?? fallbackRestaurantInfo,
    menuCategories,
    menuItems,
    galleryCategories,
    galleryImages,
    testimonials,
    contactLeads,
    eventLeads
  };
}

function formatDate(value: Date | string | null | undefined) {
  if (!value) return 'Sin fecha';
  return new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}

function AdminCard({ children, title, icon: Icon, description }: { children: React.ReactNode; title: string; icon: typeof BarChart3; description?: string }) {
  return (
    <section className="rounded-lg border border-brand-cream bg-white p-6 shadow-card">
      <div className="mb-5 flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-red/10 text-brand-red">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-black text-brand-dark">{title}</h2>
          {description ? <p className="mt-1 text-sm leading-6 text-brand-dark/70">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({ label, name, defaultValue, type = 'text', required = true }: { label: string; name: string; defaultValue?: string | number | null; type?: string; required?: boolean }) {
  return (
    <label className="block space-y-2 text-sm font-black text-brand-dark">
      {label}
      <input name={name} type={type} defaultValue={defaultValue ?? ''} required={required} className="w-full rounded-md border border-brand-cream bg-brand-cream/60 px-3 py-2.5 text-sm font-medium outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
    </label>
  );
}

function TextArea({ label, name, defaultValue, required = true }: { label: string; name: string; defaultValue?: string | null; required?: boolean }) {
  return (
    <label className="block space-y-2 text-sm font-black text-brand-dark">
      {label}
      <textarea name={name} rows={3} defaultValue={defaultValue ?? ''} required={required} className="w-full rounded-md border border-brand-cream bg-brand-cream/60 px-3 py-2.5 text-sm font-medium outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
    </label>
  );
}

function SaveButton({ disabled, children = 'Guardar' }: { disabled?: boolean; children?: React.ReactNode }) {
  return (
    <button type="submit" disabled={disabled} className="rounded-md bg-brand-red px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#90261f] disabled:cursor-not-allowed disabled:opacity-50">
      {children}
    </button>
  );
}

function DisabledNotice() {
  return (
    <div className="mb-5 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
      Modo configuración: conecta `DATABASE_URL`, ejecuta `npm run db:push` y `npm run db:seed` para activar guardado, edición y lectura de leads.
    </div>
  );
}

export default async function AdminPage() {
  await requireAdmin();
  const data = await getAdminData();

  const stats = [
    { label: 'Platos', value: data.menuItems.length },
    { label: 'Categorías', value: data.menuCategories.length },
    { label: 'Imágenes', value: data.galleryImages.length },
    { label: 'Leads', value: data.contactLeads.length + data.eventLeads.length }
  ];

  return (
    <main className="min-h-screen bg-cream px-5 pb-16 pt-28 lg:pt-36">
      <div className="mx-auto max-w-[1380px] space-y-8">
        <div className="relative rounded-lg border border-brand-cream bg-white p-6 text-center shadow-card lg:px-44">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-red">Puerto ChinChin</p>
            <h1 className="mt-2 text-3xl font-black text-brand-dark">Panel de administración</h1>
            <p className="mt-2 text-sm leading-6 text-brand-dark/70">Gestiona lo que cambia con frecuencia: datos generales, sedes, menú, galería, testimonios y solicitudes de clientes.</p>
          </div>
          <form action={logoutAdmin} className="mt-5 lg:absolute lg:right-6 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
            <button className="rounded-md border border-brand-cream bg-brand-cream px-4 py-2.5 text-sm font-black text-brand-dark transition hover:bg-white">Cerrar sesión</button>
          </form>
        </div>

        {!data.databaseReady ? <DisabledNotice /> : null}

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-brand-cream bg-white p-5 shadow-card">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-red">{stat.label}</p>
              <p className="mt-2 text-3xl font-black text-brand-dark">{stat.value}</p>
            </div>
          ))}
        </div>

        <AdminCard title="Datos generales" icon={MapPin} description="Información de contacto, WhatsApp, horarios y mapas usados por el sitio.">
          <form action={saveRestaurantInfo} className="grid gap-4 lg:grid-cols-2">
            <Field label="Nombre" name="name" defaultValue={data.restaurantInfo.name} />
            <Field label="Slogan" name="slogan" defaultValue={data.restaurantInfo.slogan} />
            <TextArea label="Descripción" name="description" defaultValue={data.restaurantInfo.description} />
            <Field label="Dirección general" name="address" defaultValue={data.restaurantInfo.address} />
            <Field label="Ciudad" name="city" defaultValue={data.restaurantInfo.city} />
            <Field label="Región" name="region" defaultValue={data.restaurantInfo.region} />
            <Field label="WhatsApp" name="whatsapp" defaultValue={data.restaurantInfo.whatsapp} />
            <Field label="Teléfono" name="phone" defaultValue={data.restaurantInfo.phone} />
            <Field label="Correo" name="email" defaultValue={data.restaurantInfo.email} type="email" />
            <Field label="Horario" name="openingHours" defaultValue={data.restaurantInfo.openingHours} />
            <Field label="Mapa embebido" name="mapUrl" defaultValue={data.restaurantInfo.mapUrl} />
            <Field label="Google Maps" name="googleMapsUrl" defaultValue={data.restaurantInfo.googleMapsUrl} />
            <div className="lg:col-span-2">
              <SaveButton disabled={!data.databaseReady} />
            </div>
          </form>
        </AdminCard>

        <AdminCard title="Sedes" icon={MapPin} description="Vista rápida de las sedes comunicadas en el sitio. La dirección exacta de Chía está pendiente.">
          <div className="grid gap-4 lg:grid-cols-2">
            {locations.map((location) => (
              <article key={location.id} className="rounded-md border border-brand-cream bg-brand-cream/60 p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-red">{location.name}</p>
                <h3 className="mt-2 text-xl font-black text-brand-dark">{location.city}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-dark">{location.address}</p>
                <p className="mt-3 text-sm leading-6 text-brand-dark/70">{location.description}</p>
              </article>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Menú" icon={Utensils} description="Crea categorías y platos, marca destacados y controla qué está activo.">
          <div className="grid gap-6 xl:grid-cols-[0.35fr_0.65fr]">
            <form action={saveMenuCategory} className="space-y-4 rounded-md border border-brand-cream bg-brand-cream/40 p-4">
              <h3 className="font-black text-brand-dark">Nueva categoría</h3>
              <Field label="Nombre" name="name" />
              <Field label="Slug" name="slug" />
              <Field label="Orden" name="order" type="number" defaultValue={data.menuCategories.length + 1} />
              <SaveButton disabled={!data.databaseReady}>Guardar categoría</SaveButton>
            </form>

            <form action={saveMenuItem} className="grid gap-4 rounded-md border border-brand-cream bg-brand-cream/40 p-4 lg:grid-cols-2">
              <h3 className="font-black text-brand-dark lg:col-span-2">Nuevo plato</h3>
              <Field label="Nombre" name="name" />
              <Field label="Slug" name="slug" />
              <Field label="Precio" name="price" type="number" />
              <label className="block space-y-2 text-sm font-black text-brand-dark">
                Categoría
                <select name="categoryId" required className="w-full rounded-md border border-brand-cream bg-white px-3 py-2.5 text-sm font-medium">
                  {data.menuCategories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </label>
              <Field label="Imagen URL" name="imageUrl" type="url" />
              <Field label="Badge" name="badge" required={false} />
              <Field label="Porción" name="serves" required={false} />
              <TextArea label="Descripción" name="description" />
              <label className="flex items-center gap-2 text-sm font-black text-brand-dark">
                <input name="featured" type="checkbox" className="h-4 w-4 accent-brand-red" />
                Destacado
              </label>
              <label className="flex items-center gap-2 text-sm font-black text-brand-dark">
                <input name="active" type="checkbox" defaultChecked className="h-4 w-4 accent-brand-red" />
                Activo
              </label>
              <div className="lg:col-span-2">
                <SaveButton disabled={!data.databaseReady}>Guardar plato</SaveButton>
              </div>
            </form>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-brand-cream text-brand-dark">
                <tr>
                  <th className="px-4 py-3">Plato</th>
                  <th className="px-4 py-3">Categoría</th>
                  <th className="px-4 py-3">Precio</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Acción</th>
                </tr>
              </thead>
              <tbody>
                {data.menuItems.map((item) => (
                  <tr key={item.id} className="border-b border-brand-cream">
                    <td className="px-4 py-3 font-black text-brand-dark">{item.name}</td>
                    <td className="px-4 py-3">{item.category?.name ?? 'Sin categoría'}</td>
                    <td className="px-4 py-3">${item.price.toLocaleString('es-CO')}</td>
                    <td className="px-4 py-3">{item.active ? 'Activo' : 'Oculto'}{item.featured ? ' / Destacado' : ''}</td>
                    <td className="px-4 py-3">
                      <form action={deleteMenuItem}>
                        <input type="hidden" name="id" value={item.id} />
                        <button disabled={!data.databaseReady} className="text-sm font-black text-brand-red disabled:opacity-40">Eliminar</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>

        <AdminCard title="Galería" icon={ImageIcon} description="Administra categorías e imágenes usadas en la galería pública.">
          <div className="grid gap-6 xl:grid-cols-[0.35fr_0.65fr]">
            <form action={saveGalleryCategory} className="space-y-4 rounded-md border border-brand-cream bg-brand-cream/40 p-4">
              <h3 className="font-black text-brand-dark">Nueva categoría</h3>
              <Field label="Nombre" name="name" />
              <Field label="Slug" name="slug" />
              <SaveButton disabled={!data.databaseReady}>Guardar categoría</SaveButton>
            </form>
            <form action={saveGalleryImage} className="grid gap-4 rounded-md border border-brand-cream bg-brand-cream/40 p-4 lg:grid-cols-2">
              <h3 className="font-black text-brand-dark lg:col-span-2">Nueva imagen</h3>
              <Field label="Título" name="title" />
              <Field label="Imagen URL" name="imageUrl" type="url" />
              <Field label="Texto alternativo" name="alt" />
              <label className="block space-y-2 text-sm font-black text-brand-dark">
                Categoría
                <select name="categoryId" required className="w-full rounded-md border border-brand-cream bg-white px-3 py-2.5 text-sm font-medium">
                  {data.galleryCategories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm font-black text-brand-dark">
                <input name="featured" type="checkbox" className="h-4 w-4 accent-brand-red" />
                Destacada
              </label>
              <div className="lg:col-span-2">
                <SaveButton disabled={!data.databaseReady}>Guardar imagen</SaveButton>
              </div>
            </form>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.galleryImages.map((image) => (
              <article key={image.id} className="overflow-hidden rounded-md border border-brand-cream bg-white">
                <img src={image.imageUrl} alt={image.alt} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-black text-brand-dark">{image.title}</h3>
                  <p className="mt-1 text-sm text-brand-dark/70">{image.category?.name ?? 'Sin categoría'}</p>
                </div>
              </article>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Testimonios" icon={Star} description="Publica u oculta testimonios de clientes.">
          <form action={saveTestimonial} className="grid gap-4 rounded-md border border-brand-cream bg-brand-cream/40 p-4 lg:grid-cols-2">
            <Field label="Nombre" name="name" />
            <Field label="Ubicación" name="location" />
            <Field label="Rating" name="rating" type="number" defaultValue={5} />
            <TextArea label="Testimonio" name="text" />
            <label className="flex items-center gap-2 text-sm font-black text-brand-dark">
              <input name="active" type="checkbox" defaultChecked className="h-4 w-4 accent-brand-red" />
              Activo
            </label>
            <div className="lg:col-span-2">
              <SaveButton disabled={!data.databaseReady}>Guardar testimonio</SaveButton>
            </div>
          </form>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {data.testimonials.map((testimonial) => (
              <article key={testimonial.id} className="rounded-md border border-brand-cream bg-brand-cream/50 p-5">
                <p className="font-black text-brand-dark">{testimonial.name}</p>
                <p className="mt-1 text-sm text-brand-red">{testimonial.location} / {testimonial.rating} estrellas</p>
                <p className="mt-3 text-sm leading-6 text-brand-dark/75">{testimonial.text}</p>
              </article>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Leads y solicitudes" icon={MessageSquare} description="Últimos contactos y cotizaciones recibidas desde los formularios.">
          <div className="grid gap-6 xl:grid-cols-2">
            <div>
              <h3 className="mb-3 font-black text-brand-dark">Contacto</h3>
              <div className="space-y-3">
                {data.contactLeads.length ? data.contactLeads.map((lead) => (
                  <article key={lead.id} className="rounded-md border border-brand-cream bg-brand-cream/50 p-4 text-sm">
                    <p className="font-black">{lead.name} / {lead.phone}</p>
                    <p className="mt-1 text-brand-dark/70">{lead.email}</p>
                    <p className="mt-2 leading-6">{lead.message}</p>
                    <p className="mt-2 text-xs text-brand-dark/50">{formatDate(lead.createdAt)}</p>
                  </article>
                )) : <p className="rounded-md bg-brand-cream p-4 text-sm text-brand-dark/70">Sin leads de contacto todavía.</p>}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-black text-brand-dark">Eventos</h3>
              <div className="space-y-3">
                {data.eventLeads.length ? data.eventLeads.map((lead) => (
                  <article key={lead.id} className="rounded-md border border-brand-cream bg-brand-cream/50 p-4 text-sm">
                    <p className="font-black">{lead.name} / {lead.company}</p>
                    <p className="mt-1 text-brand-dark/70">{lead.email} / {lead.phone}</p>
                    <p className="mt-2">{lead.eventType} / {lead.attendees} asistentes / {lead.estimatedDate}</p>
                    <p className="mt-2 leading-6">{lead.message}</p>
                    <p className="mt-2 text-xs text-brand-dark/50">{formatDate(lead.createdAt)}</p>
                  </article>
                )) : <p className="rounded-md bg-brand-cream p-4 text-sm text-brand-dark/70">Sin cotizaciones de eventos todavía.</p>}
              </div>
            </div>
          </div>
        </AdminCard>

        <AdminCard title="Vista pública" icon={Eye} description="Atajos rápidos para revisar lo que ven los clientes.">
          <div className="flex flex-wrap gap-3">
            {['/', '/menu', '/eventos', '/galeria', '/como-llegar', '/contacto'].map((href) => (
              <a key={href} href={href} className="rounded-md border border-brand-cream bg-brand-cream px-4 py-2.5 text-sm font-black text-brand-dark transition hover:bg-white">
                {href === '/' ? 'Inicio' : href.replace('/', '')}
              </a>
            ))}
          </div>
        </AdminCard>
      </div>
    </main>
  );
}
