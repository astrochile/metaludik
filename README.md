# Metaludik — Sitio web

Next.js 14 (App Router) + TypeScript + Tailwind CSS v4. Contenido 100% real,
confirmado por Samik Garrido (ver `src/lib/content.ts`).

## Cómo subirlo a Vercel (mismo flujo que usaste con INGEACON)

### 1. Subir el proyecto a GitHub

Descomprime este .zip en tu computador, abre una terminal dentro de la carpeta
`metaludik-web` y ejecuta:

```bash
git init
git add .
git commit -m "Primera versión del sitio Metaludik"
```

Luego crea un repositorio nuevo y vacío en GitHub (sin README, sin .gitignore,
sin licencia — para que no choque con lo que ya tienes) y conéctalo:

```bash
git remote add origin https://github.com/TU-USUARIO/metaludik-web.git
git branch -M main
git push -u origin main
```

### 2. Conectar con Vercel

1. Entra a vercel.com e inicia sesión con tu cuenta de GitHub.
2. "Add New… → Project".
3. Selecciona el repositorio `metaludik-web`.
4. Vercel detecta Next.js automáticamente — no hay que tocar nada en la
   configuración de build.
5. Click en "Deploy".

En 1-2 minutos tienes una URL tipo `metaludik-web.vercel.app` funcionando.

### 3. Conectar el dominio real (cuando lo tengas)

En el proyecto dentro de Vercel: **Settings -> Domains -> Add**, escribe el
dominio (por ejemplo `metaludik.cl`) y sigue las instrucciones para apuntar
los DNS desde donde compraste el dominio.

## Cómo probarlo en tu computador antes de subirlo

Necesitas Node.js instalado (versión 20 o superior).

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Dónde está cada cosa

- `src/lib/content.ts` — **todo el contenido real del sitio en un solo
  archivo**: datos de contacto, servicios, proyectos, preguntas frecuentes.
  Si algo cambia (un teléfono, un proyecto nuevo, una cifra), se edita acá y
  se refleja en todo el sitio.
- `src/app/` — cada carpeta es una página (`/nosotros`, `/servicios`,
  `/proyectos`, `/cotizar`, `/contacto`).
- `src/app/proyectos/[slug]/page.tsx` — la plantilla de caso de proyecto.
  Para agregar un proyecto nuevo, solo hay que agregar un objeto nuevo en el
  arreglo `projects` de `content.ts` — la página se genera sola.
- `src/components/` — piezas reutilizables (header, footer, formulario de
  cotización, etc).
- `public/images/` — logo y fotos de proyectos.

## Pendientes antes de publicar (ver Documento Estratégico v2.2)

- Confirmar con Samik la autorización final de cada cliente antes de dejar su
  proyecto público en el sitio (La Masa Madre, Omnia, Iturriaga, Liceo
  Bicentenario, Almacén La Familia, Jardín Infantil de Bucalemu).
- El formulario de "Cotizar" hoy arma un mensaje de WhatsApp con el resumen
  del proyecto — no guarda los datos en ninguna base de datos ni envía
  correos automáticamente. Si más adelante quieren guardar las cotizaciones
  o recibirlas por correo, se puede conectar a un servicio como Resend o a
  una base de datos (es un paso aparte, no necesario para lanzar).
- Reemplazar `https://metaludik.cl` en `src/app/layout.tsx` y
  `src/app/sitemap.ts` por el dominio real una vez que esté definido, para
  que el SEO y las redes sociales muestren la vista previa correcta.
- Fotos y video del proceso de trabajo (que Samik mencionó tener) — hoy el
  sitio usa las fotos de piezas terminadas; agregar fotos de "detrás de
  escena" reforzaría la sección "Cómo trabajamos".
