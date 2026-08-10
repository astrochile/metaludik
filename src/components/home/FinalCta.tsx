import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="metal-texture-dark relative overflow-hidden border-t border-white/10 bg-ink py-24 text-center text-white sm:py-32">
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl">
            Cuéntanos qué necesitas fabricar
          </h2>
          <p className="mt-4 text-white/60">
            Envíanos tu idea, un diseño o solo una foto de referencia. Te
            respondemos con una cotización real.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 bg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Solicitar cotización
            </Link>
            <a
              href={`https://wa.me/${brand.phoneHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
