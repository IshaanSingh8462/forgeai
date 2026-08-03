"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-[340px] -translate-x-1/2 h-[520px] w-[720px] rounded-full bg-ember/10 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">The Team</span>

          <h2 className="font-display text-h2 font-bold mt-5 leading-none">
            Organized by students
            <span className="text-gold">.</span>
          </h2>

          <p className="text-mist text-lg max-w-2xl mx-auto mt-6">
            ForgeHacks is planned, built, and run entirely by passionate
            students creating opportunities for other students.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[34px] overflow-hidden border border-ember/30"
        >

          <div className="grid lg:grid-cols-5">

            {/* Left */}

            <div className="relative flex items-center justify-center p-16 lg:col-span-2">

              <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-transparent to-transparent" />

              <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-ember/10 shadow-[0_0_90px_rgba(255,107,0,.25)]">

                <span className="text-9xl select-none">🛠️</span>

              </div>

            </div>

            {/* Right */}

            <div className="p-10 md:p-14 lg:col-span-3">

              <h3 className="font-display text-h3 font-bold">
                ForgeHacks Organizers
              </h3>

              <p className="text-mist text-lg mt-5 max-w-2xl">
                From outreach and sponsorships to logistics and development,
                everything you see is built by students volunteering their time
                because they believe in making technology more accessible.
              </p>

              {/* Divider */}

              <div className="h-px bg-white/10 my-10" />

              {/* Features */}

              <div className="grid gap-8 md:grid-cols-3">

                <Feature
                  icon={<People />}
                  title="100% Students"
                  text="Built by students, for students."
                />

                <Feature
                  icon={<Bolt />}
                  title="All In"
                  text="Every organizer volunteers their time."
                />

                <Feature
                  icon={<Heart />}
                  title="Community First"
                  text="Creating opportunities that last."
                />

              </div>

            </div>

          </div>

        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl mt-10 px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto"
        >
          <div>
            <div>

              <h4 className="font-display text-2xl font-semibold">
                Want to be part of it?
              </h4>

              <p className="text-mist mt-2">
                We're always looking for driven students who want to make an
                impact.
              </p>

            </div>

          </div>

          <a
            href="mailto:forgeaihackathon@gmail.com?subject=Organizer%20Application"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-ember to-gold px-10 py-4 font-semibold text-void shadow-ember hover:shadow-[0_0_60px_rgba(255,107,0,.45)] transition-all hover:scale-[1.02]"
          >
            Join the Team
            <span className="text-xl">→</span>
          </a>

        </motion.div>

      </div>

    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div>

      <div className="mb-5">
        {icon}
      </div>

      <h4 className="font-display text-xl font-semibold">
        {title}
      </h4>

      <p className="text-mist mt-3">
        {text}
      </p>

    </div>
  );
}

/* ---------------- Icons ---------------- */

function ToolsIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path
        d="M36 22L58 44L46 56L24 34"
        stroke="#ffb347"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M78 22C71 29 71 40 78 47L96 65C103 72 114 72 121 65"
        stroke="#ffb347"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M34 82L82 34"
        stroke="#ffb347"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle
        cx="30"
        cy="86"
        r="9"
        stroke="#ffb347"
        strokeWidth="5"
      />
    </svg>
  );
}

function People() {
  return (
    <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
      <circle cx="22" cy="22" r="7" stroke="#ff9c3b" strokeWidth="3"/>
      <circle cx="42" cy="22" r="7" stroke="#ff9c3b" strokeWidth="3"/>
      <path d="M12 48C12 39 18 35 22 35C26 35 32 39 32 48" stroke="#ff9c3b" strokeWidth="3"/>
      <path d="M32 48C32 39 38 35 42 35C46 35 52 39 52 48" stroke="#ff9c3b" strokeWidth="3"/>
    </svg>
  );
}

function Bolt() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
      <path
        d="M36 8L18 36H30L26 56L46 28H34L36 8Z"
        stroke="#ff9c3b"
        strokeWidth="3"
      />
    </svg>
  );
}

function Heart() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 52L12 32C5 25 7 14 16 10C23 7 30 11 32 17C34 11 41 7 48 10C57 14 59 25 52 32L32 52Z"
        stroke="#ff9c3b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}