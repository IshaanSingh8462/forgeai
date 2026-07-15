"use client";

import { motion } from "framer-motion";

const tiers = [
  { name: "Platinum", size: "text-3xl md:text-4xl", sponsors: ["Nimbus AI", "Halcyon Labs"] },
  { name: "Gold", size: "text-2xl md:text-3xl", sponsors: ["Ferrite Cloud", "Vantage Systems", "Kestrel"] },
  { name: "Silver", size: "text-lg md:text-xl", sponsors: ["Arbor", "Loom", "Cinder", "Basalt"] },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Backed by</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Sponsors & partners.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
              className="text-center"
            >
              <span className="eyebrow text-mist">{tier.name}</span>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mt-6">
                {tier.sponsors.map((sponsor) => (
                  <span
                    key={sponsor}
                    className={`font-display font-semibold text-white/70 hover:text-white transition-colors ${tier.size}`}
                  >
                    {sponsor}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl glass p-10 text-center"
        >
          <h3 className="font-display text-h3 font-semibold">
            Want in front of 500 builders?
          </h3>
          <p className="text-mist mt-3 max-w-xl mx-auto">
            Sponsor ForgeAI and get direct access to the next generation of
            AI engineers, before anyone else does.
          </p>
          <a
            href="mailto:hello@forgeai.dev"
            className="inline-block mt-6 rounded-full bg-gradient-to-r from-ember to-gold px-7 py-3 font-semibold text-void shadow-ember hover:shadow-[0_0_50px_rgba(255,107,0,0.5)] transition-shadow"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
