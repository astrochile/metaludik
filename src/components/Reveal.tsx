"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealMask({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;

    const check = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewH * 0.92 && rect.bottom > 0) {
        done = true;
        setRevealed(true);
        cleanup();
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) check();
      },
      { threshold: 0.01 }
    );
    obs.observe(el);

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    // chequeo inicial por si el elemento ya está visible al montar
    check();

    function cleanup() {
      obs.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }

    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        clipPath: revealed ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
        transition: `clip-path ${duration}s cubic-bezier(0.65,0,0.35,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function Counter({
  value,
  suffix = "",
  duration = 1.1,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
    >
      <CountUp value={value} duration={duration} />
      {suffix}
    </motion.span>
  );
}

import { useEffect, useRef, useState } from "react";

function CountUp({ value, duration }: { value: number; duration: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
