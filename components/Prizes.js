"use client";

import { motion } from "framer-motion";

const rewards = [
  { title: "Certificates", desc: "Every team that submits a project earns one." },
  { title: "ForgeHacks Spotlight", desc: "Standout projects get featured on our site and socials." },
  { title: "Mentorship", desc: "Top teams get continued access to our mentor network." },
  { title: "Audience Favorite", desc: "Voted on live by fellow hackers at the showcase." },
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
          <span className="eyebrow">Prizes</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            What you'll walk away with.
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
          <span className="eyebrow">recognition & rewards</span>
          <p className="font-display text-4xl md:text-5xl font-bold text-gradient mt-3">
            More than a certificate.
          </p>
          <p className="text-mist mt-4 max-w-md mx-auto text-sm">
            Cash and credit prizes are in the works for a future edition —
            for now, here's what every builder walks away with.
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