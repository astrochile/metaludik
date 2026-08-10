"use client";

import { motion } from "framer-motion";

export default function PageSweep() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60] bg-orange"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
      style={{ transformOrigin: "right" }}
    />
  );
}
