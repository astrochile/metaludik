import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section className="border-t border-line bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
          Preguntas frecuentes
        </span>
        <h2 className="mt-3 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] text-ink sm:text-5xl">
          Antes de escribirnos
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink marker:content-none">
                {item.q}
                <span
                  aria-hidden
                  className="shrink-0 font-mono text-xl text-orange transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
