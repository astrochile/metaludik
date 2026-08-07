import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/brand/logo.svg"
            alt="Metaludik"
            width={34}
            height={34}
            className="h-8 w-8"
            priority
          />
          <span className="font-display text-xl font-semibold tracking-wide text-ink">
            METALUDIK
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[15px] font-medium text-ink/80 transition-colors hover:text-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/cotizar"
          className="group inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange sm:px-5"
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
