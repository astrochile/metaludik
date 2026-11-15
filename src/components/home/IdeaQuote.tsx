"use client";

import { useState, type FormEvent } from "react";
import Eyebrow from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";

const waLink = (text: string) => `https://wa.me/${brand.phoneHref}?text=${encodeURIComponent(text)}`;

// Mensaje definido en el brief maestro.
const buildMessage = (name: string, need: string) =>
  `Hola Metaludik, soy ${name}. Quiero cotizar un proyecto. Necesito fabricar ${need}`;

/**
 * CTA humano + cotización simplificada (brief maestro).
 * Sin adjuntos: el cliente envía fotos directamente dentro de WhatsApp.
 */
export default function IdeaQuote() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const m = need.trim().replace(/[.\s]+$/, "");
    if (!n || !m) {
      setError(true);
      return;
    }
    setError(false);
    window.open(waLink(buildMessage(n, m) + "."), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-lg text-white placeholder:text-white/35 focus:border-orange focus:outline-none focus:ring-0";

  return (
    <section id="contacto" className="scroll-mt-20 relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-orange" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow number="05" label="Cotiza tu proyecto" dark />
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
              ¿Tienes una idea pero no sabes cómo fabricarla?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Mándanos una foto, un dibujo, algunas medidas o simplemente cuéntanos
              qué necesitas.{" "}
              <strong className="font-semibold text-white">
                No necesitas llegar con un plano técnico.
              </strong>
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <a
              href={waLink("Hola Metaludik, tengo una idea y quiero contárselas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-orange"
            >
              Cuéntanos tu idea por WhatsApp
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <form
            onSubmit={onSubmit}
            noValidate
            className="border border-white/15 bg-graphite p-6 sm:p-8"
            aria-describedby="quote-help"
          >
            <p className="font-display text-xl font-bold">Cotización rápida</p>
            <p id="quote-help" className="mt-1 text-sm text-white/55">
              Se abre WhatsApp con tu mensaje listo. Ahí puedes enviar fotos.
            </p>

            <label className="mt-6 block">
              <span className="text-sm font-medium text-white/70">Nombre</span>
              <input
                type="text"
                name="nombre"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className={field}
                aria-invalid={error && !name.trim()}
              />
            </label>

            <label className="mt-6 block">
              <span className="text-sm font-medium text-white/70">¿Qué necesitas fabricar?</span>
              <textarea
                name="necesidad"
                rows={3}
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="Ej: un letrero para mi local, un portón, una zanja…"
                className={`${field} resize-none`}
                aria-invalid={error && !need.trim()}
              />
            </label>

            {error && (
              <p role="alert" className="mt-4 text-sm text-orange">
                Completa tu nombre y lo que necesitas.
              </p>
            )}

            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 bg-orange px-6 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Enviar por WhatsApp
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
