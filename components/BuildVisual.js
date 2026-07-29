"use client";

import { motion } from "framer-motion";

const lines = [
  { width: "70%" },
  { width: "45%" },
  { width: "85%" },
  { width: "55%" },
];

export default function BuildVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute w-4/5 rounded-2xl glass p-5 shadow-ember/30"
        style={{ transform: "rotate(-4deg)" }}
      >
        <div className="flex gap-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            whileInView={{ width: line.width }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            className="h-2.5 rounded-full bg-gradient-to-r from-ember/70 to-gold/40 mb-3"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 3 }}
        whileInView={{ opacity: 1, y: -30, rotate: 3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute w-3/5 rounded-2xl glass p-4 flex items-center gap-3"
        style={{ transform: "translateY(-90px) rotate(4deg)" }}
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-flare shadow-flare shrink-0"
        />
        <span className="text-xs text-mist tracking-wide">building...</span>
      </motion.div>
    </div>
  );
}