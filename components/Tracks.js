"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tracks = [
  {
    icon: "🩺",
    name: "AI for Healthcare",
    blurb: "Diagnostics, triage, and tools that give clinicians back their time.",
    ideas: [
      "Early-warning models from wearable vitals",
      "Ambient scribes for clinical notes",
      "Radiology triage assistants",
    ],
  },
  {
    icon: "🎓",
    name: "AI for Education",
    blurb: "Personalized learning that adapts to how a student actually thinks.",
    ideas: [
      "Adaptive tutoring for underserved schools",
      "Auto-generated practice from lecture audio",
      "Accessibility tools for neurodivergent learners",
    ],
  },
  {
    icon: "🌎",
    name: "AI for Climate",
    blurb: "Models and tools for a warming, changing planet.",
    ideas: [
      "Satellite-driven deforestation alerts",
      "Crop yield prediction for smallholder farms",
      "Grid load forecasting for renewables",
    ],
  },
  {
    icon: "🏙️",
    name: "AI for Civic Impact",
    blurb: "Software for the systems that run our cities and governments.",
    ideas: [
      "Plain-language legislation summarizers",
      "Disaster response coordination tools",
      "Transit accessibility mapping",
    ],
  },
  {
    icon: "🛠️",
    name: "AI Dev Tools",
    blurb: "Infrastructure and tooling that make builders faster.",
    ideas: ["Agent debugging tools", "Eval frameworks for small teams", "Local-first inference tooling"],
  },
  {
    icon: "🎨",
    name: "AI x Creativity",
    blurb: "Where models become a creative collaborator, not a replacement.",
    ideas: [
      "Generative tools for indie musicians",
      "Co-writing tools for accessibility",
      "Procedural world-building for games",
    ],
  },
];

function TrackCard({ track, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group relative rounded-3xl glass p-8 flex flex-col"
    >
      <div className="text-4xl mb-5 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(0,245,255,0.6)]">
        {track.icon}
      </div>
      <h3 className="font-display text-h3 font-semibold mb-2">{track.name}</h3>
      <p className="text-mist text-sm leading-relaxed">{track.blurb}</p>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="mt-5 text-left text-sm font-semibold text-ember hover:text-gold transition-colors"
      >
        {expanded ? "Hide ideas" : "Explore ideas"} →
      </button>

      <motion.ul
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden mt-3 space-y-2"
      >
        {track.ideas.map((idea) => (
          <li key={idea} className="text-xs text-mist/80 pl-4 relative">
            <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-flare" />
            {idea}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Six Tracks</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Build what matters.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <TrackCard key={track.name} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
