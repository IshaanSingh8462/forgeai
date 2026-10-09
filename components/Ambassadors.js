"use client";

import { motion } from "framer-motion";
import PersonCard from "./PersonCard";

const ambassadors = [
  {
    name: "Adam de Leeuw",
    title: "",
    image: "",
    bio: "",
    linkedin: "",
  },
  {
    name: "Arya Sanga",
    title: "",
    image: "",
    bio: "",
    linkedin: "",
  },
    {
    name: "Carter Wood",
    title: "",
    image: "",
    bio: "",
    linkedin: "",
  },
    {
    name: "Fatima AlNetaif",
    title: "",
    image: "",
    bio: "",
    linkedin: "",
  },
    {
    name: "Milan Štěrba",
    title: "",
    image: "",
    bio: "",
    linkedin: "",
  },
    {
    name: "Saharsh Losetty",
    title: "",
    image: "",
    bio: "",
    linkedin: "",
  },
];

export default function Ambassadors() {
  return (
    <section id="ambassadors" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-ember/10 blur-[170px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
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
          <p className="text-mist mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Our ambassadors are the heart of ForgeHacks, bringing together passionate builders, 
            creative minds, and future innovators. They're here to spread the word, grow our 
            community, and inspire the next generation of hackers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ambassadors.map((ambassador, i) => (
            <motion.div
              key={ambassador.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            >
              <PersonCard person={ambassador} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
