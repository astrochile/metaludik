"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

// Cuando exista el video real de la máquina CNC cortando, se sube a
// /public/video/cnc-hero.mp4 y se descomenta el <video> más abajo.
const HERO_VIDEO_SRC: string | null = null;
const HERO_POSTER = "/images/proyectos/pieza-hexagonal.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {HERO_VIDEO_SRC ? (
          <video
            className="h-full w-full object-cover opacity-55"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_POSTER}
            alt=""
            fill
            priority
            className="object-cover opacity-55"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/50 to-transparent" />
        <div className="metal-texture-dark absolute inset-0 opacity-60" />
      </div>

      {/* línea técnica vertical, referencia editorial */}
      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/10 lg:block" aria-hidden />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-24">
        <Reveal>
          <Image
            src="/images/brand/logo-full-negative.png"
            alt="Metaludik"
            width={640}
            height={490}
            priority
            className="mb-8 h-auto w-[190px] sm:w-[230px] lg:w-[260px]"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-2xl text-balance font-display text-5xl font-extrabold leading-[0.98] text-white sm:text-6xl md:text-7xl">
            Ideas que toman forma en metal
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70">
            Corte plasma CNC, soldadura calificada y fabricación a medida —
            acompañamos tu proyecto desde la idea hasta la instalación en terreno.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 bg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/proyectos"
              data-cursor="Ver"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver proyectos reales
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
