"use client";

import { motion } from "framer-motion";

const mentors = [
  { name: "Dr. Amara Osei", title: "Research Scientist, Applied ML", tags: ["NLP", "Health AI"] },
  { name: "Ravi Chandrasekaran", title: "Staff Engineer, Infra", tags: ["Systems", "Scaling"] },
  { name: "Lena Kowalski", title: "Founder, DevTools Startup", tags: ["Product", "Agents"] },
  { name: "Marcus Webb", title: "Senior Data Scientist", tags: ["Computer Vision"] },
  { name: "Priya Nair", title: "ML Engineer, Climate Tech", tags: ["Climate", "Forecasting"] },
  { name: "Tomás Herrera", title: "Design Engineer", tags: ["Frontend", "UX"] },
];

export default function Mentors() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl glass p-6 hover:shadow-flare transition-shadow"
            >
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-ember/40 to-flare/40 mb-4 flex items-center justify-center font-display font-semibold">
                {mentor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h4 className="font-display font-semibold">{mentor.name}</h4>
              <p className="text-sm text-mist mt-1">{mentor.title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {mentor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] uppercase tracking-wider rounded-full border border-white/10 px-2.5 py-1 text-flare"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
