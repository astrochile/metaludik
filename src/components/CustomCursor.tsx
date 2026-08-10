"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        setBig(true);
        setLabel(target.getAttribute("data-cursor") || null);
      } else if ((e.target as HTMLElement)?.closest("a, button, [role='button'], input, select, textarea, summary")) {
        setBig(true);
        setLabel(null);
      } else {
        setBig(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  const size = label ? 64 : big ? 22 : 10;

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: label ? "#F5F5F3" : "var(--color-orange)",
        mixBlendMode: label ? "normal" : "difference",
        boxShadow: label ? "0 0 0 1px rgba(10,10,10,0.08)" : "none",
      }}
    >
      {label && (
        <span className="font-sans text-[11px] font-semibold uppercase text-ink">
          {label}
        </span>
      )}
    </div>
  );
}
