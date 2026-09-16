"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

/**
 * person = {
 *   name: string,
 *   title: string,        // job / role, shown under the name
 *   image: string,         // path under /public, e.g. "/judges/jane-doe.jpg"
 *   bio: string,           // shown on hover
 *   linkedin: string,      // full LinkedIn URL, optional
 * }
 */
export default function PersonCard({ person }) {
  const [hovered, setHovered] = useState(false);
  const { name, title, image, bio, linkedin } = person;

  return (
    <motion.div
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        // don't collapse if focus moved to something still inside the card (e.g. the LinkedIn link)
        if (!e.currentTarget.contains(e.relatedTarget)) setHovered(false);
      }}
      onClick={() => setHovered((h) => !h)}
      tabIndex={0}
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
      className="glass rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer outline-none focus-visible:border-flare/60"
    >
      <motion.div
        layout="position"
        className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden border border-white/10 bg-white/5"
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-mist text-xl font-display">
            {name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </motion.div>

      <motion.h3 layout="position" className="font-display font-semibold mt-4">
        {name}
      </motion.h3>
      <motion.span layout="position" className="text-xs text-mist mt-1">
        {title}
      </motion.span>

      <AnimatePresence initial={false}>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <div className="pt-5 mt-5 border-t border-white/10 flex flex-col items-center gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-mist hover:text-flare hover:border-flare/50 transition-colors"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
              {bio && (
                <p className="text-sm text-mist leading-relaxed">{bio}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
