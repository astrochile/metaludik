import Link from "next/link";
import Image from "next/image";
import { brand, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/brand/logo-horizontal.png"
              alt="Metaludik — fabricación metálica y corte plasma CNC"
              width={2718}
              height={473}
              className="h-7 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              {brand.tagline}. Fabricación metálica, corte plasma CNC,
              estructuras metálicas, soldadura, letreros y proyectos
              personalizados en {brand.city}.
            </p>
            <p className="mt-3 text-sm text-white/40">
              Samik Garrido — fundador
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-orange">Navegación</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-white/65 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-sm text-white/65 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="text-sm text-white/65 hover:text-white">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#proceso" className="text-sm text-white/65 hover:text-white">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="text-sm text-white/65 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-sm text-white/65 hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-orange">Servicios</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios#${s.slug}`}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-orange">Contacto</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>{brand.city}, {brand.region}</li>
              <li>
                <a href={`https://wa.me/${brand.phoneHref}`} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li>{brand.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{brand.legalName} — RUT {brand.rut}</p>
          <p>© {new Date().getFullYear()} Metaludik. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
