"use client";

import { motion } from "framer-motion";
import PersonCard from "./PersonCard";

// ─────────────────────────────────────────────────────────────
// JUDGES — one object per person. Add/remove entries freely,
// the grid re-flows automatically (currently 12).
//   image:    path under /public, e.g. "/judges/jane-doe.jpg"
//             (leave "" to show initials instead of a photo)
//   linkedin: full profile URL, or "" to hide the LinkedIn button
// ─────────────────────────────────────────────────────────────
const judges = [
  {
    name: "Aditya Shrivastava",
    title: "---",
    image: "/judges/AS.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Nevasini Sasikumar",
    title: "---",
    image: "/judges/NS.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Sashank Agarwal",
    title: "Senior Cloud Software and Infrastructure Engineer - NVIDIA",
    image: "/judges/SashankAgarwal-judge.png",
    bio: "Sashank Agarwal is a Senior Engineer at NVIDIA, specializing in AI infrastructure, distributed systems, Kubernetes, and cloud-native platforms. He previously worked at Intuit and Red Hat, contributing to large-scale infrastructure, observability, and open-source technologies. His expertise spans scalable systems, cloud platforms, AI infrastructure, and developer-focused infrastructure tooling.",
    linkedin: "https://www.linkedin.com/in/sashankagarwal/",
  },
  {
    name: "Viraj Sabhaya",
    title: "---",
    image: "/judges/VS.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Prakshal Doshi",
    title: "---",
    image: "/judges/PD.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Eesha Tariq",
    title: "AI Researcher & Software Engineer - MIT Critical Data / The Islamia University of Bahawalpur",
    image: "/judges/EeshaTariq-judge.png",
    bio: "Eesha Tariq is a Software Engineering researcher specializing in Graph Neural Networks and multimodal machine learning. She conducts clinical AI research with MIT Critical Data. A global winner in the Harvard CS50x Puzzle Day and RAISE Your Hack Paris , she also serves as a Stanford Code in Place Section Leader.",
    linkedin: "https://www.linkedin.com/in/esha-tariqdev/",
  },
  {
    name: "Saylee Mhatre",
    title: "Director of Engineering - Electronic Arts Inc",
    image: "/judges/SayleeMhatre-judge.png",
    bio: "Saylee Mhatre is a Director of Engineering at Electronic Arts (EA) with 12+ years of experience building and leading large-scale gaming and technology products. Her recent work focuses heavily on AI, including generative AI, LLM-powered applications, agentic systems, AI-powered creative workflows, and the engineering infrastructure required to take AI products from prototype to production.",
    linkedin: "https://www.linkedin.com/in/saylee-mhatre-54b3117a/",
  },
  {
    name: "Sharath Chandra Kampili",
    title: "Staff Enterprise Architect - Cockroach Labs",
    image: "/judges/SharathChandraKampili-judge.png",
    bio: "Sharath is a Staff Enterprise Architect at Cockroach Labs with 16 years of experience spanning telecom, healthcare, fintech, and e-commerce. He's built his career at the intersection of databases and AI from Oracle DBA to database architect to AWS Solutions Architect and now focuses on bridging AI/ML pipelines with production full-stack systems using distributed databases, agentic AI, and RAG pipelines.",
    linkedin: "https://www.linkedin.com/in/kampili",
  },
  {
    name: "Dwiken Kirtania",
    title: "---",
    image: "/judges/DK.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "RatnaKumar Bonagiri",
    title: "---",
    image: "/judges/RB.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Tamim Nangrar",
    title: "---",
    image: "/judges/TN.png",
    bio: "---",
    linkedin: "",
  },
  {
    name: "Aishwarya Kannoth Putlumbath",
    title: "Business Analyst - AMD",
    image: "/judges/AishwaryaKannothPutlumbath-judge.jpeg",
    bio: "Aishwarya Kannoth Pathlambath is a Business Analyst with an M.S. in Computer Science and experience across enterprise technology, AI-enabled applications, systems analysis, and software quality. Her work focuses on translating business needs into technology solutions, validating system functionality through QA/UAT, and evaluating AI-enabled applications for accuracy, consistency, and alignment with business requirements.",
    linkedin: "https://www.linkedin.com/in/aishwarya-kannoth-putlumbath-145b67324/",
  },
];

export default function Judges() {
  return (
    <section id="judges" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-ember/10 blur-[170px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Judges</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            Meet the judges.
          </h2>
          <p className="text-mist mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Our judging panel brings real industry and technical experience
            to evaluating every ForgeHacks project. Hover a card to read
            more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {judges.map((judge, i) => (
            <motion.div
              key={judge.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            >
              <PersonCard person={judge} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
