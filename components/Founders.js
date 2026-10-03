"use client";

import { motion } from "framer-motion";
import PersonCard from "./PersonCard";

// ─────────────────────────────────────────────────────────────
// FOUNDERS — exactly two people, shown as larger cards.
//   image:    path under /public, e.g. "/founders/jane-doe.png"
//             (leave "" to show initials instead of a photo)
//   linkedin: full profile URL, or "" to hide the LinkedIn button
// Replace the placeholder values below with the real details.
// ─────────────────────────────────────────────────────────────
const founders = [
  {
    name: "Ishaan Singh",
    title: "Co-Founder - ForgeHacks",
    image: "/IshaanSingh-Portfolio:ProfilePicture.png",
    bio: "Ishaan Singh is a high school student, developer, and entrepreneur passionate about AI, technology, and building things that solve real-world problems. He has founded multiple projects, including Strail, a task breakdown platform, and ForgeHacks, an online AI hackathon for students. He enjoys developing software, exploring new ideas, and bringing communities together through technology.",
    linkedin: "https://www.linkedin.com/in/ishaan-singh8809/",
  },
  {
    name: "Sushant Punuru",
    title: "Co-Founder - ForgeHacks",
    image: "",
    bio: "---",
    linkedin: "",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-ember/10 blur-[170px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Founders</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Meet the founders.
          </h2>
          <p className="text-mist mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            ForgeHacks started as a student idea and became a hackathon for
            students everywhere. Hover a card to read more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <PersonCard person={founder} size="large" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
