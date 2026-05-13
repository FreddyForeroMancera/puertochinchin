# Puerto ChinChin Campestre

Sitio web comercial para el restaurante campestre Puerto ChinChin en Chía y Sopó, construido con Next.js App Router, TypeScript, Tailwind CSS y Prisma.

## Características

- Página de inicio con hero, beneficios, picadas destacadas, eventos, galería y testimonios.
- Menú filtrable con categorías.
- Página dedicada a picadas.
- Página de eventos y landing B2B para eventos empresariales.
- Galería con filtro y lightbox.
- Contacto, cómo llegar, nosotros, políticas y términos.
- Formularios reales con React Hook Form y Zod.
- Endpoints API con Prisma para leads de contacto y eventos.
- SEO local con metadata Open Graph.
- Arquitectura modular y responsive.

## Instalación

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Ajusta la variable `DATABASE_URL` con tu conexión PostgreSQL.

3. Instala las dependencias:

```bash
npm install
```

4. Genera el cliente Prisma y crea la base de datos:

```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

5. Ejecuta el proyecto:

```bash
npm run dev
```

6. Abre `http://localhost:3000`

## Scripts

- `npm run dev` - inicia el servidor de desarrollo.
- `npm run build` - construye la aplicación para producción.
- `npm run start` - inicia la aplicación construida.
- `npm run lint` - ejecuta ESLint.
- `npm run db:push` - sincroniza el esquema Prisma con la base de datos.
- `npm run db:seed` - carga datos de ejemplo.

## Notas

- El backend de leads requiere conexión a PostgreSQL con la variable `DATABASE_URL` configurada.
- Las imágenes se cargan desde fuentes remotas y están permitidas en `next.config.mjs`.
