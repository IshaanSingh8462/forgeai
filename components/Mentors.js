"use client";

import { motion } from "framer-motion";

export default function Mentors() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Mentors & Community</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            People who'll get unstuck with you.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl glass p-10 md:p-14 text-center"
        >
          <span className="text-5xl block mb-4">🧑‍🏫</span>
          <h3 className="font-display text-h3 font-semibold">
            None at the moment.
          </h3>
          <p className="text-mist mt-3 max-w-md mx-auto">
            We're building our mentor bench for this event. If you're an
            engineer, researcher, or founder who wants to help builders
            level up over a weekend, we'd love to have you.
          </p>
          <a
            href="mailto:hello@forgeai.dev?subject=Mentor%20Application"
            className="inline-block mt-6 rounded-full bg-gradient-to-r from-ember to-gold px-7 py-3 font-semibold text-void shadow-ember hover:shadow-[0_0_50px_rgba(255,107,0,0.5)] transition-shadow"
          >
            Become a Mentor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
