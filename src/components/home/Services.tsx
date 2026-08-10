import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="border-t border-line bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-orange">Qué hacemos</span>
            <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl">
              Cinco formas de trabajar el metal
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden bg-steel-mid/20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05} y={14}>
              <Link
                href={`/servicios#${s.slug}`}
                className="group relative flex h-full flex-col justify-between bg-paper p-7 transition-colors hover:bg-ink"
              >
                <div>
                  <span className="font-display text-sm font-bold text-steel-mid group-hover:text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight text-ink group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65 group-hover:text-white/70">
                    {s.short}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                  Ver detalle
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.25} y={14}>
            <Link
              href="/servicios"
              className="group flex h-full flex-col justify-between bg-orange p-7 transition-colors hover:bg-ink"
            >
              <div>
                <span className="font-display text-sm font-bold text-ink/60 group-hover:text-white/50">
                  +
                </span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight text-ink group-hover:text-white">
                  Ver todos los servicios en detalle
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 group-hover:text-white/70">
                  Alcance, materiales y casos de referencia de cada categoría.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-white">
                Ir a Servicios
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
