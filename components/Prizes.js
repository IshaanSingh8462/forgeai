"use client";

import { motion } from "framer-motion";

const trackPrizes = [
  { track: "AI for Healthcare", amount: "$2,000" },
  { track: "AI for Education", amount: "$2,000" },
  { track: "AI for Climate", amount: "$2,000" },
  { track: "AI for Civic Impact", amount: "$2,000" },
  { track: "AI Dev Tools", amount: "$2,000" },
  { track: "AI x Creativity", amount: "$2,000" },
];

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">$17,000 in prizes</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Something to show for it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl rounded-3xl glass p-10 md:p-14 text-center mb-14 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ember/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-6xl block mb-4">🏆</span>
          <span className="eyebrow">Best Overall</span>
          <p className="font-display text-5xl md:text-6xl font-bold text-gradient mt-3">
            $5,000
          </p>
          <p className="text-mist mt-4 max-w-md mx-auto">
            Awarded to the team whose project best embodies real-world
            impact, technical depth, and craft.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trackPrizes.map((prize, i) => (
            <motion.div
              key={prize.track}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl glass p-6 hover:shadow-ember transition-shadow"
            >
              <span className="font-display text-3xl font-bold text-gold">
                {prize.amount}
              </span>
              <p className="text-sm text-mist mt-2">{prize.track} winner</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
