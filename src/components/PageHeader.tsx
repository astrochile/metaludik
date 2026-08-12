import { Reveal } from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-dim py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center bg-orange px-3.5 py-1.5 text-sm font-bold text-ink">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/70">
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
