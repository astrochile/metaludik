"use client";

import { useEffect, useRef, useState } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const lastPos = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(hasFinePointer);
    if (!hasFinePointer) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.hypot(dx, dy);
      lastPos.current = { x: e.clientX, y: e.clientY };

      // genera chispas proporcional a la velocidad del cursor, como en un corte plasma
      const count = speed > 4 ? Math.min(3, Math.floor(speed / 14) + 1) : 0;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const force = 0.6 + Math.random() * 2.2;
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * force - dx * 0.05,
          vy: Math.sin(angle) * force - dy * 0.05,
          life: 0,
          maxLife: 22 + Math.random() * 16,
          size: 1 + Math.random() * 1.6,
        });
      }
      if (sparksRef.current.length > 140) {
        sparksRef.current.splice(0, sparksRef.current.length - 140);
      }
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target && target.getAttribute("data-cursor")) {
        setBig(true);
        setLabel(target.getAttribute("data-cursor"));
      } else if (target) {
        setBig(true);
        setLabel(null);
      } else if ((e.target as HTMLElement)?.closest("a, button, [role='button'], input, select, textarea, summary")) {
        setBig(true);
        setLabel(null);
      } else {
        setBig(false);
        setLabel(null);
      }
    };

    let raf = 0;
    const tick = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const sparks = sparksRef.current;
        for (let i = sparks.length - 1; i >= 0; i--) {
          const s = sparks[i];
          s.life++;
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 0.05; // leve gravedad
          s.vx *= 0.96;
          if (s.life >= s.maxLife) {
            sparks.splice(i, 1);
            continue;
          }
          const t = s.life / s.maxLife;
          const alpha = 1 - t;
          const hue = t < 0.4 ? "255,255,255" : "238,115,26";
          ctx.beginPath();
          ctx.fillStyle = `rgba(${hue},${alpha})`;
          ctx.arc(s.x, s.y, s.size * (1 - t * 0.5), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const size = label ? 64 : big ? 22 : 10;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
        aria-hidden="true"
      />
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
          boxShadow: label ? "0 0 0 1px rgba(10,10,10,0.08)" : "0 0 10px 2px rgba(238,115,26,0.55)",
        }}
      >
        {label && (
          <span className="font-sans text-[11px] font-semibold uppercase text-ink">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
