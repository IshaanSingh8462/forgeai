"use client";

import { motion } from "framer-motion";
const Icons = {
  Users: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),

  Target: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),

  Heart: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
    </svg>
  ),
};

export default function Mentors() {
  const benefits = [
  {
    icon: Icons.Users,
    text: "Inspire the next generation of AI builders",
  },
  {
    icon: Icons.Target,
    text: "Share your experience and expertise",
  },
  {
    icon: Icons.Heart,
    text: "Make a real impact in just a few hours",
  },
];

  return (
    <section
      id="mentors"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-ember/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            Mentors & Community
          </span>

          <h2 className="font-display text-6xl font-bold mt-5 leading-tight">
            Help Builders
            <br />
            Move{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-gold">
              Forward.
            </span>
          </h2>

          <p className="text-mist text-lg mt-6 max-w-xl leading-relaxed">
            Your guidance can be the spark that turns a stuck idea into
            something life-changing. Join our mentor bench and help students
            bring their AI ideas to life.
          </p>


          {/* Benefits */}
          <div className="mt-10 space-y-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/10 border border-ember/30">
                    <Icon className="h-5 w-5 text-ember" />
                  </div>

                  <p className="text-white/80">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>


          {/* CTA */}
          <div className="mt-10 flex items-center gap-8">

            <a
              href="https://forms.gle/AaMs5xeqW7qcQdG4A"
              className="
              rounded-xl
              bg-gradient-to-r
              from-ember
              to-gold
              px-8
              py-4
              font-semibold
              text-void
              shadow-ember
              transition
              hover:scale-105
              "
            >
              Become a Mentor →
            </a>
          </div>

        </motion.div>



        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center h-[500px]"
        >

          {/* Outer Orbital Ring */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              h-[460px]
              w-[460px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-ember/20
              animate-spin-slow
            "
          />


          {/* Middle Orbital Ring */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-gold/20
            "
          />


          {/* Glow Behind Orb */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              h-[330px]
              w-[330px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-ember/10
              blur-[80px]
            "
          />


          {/* Main Mentor Platform */}
          <div
            className="
              relative
              h-[330px]
              w-[330px]
              rounded-full
              bg-gradient-to-b
              from-white/10
              to-black
              border
              border-white/10
              shadow-[0_0_80px_rgba(255,107,0,0.25)]
              flex
              items-center
              justify-center
            "
          >

            <div className="text-center">
              <p className="text-4xl font-semibold">
                Mentor Bench
              </p>

              <p className="text-mist mt-2">
                Now forming
              </p>
            </div>

          </div>


          {/* Floating Nodes */}
          <div
            className="
              absolute
              top-[90px]
              right-[90px]
              h-4
              w-4
              rounded-full
              bg-ember
              shadow-ember
            "
          />

          <div
            className="
              absolute
              bottom-[100px]
              left-[100px]
              h-3
              w-3
              rounded-full
              bg-gold
            "
          />

        </motion.div>

      </div>

    </section>
  );
}