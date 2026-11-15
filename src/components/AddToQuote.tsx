"use client";

import { addServiceToQuote } from "@/lib/quote";

// Suma el servicio a la cotización rápida y baja hasta el formulario (sin salir de la página).
export default function AddToQuote({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => addServiceToQuote(slug)}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-orange ${className}`}
    >
      <span aria-hidden className="flex h-5 w-5 items-center justify-center rounded-full border border-orange text-xs leading-none">
        +
      </span>
      Agregar a cotización
    </button>
  );
}
