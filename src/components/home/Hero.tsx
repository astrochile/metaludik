"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

// Video real de la CNC/plasma. Para reemplazarlo por el definitivo basta con
// sobrescribir este archivo (mp4, sin audio, idealmente ≤ 10 MB) y su poster.
const HERO_VIDEO_SRC = "/video/cnc-hero.mp4";
const HERO_POSTER = "/images/brand/hero-poster.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-60px)] max-w-7xl flex-col justify-end px-5 pb-14 pt-24 sm:px-8 sm:pb-20 lg:pb-24">
        <Reveal y={14}>
          <Image
            src="/images/brand/logo-full-negative.png"
            alt="Metaludik"
            width={1271}
            height={773}
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 240px"
            className="h-auto w-[240px] sm:w-[340px] lg:w-[420px]"
          />
        </Reveal>

        <Reveal delay={0.08} y={14}>
          <div aria-hidden className="mt-10 h-px w-16 bg-orange sm:mt-12" />
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Ideas que toman forma en metal.
          </h1>
        </Reveal>

        <Reveal delay={0.16} y={14}>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
            Corte plasma CNC, fabricación metálica, letreros, excavaciones y
            proyectos a medida en Rancagua.
          </p>
        </Reveal>

        <Reveal delay={0.24} y={14}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-orange px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Cotiza tu proyecto
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="#proyectos"
              data-cursor="Ver"
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver trabajos
              <span aria-hidden>↓</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
