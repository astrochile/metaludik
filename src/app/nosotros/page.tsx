import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Reveal, RevealMask, Counter } from "@/components/Reveal";
import MetalLudico from "@/components/nosotros/MetalLudico";
import { stats, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Samik Garrido, soldador calificado con 15 años de oficio, fundó Metaludik hace 3 años en Rancagua. Esta es la historia detrás del nombre.",
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        {/* 01 — Hero */}
        <section className="relative flex h-[86vh] min-h-[560px] w-full items-end overflow-hidden bg-ink">
          <Image
            src="/images/proyectos/pieza-hexagonal.jpg"
            alt="Taller de Metaludik"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
            <Reveal>
              <span className="text-sm font-semibold text-orange">Nosotros</span>
              <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.03] text-white sm:text-6xl">
                No fabricamos cosas en metal. Damos forma a ideas.
              </h1>
              <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-white/70">
                Somos un taller de Rancagua donde diseño, oficio y tecnología
                se juntan para crear piezas que antes solo existían en la
                cabeza de alguien.
              </p>
              <a
                href="#historia"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-orange"
              >
                Conoce nuestra historia ↓
              </a>
            </Reveal>
          </div>
        </section>

        {/* 02 — Presentar a Samik */}
        <section id="historia" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <RevealMask className="lg:col-span-7 aspect-[4/3]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/proyectos/parrilla-contreras.jpg"
                  alt="Trabajo en el taller de Metaludik"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealMask>

            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  Hola, soy Samik.
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/75">
                  <p>Llevo más de 15 años trabajando con metal.</p>
                  <p>
                    Mi formación comenzó principalmente en proyectos
                    relacionados con la minería, donde aprendí soldadura,
                    fabricación y diferentes procesos técnicos.
                  </p>
                  <p>Pero siempre tuve ganas de construir algo propio.</p>
                  <p>Hace tres años abrí mi taller.</p>
                  <p className="font-semibold text-ink">Y ahí empezó Metaludik.</p>
                </div>
                <p className="mt-8 font-display text-sm font-bold uppercase tracking-tight text-ink">
                  Samik Garrido
                  <span className="mt-0.5 block text-xs font-medium normal-case text-steel-mid">
                    Fundador de Metaludik
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 — Frase editorial */}
        <section className="bg-ink py-28 text-center sm:py-36">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <p className="text-balance font-display text-3xl font-extrabold uppercase leading-[1.25] text-white sm:text-5xl sm:leading-[1.2]">
                El metal siempre fue el oficio.
                <span className="mt-2 block text-orange">
                  Metaludik fue la forma de hacerlo nuestro.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 — Metal + Lúdico */}
        <MetalLudico />

        {/* 05 — Cifras */}
        <section className="border-t border-line py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 sm:grid-cols-3">
              {stats.slice(0, 3).map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <p className="font-display text-7xl font-extrabold leading-none text-ink sm:text-8xl">
                    <Counter value={Number(s.value)} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-medium uppercase text-steel-mid">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — Galería del taller */}
        <section className="border-t border-line bg-paper-dim py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="max-w-lg text-balance font-display text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl">
                Esto es Metaludik.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <RevealMask className="col-span-2 aspect-[16/9] sm:col-span-2">
                <ImagePlaceholder index={1} label="Samik trabajando con CNC" />
              </RevealMask>
              <RevealMask className="aspect-square" delay={0.05}>
                <ImagePlaceholder index={2} label="Soldadura, chispas" />
              </RevealMask>
              <RevealMask className="aspect-square" delay={0.1}>
                <ImagePlaceholder index={3} label="Manos trabajando el metal" />
              </RevealMask>

              <RevealMask className="aspect-[4/5]" delay={0.05}>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/proyectos/liceo-bicentenario.jpg"
                    alt="Detalle de corte plasma CNC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
                    <p className="text-xs text-white/80">Acá empieza casi todo.</p>
                  </div>
                </div>
              </RevealMask>
              <RevealMask className="col-span-2 aspect-[16/9] sm:col-span-2" delay={0.1}>
                <ImagePlaceholder index={4} label="Equipo trabajando" />
              </RevealMask>
              <RevealMask className="aspect-[4/5]" delay={0.15}>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/proyectos/pieza-hexagonal.jpg"
                    alt="Proyecto durante fabricación"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
                    <p className="text-xs text-white/80">La parte que más disfrutamos.</p>
                  </div>
                </div>
              </RevealMask>
            </div>
          </div>
        </section>

        {/* 08 — Cómo trabajamos contigo */}
        <section className="border-t border-line py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="max-w-xl text-balance font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Tu idea puede empezar con algo muy simple.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70">
                Una foto. Un dibujo. Una medida. Una referencia. Incluso algo
                que todavía no sabes cómo fabricar.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "La conversamos",
                  d: "Entendemos qué quieres construir, dónde se utilizará y qué necesitas resolver.",
                },
                {
                  n: "02",
                  t: "La resolvemos",
                  d: "Definimos materiales, dimensiones y la mejor forma de fabricarla.",
                },
                {
                  n: "03",
                  t: "La construimos",
                  d: "Cortamos, soldamos, terminamos y, cuando corresponde, instalamos.",
                },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1}>
                  <span className="font-display text-sm font-bold text-orange">{step.n}</span>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase text-ink">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.d}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="mt-20 text-balance border-t border-line pt-14 text-center font-display text-3xl font-extrabold uppercase leading-[1.15] text-ink sm:text-4xl">
                Tú traes la idea.
                <span className="mt-2 block text-orange">
                  Nosotros vemos cómo hacerla realidad.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 09 — Humanizar el equipo */}
        <section className="border-t border-line bg-paper-dim py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <span className="text-sm font-semibold text-orange">El equipo</span>
              <h2 className="mt-3 max-w-lg text-balance font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
                Dos personas, un taller.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal>
                <div className="aspect-[4/5] w-full">
                  <ImagePlaceholder index={1} label="Samik Garrido — Fundador" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="aspect-[4/5] w-full">
                  <ImagePlaceholder index={2} label="Parte del equipo Metaludik" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 10 — Frase de Samik */}
        <section className="py-24 text-center sm:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <p className="text-balance font-display text-2xl font-semibold italic leading-snug text-ink sm:text-3xl">
                &ldquo;Acá las ideas se conversan, se dibujan, se cortan, se
                sueldan y terminan convirtiéndose en algo real.&rdquo;
              </p>
              <cite className="mt-4 block text-sm font-medium not-italic text-steel-mid">
                — Samik Garrido
              </cite>
            </Reveal>
          </div>
        </section>

        {/* 11 — Cierre WOW + CTA */}
        <section className="relative flex h-[70vh] min-h-[480px] items-center overflow-hidden bg-ink text-center">
          <Image
            src="/images/proyectos/brasero-corraleros.jpg"
            alt="Metaludik"
            fill
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />
          <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                ¿Tienes algo dando vueltas en la cabeza?
              </h2>
              <p className="mt-5 text-balance text-white/70">
                No necesitas llegar con un plano perfecto. Cuéntanos la idea.
                Nosotros vemos cómo construirla.
              </p>
              <Link
                href="/cotizar"
                className="mt-8 inline-flex items-center gap-2 bg-orange px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                Conversemos tu proyecto →
              </Link>
              <p className="mt-6 text-xs text-white/45">
                {brand.city} · {brand.region}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
