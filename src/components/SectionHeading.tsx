import { Reveal } from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

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
      <Eyebrow
        number={number}
        label={eyebrow ?? ""}
        dark={dark}
        className={align === "center" ? "justify-center" : ""}
      />
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
