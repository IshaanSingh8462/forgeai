"use client";

import { motion } from "framer-motion";

export default function Ambassadors() {
  return (
    <section id="ambassadors" className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-80 -translate-x-1/2 w-[700px] h-[450px] bg-ember/15 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="eyebrow">Ambassadors</span>

          <h2 className="font-display text-h2 font-bold mt-5 leading-none">
            Bring ForgeHacks
            <br />
            to your{" "}
            <span className="bg-gradient-to-r from-ember to-gold bg-clip-text text-transparent">
              school.
            </span>
          </h2>

          <p className="text-mist text-lg mt-6 max-w-2xl mx-auto">
            Join our Ambassador Program and help build the future of innovation
            at your school.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-[34px] px-8 md:px-14 pt-24 pb-12"
        >

          {/* Floating Icon */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-ember/30 bg-[#161616] shadow-[0_0_60px_rgba(255,107,0,.45)]">

              <svg
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M16 32L44 18V46L16 32Z"
                  stroke="url(#g)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 27H10V37H16"
                  stroke="url(#g)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M20 36L25 49"
                  stroke="url(#g)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient id="g">
                    <stop stopColor="#ff6b00" />
                    <stop offset="1" stopColor="#ffc84a" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>

          {/* Title */}

          <h3 className="font-display text-h3 font-bold text-center">
            Ambassador Program: Now Forming
          </h3>

          <p className="text-mist text-lg max-w-2xl mx-auto text-center mt-5">
            Ambassadors help spread the word at their school, organize local
            meetups, and receive early access, exclusive perks, and recognition
            in return.
          </p>

          {/* Features */}

          <div className="grid md:grid-cols-3 gap-10 mt-14 border-y border-white/10 py-10">

            <Feature
              icon="👥"
              title="Make an Impact"
              text="Grow your community and inspire future builders."
            />

            <Feature
              icon="⚡"
              title="Early Access"
              text="Get first access to announcements, updates, and launches."
            />

            <Feature
              icon="🎁"
              title="Exclusive Perks"
              text="Earn swag, rewards, and recognition for your contributions."
            />

          </div>

          {/* CTA */}

          <div className="text-center mt-12">

            <a
              href="mailto:forgeaihackathon@gmail.com?subject=Ambassador%20Application"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-ember to-gold px-10 py-4 font-semibold text-void shadow-ember transition-all hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,107,0,.45)]"
            >
              Become an Ambassador

              <span className="text-xl">→</span>
            </a>

            <p className="text-sm text-mist mt-5">
              Applications are now open. Join the first cohort today.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-5">

      <div className="w-16 h-16 rounded-full border border-ember/20 bg-white/5 flex items-center justify-center text-3xl shrink-0">
        {icon}
      </div>

      <div className="text-left">

        <h4 className="font-display text-xl font-semibold">
          {title}
        </h4>

        <p className="text-mist mt-2">
          {text}
        </p>

      </div>

    </div>
  );
}