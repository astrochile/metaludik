"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { projects, project_filters, type Project } from "@/lib/content";

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>("todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "todos" ? projects : projects.filter((p) => p.filterKey === active)),
    [active]
  );

  return (
    <div>
      {/* Filtros */}
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {project_filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            data-cursor=""
            className={`shrink-0 whitespace-nowrap border px-4 py-2 text-sm font-semibold transition-colors ${
              active === f.key
                ? "border-orange bg-orange text-ink"
                : "border-line text-ink/60 hover:border-ink/40 hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.button
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                onClick={() => setSelected(p)}
                data-cursor="Ver"
                className="group relative aspect-square w-full overflow-hidden bg-graphite text-left"
              >
                <Image
                  src={p.cover}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-orange/0 mix-blend-multiply transition-colors duration-300 group-hover:bg-orange/40" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="text-[11px] font-semibold text-orange">
                    {p.category}
                  </span>
                  <h3 className="mt-0.5 font-display text-sm font-bold uppercase leading-tight text-white sm:text-base">
                    {p.client}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-steel-mid">
          Estamos documentando más casos de esta categoría.
        </p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-h-[88vh] w-full max-w-4xl grid-cols-1 overflow-y-auto bg-paper sm:grid-cols-2"
            >
              <div className="relative aspect-square sm:aspect-auto">
                <Image
                  src={selected.cover}
                  alt={selected.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-sm font-semibold text-orange">
                  {selected.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-ink">
                  {selected.client}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{selected.blurb}</p>
                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-medium text-steel-mid">Ubicación:</dt>
                    <dd className="text-ink/80">{selected.location}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-steel-mid">Material:</dt>
                    <dd className="text-ink/80">{selected.material}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/proyectos/${selected.slug}`}
                    className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange"
                  >
                    Ver caso completo
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/40"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
