"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Builders" },
  { value: 20, suffix: "+", label: "Mentors" },
  { value: 7, suffix: "", label: "days" },
  { value: 6, suffix: "", label: "Tracks" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.8 + value / 500,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span
      ref={ref}
      className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-gradient tabular-nums"
    >
      0
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Expected Scale</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            aria-hidden="true"
          >
            <motion.line
              x1="12.5%"
              x2="87.5%"
              y1="50%"
              y2="50%"
              stroke="#FF9D4D"
              strokeOpacity="0.25"
              strokeDasharray="2 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 rounded-full h-2.5 w-2.5 bg-flare shadow-flare mb-5 hidden md:block" />
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="mt-2 text-sm tracking-widest uppercase text-mist">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
