"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Who can participate?",
    a: "Any current student — undergraduate, graduate, or bootcamp — anywhere in the world. First-time hackers are welcome and encouraged.",
  },
  {
    q: "Do I need a team before I arrive?",
    a: "No. About half of our participants form teams at our Friday mixer. Teams can have up to four members.",
  },
  {
    q: "Is there a cost to attend?",
    a: "ForgeAI is completely free, including meals for all 48 hours. Limited travel stipends are available for out-of-region students.",
  },
  {
    q: "What should I bring?",
    a: "Your laptop, charger, a student ID, and anything that helps you sleep for a few hours on-site. We provide the rest.",
  },
  {
    q: "Can I use existing code or open-source libraries?",
    a: "Yes. Frameworks, libraries, and boilerplate are fair game. The core logic of your submission needs to be built during the 48 hours.",
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
