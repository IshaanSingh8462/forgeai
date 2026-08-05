"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-52 md:w-64"
        >
          <a href="https://featherless.ai/" target="_blank" rel="noopener">
            <img
              src="/featherless.png"
              alt="Sponsor logo"
              className="w-full h-auto object-contain"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl glass p-10 md:p-14 text-center"
        >
          <h3 className="font-display text-h3 font-semibold">
            Partners & Sponsors: Join Early
          </h3>
          <p className="text-mist mt-3 max-w-md mx-auto">
            We're opening up sponsorship for this event soon. Gain early
          access to innovative AI projects, connect with top student talent, and showcase your brand to hundreds of ambitious builders.
          </p>
          <a
            href="https://forms.gle/AaMs5xeqW7qcQdG4A"
            className="inline-block mt-6 rounded-full bg-gradient-to-r from-ember to-gold px-7 py-3 font-semibold text-void shadow-ember hover:shadow-[0_0_50px_rgba(255,107,0,0.5)] transition-shadow"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}