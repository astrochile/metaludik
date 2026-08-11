import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";

export default function FinalCta() {
  return (
    <section
      id="contacto"
      className="metal-texture-dark scroll-mt-20 relative overflow-hidden border-t border-white/10 bg-ink py-24 text-center text-white sm:py-32"
    >
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <SectionHeading
          number="08"
          eyebrow="Cotización"
          title="¿Tienes un proyecto en mente?"
          align="center"
          dark
        />
        <Reveal delay={0.1}>
          <p className="mt-4 text-white/60">
            Cuéntanos qué necesitas. Puedes enviarnos una idea, fotografía,
            plano o referencia.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${brand.phoneHref}?text=${encodeURIComponent(
                "Hola Metaludik, quiero cotizar un proyecto"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Cotizar mi proyecto por WhatsApp
            </a>
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ir al formulario
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
