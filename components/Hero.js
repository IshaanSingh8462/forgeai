"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NeuralField from "./NeuralField";

const REGISTRATION_DEADLINE = new Date();
REGISTRATION_DEADLINE.setDate(REGISTRATION_DEADLINE.getDate() + 86);

function useCountdown(target) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTime({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <span className="font-display text-4xl md:text-6xl font-bold text-gradient tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-mist">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const { days, hours, minutes, seconds } = useCountdown(REGISTRATION_DEADLINE);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-70">
        <NeuralField className="w-full h-full" nodeCount={30} />
      </motion.div>
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-ember/10 blur-[140px]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-5xl px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow inline-block mb-6"
        >
          October 9–11 · A Global Student Hackathon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="font-display text-hero font-bold text-white"
        >
          Forge the Future
          <br />
          <span className="text-gradient">with AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-mist"
        >
          The international 48-hour student hackathon where ambitious builders
          create impactful AI solutions — alongside mentors, sponsors, and
          6,000 lines of code you didn't have yesterday.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#register"
            className="rounded-full bg-gradient-to-r from-ember to-gold px-8 py-3.5 font-semibold text-void shadow-ember hover:shadow-[0_0_60px_rgba(255,107,0,0.55)] hover:scale-[1.03] transition-all"
          >
            Register Now
          </a>
          <a
            href="#tracks"
            className="rounded-full border border-white/15 px-8 py-3.5 font-semibold text-white hover:border-flare hover:text-flare transition-colors"
          >
            Explore Tracks
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 inline-flex flex-col items-center gap-4 glass rounded-3xl px-8 py-6"
        >
          <span className="eyebrow">Registration closes in</span>
          <div className="flex items-center gap-4 md:gap-8">
            <TimeUnit value={days} label="Days" />
            <span className="text-2xl text-white/20 font-display">:</span>
            <TimeUnit value={hours} label="Hrs" />
            <span className="text-2xl text-white/20 font-display">:</span>
            <TimeUnit value={minutes} label="Min" />
            <span className="text-2xl text-white/20 font-display">:</span>
            <TimeUnit value={seconds} label="Sec" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
