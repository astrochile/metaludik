# Metaludik — Landing page one-page

Next.js 14 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
Contenido 100% real, confirmado por Samik Garrido (ver `src/lib/content.ts`).

**La experiencia principal es una landing de una sola página** (`/`), con 8
secciones numeradas que cuentan la historia completa: Hero → Servicios →
Proyectos (con filtros y lightbox) → Proceso → Capacidad → Nosotros →
Testimonios → Cotización. Las páginas internas (`/servicios`, `/proyectos`,
`/nosotros`, `/cotizar`, `/contacto`) se mantienen activas para SEO y
navegación profunda, pero ya no son el recorrido principal.

Sistema visual: industrial/CNC — negro profundo, grafito, acero, blanco
grisáceo y naranja de marca como acento. Tipografía Archivo (títulos) +
Manrope (texto). Cursor personalizado en desktop.

## Novedades de esta versión

- **Galería de proyectos filtrable** (`src/components/ProjectsGallery.tsx`):
  filtros por categoría (Todos / Corte CNC / Estructuras / Soldadura-Montaje
  / Letreros / Personalizados) sin recargar la página, con animación de
  grid y un lightbox modal al hacer clic en cualquier proyecto. Hoy muestra
  los 9 proyectos reales confirmados — está listo para escalar a más sin
  tocar el layout, agregando entradas nuevas en `content.ts`.
- **Sección de Servicios con foto real por categoría** en vez de solo texto.
- **Sección de Testimonios / Google Reviews** (`src/components/home/Testimonials.tsx`):
  estructura preparada para conectar el widget real de Google Reviews.
  Mientras no exista, muestra un estado "próximamente" — no hay
  testimonios inventados.
- **SEO técnico reforzado**: datos estructurados JSON-LD (`LocalBusiness`)
  en `layout.tsx`, imagen Open Graph real (`public/og-image.jpg`), meta
  title/description/keywords orientados a "Metaludik" + "Samik Garrido" +
  fabricación metálica + corte plasma CNC + Rancagua, alt text descriptivo
  en cada imagen de proyecto (nunca "imagen1.jpg").
- **Navegación por anclas con scroll suave**: el header y el footer ahora
  apuntan a las secciones de la landing (`/#servicios`, `/#proyectos`,
  `/#proceso`, `/#nosotros`, `/#contacto`).

## Cómo subirlo a Vercel

### 1. Subir el proyecto a GitHub

Descomprime este .zip en tu computador, abre una terminal dentro de la carpeta
`metaludik-web` y ejecuta:

```bash
git init
git add .
git commit -m "Refresh visual: sistema industrial CNC"
```

Crea un repositorio nuevo y vacío en GitHub (sin README, sin .gitignore, sin
licencia) y conéctalo:

```bash
git remote add origin https://github.com/TU-USUARIO/metaludik-web.git
git branch -M main
git push -u origin main
```

### 2. Conectar con Vercel

1. Entra a vercel.com e inicia sesión con tu cuenta de GitHub.
2. "Add New… → Project".
3. Selecciona el repositorio `metaludik-web`.
4. Vercel detecta Next.js automáticamente — no hay que tocar nada.
5. Click en "Deploy".

### 3. Conectar el dominio real (cuando lo tengas)

En el proyecto dentro de Vercel: **Settings → Domains → Add**, escribe el
dominio (por ejemplo `metaludik.cl`) y sigue las instrucciones de DNS.

## Cómo probarlo en tu computador

Necesitas Node.js 20+.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Dónde está cada cosa

- `src/lib/content.ts` — todo el contenido real del sitio (contacto,
  servicios, proyectos, FAQ). Cada proyecto tiene un array `images` de hasta
  3 fotos adicionales para su ficha — usa `null` donde todavía no hay foto y
  el sitio muestra automáticamente un placeholder con la identidad de marca
  (número grande, textura metálica, línea naranja). Para agregar la foto
  real, solo reemplaza el `null` por la ruta del archivo.
- `src/components/CustomCursor.tsx` — cursor personalizado (solo desktop,
  desaparece automático en touch).
- `src/components/Reveal.tsx` — animaciones de scroll reutilizables
  (`Reveal` = fade + desplazamiento, `RevealMask` = revelado con máscara,
  `Counter` = números que cuentan al aparecer).
- `src/components/ProcessIcons.tsx` — la familia de 4 íconos propios del
  proceso (conversación, diseño, corte CNC, instalación).
- `src/components/ProjectImage.tsx` — imagen de proyecto con hover naranja +
  cursor "Ver".
- `src/components/ImagePlaceholder.tsx` — placeholder de foto pendiente.
- `src/app/proyectos/[slug]/page.tsx` — plantilla de case study visual
  (problema → imagen → proceso → galería de 2 → resultado → imagen final →
  datos técnicos → CTA → otros proyectos).
- `public/images/brand/` — logo real en sus variantes: `logo-full.png`
  (color), `logo-full-negative.png` (blanco, para fondos oscuros),
  `icon.png` / `icon-negative.png` (solo el isotipo).

## Video del Hero (pendiente)

El componente `src/components/home/Hero.tsx` ya está preparado para recibir
el video real de la máquina CNC cortando. Cuando lo tengan:

1. Suban el archivo a `public/video/cnc-hero.mp4` (idealmente comprimido,
   menos de 8-10 MB para no perjudicar la carga).
2. En `Hero.tsx`, cambien la constante `HERO_VIDEO_SRC` de `null` a
   `"/video/cnc-hero.mp4"`.

Mientras no exista el video, el Hero usa una fotografía como fondo — no hay
pantallas vacías ni nada que romper.

## Pendientes de contenido (ver Documento Estratégico v2.2)

- Confirmar con Samik la autorización final de cada cliente antes de dejar
  su proyecto público (La Masa Madre, Omnia, Iturriaga, Liceo Bicentenario,
  Almacén La Familia, Jardín Infantil de Bucalemu).
- Fotos reales de Samik y su compañero de equipo trabajando — hoy la sección
  "Nosotros" usa placeholders identificados claramente donde correspondería
  esa fotografía (taller, CNC, soldadura, manos, equipo). Reemplazar el
  `null` correspondiente en `content.ts` o el placeholder en
  `src/app/nosotros/page.tsx` en cuanto exista el material.
- El formulario de "Cotizar" arma un mensaje de WhatsApp con el resumen del
  proyecto — no hay backend ni base de datos todavía.
- Reemplazar `https://metaludik.cl` en `src/app/layout.tsx` y
  `src/app/sitemap.ts` por el dominio real una vez definido.
