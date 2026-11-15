import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { brand, gallery } from "@/lib/content";

/**
 * Galería de trabajos reales (Home). Sin páginas de detalle: la idea es que
 * la persona vea ejemplos de lo que se hace y pase directo a cotizar.
 * Las páginas /proyectos y /proyectos/[slug] siguen existiendo para SEO.
 */
export default function WorkGallery() {
  const wa = `https://wa.me/${brand.phoneHref}?text=${encodeURIComponent(
    "Hola Metaludik, vi sus trabajos en la web y quiero cotizar algo parecido."
  )}`;

  return (
    <section id="proyectos" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          number="02"
          eyebrow="Trabajos"
          title="Ideas que ya hicimos realidad."
          lede="Algunos trabajos reales salidos de nuestro taller."
        />

        <div className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.05} y={12} className="mb-6 break-inside-avoid sm:mb-8">
              <figure className="group">
                <div className="relative overflow-hidden bg-paper-dim">
                  <Image
                    src={item.src}
                    alt={`${item.title}: ${item.text}`}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-orange opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-25"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="text-xs font-semibold text-orange">{item.category}</p>
                  <p className="mt-0.5 font-display text-[15px] font-bold leading-snug text-ink sm:text-base">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/55 sm:text-sm">{item.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Paso directo a cotizar */}
        <Reveal>
          <div className="mt-6 flex flex-col gap-5 border-t-2 border-orange bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                ¿Te gustaría algo así?
              </p>
              <p className="mt-1 text-sm text-white/60">
                Cuéntanos tu idea y te cotizamos sin compromiso.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 bg-orange px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
              >
                Cotiza tu proyecto
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
