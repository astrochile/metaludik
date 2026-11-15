import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import AddToQuote from "@/components/AddToQuote";
import { services } from "@/lib/content";

// Todo a la vista: sin enlaces a otras páginas. Cada tarjeta muestra qué incluye
// el servicio y lo suma a la cotización rápida (#contacto).
// Desktop: 3 tarjetas arriba + 2 más anchas abajo (grilla de 6 columnas).
const SPAN = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-line bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          number="01"
          eyebrow="Qué hacemos"
          title="Del diseño al metal"
          lede="Cinco soluciones, del corte CNC a la preparación de terrenos."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05} y={14} className={`${SPAN[i]} ${i === 4 ? "sm:col-span-2" : ""}`}>
              <article className="group flex h-full flex-col overflow-hidden border border-line bg-paper">
                <div
                  className={`relative w-full overflow-hidden bg-graphite ${
                    i >= 3 ? "aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9]" : "aspect-[16/10] sm:aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={s.photo}
                    alt={s.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 font-display text-sm font-bold tabular-nums text-white drop-shadow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.short}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Incluye: ${s.title}`}>
                    {s.items.map((item) => (
                      <li key={item} className="border border-line px-2.5 py-1 text-xs text-ink/70">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <AddToQuote slug={s.slug} className="mt-auto self-start pt-6" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
