"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "Team", href: "#team" },
  { label: "Ambassadors", href: "#ambassadors" },
  { label: "Mentors", href: "#mentors" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)] bg-void/80 backdrop-blur-xl border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-flare/20 blur-md group-hover:bg-ember/40 transition-colors" />
            <img
              src="/ForgeHacks-Cinder-Face-RBG.png"
              alt="ForgeAI logo"
              className="relative h-7 w-7 object-contain"
            />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            Forge<span className="text-ember">Hacks</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://forgehacks-2026.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*p9zpyu*_gcl_au*MTQyMTkxOTA4MS4xNzgxMDYyNDIz*_ga*Mzc3ODk4NjkuMTc4MTA2MjQyMw..*_ga_0YHJK3Y10M*czE3ODUzNTI2MjAkbzU0JGcxJHQxNzg1MzYxODM0JGoxJGwwJGgw"
            className="rounded-full bg-gradient-to-r from-ember to-gold px-5 py-2 text-sm font-semibold text-void shadow-ember hover:shadow-[0_0_55px_rgba(255,107,0,0.55)] transition-shadow"
          >
            Register Now
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 mx-6 rounded-2xl glass p-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-mist hover:text-white text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://forgehacks-2026.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*p9zpyu*_gcl_au*MTQyMTkxOTA4MS4xNzgxMDYyNDIz*_ga*Mzc3ODk4NjkuMTc4MTA2MjQyMw..*_ga_0YHJK3Y10M*czE3ODUzNTI2MjAkbzU0JGcxJHQxNzg1MzYxODM0JGoxJGwwJGgw"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gradient-to-r from-ember to-gold px-5 py-2 text-sm font-semibold text-void text-center"
          >
            Register Now
          </a>
        </div>
      )}
    </motion.header>
  );
}