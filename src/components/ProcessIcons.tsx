type IconProps = { className?: string };

const stroke = "currentColor";

/** 01 — Conversación + boceto */
export function IconBrief({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 14h32a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H24l-9 8v-8h-5a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M17 24h20M17 31h13" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M45 34l9-9 4 4-9 9-5 1 1-5Z"
        stroke="var(--color-orange)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 02 — Plano técnico / nodos de diseño */
export function IconDesign({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="10" y="10" width="36" height="36" rx="1" stroke={stroke} strokeWidth="2" />
      <path d="M10 22h36M22 10v36" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="22" cy="22" r="2.4" fill={stroke} />
      <circle cx="38" cy="34" r="2.4" fill={stroke} />
      <path d="M22 22l16 12" stroke={stroke} strokeWidth="2" />
      <path
        d="M38 34l10 10M48 44v-6M48 44h-6"
        stroke="var(--color-orange)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 03 — Cabezal CNC / plasma generando chispa */
export function IconCut({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M24 8h16v14h-6l-2 6h-4l-2-6h-2V8Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="32" cy="15" r="2" fill={stroke} />
      <path d="M8 48h48" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M32 28l-3 12M32 28l7 9M32 28l-9 7M32 28l11 3M32 28l-11-3M32 28l9-7"
        stroke="var(--color-orange)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 04 — Pieza terminada / instalación */
export function IconInstall({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 40V22l16-8 16 8v18l-16 8-16-8Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 22l16 8 16-8M32 30v18" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M25 40l5 5 10-11"
        stroke="var(--color-orange)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
