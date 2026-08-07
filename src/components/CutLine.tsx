"use client";

import { useEffect, useRef, useState } from "react";

export default function CutLine({
  className = "",
  color = "var(--color-orange)",
}: {
  className?: string;
  color?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <polyline
        points="0,12 340,12 372,3 404,21 440,12 1200,12"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          transition: "stroke-dashoffset 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      />
    </svg>
  );
}
