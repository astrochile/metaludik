"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { IconBrief, IconDesign, IconCut, IconInstall } from "@/components/ProcessIcons";
import { process_steps } from "@/lib/content";

const ICONS = [IconBrief, IconDesign, IconCut, IconInstall];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-sm font-semibold text-orange">Cómo trabajamos</span>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl">
            De una idea a algo real
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
            Cada proyecto es distinto, pero hay algo que se repite: escuchamos,
            pensamos la solución y la fabricamos.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* línea CNC — horizontal en desktop, vertical en mobile */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-white/10 md:left-0 md:top-[27px] md:block md:h-px md:w-full">
            <div
              className="h-full bg-orange transition-[width] duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)] md:h-px"
              style={{ width: active ? "100%" : "0%" }}
            />
          </div>
          <div
            className="absolute left-[27px] top-0 block h-full w-px bg-white/10 md:hidden"
            aria-hidden
          >
            <div
              className="w-px bg-orange transition-[height] duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ height: active ? "100%" : "0%" }}
            />
          </div>

          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8">
            {process_steps.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <li key={step.title} className="relative pl-16 md:pl-0">
                  <Reveal delay={i * 0.12}>
                    <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ink ring-1 ring-white/15 md:h-16 md:w-16">
                      <Icon className="h-8 w-8 text-white" />
                      <span className="absolute -left-16 top-1/2 -translate-y-1/2 font-display text-sm font-bold text-orange md:-left-1 md:-top-9 md:translate-y-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                      {step.text}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-24 border-t border-white/10 pt-14 text-center">
            <p className="mx-auto max-w-2xl text-balance font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              Tú traes la idea. Nosotros ponemos el metal, el oficio y cómo
              hacerla realidad.
            </p>
            <Link
              href="/cotizar"
              className="mt-8 inline-flex items-center gap-2 bg-orange px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Cuéntanos tu proyecto →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
