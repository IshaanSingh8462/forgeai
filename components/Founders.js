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
    image: "/IshaanSingh-PortfolioProfilePicture.png",
    bio: "Ishaan Singh is a high school student and developer passionate about AI, software, computer science, and entrepreneurship. He has experience building web applications and AI-powered tools, competing in programming and data science competitions, and founding and leading student technology initiatives. He enjoys exploring new technologies, turning ideas into working products, and creating opportunities for other students to build and learn.",
    linkedin: "https://www.linkedin.com/in/ishaan-singh8809/",
  },
  {
    name: "Sushant Punuru",
    title: "Co-Founder - ForgeHacks",
    image: "/SushantPunuru.png",
    bio: "Sushanth Punuru is a high school student and developer passionate about AI, cybersecurity, software, and computer hardware. He has experience building web platforms and apps, engineering hardware systems, and founding and leading student organizations. He enjoys creating tools that help other students learn and bringing people together to solve real problems.",
    linkedin: "https://www.linkedin.com/in/sushanth-punuru/",
  },
    {
    name: "Aarav Narayan",
    title: "Co-Founder - ForgeHacks",
    image: "/AaravNarayan.png",
    bio: "Aarav Narayan is a high school student and developer passionate about computer engineering, robotics, AI, and mathematics. He has experience conducting research at Georgia Tech, programming for FIRST Robotics, and developing machine learning projects. He enjoys building creative solutions to challenging problems and applying technology to make a real-world impact.",
    linkedin: "https://www.linkedin.com/in/aarav-narayan-725745325/",
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

        <div className="grid grid-cols-3 md:grid-cols-1 gap-8 items-start">
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
