"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MetalLudico() {
  const reduce = useReducedMotion();
  const ease = [0.65, 0, 0.35, 1] as const;

  return (
    <section className="border-t border-line bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-6">
          <motion.span
            initial={reduce ? undefined : { opacity: 0, x: -24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-5xl font-extrabold uppercase text-ink sm:text-7xl"
          >
            Metal
          </motion.span>
          <motion.span
            initial={reduce ? undefined : { opacity: 0, scale: 0.5 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="font-display text-4xl font-extrabold text-orange sm:text-6xl"
          >
            +
          </motion.span>
          <motion.span
            initial={reduce ? undefined : { opacity: 0, x: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="font-display text-5xl font-extrabold uppercase text-ink sm:text-7xl"
          >
            Lúdico
          </motion.span>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="mt-4 flex justify-center"
        >
          <span aria-hidden className="text-2xl text-steel-mid">↓</span>
        </motion.div>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="mt-4 text-center font-display text-6xl font-extrabold uppercase text-orange sm:text-8xl"
        >
          Metaludik
        </motion.p>

        <div className="mx-auto mt-16 max-w-2xl space-y-4 text-center text-[15px] leading-relaxed text-ink/70">
          <p>
            Al principio el taller se llamaba &ldquo;Metalmecánica&rdquo;.
            Funcionaba, pero el nombre nos encerraba en algo demasiado
            tradicional.
          </p>
          <p>
            Queríamos poder trabajar con industrias y empresas, pero también
            con personas que llegan con una idea, un dibujo, una referencia o
            algo que nunca se ha fabricado.
          </p>
          <p>
            Queríamos que la marca también tuviera algo de nuestra
            personalidad: creatividad, cercanía y ganas de experimentar.
          </p>
        </div>
      </div>
    </section>
  );
}
