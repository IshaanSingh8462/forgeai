"use client";

import { motion } from "framer-motion";
import NeuralField from "./NeuralField";

const paragraphs = [
  "This is the first edition of ForgeAI, created for one reason: to give innovative students a space to invent, collaborate, and grow without limits.",
  "We're going beyond basic coding and going towards Artificial Intelligence. Whether you’re experimenting with generative AI, building autonomous agents, creating intelligent tools, or exploring entirely new ideas, we want to see what you can create when given time and support.",
  "You’ll get 10 days to build, along with mentor meetings, hands-on workshops for all levels, and prizes celebrating the most innovative projects.",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Why ForgeAI
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-h2 font-bold mt-3 mb-8"
          >
            Where students forge
            <br /> the future with AI.
          </motion.h2>

          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="text-mist leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square rounded-3xl glass overflow-hidden"
        >
          <NeuralField className="absolute inset-0 w-full h-full" nodeCount={18} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl animate-float">✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
