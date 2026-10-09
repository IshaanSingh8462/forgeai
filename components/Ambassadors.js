"use client";

import { motion } from "framer-motion";

const ambassadors = [
  "Adam de Leeuw",
  "Arya Sanga",
  "Carter Wood",
  "Fatima AlNetaif",
  "Milan Štěrba",
  "Saharsh Losetty",
];

export default function Ambassadors() {
  return (
    <section
      id="ambassadors"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2
        h-[500px] w-[700px] rounded-full bg-ember/10
        blur-[170px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Ambassadors</span>

          <h2 className="font-display text-h2 font-bold mt-3">
            Meet our ambassadors.
          </h2>

          <p className="text-mist mt-5 max-w-xl mx-auto
            text-sm leading-relaxed"
          >
            Our ambassadors are the heart of ForgeHacks,
            bringing together passionate builders, creative
            minds, and future innovators. They're here to
            spread the word, grow our community, and inspire
            the next generation of hackers.
          </p>
        </motion.div>

        {/* Ambassador name cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ambassadors.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 6) * 0.06,
              }}
              className="group"
            >
              <div
                className="flex items-center justify-center
                  min-h-[100px] px-6 py-6 rounded-2xl
                  border border-white/10 bg-white/[0.03]
                  transition-all duration-300
                  hover:border-ember/50 hover:bg-ember/[0.06]"
              >
                <h3
                  className="font-display text-lg sm:text-xl
                    font-semibold text-center text-white
                    transition-colors duration-300
                    group-hover:text-ember"
                >
                  {name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}