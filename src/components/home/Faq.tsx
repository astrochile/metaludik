import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section className="border-t border-line bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center bg-orange px-3.5 py-1.5 text-sm font-bold text-ink">Preguntas frecuentes</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl">
            Antes de escribirnos
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.03} y={10}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink marker:content-none">
                  {item.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-xl text-orange transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
