import Image from "next/image";
import CutLine from "@/components/CutLine";
import { stats } from "@/lib/content";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
            Quiénes somos
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] text-ink sm:text-5xl">
            Metal + lúdico
            <span className="block text-orange">= Metaludik</span>
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/75">
            <p>
              Samik Garrido lleva <strong className="text-ink">15 años en el oficio de la soldadura</strong>,
              formado principalmente en el rubro minero, en procesos de extracción
              de cobre. Hace 3 años decidió abrir su propio taller y buscó un
              nombre que no lo encasillara solo en la metalmecánica tradicional:
              así nació <strong className="text-ink">Metaludik</strong> — metal, con un
              toque más lúdico, cercano y creativo.
            </p>
            <p>
              Hoy Metaludik es un equipo de dos personas que trabaja con una
              máquina de corte plasma CNC industrial y soldadura calificada,
              acompañando cada proyecto desde la idea hasta la instalación.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-orange pl-5">
            <p className="font-display text-xl italic leading-snug text-ink">
              &ldquo;Cortamos ideas y el metal cobra vida — juntos construimos
              futuro.&rdquo;
            </p>
            <cite className="mt-2 block font-mono text-xs not-italic uppercase tracking-widest text-graphite">
              Samik Garrido, fundador de Metaludik
            </cite>
          </blockquote>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/proyectos/pasamanos.jpg"
              alt="Terminación de pasamanos fabricado por Metaludik"
              fill
              className="object-cover"
            />
          </div>

          <CutLine className="my-8 h-4 w-full" />

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-ink">
                  {s.value}
                  <span className="text-orange">{s.suffix}</span>
                </dd>
                <p className="mt-1 text-xs leading-snug text-graphite">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
