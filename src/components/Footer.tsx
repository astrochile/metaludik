import Link from "next/link";
import Image from "next/image";
import { brand, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/brand/logo.svg"
                alt="Metaludik"
                width={30}
                height={30}
                className="h-7 w-7"
              />
              <span className="font-display text-lg font-semibold tracking-wide">
                METALUDIK
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              {brand.tagline}. Corte plasma CNC, soldadura calificada y fabricación
              metálica a medida en {brand.city}.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-orange">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios#${s.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-orange">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/nosotros" className="text-sm text-white/70 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-sm text-white/70 hover:text-white">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/cotizar" className="text-sm text-white/70 hover:text-white">
                  Cotizar
                </Link>
              </li>
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-orange">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>{brand.city}, {brand.region}</li>
              <li>
                <a
                  href={`https://wa.me/${brand.phoneHref}`}
                  className="hover:text-white"
                >
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

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {brand.legalName} — RUT {brand.rut}
          </p>
          <p>© {new Date().getFullYear()} Metaludik. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
