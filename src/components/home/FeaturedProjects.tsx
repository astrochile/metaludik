import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

const FEATURED_SLUGS = [
  "la-masa-madre",
  "clinica-dental-omnia",
  "liceo-bicentenario-oscar-castro",
  "almacen-la-familia",
  "jardin-infantil-bucalemu",
  "parrilla-familia-contreras",
];

export default function FeaturedProjects() {
  const featured = FEATURED_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof projects;

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
              Proyectos reales
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] text-ink sm:text-5xl">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-orange">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold uppercase leading-tight text-white">
                    {p.client}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
