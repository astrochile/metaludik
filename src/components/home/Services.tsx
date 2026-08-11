import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-line bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          number="02"
          eyebrow="Qué hacemos"
          title="Del diseño al metal"
          lede="Cinco formas de trabajar el metal, con proyectos reales detrás de cada una."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05} y={14}>
              <Link
                href={`/servicios#${s.slug}`}
                data-cursor="Ver"
                className="group relative flex h-full flex-col overflow-hidden border border-line bg-paper"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                  <Image
                    src={s.photo}
                    alt={s.photoAlt}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                  <span className="absolute left-4 top-4 font-display text-sm font-bold text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase leading-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.short}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                    Ver detalle
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.25} y={14}>
            <Link
              href="/servicios"
              className="group flex h-full min-h-[220px] flex-col justify-between bg-orange p-6"
            >
              <div>
                <span className="font-display text-sm font-bold text-ink/60">+</span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight text-ink">
                  Ver todos los servicios en detalle
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Alcance, materiales y casos de referencia de cada categoría.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
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
