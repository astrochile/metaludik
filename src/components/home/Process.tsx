import { process_steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
          Cómo trabajamos
        </span>
        <h2 className="mt-3 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] text-ink sm:text-5xl">
          De la idea al proyecto instalado
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
          &ldquo;Todo el trabajo completo, desde la idea hasta el trabajo en
          terreno&rdquo; — así describe Samik el proceso. Esto es lo que eso
          significa en la práctica:
        </p>
      </div>

      <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {process_steps.map((step, i) => (
          <li key={step.title} className="relative border-t-2 border-ink pt-5">
            <span className="font-mono text-sm text-orange">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold uppercase text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
