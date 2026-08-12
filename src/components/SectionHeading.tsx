import { Reveal } from "@/components/Reveal";

export default function SectionHeading({
  number,
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  number: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className={`font-display text-sm font-bold ${dark ? "text-white/50" : "text-steel-mid"}`}>
          {number}
        </span>
        {eyebrow && (
          <span className="inline-flex items-center bg-orange px-3.5 py-1.5 text-sm font-bold text-ink">
            {eyebrow}
          </span>
        )}
      </div>
      <h2
        className={`mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 text-[15px] leading-relaxed ${
            dark ? "text-white/60" : "text-ink/70"
          } ${align === "center" ? "mx-auto max-w-xl" : ""}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
