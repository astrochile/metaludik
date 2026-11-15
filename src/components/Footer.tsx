import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/content";

const LINKS = [
  { href: "/#servicios", label: "Qué hacemos" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

// Footer simple (brief maestro). El contacto principal vive en el cierre del Home.
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/brand/logo-horizontal.png"
              alt="Metaludik — fabricación metálica y corte plasma CNC"
              width={2718}
              height={473}
              className="h-7 w-auto"
            />
          </Link>

          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <a href={`https://wa.me/${brand.phoneHref}`} className="hover:text-white">
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="hover:text-white">
            {brand.email}
          </a>
          <span>{brand.hours}</span>
        </div>

        <div className="mt-6 flex flex-col gap-1 text-xs text-white/35 sm:flex-row sm:justify-between">
          <p>
            {brand.legalName} — RUT {brand.rut}
          </p>
          <p>© {new Date().getFullYear()} Metaludik</p>
        </div>
      </div>
    </footer>
  );
}
