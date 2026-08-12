import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealMask, Counter } from "@/components/Reveal";
import { stats } from "@/lib/content";

export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading number="06" eyebrow="Nosotros" title="El oficio detrás de Metaludik" />

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/70">
              <p>
                <strong className="text-ink">Samik Garrido</strong> lleva 15 años
                en el oficio de la soldadura, formado principalmente en el rubro
                minero, en procesos de extracción de cobre. Hace 3 años decidió
                abrir su propio taller: así nació{" "}
                <strong className="text-ink">Metaludik</strong> — metal, con un
                toque más lúdico, cercano y creativo.
              </p>
              <p>
                Hoy Metaludik es un equipo de dos personas que trabaja con una
                máquina de corte plasma CNC industrial y soldadura calificada,
                acompañando cada proyecto desde la idea hasta la instalación.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <blockquote className="mt-8 border-l-2 border-orange pl-5">
              <p className="font-display text-xl italic leading-snug text-ink">
                &ldquo;Acá las ideas se conversan, se dibujan, se cortan, se
                sueldan y terminan convirtiéndose en algo real.&rdquo;
              </p>
              <cite className="mt-2 block text-xs font-medium not-italic text-steel-mid">
                Samik Garrido, fundador de Metaludik
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="/nosotros"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline"
            >
              Conoce nuestra historia completa →
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <RevealMask className="aspect-[4/3] w-full">
            <div className="relative h-full w-full">
              <Image
                src="/images/proyectos/samik-soldando.jpg"
                alt="Samik Garrido soldando una reja metálica en el taller de Metaludik"
                fill
                className="object-cover"
              />
            </div>
          </RevealMask>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold text-ink">
                  <Counter value={Number(s.value)} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-xs leading-snug text-steel-mid">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
