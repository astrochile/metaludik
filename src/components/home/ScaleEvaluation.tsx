import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function ScaleEvaluation() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden border border-line bg-paper-dim p-8 sm:p-12">
          <div className="absolute inset-y-0 left-0 w-[3px] bg-orange" aria-hidden />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="text-sm font-semibold text-orange">
                Proyectos de mayor escala
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                ¿Tienes un proyecto estructural o industrial?
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                Metaludik cuenta con la experiencia técnica, el equipamiento y
                colaboradores necesarios para evaluar proyectos de estructuras
                metálicas de distinta escala. Evaluamos proyectos estructurales,
                comerciales e industriales según sus requerimientos técnicos.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange"
              >
                Conversemos tu proyecto
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
