import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import ProjectImage from "@/components/ProjectImage";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/content";

// Seis proyectos reales destacados en el Home. Cada uno lleva a /proyectos/[slug].
const FEATURED_SLUGS = [
  "la-masa-madre",
  "liceo-bicentenario-oscar-castro",
  "clinica-dental-omnia",
  "almacen-la-familia",
  "jardin-infantil-bucalemu",
  "brasero-somos-corraleros",
];

// Ritmo editorial en desktop (3 columnas): grande + chica / chica + grande / chica + chica + "ver todos".
// 16/10 a doble ancho y 4/5 a ancho simple dan la misma altura de fila.
const SPANS = [
  "sm:col-span-2 aspect-[4/5] sm:aspect-[16/10]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "sm:col-span-2 aspect-[4/5] sm:aspect-[16/10]",
  "aspect-[4/5]",
  "aspect-[4/5]",
];

// Nombre corto para la tarjeta cuando el cliente no sirve como título.
const LABEL_OVERRIDES: Record<string, string> = {
  "brasero-somos-corraleros": "Brasero Somos Corraleros",
};

// La ubicación solo se muestra cuando aporta: fuera de Rancagua y sin repetir el nombre.
const showLocation = (loc: string, label: string) => {
  if (!loc || /^Rancagua$/i.test(loc)) return undefined;
  return label.toLowerCase().includes(loc.split(",")[0].toLowerCase()) ? undefined : loc;
};

export default function FeaturedProjects() {
  const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    Boolean
  ) as typeof projects;

  return (
    <section id="proyectos" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading number="02" eyebrow="Proyectos" title="Ideas que ya hicimos realidad." />
          <Reveal>
            <Link
              href="/proyectos"
              className="group hidden items-center gap-1.5 text-sm font-semibold text-ink hover:text-orange sm:inline-flex"
            >
              Ver todos los proyectos
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} y={14} className={SPANS[i]}>
              <ProjectImage
                href={`/proyectos/${p.slug}`}
                src={p.cover}
                alt={p.alt}
                label={LABEL_OVERRIDES[p.slug] ?? p.client}
                category={p.category}
                location={showLocation(p.location, LABEL_OVERRIDES[p.slug] ?? p.client)}
                cursorLabel="Ver"
                sizes={
                  SPANS[i].includes("col-span-2")
                    ? "(min-width: 1024px) 66vw, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                }
                className="h-full"
              />
            </Reveal>
          ))}

          <Reveal delay={0.12} y={14} className="sm:col-span-2 lg:col-span-1 lg:aspect-[4/5]">
            <Link
              href="/proyectos"
              className="group flex h-full min-h-[180px] flex-col justify-between border border-line bg-paper-dim p-6 transition-colors hover:border-ink"
            >
              <span className="font-display text-sm font-bold tabular-nums text-orange">
                +{projects.length - featured.length}
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-tight text-ink">
                  Ver todos los proyectos
                </p>
                <p className="mt-2 text-sm text-ink/60">
                  Portones, parrillas, logos corporativos y más trabajos reales.
                </p>
                <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors group-hover:border-orange group-hover:bg-orange">
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
