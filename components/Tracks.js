"use client";

import { motion } from "framer-motion";

const lockedTracks = [
  "Track 01",
  "Track 02",
  "Track 03",
  "Track 04",
  "Track 05",
  "Track 06",
];

const lockVariants = {
  rest: { y: 0, rotateX: 0, scale: 1 },
  hover: {
    y: -10,
    rotateX: 14,
    scale: 1.06,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const shackleVariants = {
  rest: { y: 0 },
  hover: {
    y: -7,
    transition: { type: "spring", stiffness: 320, damping: 14 },
  },
};

const glowVariants = {
  rest: { opacity: 0, scale: 0.7 },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function LockIcon() {
  return (
    <motion.div
      variants={lockVariants}
      style={{ transformPerspective: 700 }}
      className="relative"
    >
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="lockBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>
        </defs>

        <motion.path
          d="M20 28 V22 A12 12 0 0 1 44 22 V28"
          stroke="#FFB800"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          variants={shackleVariants}
        />

        <rect
          x="14"
          y="28"
          width="36"
          height="26"
          rx="7"
          fill="url(#lockBody)"
          stroke="#FF6B00"
          strokeWidth="1.5"
        />

        <circle cx="32" cy="38.5" r="3.2" fill="#0C0A08" />
        <rect x="30.2" y="40" width="3.6" height="7" rx="1.4" fill="#0C0A08" />
      </svg>
    </motion.div>
  );
}

function LockedCard({ label, index }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative h-64 rounded-3xl glass p-8 flex flex-col items-center justify-center overflow-hidden [perspective:800px]"
    >
      <motion.div
        variants={glowVariants}
        className="absolute h-36 w-36 rounded-full bg-ember/50 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <LockIcon />
        <span className="mt-6 text-xs tracking-[0.2em] uppercase text-mist">
          {label}
        </span>
        <span className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase text-mist/50">
          Locked
        </span>
      </motion.div>
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
          <p className="text-mist mt-4 max-w-xl mx-auto">
            Track details are still under wraps — check back soon.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lockedTracks.map((label, i) => (
            <LockedCard key={label} label={label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}