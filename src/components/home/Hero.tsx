"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const HERO_VIDEO_SRC = "/video/cnc-hero.mp4";
const HERO_POSTER = "/images/brand/hero-poster.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/45 to-transparent" />
      </div>

      {/* línea técnica vertical, referencia editorial */}
      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/10 lg:block" aria-hidden />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-24">
        <Reveal>
          <Image
            src="/images/brand/logo-horizontal.png"
            alt="Metaludik — fabricación metálica y corte plasma CNC en Rancagua"
            width={2718}
            height={473}
            priority
            className="mb-8 h-auto w-[240px] sm:w-[300px] lg:w-[360px]"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-2xl text-balance font-display text-5xl font-extrabold leading-[0.98] text-white sm:text-6xl md:text-7xl">
            Ideas que toman forma en metal
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70">
            Fabricación, corte plasma CNC, estructuras metálicas, soldadura y
            proyectos a medida.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 bg-orange px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Cotizar proyecto
            </Link>
            <Link
              href="#proyectos"
              data-cursor="Ver"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver proyectos
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
