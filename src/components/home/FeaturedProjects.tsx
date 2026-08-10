import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import ProjectImage from "@/components/ProjectImage";
import { projects } from "@/lib/content";

const FEATURED_SLUGS = [
  "la-masa-madre",
  "clinica-dental-omnia",
  "liceo-bicentenario-oscar-castro",
  "almacen-la-familia",
  "jardin-infantil-bucalemu",
  "parrilla-familia-contreras",
];

// tamaños editoriales: alterna proporciones para romper la grilla uniforme
const SPANS = [
  "sm:col-span-2 aspect-[16/10]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "sm:col-span-2 aspect-[16/10]",
];

export default function FeaturedProjects() {
  const featured = FEATURED_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof projects;

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-orange">Proyectos reales</span>
              <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl">
                Casos, no una galería
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="text-sm font-semibold text-orange hover:underline"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08} className={SPANS[i]}>
              <ProjectImage
                href={`/proyectos/${p.slug}`}
                src={p.cover}
                alt={p.title}
                label={p.client}
                category={p.category}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
