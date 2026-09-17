"use client";

import { motion } from "framer-motion";
import PersonCard from "./PersonCard";

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
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
};

const benefits = [
  { icon: Icons.Users, text: "Inspire the next generation of AI builders" },
  { icon: Icons.Target, text: "Share your experience and expertise" },
  { icon: Icons.Heart, text: "Make a real impact in just a few hours" },
];

// ─────────────────────────────────────────────────────────────
// MENTORS — one object per person. Add/remove entries freely,
// the grid re-flows automatically (currently 8).
//   image:    path under /public, e.g. "/mentors/jane-doe.jpg"
//             (leave "" to show initials instead of a photo)
//   linkedin: full profile URL, or "" to hide the LinkedIn button
// ─────────────────────────────────────────────────────────────
const mentors = [
  {
    name: "Sachin Gurjar",
    title: "AI Researcher - Apexlayer Technologies",
    image: "/mentors/SachinGurjar-mentor.jpg",
    bio: "Sachin Gurjar is an AI researcher and the founder of quickcommercemap.com, which maps quick-commerce dark stores across India and several other countries. He has three IEEE papers published and four more accepted, and serves on the programme committee of IEEE ICA 2026. Before starting his own company he worked as a full-stack and blockchain engineer.",
    linkedin: "https://linkedin.com/in/sachingurjar",
  },
  {
    name: "Anudeep Bonagiri",
    title: "---",
    image: "/mentors/AB.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Sai Prasad Saladi",
    title: "Senior Software Engineer / Technology Leader - U.S. Bank",
    image: "/mentors/SaiPrasadSaladi-mentor.png",
    bio: "Sai Prasad Saladi is a technology leader and senior software engineer with over 12 years of experience designing, developing, and modernizing enterprise-scale software platforms across financial services, digital payments, and marketing technology domains. Sai is recognized for significant research contributions and technical expertise in artificial intelligence, cloud-native engineering, and full-stack development. He is passionate about driving engineering excellence, cross-functional collaboration, and leveraging emerging technologies to deliver high-impact solutions.",
    linkedin: "https://www.linkedin.com/in/sai-saladi",
  },
  {
    name: "Swapneswar Sundar Ray",
    title: "Assistant Vice President | Principal Machine Learning Engineer - U.S. Bank",
    image: "/mentors/SwapneswarSundarRay-mentor.png",
    bio: "Swapneswar Sundar Ray is an AI and software engineering leader specializing in enterprise AI, generative AI, agentic systems, cloud platforms, API architecture, cybersecurity, and responsible AI. He is an IEEE Senior Member, published author, conference reviewer, speaker, and experienced judge who has evaluated more than 100 technology and innovation submissions.",
    linkedin: "https://www.linkedin.com/in/swapneswarsundarray/",
  },
  {
    name: "Aatishkumar kumardhami",
    title: "---",
    image: "/mentors/AK.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Nilesh Dhage",
    title: "Director Product Management - Financial Services",
    image: "/mentors/NileshDhage-mentor.png",
    bio: "Nilesh Dhage is a Director of Product Management and AI strategy professional with experience evaluating technology innovation, mentoring teams, and guiding products from concept to impact. As an author and technology practitioner, Nilesh brings expertise in AI product strategy, systems design, emerging technologies, and practical business value. As a hackathon judge, he assesses projects for innovation, technical feasibility, user impact, execution quality, and potential to scale.",
    linkedin: "https://www.linkedin.com/in/nileshdhage",
  },
  {
    name: "Ujwal Suresh Vanjare",
    title: "Software Engineer - BNSF Railway",
    image: "/mentors/UjwalSureshVanjare-mentor.png",
    bio: "Ujwal is a Software Engineer at BNSF Railway with 3+ years of experience in backend engineering, cloud infrastructure, distributed systems, and AI. He is an AWS-certified engineer, active hackathon builder and winner across AI, cloud, and security, and has experience judging hackathons and mentoring 500+ students as a Graduate Teaching Assistant at UNC Charlotte.",
    linkedin: "https://www.linkedin.com/in/ujwalvanjare/",
  },
  {
    name: "Saiprasad Charudatta Shrikhande",
    title: "Senior Manager - Cognizant Technology Solutions",
    image: "/mentors/SaiprasadCharudattaShrikhande-mentor.png",
    bio: "Saiprasad Charudatta Shrikhande is a wireless communications, cybersecurity, and cloud networking expert with over 17 years of experience designing, validating, and securing complex technology systems. His expertise spans 5G, Wi‑Fi, IoT, AI-driven analytics, and network automation, and he actively contributes to the technology community as an IEEE journal reviewer, hackathon judge, and mentor.",
    linkedin: "https://www.linkedin.com/in/saiprasad-shrikhande-081b3b9b"
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="relative overflow-hidden py-32 px-6">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-ember/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Mentors & Community</span>
          <h2 className="font-display text-h2 font-bold mt-5 leading-tight">
            Guided by builders
            <br />
            who've been{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-gold">
              there.
            </span>
          </h2>
          <p className="text-mist text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Our mentors bring real engineering and AI experience to help
            teams get unstuck. Hover a card to read more.
          </p>
        </motion.div>

        {/* MENTOR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            >
              <PersonCard person={mentor} />
            </motion.div>
          ))}
        </div>

        {/* BECOME A MENTOR CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl px-8 py-10 md:px-14 md:py-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Want to mentor at ForgeHacks?
              </h3>
              <p className="text-mist mt-3 leading-relaxed">
                Your guidance can be the spark that turns a stuck idea into
                something life-changing. Join our mentor bench and help
                students bring their AI ideas to life.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSelIPzm7937j1dT61iDA6fwRG6EfitJmn7djmXrX0zCBkc8HA/viewform?usp=publish-editor"
                className="inline-block mt-6 rounded-xl bg-gradient-to-r from-ember to-gold px-8 py-4 font-semibold text-void shadow-ember transition hover:scale-105"
              >
                Become a Mentor →
              </a>
            </div>

            <div className="space-y-5">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/10 border border-ember/30 shrink-0">
                      <Icon className="h-5 w-5 text-ember" />
                    </div>
                    <p className="text-white/80">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
