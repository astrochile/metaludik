import Link from "next/link";
import { brand } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-20 text-center text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <h2 className="text-balance font-display text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
          Cuéntanos qué necesitas fabricar
        </h2>
        <p className="mt-4 text-white/70">
          Envíanos tu idea, un diseño o solo una foto de referencia. Te
          respondemos con una cotización real.
        </p>
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
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
