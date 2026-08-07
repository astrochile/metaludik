"use client";

import { useState } from "react";
import { brand, services } from "@/lib/content";

const RUBROS = [
  "Comercio / negocio",
  "Institución / educación",
  "Constructora / arquitectura",
  "Empresa / industria",
  "Persona particular",
  "Otro",
];

const PLAZOS = ["Sin apuro", "En las próximas semanas", "Es urgente"];

export default function QuoteForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [service, setService] = useState(services[0].title);
  const [rubro, setRubro] = useState(RUBROS[0]);
  const [plazo, setPlazo] = useState(PLAZOS[0]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [consent, setConsent] = useState(false);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const canSubmit = name.trim().length > 1 && description.trim().length > 3 && consent;

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hola Metaludik, quiero cotizar un proyecto.`,
      `Nombre: ${name}`,
      `Tipo de cliente: ${rubro}`,
      `Servicio de interés: ${service}`,
      `Plazo: ${plazo}`,
      `Descripción: ${description}`,
    ];
    if (files.length > 0) {
      lines.push(`(Voy a adjuntar ${files.length} archivo(s) acá mismo en el chat)`);
    }
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const url = `https://wa.me/${brand.phoneHref}?text=${encodeURIComponent(
      buildWhatsAppMessage()
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "mt-1.5 w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-graphite/60 focus:border-ink focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-graphite">
            Nombre *
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Tu nombre"
          />
        </label>

        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-graphite">
            Tipo de cliente
          </span>
          <select
            value={rubro}
            onChange={(e) => setRubro(e.target.value)}
            className={inputClass}
          >
            {RUBROS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-graphite">
            Servicio de interés
          </span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-graphite">
            Plazo
          </span>
          <select
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            className={inputClass}
          >
            {PLAZOS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-widest text-graphite">
          Cuéntanos tu proyecto *
        </span>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className={inputClass}
          placeholder="Qué necesitas fabricar, dimensiones aproximadas, material si lo sabes, dónde se instalaría..."
        />
      </label>

      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-graphite">
          Archivos de referencia (PDF, DXF, DWG, imágenes)
        </span>
        <label className="mt-1.5 flex cursor-pointer flex-col items-center justify-center border border-dashed border-line bg-mist px-6 py-8 text-center transition-colors hover:border-orange">
          <input
            type="file"
            multiple
            accept=".pdf,.dxf,.dwg,image/*"
            onChange={handleFiles}
            className="hidden"
          />
          <span className="text-sm font-medium text-ink">
            Haz clic para seleccionar archivos
          </span>
          <span className="mt-1 text-xs text-graphite">
            PDF, DXF, DWG o imágenes — puedes elegir varios
          </span>
        </label>
        {files.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {files.map((f) => (
              <li
                key={f.name}
                className="flex items-center gap-2 text-xs text-ink/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                {f.name}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-xs leading-relaxed text-graphite">
          Por ahora, el envío final se hace por WhatsApp: al enviar este
          formulario se abre una conversación con tu resumen — ahí adjuntas
          los archivos directamente en el chat.
        </p>
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-orange"
        />
        <span className="text-xs leading-relaxed text-graphite">
          Acepto que Metaludik use estos datos para responder mi solicitud de
          cotización.
        </span>
      </label>

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex items-center gap-2 bg-orange px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-orange disabled:hover:text-ink"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
