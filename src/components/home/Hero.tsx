import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

// Imagen real del taller: cuadro del corte plasma CNC (recortado del video original).
// Para cambiarla basta con reemplazar estos dos archivos manteniendo el nombre.
const HERO_DESKTOP = "/images/brand/hero-plasma.jpg";
const HERO_MOBILE = "/images/brand/hero-plasma-movil.jpg";
const HERO_ALT = "Máquina de corte plasma CNC de Metaludik cortando una plancha de acero, con chispas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={HERO_MOBILE}
          alt={HERO_ALT}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] md:hidden"
        />
        <Image
          src={HERO_DESKTOP}
          alt={HERO_ALT}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[50%_45%] md:block"
        />
        {/* Foto sin filtros de color: solo un oscurecido parejo para que el texto se lea */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-60px)] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
        <Reveal y={14}>
          <p className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
            <span aria-hidden className="h-px w-10 bg-orange" />
            Taller metalúrgico en Rancagua
          </p>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            Ideas que toman forma en <span className="text-orange">metal</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.1} y={14}>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
            Corte plasma CNC, fabricación metálica, letreros y excavaciones.
            Tú traes la idea, nosotros la hacemos realidad.
          </p>
        </Reveal>

        <Reveal delay={0.18} y={14}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-orange px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              Cotiza tu proyecto
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="#proyectos"
              data-cursor="Ver"
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver trabajos
              <span aria-hidden>↓</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
