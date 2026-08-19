"use client";

import { motion } from "framer-motion";

const rewards = [
  { title: "Certificates", desc: "Every team that submits a project earns one." },
  { title: "ForgeHacks Spotlight", desc: "Standout projects get featured on our site and socials." },
  { title: "Mentorship", desc: "Top teams get continued access to our mentor network." },
  { title: "Audience Favorite", desc: "Voted on live by fellow hackers at the showcase." },
];

function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.5 9H21.5L15.5 13.5L18 20.5L12 16L6 20.5L8.5 13.5L2.5 9H9.5L12 2Z"
        fill="url(#starGrad)"
        stroke="#FFB800"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FeatherlessPerk() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto max-w-2xl rounded-3xl glass p-10 md:p-14 text-center mb-8 overflow-hidden group border border-ember/20"
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-ember/15 blur-[100px]" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 bg-gradient-to-br from-ember/15 to-gold/15 border border-gold/30"
        >
          <StarIcon />
        </motion.div>

        <span className="eyebrow">Sponsored perk · Featherless.ai</span>

        <p className="font-display text-5xl md:text-6xl font-bold text-gradient mt-4">
          $25 in free credits.
        </p>

        <p className="text-mist mt-4 max-w-md mx-auto text-sm md:text-base">
          Every registered participant gets{" "}
          <span className="text-white font-semibold">$25 of free API credits</span>{" "}
          from Featherless.ai — enough to run open-weight LLMs for your project
          without spending a dime.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold bg-gold/10 border border-gold/25 text-gold">
          No credit card required · Delivered after registration
        </div>
      </div>
    </motion.div>
  );
}

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
          <span className="eyebrow">Prizes</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            What you'll walk away with.
          </h2>
        </motion.div>

        <FeatherlessPerk />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl rounded-3xl glass p-10 md:p-14 text-center mb-14 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ember/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="eyebrow">recognition & rewards</span>
          <p className="font-display text-4xl md:text-5xl font-bold text-gradient mt-3">
            More than a certificate.
          </p>
          <p className="text-mist mt-4 max-w-md mx-auto text-sm">
            Cash prizes are in the works for future editions. For now, here's
            what every builder walks away with.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rewards.map((reward, i) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl glass p-6 hover:shadow-ember transition-shadow text-center"
            >
              <span className="font-display text-lg font-bold text-gold block">
                {reward.title}
              </span>
              <p className="text-xs text-mist mt-2 leading-relaxed">{reward.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}