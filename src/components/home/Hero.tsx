import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/proyectos/pieza-hexagonal.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <span className="mb-5 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          Corte plasma CNC · Soldadura calificada · {brand.city}
        </span>

        <h1 className="max-w-3xl text-balance font-display text-5xl font-semibold uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl">
          Ideas que toman
          <br />
          forma en metal
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/75">
          Corte plasma CNC, soldadura calificada y fabricación a medida —
          acompañamos tu proyecto desde la idea hasta la instalación en terreno.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 bg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Solicitar cotización
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Ver proyectos reales
          </Link>
        </div>
      </div>
    </section>
  );
}
