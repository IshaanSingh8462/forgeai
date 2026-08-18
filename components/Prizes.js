"use client";

import { motion } from "framer-motion";

function StarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.98 6.04 6.67.97-4.83 4.7 1.14 6.64L12 17.77l-5.96 3.08 1.14-6.64-4.83-4.7 6.67-.97L12 2.5z" />
    </svg>
  );
}

const podium = [
  {
    place: "2nd Place",
    winners: "1 winner",
    amount: "$50",
    extras: [],
    border: "border-white/15",
    glow: "",
    lift: "md:mt-8",
    amountClass: "text-white",
  },
  {
    place: "1st Place",
    winners: "1 winner",
    amount: "$100",
    extras: ["+ $300 Featherless Credits"],
    border: "border-gold/50",
    glow: "shadow-ember",
    lift: "",
    amountClass: "text-gradient",
    featured: true,
  },
  {
    place: "3rd Place",
    winners: "1 winner",
    amount: "$25",
    extras: [],
    border: "border-[#c68a4e]/40",
    glow: "",
    lift: "md:mt-8",
    amountClass: "text-[#e3a969]",
  },
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
          className="text-center mb-6"
        >
          <span className="eyebrow">Prizes</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            What you'll walk away with.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-mist text-center max-w-xl mx-auto mb-16 text-sm"
        >
          Top overall placements take home real cash and credits. Every track
          winner earns a certificate, with more track rewards still being
          finalized.
        </motion.p>

        {/* Podium: Top 3 */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 items-end mb-8">
          {podium.map((p, i) => (
            <motion.div
              key={p.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className={`relative rounded-3xl glass border ${p.border} ${p.glow} ${p.lift} p-8 md:p-10 text-center flex flex-col items-center gap-3`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-ember to-gold px-4 py-1 text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-void">
                  Grand Prize
                </span>
              )}

              <StarIcon className="h-6 w-6 text-gold" />

              <span className="font-display text-xl font-bold mt-1">
                {p.place}
              </span>
              <span className="text-xs tracking-widest uppercase text-mist">
                {p.winners}
              </span>

              <span
                className={`font-display font-bold mt-2 ${
                  p.featured ? "text-5xl md:text-6xl" : "text-4xl"
                } ${p.amountClass}`}
              >
                {p.amount}
              </span>

              {p.extras.map((extra) => (
                <span key={extra} className="text-sm text-mist">
                  {extra}
                </span>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl glass p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ember/10 border border-ember/30 shrink-0">
              <StarIcon className="h-5 w-5 text-gold" />
            </div>
            <div>
              <span className="font-display text-xl font-bold block">
                Track Prizes
              </span>
              <span className="text-xs tracking-widest uppercase text-mist">
                6 winners &middot; one per track
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="font-display text-2xl font-bold text-gold">
              Certificates
            </span>
            <span className="text-sm text-mist">More rewards TBD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}