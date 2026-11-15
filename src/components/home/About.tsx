import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealMask } from "@/components/Reveal";

// Versión resumida para el Home. La historia completa vive en /nosotros.
export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-7">
          <RevealMask className="aspect-[4/5] w-full sm:aspect-[4/3]">
            <div className="relative h-full w-full">
              <Image
                src="/images/proyectos/samik-soldando.jpg"
                alt="Samik Garrido soldando una reja metálica en el taller de Metaludik"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </RevealMask>
        </div>

        <div className="lg:col-span-5">
          <SectionHeading number="05" eyebrow="Detrás del metal" title="Somos Metaludik." />

          <Reveal delay={0.08}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/75">
              Más de 15 años trabajando con metal y tres años construyendo un
              taller propio donde oficio, diseño y tecnología se encuentran.
            </p>
          </Reveal>

          {/* Origen del nombre */}
          <Reveal delay={0.14}>
            <p
              aria-label="Metal más lúdico es igual a Metaludik"
              className="mt-8 flex items-baseline gap-x-2 whitespace-nowrap font-display text-[22px] font-extrabold text-ink sm:gap-x-3 sm:text-3xl"
            >
              <span>Metal</span>
              <span aria-hidden className="text-orange">+</span>
              <span>Lúdico</span>
              <span aria-hidden className="text-orange">=</span>
              <span className="bg-ink px-2 text-white">Metaludik</span>
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="mt-8 border-l-2 border-orange pl-5">
              <p className="text-lg leading-snug text-ink">
                &ldquo;Acá las ideas se conversan, se dibujan, se cortan, se
                sueldan y terminan convirtiéndose en algo real.&rdquo;
              </p>
              <cite className="mt-2 block text-sm font-semibold not-italic text-steel-mid">
                — Samik Garrido
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={0.24}>
            <Link
              href="/nosotros"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-orange"
            >
              Conoce el taller
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
