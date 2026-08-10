"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-ink"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" data-cursor="">
          <Image
            src="/images/brand/icon-negative.png"
            alt="Metaludik"
            width={34}
            height={34}
            className="h-8 w-8"
            priority
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            METALUDIK
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[15px] font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/cotizar"
          className="group inline-flex items-center gap-2 bg-orange px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white sm:px-5"
        >
          Cotizar
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
