"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { ReactNode } from "react";

const days = [
  {
    label: "Thursday 1",
    date: "Oct 3",
    events: [
      { time: "12:00 PM", title: "ForgeHacks Starts!", desc: "Workshops, Mentor Meetings, and more start here." },
      { time: "12:00 PM", title: "Prompts Revealed", desc: "Prompts for tracks will be revealed today." },
      {
        time: "12:00 PM",
        title: "Start Building",
        desc: ( 
          <>
            Go to the{" "}
            <a
              href="https://discord.gg/9EdkYs3jc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-ember underline font-medium transition-colors"
            >
              Discord
            </a>{" "}
            to find teams, ask questions, or just hang out and learn.
          </>
        ),
      },
    ],
  },
  {
    label: "Thurs - Sun",
    date: "4 - 9",
    events: [
      { time: "----- --", title: "Mentor office hours", desc: "1:1 sessions with engineers from our sponsor teams." },
      { time: "----- --", title: "Workshops", desc: "Beginner Coder? Join this to learn more about CS basics." },
      { time: "----- --", title: "Ask Questions", desc: "If you have questions or need help, ask away. We and Mentors are here to support you." },
    ],
  },
  {
    label: "Thursday 2",
    date: "Oct 10",
    events: [
      { time: "12:00 PM", title: "Hacking ends", desc: "Submissions lock. Step away from the keyboard." },
      { time: "1:00 PM", title: "Judging", desc: "Judges will now start to grade your projects." },
      { time: "5:00 PM", title: "Gallery Opens", desc: "Look at all of the submissions here. Not graded yet, just for show." }
    ],
  },
  {
    label: "Saturday",
    date: "Oct 12",
    events: [
      { time: "3:00 PM", title: "Winners Announced", desc: "Awards and prize checks given out." },
    ],
  },
];

export default function Schedule() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="schedule" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">48 Hours</span>
          <h2 className="font-display text-h2 font-bold mt-3">The schedule.</h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="absolute z-0 left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute z-0 left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ember via-gold to-flare origin-top md:-translate-x-1/2"
          />
          
          <div className="relative z-10 space-y-20">
            {days.map((day, dayIndex) => (
              <div key={day.label} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-4 mb-8 md:justify-center"
                >
                  <div className="relative z-10 h-14 w-14 rounded-full glass flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-gold text-sm">
                      {day.date}
                    </span>
                  </div>
                  <span className="font-display text-h3 font-semibold md:absolute md:left-[calc(50%+3.5rem)]">
                    {day.label}
                  </span>
                </motion.div>
 
                <div className="space-y-6 pl-[70px] md:pl-0">
                  {day.events.map((event, i) => {
                    const alignRight = dayIndex % 2 === 0 ? i % 2 === 1 : i % 2 === 0;
                    return (
                      <motion.div
                        key={event.title}
                        initial={{
                          opacity: 0,
                          x: alignRight ? 40 : -40,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className={`md:w-[calc(50%-3rem)] ${
                          alignRight ? "md:ml-auto" : ""
                        }`}
                      >
                        <div className="glass rounded-2xl p-5">
                          <span className="eyebrow">{event.time}</span>
                          <h4 className="font-display font-semibold mt-1">
                            {event.title}
                          </h4>
                          <p className="text-sm text-mist mt-1">{event.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}