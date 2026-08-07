import Link from "next/link";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="border-t border-line bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
            Qué hacemos
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] text-ink sm:text-5xl">
            Cinco formas de trabajar el metal
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/servicios#${s.slug}`}
              className="group relative flex flex-col justify-between bg-paper p-7 transition-colors hover:bg-ink"
            >
              <div>
                <span className="font-mono text-xs text-graphite group-hover:text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold uppercase leading-tight text-ink group-hover:text-white">
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
          ))}

          <Link
            href="/servicios"
            className="group flex flex-col justify-between bg-orange p-7 transition-colors hover:bg-ink"
          >
            <div>
              <span className="font-mono text-xs text-ink/70 group-hover:text-white/60">
                +
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold uppercase leading-tight text-ink group-hover:text-white">
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
        </div>
      </div>
    </section>
  );
}
