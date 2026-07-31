"use client";

import { motion } from "framer-motion";

const tracks = [
  { name: "AI + Healthcare", blurb: "Tools that improve care, access, or wellbeing." },
  { name: "AI + Education", blurb: "Reimagining how people learn and teach." },
  { name: "AI + Climate", blurb: "Tackling sustainability and environmental challenges." },
  { name: "AI + Business", blurb: "Automating workflows and driving smarter decisions." },
  { name: "AI + Cybersecurity", blurb: "Protecting digital systems, privacy, and infrastructure." },
  { name: "AI + Creativity", blurb: "Pushing the boundaries of art, media, and expression." },
];

function LockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="lockBody2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
      <path d="M20 28 V22 A12 12 0 0 1 44 22 V28" stroke="#FFB800" strokeWidth="5" strokeLinecap="round" fill="none" />
      <rect x="14" y="28" width="36" height="26" rx="7" fill="url(#lockBody2)" stroke="#FF6B00" strokeWidth="1.5" />
      <circle cx="32" cy="38.5" r="3.2" fill="#0C0A08" />
      <rect x="30.2" y="40" width="3.6" height="7" rx="1.4" fill="#0C0A08" />
    </svg>
  );
}

function TrackCard({ track, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="rounded-2xl glass p-7 flex flex-col gap-3"
    >
      <h3 className="font-display text-lg font-semibold">{track.name}</h3>
      <p className="text-sm text-mist leading-relaxed">{track.blurb}</p>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 w-fit">
        <LockIcon />
        <span className="text-[0.65rem] tracking-[0.15em] uppercase text-mist">
          Prompt locked
        </span>
      </div>
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
          className="text-center mb-6"
        >
          <span className="eyebrow">Six Tracks</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Build within the theme.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-mist text-center max-w-xl mx-auto mb-16 text-sm"
        >
          Each track's actual prompt drops on Day 1 — you'll be solving a
          specific problem, not building anything you want. Come with skills
          and an open mind, not a finished idea.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <TrackCard key={track.name} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}