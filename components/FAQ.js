"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Display copy (JSX allowed, used for the on-page accordion).
export const faqs = [
  {
    q: "Is ForgeHacks online?",
    a: "Yes — ForgeHacks is a fully online hackathon, so you can take part from anywhere in the world with an internet connection.",
  },
  {
    q: "When is ForgeHacks 2026 and how long does it run?",
    a: "ForgeHacks 2026 runs October 3 - 10, 2026. Building starts on Oct 3 and hacking ends on Oct 10, followed by a judging period and a winners announcement.",
  },
  {
    q: "Who can participate?",
    a: "Any current student anywhere in the world. First-time hackers are welcome and encouraged.",
  },
  {
    q: "Do I need prior coding, programming, or AI experience?",
    a: "No! ForgeHacks is meant for students with all levels of experience. Mentors and workshops will be provided for those interested in learning more.",
  },
  {
    q: "Do I need a team before I arrive?",
    a: (
      <>
        No, students can either compete solo or have up to four members. If you
        want a team member, join the{" "}
        <a
          href="https://discord.gg/RXENwZ5nc4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-ember underline font-medium transition-colors"
        >
          Discord
        </a>{" "}
        and go to the <strong>#team-finder</strong> channel.
      </>
    ),
  },
  {
    q: "How do I register for ForgeHacks?",
    a: (
      <>
        Registration is open on our{" "}
        <a
          href="https://forgehacks-2026.devpost.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-ember underline font-medium transition-colors"
        >
          Devpost page
        </a>
        . You can also click "Register Now" anywhere on this site.
      </>
    ),
  },
  {
    q: "What should I build?",
    a: "Build anything you want! Use the tracks as inspiration to guide the purpose of your project.",
  },
  {
    q: "Can I use existing code or open-source libraries?",
    a: "Yes. Frameworks, libraries, and boilerplate are fair game. The core logic of your submission needs to be your own, no plagiarism.",
  },
  {
    q: "Do I need to use AI in my project?",
    a: "No, using AI is not mandatory, but it is strongly encouraged.",
  },
  {
    q: "I have more questions. Who can I ask?",
    a: (
      <>
        Join the{" "}
        <a
          href="https://discord.gg/RXENwZ5nc4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-ember underline font-medium transition-colors"
        >
          Discord
        </a>{" "}
        and open a support ticket, or email us at{" "}
        <a
          href="mailto:team@forgehacks.dev"
          className="text-gold hover:text-ember underline font-medium transition-colors"
        >
          team@forgehacks.dev
        </a>
        .
      </>
    ),
  },
];

// Plain-text mirror of the above, in the same order, for JSON-LD FAQPage
// schema (Answer.text must be a string, not JSX). Keep these two arrays
// in sync when editing FAQ copy.
export const faqSchema = [
  {
    q: "Is ForgeHacks online?",
    a: "Yes, ForgeHacks is a fully online hackathon that students anywhere in the world can join.",
  },
  {
    q: "When is ForgeHacks 2026 and how long does it run?",
    a: "ForgeHacks 2026 runs October 3-10, 2026, followed by a judging period and a winners announcement.",
  },
  {
    q: "Who can participate in ForgeHacks?",
    a: "Any current student anywhere in the world. First-time hackers are welcome and encouraged.",
  },
  {
    q: "Do I need prior coding or AI experience for ForgeHacks?",
    a: "No. ForgeHacks is designed for students of all experience levels, with mentors and workshops available for beginners.",
  },
  {
    q: "Do I need a team before ForgeHacks starts?",
    a: "No. Students can compete solo or in teams of up to four, and can find teammates in the ForgeHacks Discord.",
  },
  {
    q: "How do I register for ForgeHacks?",
    a: "Registration is open on the ForgeHacks Devpost page, linked from the Register Now button on the site.",
  },
  {
    q: "What can I build at ForgeHacks?",
    a: "Participants can build any AI project, using the ForgeHacks tracks as inspiration for direction and purpose.",
  },
  {
    q: "Can I use open-source code at ForgeHacks?",
    a: "Yes. Frameworks, libraries, and boilerplate are allowed, but the core logic of each submission must be original work.",
  },
  {
    q: "Is AI required in a ForgeHacks project?",
    a: "No, using AI is not mandatory, but it is strongly encouraged.",
  },
  {
    q: "How can I get help during ForgeHacks?",
    a: "Questions can be asked in the ForgeHacks Discord support channel or by emailing forgeaihackathon@gmail.com.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display font-semibold">{faq.q}</span>
        <span
          className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center border transition-colors ${
            isOpen
              ? "border-flare text-flare shadow-flare"
              : "border-white/15 text-mist"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-mist text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Questions</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Good to know.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
