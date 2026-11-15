"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Eyebrow from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { brand, services } from "@/lib/content";
import { QUOTE_ADD_EVENT } from "@/lib/quote";

const waLink = (text: string) => `https://wa.me/${brand.phoneHref}?text=${encodeURIComponent(text)}`;

// selección: slug del servicio → detalles elegidos (puede quedar vacío)
type Selection = Record<string, string[]>;

const phoneDigits = (v: string) => v.replace(/\D/g, "");

function buildMessage(name: string, phone: string, sel: Selection, comment: string) {
  const lines = ["Hola Metaludik, quiero cotizar un proyecto.", "", `Nombre: ${name}`, `Teléfono: ${phone}`];
  const chosen = services.filter((s) => s.slug in sel);
  if (chosen.length) {
    lines.push("", "Necesito:");
    chosen.forEach((s) => {
      const d = sel[s.slug];
      lines.push(`• ${s.title}${d.length ? `: ${d.join(", ")}` : ""}`);
    });
  }
  if (comment) lines.push("", `Detalle: ${comment}`);
  lines.push("", "Puedo enviar fotos o medidas por aquí.");
  return lines.join("\n");
}

/**
 * CTA humano + cotización rápida.
 * 1) Elige servicios (y detalles opcionales)  2) comenta  3) nombre y teléfono
 * 4) revisa el resumen  5) se abre WhatsApp con todo listo. Las fotos se envían en WhatsApp.
 * Las tarjetas de servicio pueden agregar servicios aquí con el evento QUOTE_ADD_EVENT.
 */
export default function IdeaQuote() {
  const [sel, setSel] = useState<Selection>({});
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tried, setTried] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  // Servicio agregado desde una tarjeta
  useEffect(() => {
    const onAdd = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      setSel((prev) => (slug in prev ? prev : { ...prev, [slug]: [] }));
      setFlash(slug);
      window.setTimeout(() => setFlash(null), 1600);
    };
    window.addEventListener(QUOTE_ADD_EVENT, onAdd);
    return () => window.removeEventListener(QUOTE_ADD_EVENT, onAdd);
  }, []);

  const toggleService = (slug: string) =>
    setSel((prev) => {
      const next = { ...prev };
      if (slug in next) delete next[slug];
      else next[slug] = [];
      return next;
    });

  const toggleDetail = (slug: string, item: string) =>
    setSel((prev) => {
      const cur = prev[slug] ?? [];
      return { ...prev, [slug]: cur.includes(item) ? cur.filter((x) => x !== item) : [...cur, item] };
    });

  const count = Object.keys(sel).length;
  const nameOk = name.trim().length > 1;
  const phoneOk = phoneDigits(phone).length >= 8;
  const needOk = count > 0 || comment.trim().length > 0;
  const valid = nameOk && phoneOk && needOk;

  const message = useMemo(
    () => buildMessage(name.trim(), phone.trim(), sel, comment.trim()),
    [name, phone, sel, comment]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTried(true);
    if (!valid) return;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/35 focus:border-orange focus:outline-none focus:ring-0";
  const label = "text-sm font-medium text-white/70";
  const chip = (on: boolean) =>
    `border px-3 py-2 text-sm transition-colors ${
      on ? "border-orange bg-orange font-semibold text-ink" : "border-white/20 text-white/80 hover:border-white/60"
    }`;

  return (
    <section id="contacto" className="scroll-mt-20 relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-orange" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow number="05" label="Cotiza tu proyecto" dark />
              <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl">
                ¿Tienes una idea pero no sabes cómo fabricarla?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                Elige lo que necesitas, cuéntanos un poco y te respondemos por WhatsApp.{" "}
                <strong className="font-semibold text-white">
                  No necesitas llegar con un plano técnico.
                </strong>
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={onSubmit} noValidate className="border border-white/15 bg-graphite p-5 sm:p-8">
            {/* 1. Qué necesitas */}
            <fieldset>
              <legend className="font-display text-xl font-bold">
                <span className="mr-2 text-orange">1</span>¿Qué necesitas?
              </legend>
              <p className="mt-1 text-sm text-white/50">Puedes elegir más de uno.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    aria-pressed={s.slug in sel}
                    onClick={() => toggleService(s.slug)}
                    className={`${chip(s.slug in sel)} ${flash === s.slug ? "ring-2 ring-white" : ""}`}
                  >
                    {s.slug in sel ? "✓ " : "+ "}
                    {s.title}
                  </button>
                ))}
              </div>

              {/* Detalle opcional por servicio elegido */}
              {services
                .filter((s) => s.slug in sel)
                .map((s) => (
                  <div key={s.slug} className="mt-5 border-l-2 border-orange pl-4">
                    <p className="text-sm font-semibold text-white">
                      {s.title} <span className="font-normal text-white/45">· detalle opcional</span>
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.items.map((item) => {
                        const on = sel[s.slug]?.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggleDetail(s.slug, item)}
                            className={`border px-2.5 py-1 text-xs transition-colors ${
                              on
                                ? "border-white bg-white font-semibold text-ink"
                                : "border-white/15 text-white/70 hover:border-white/50"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </fieldset>

            {/* 2. Comentario */}
            <label className="mt-8 block">
              <span className="font-display text-xl font-bold">
                <span className="mr-2 text-orange">2</span>Cuéntanos tu idea
              </span>
              <span className="mt-1 block text-sm text-white/50">Medidas, lugar, plazos… lo que sepas.</span>
              <textarea
                name="detalle"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ej: letrero de 1 metro para mi local, con luz"
                className={`${field} resize-none`}
              />
            </label>

            {/* 3. Datos */}
            <fieldset className="mt-8">
              <legend className="font-display text-xl font-bold">
                <span className="mr-2 text-orange">3</span>Tus datos
              </legend>
              <div className="mt-2 grid gap-x-6 sm:grid-cols-2">
                <label className="mt-3 block">
                  <span className={label}>Nombre</span>
                  <input
                    type="text"
                    name="nombre"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className={field}
                    aria-invalid={tried && !nameOk}
                  />
                </label>
                <label className="mt-3 block">
                  <span className={label}>Teléfono</span>
                  <input
                    type="tel"
                    name="telefono"
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+56 9 1234 5678"
                    className={field}
                    aria-invalid={tried && !phoneOk}
                  />
                </label>
              </div>
            </fieldset>

            {/* 4. Resumen */}
            <div className="mt-8 border border-white/10 bg-ink/60 p-4 sm:p-5">
              <p className="text-xs font-semibold text-orange">Tu cotización</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-white/45">Nombre</dt>
                  <dd className="text-white">{name.trim() || "—"}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-white/45">Teléfono</dt>
                  <dd className="text-white">{phone.trim() || "—"}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-white/45">Necesito</dt>
                  <dd className="text-white">
                    {count === 0 ? (
                      "—"
                    ) : (
                      <ul className="space-y-1">
                        {services
                          .filter((s) => s.slug in sel)
                          .map((s) => (
                            <li key={s.slug}>
                              {s.title}
                              {sel[s.slug].length > 0 && (
                                <span className="text-white/55">: {sel[s.slug].join(", ")}</span>
                              )}
                            </li>
                          ))}
                      </ul>
                    )}
                  </dd>
                </div>
                {comment.trim() && (
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-white/45">Detalle</dt>
                    <dd className="text-white/85">{comment.trim()}</dd>
                  </div>
                )}
              </dl>
            </div>

            {tried && !valid && (
              <p role="alert" className="mt-4 text-sm text-orange">
                {!needOk
                  ? "Elige al menos un servicio o cuéntanos tu idea."
                  : !nameOk
                    ? "Escribe tu nombre."
                    : "Escribe un teléfono válido."}
              </p>
            )}

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 bg-orange px-6 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Enviar cotización por WhatsApp
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="mt-3 text-center text-xs text-white/45">
              Se abre WhatsApp con todo listo. Ahí puedes adjuntar fotos.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
