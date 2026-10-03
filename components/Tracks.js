"use client";

import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// TRACKS — one object per track. Replace each `prompt` with the
// real prompt text when you're ready; the card layout adapts to
// any length.
// ─────────────────────────────────────────────────────────────
const tracks = [
  {
    name: "AI + Healthcare",
    blurb: "Tools that improve care, access, or wellbeing.",
    prompt:
      "Build an AI-powered solution that makes healthcare information and interactions clearer, more accessible, or easier to act on.",
  },
  {
    name: "AI + Education",
    blurb: "Reimagining how people learn and teach.",
    prompt:
      "Build an AI-powered solution that helps learners move beyond memorization to understand concepts, make connections, and apply what they learn.",
  },
  {
    name: "AI + Climate",
    blurb: "Tackling sustainability and environmental challenges.",
    prompt:
      "Build an AI-powered solution that helps people understand environmental changes, prepare for climate impacts, use resources wisely, or create resilient systems.",
  },
  {
    name: "AI + Business",
    blurb: "Automating workflows and driving smarter decisions.",
    prompt:
      "Build an AI-powered solution that turns business data into clear insights, predictions, or recommendations that help people make better decisions.",
  },
  {
    name: "AI + Cybersecurity",
    blurb: "Protecting digital systems, privacy, and infrastructure.",
    prompt:
      "Build an AI-powered solution that helps people recognize, prevent, verify, or respond to scams, impersonation, and fraud enabled by AI or modern technologies.",
  },
  {
    name: "AI + Creativity",
    blurb: "Pushing the boundaries of art, media, and expression.",
    prompt:
      "Build an AI-powered experience that introduces a new way for people to create, collaborate, express ideas, or experience art and media.",
  },
];

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

      <div className="mt-3 pt-5 border-t border-white/10">
        <span className="eyebrow">Prompt</span>
        <p className="text-sm text-white/85 leading-relaxed mt-2">
          {track.prompt}
        </p>
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
          Each track comes with a prompt to guide your project. Pick the track
          that fits your skills and use its prompt as your starting point.
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