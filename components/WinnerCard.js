"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function TrophyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}

/**
 * winner = {
 *   project: string,        // project name (emphasized)
 *   members: string[],      // team member names
 *   devpost: string,        // DevPost project URL ("" hides the button)
 * }
 * label  = small eyebrow text, e.g. "1st Place Winner"
 * accent = optional { ring, glow, tone } classes (same shape as MEDAL_STYLES)
 * large  = bigger type for the 1st place card
 */
export default function WinnerCard({
  winner,
  label = "Winner",
  accent = {},
  large = false,
}) {
  const [open, setOpen] = useState(false);
  if (!winner) return null;

  const { project, members = [], devpost} = winner;
  const ring = accent.ring || "border-gold/40";
  const glow = accent.glow || "";
  const tone = accent.tone || "text-gold";

  return (
    <motion.div
      layout
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      onClick={() => setOpen((o) => !o)}
      tabIndex={0}
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
      className={`glass rounded-2xl border ${ring} ${glow} ${
        large ? "p-6 md:p-7" : "p-5"
      } text-center cursor-pointer outline-none focus-visible:border-flare/60`}
    >
      <motion.span
        layout="position"
        className={`eyebrow inline-flex items-center gap-2 ${tone}`}
      >
        <TrophyIcon />
        {label}
      </motion.span>

      <motion.h4
        layout="position"
        className={`font-display font-bold text-gradient mt-3 leading-tight ${
          large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        }`}
      >
        {project}
      </motion.h4>

      <motion.p
        layout="position"
        className="text-mist text-sm mt-2 leading-relaxed"
      >
        {members.join(" · ")}
      </motion.p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // px/pb + matching negative margins give the glow room to render
            // without being clipped by overflow-hidden, and without changing layout.
            className="overflow-hidden -mx-6 px-6 -mb-6 pb-6"
          >
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col items-center">
              {devpost && (
                <a
                  href={devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ember to-gold px-5 py-2 text-xs font-semibold text-void shadow-[0_0_16px_rgba(255,107,0,0.35)] hover:shadow-[0_0_22px_rgba(255,107,0,0.5)] hover:scale-[1.03] transition-all"
                >
                  View on DevPost <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}