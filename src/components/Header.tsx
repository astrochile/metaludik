"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Navegación principal: anclas dentro del Home (smooth-scroll vía CSS).
// Desde páginas internas, "/#ancla" vuelve al Home y baja a la sección.
const NAV = [
  { href: "/#servicios", label: "Qué hacemos" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

const CTA_HREF = "/#contacto";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú móvil con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || open ? "border-white/10 bg-ink/95 backdrop-blur-md" : "border-transparent bg-ink"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center" data-cursor="" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/logo-horizontal.png"
            alt="Metaludik — fabricación metálica y corte plasma CNC"
            width={800}
            height={139}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[15px] font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-orange transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={CTA_HREF}
            className="group inline-flex items-center gap-2 whitespace-nowrap bg-orange px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white sm:px-5"
          >
            Cotizar<span className="hidden sm:inline"> proyecto</span>
            <span aria-hidden className="hidden transition-transform group-hover:translate-x-0.5 sm:inline">
              →
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <nav
        id="menu-movil"
        aria-label="Principal móvil"
        className={`overflow-hidden border-t border-white/10 md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto max-w-7xl px-5 py-2 sm:px-8">
          {NAV.map((item, i) => (
            <li key={item.href} className="border-b border-white/10 last:border-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-xl font-bold text-white"
              >
                {item.label}
                <span className="text-sm font-semibold tabular-nums text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
