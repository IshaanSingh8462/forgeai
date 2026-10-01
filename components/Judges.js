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
    title: "Software Engineer - Barclays",
    image: "/judges/AdityaShrivastava-judge.png",
    bio: "I'm a software engineer with 3+ years of experience designing and building scalable distributed systems. Currently, I work at Barclays, where I develop reliable backend services and distributed applications.  I'm currently diving deep into Artificial Intelligence, with a strong focus on LLMs, AI Agents, MLOps, and building production-ready AI systems. I enjoy exploring how AI can be integrated into scalable software to solve real-world engineering problems.",
    linkedin: "https://www.linkedin.com/in/aditya-shrivastava30/",
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
    name: "Prakshal Doshi",
    title: "Site Reliability Engineer - Apple",
    image: "/judges/PrakshalDoshi-judge.png",
    bio: "Architect and build infrastructure that's reliable, available, secure and performing",
    linkedin: "https://www.linkedin.com/in/prakshal-doshi/",
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
    name: "Dwijen Kirtania",
    title: "Senior Staff Software Engineer / AI Architect - Intuit Inc",
    image: "/judges/DwijenKirtania-judge.png",
    bio: "Senior Staff Software Engineer and AI Architect at Intuit, building production-grade generative AI and agentic systems — including autonomous AI agents, LangChain/LangGraph, and MCP-based architectures — with a specialization in AI and application security (RBAC/ABAC, policy-based authorization). I hold 3 patents, have authored 8+ research papers, and regularly speak at industry events on AI, security, and distributed systems.",
    linkedin: "https://www.linkedin.com/in/dwijen-kirtania",
  },
  {
    name: "RatnaKumar Bonagiri",
    title: "Staff Engineer - Macy's",
    image: "/judges/RatnaKumarBonagiri-judge.png",
    bio: "Ratna Kumar Bonagiri is a senior technology professional with over 18 years of experience in distributed systems, cloud architecture, enterprise data platforms, database engineering, reliability, and AI-assisted operations. He has judged more than 20 hackathons and reviewed technical papers for multiple conferences, bringing a practical perspective on innovation, scalability, technical quality, and real-world impact. He is also an IEEE Senior Member.",
    linkedin: "https://www.linkedin.com/in/ratna-kumar-bonagiri-66299094",
  },
  {
    name: "Tamim Sangrar",
    title: "Senior Product Manager - AI Identity Governance - Microsoft",
    image: "/judges/TamimSangrar-judge.png",
    bio: "Senior Product Manager at Microsoft, focused on governance and privileged-access capabilities for non-human identities, including AI agents. I have spent the past 4+ years thinking about identity and access management, with expertise in cybersecurity, regulatory compliance, GenAI, and product prototyping.",
    linkedin: "https://www.linkedin.com/in/tamimsangrar/",
  },
  {
    name: "Aishwarya Kannoth Putlumbath",
    title: "Business Analyst - AMD",
    image: "/judges/AishwaryaKannothPutlumbath-judge.jpeg",
    bio: "Aishwarya Kannoth Pathlambath is a Business Analyst with an M.S. in Computer Science and experience across enterprise technology, AI-enabled applications, systems analysis, and software quality. Her work focuses on translating business needs into technology solutions, validating system functionality through QA/UAT, and evaluating AI-enabled applications for accuracy, consistency, and alignment with business requirements.",
    linkedin: "https://www.linkedin.com/in/aishwarya-kannoth-putlumbath-145b67324/",
  },
    {
    name: "Aditi Patodiya",
    title: "Senior Software Engineer - Amazon",
    image: "/judges/AditiPatodiya-judge.png",
    bio: "Aditi Patodiya is a Senior Software Engineer at Amazon with over a decade of experience building scalable software and AI systems. She is an engineer for Amazon’s AlexaForShopping AI assistant, specializing in context engineering, distributed systems, and generative AI infrastructure. Alongside her industry work, she conducts independent research on large language model reliability and evaluation and contributes to the technology community as a peer reviewer and hackathon judge.",
    linkedin: "https://www.linkedin.com/in/aditi-patodiya/",
  },
  {
    name: "Oleksandr Tkachenko",
    title: "Senior Software Engineer - Playtech",
    image: "/judges/OleksandrTkachenko-judge.png",
    bio: "Oleksandr works in software engineering, with a specialization in web application development. He is an international hackathon judge, an author of technical and scientific articles, an open-source contributor, the creator of the open-source CSS library 'Skeleton Mammoth', and a speaker at international conferences.",
    linkedin: "https://www.linkedin.com/in/aleksandrtkachenko/ ",
  },
  {
    name: "Pratik Ghawate",
    title: "Senior Analytics Engineer",
    image: "/judges/PratikGhawate-judge.png",
    bio: "I’m Pratik Ghawate, a Senior Analytics Engineer with experience in AI/ML, data engineering, financial systems, and analytics. My work focuses on building reliable data and AI systems, and I have prior hackathon judging experience evaluating technical implementation, usefulness, creativity, and AI.",
    linkedin: "",
  },
  {
    name: "Aman Goyal",
    title: "AI Agent / AI Product Manager - TMobile",
    image: "/judges/AmanGoyal-judge.png",
    bio: "Aman Goyal works in AI product development, with experience spanning agentic workflows, experimentation, and user research. He has held AI product and engineering roles at The Trade Desk and Intel and holds a Master of Information Systems Management from Carnegie Mellon University. His focus is turning technical capabilities into useful, trustworthy products.",
    linkedin: "https://www.linkedin.com/in/amangoyal99",
  },
  {
    name: "Abdulrasaq (Dulra) Amolegbe",
    title: "CoFounder/CEO - AgentStatus",
    image: "/judges/Abdulrasaq(Dulra)Amolegbe-judge.png",
    bio: "Dulra Amolegbe is co-founder and CEO of AgentStatus (Carmel Labs), which independently validates MCP servers and AI agent tools from outside the host so teams can see which tools actually connect and complete the job. He previously co-founded Dot and Fabric, the distributed residential compute network underneath AgentStatus. Based in San Francisco, he focuses on AI agent reliability, tool validation, and production readiness.",
    linkedin: "https://www.linkedin.com/in/dulra",
  },
  {
    name: "Ivan Tesolkin",
    title: "Independent Business Consultant - Tesolkin Consulting",
    image: "/judges/IvanTesolkin-judge.png",
    bio: "I’ve spent the past nine years helping founders and business owners solve GTM, operations, growth, and execution problems across more than 40 engagements. I’ve also led an unmanned aircraft program and worked across physical AI, aerospace, and dual-use technology. At ForgeHacks, I’ll be judging primarily from the business, product, and execution side.",
    linkedin: "https://www.linkedin.com/in/ivan-tesolkin",
  },
  {
    name: "Diksha Thakur",
    title: "Software Engineer - Reddit",
    image: "/judges/DikshaThakur-judge.png",
    bio: "I am a software engineer at Reddit, where I lead backend projects supporting content review, enforcement, appeals, and user safety. Previously, I built payments-platform infrastructure at Google and data-platform tools at Lyft, with expertise in backend architecture, scalable systems, API design, and reliability.",
    linkedin: "https://www.linkedin.com/in/dikshathakur3119/",
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
