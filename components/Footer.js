"use client";

import { motion } from "framer-motion";

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Discord", href: "https://discord.com" },
];

export default function Footer() {
  return (
    <>
      <section id="register" className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-ember/10 blur-[140px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-2xl"
        >
          <h2 className="font-display text-h2 font-bold">
            Ready to <span className="text-gradient">forge</span>?
          </h2>
          <p className="text-mist mt-4">
            Join hundreds of other high school and college students building with AI.
          </p>
          <a
            href="mailto:hello@forgeai.dev"
            className="inline-block mt-8 rounded-full bg-gradient-to-r from-ember to-gold px-10 py-4 font-semibold text-void shadow-ember hover:shadow-[0_0_60px_rgba(255,107,0,0.55)] hover:scale-[1.03] transition-all"
          >
            Register Now
          </a>
        </motion.div>
      </section>

      <footer className="relative border-t border-white/5 px-6 py-12">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display font-semibold text-lg">
              Forge<span className="text-ember">AI</span>
            </span>
            <p className="text-sm text-mist mt-1">
              hello@forgeai.dev · Made by students, for students.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-mist hover:text-flare transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-mist/50 mt-10">
          © {new Date().getFullYear()} ForgeAI. All rights reserved.
        </p>
      </footer>
    </>
  );
}
