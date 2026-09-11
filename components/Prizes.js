"use client";

import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// TOP PRIZES — edit this array whenever amounts/copy change.
// ─────────────────────────────────────────────────────────────
const topPrizes = [
  {
    rank: 1,
    label: "1st Place",
    amount: "$5830",
    desc: [
      "$100 Cash",
      "$300 Featherless Credits",
      "$2,000 Momen Credits",
      "$1,000 Adaption Credits",
      "$50 AoPS Giftcard",
      "2-year CodeCrafters VIP for each team member (4x $720 = $2,880)",
      "1-year DevSwarm Pro for each team member (4x $96 = $384)",
      "CleanShot X license for each team member (4x $29 = $116)",
    ],
  },
  {
    rank: 2,
    label: "2nd Place",
    amount: "$2015",
    desc: [
      "$50 Cash",
      "$25 AoPS Giftcard",
      "1-year CodeCrafters VIP for each team member (4x $360 = $1,440)",
      "1-year DevSwarm Pro for each team member (4x $96 = $384)",
      "CleanShot X license for each team member (4x $29 = $116)",
    ],
  },
  {
    rank: 3,
    label: "3rd Place",
    amount: "$770",
    desc: [
      "$25 Cash",
      "$25 AoPS Giftcard",
      "6-month CodeCrafters VIP for each team member (4x $180 = $720)",
      "1-year DevSwarm Pro for each team member (4x $96 = $384)",
      "CleanShot X license for each team member (4x $29 = $116)",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// PERKS LIST — add as many sponsor perks here as you like.
// They will render as a vertical list of square/rounded bubbles.
// ─────────────────────────────────────────────────────────────
const perks = [
  {
    sponsor: "Featherless.ai",
    logo: "/featherless.png",
    headline: "$25 free API credits",
    highlight: " • Instant Open-Source AI",
    desc: "Access 30,000+ AI models via API without managing GPUs.",
  },
  {
    sponsor: "Momen",
    logo: "momen-perk-logo.png",
    headline: "$100 Momen credits",
    highlight: " • Build Web Apps Fast",
    desc: "Skip backend setup and launch web apps fast with zero code.",
  },
  {
    sponsor: "Devswarm",
    logo: "devswarm-perk-logo.png",
    headline: "1 Month Free Devswarm Pro",
    highlight: " • Code Faster Together",
    desc: "Boost team collaboration and ship cleaner code with AI dev tools.",
  },
  {
    sponsor: "Tin.computer",
    logo: "tin-logo.png",
    headline: "$299 Credits (1-Mo Growth Plan)",
    highlight: " • Autonomous AI Growth Agent",
    desc: "Tin Computer is an autonomous growth agent that connects to a project's GitHub, analytics and Stripe and ships pull requests to grow it: SEO pages, landing-page fixes, ads and support replies. Every eligible team at ForgeHacks gets $299 in Tin Computer credits, one month of the Growth plan.",
    invertLogo: true,
  },
  {
    sponsor: "Adaption Labs",
    logo: "adaption-labs-logo.png",
    headline: "$500 in Adaption platform credits",
    highlight: " • Build Web Apps Fast",
    desc: "Automate website optimization, run growth experiments, and handle bug fixes autonomously.",
  },
  {
    sponsor: "n8n",
    logo: "n8n-logo.png",
    headline: "1 month n8n Cloud Pro ($65)",
    highlight: " • Automate Any Workflow",
    desc: "Automate website optimization, run growth experiments, and handle bug fixes autonomously.",
    logoScale: "scale-150",
  },
  {
    sponsor: "Kariaa",
    logo: "kariaa-logo.png",
    headline: "$40 in Kariaa credits",
    highlight: " • AI-Powered Work & Jobs",
    desc: "Automate website optimization, run growth experiments, and handle bug fixes autonomously.",
  },

];

const rewards = [
  { title: "Certificates", desc: "Every team that submits a project earns one." },
  { title: "ForgeHacks Spotlight", desc: "Standout projects get featured on our site and socials." },
  { title: "Audience Favorite", desc: "Voted on live by fellow hackers at the showcase." },
];

const MEDAL_STYLES = {
  1: {
    ring: "border-gold/50",
    glow: "shadow-[0_0_60px_rgba(255,184,0,0.22)]",
    tone: "text-gold",
  },
  2: {
    ring: "border-white/20",
    glow: "shadow-[0_0_35px_rgba(255,255,255,0.06)]",
    tone: "text-white/70",
  },
  3: {
    ring: "border-ember/40",
    glow: "shadow-[0_0_35px_rgba(255,107,0,0.16)]",
    tone: "text-ember",
  },
};
const DEFAULT_MEDAL_STYLE = { ring: "border-white/10", glow: "", tone: "text-mist" };

function medalStyle(rank) {
  return MEDAL_STYLES[rank] || DEFAULT_MEDAL_STYLE;
}

function PrizeCard({ prize, featured = false }) {
  const style = medalStyle(prize.rank);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-3xl glass border ${style.ring} ${style.glow} flex flex-col items-center text-center px-6 ${
        featured ? "py-12 md:py-14" : "py-9"
      }`}
    >
      <span className={`eyebrow ${style.tone}`}>{prize.label}</span>
      <span
        className={`font-display font-bold text-gradient mt-3 ${
          featured ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl"
        }`}
      >
        {prize.amount}
      </span>

      {Array.isArray(prize.desc) ? (
        <ul className="text-mist text-sm mt-4 space-y-1.5 text-center max-w-xs">
          {prize.desc.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        prize.desc && (
          <p className="text-mist text-sm mt-4 max-w-xs leading-relaxed">
            {prize.desc}
          </p>
        )
      )}
    </motion.div>
  );
}

function PodiumLayout({ prizes }) {
  const first = prizes.find((p) => p.rank === 1);
  const second = prizes.find((p) => p.rank === 2);
  const third = prizes.find((p) => p.rank === 3);

  return (
    <div className="grid md:grid-cols-3 gap-6 items-end mb-14">
      <div className="order-2 md:order-1">{second && <PrizeCard prize={second} />}</div>
      <div className="order-1 md:order-2">{first && <PrizeCard prize={first} featured />}</div>
      <div className="order-3 md:order-3">{third && <PrizeCard prize={third} />}</div>
    </div>
  );
}

function PrizeGrid({ prizes }) {
  const sorted = [...prizes].sort((a, b) => a.rank - b.rank);
  return (
    <div
      className="grid gap-6 mb-14"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
    >
      {sorted.map((prize) => (
        <PrizeCard key={prize.rank} prize={prize} featured={prize.rank === 1} />
      ))}
    </div>
  );
}

function PerkCard({ perk, index }) {
  const parts = perk.highlight
    ? perk.headline.split(perk.highlight)
    : [perk.headline, ""];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-3xl glass p-7 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left border border-white/10"
    >
      <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
        <img
          src={perk.logo}
          alt={`${perk.sponsor} logo`}
          className={`h-15 w-15 object-contain transition-transform ${
            perk.invertLogo ? "brightness-0 invert" : ""
          } ${perk.logoScale || ""}`} // Applied custom scale here
        />
      </div>
      <div>
        <span className="eyebrow">perk · {perk.sponsor}</span>
        <p className="font-display text-2xl md:text-3xl font-bold mt-1 text-gold">
          {parts[0]}
          {perk.highlight && (
            <span className="text-white">{perk.highlight}</span>
          )}
          {parts[1]}
        </p>
        <p className="text-mist text-sm mt-2 max-w-xl">{perk.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Prizes() {
  const ranks = topPrizes.map((p) => p.rank);
  const isPodium =
    topPrizes.length === 3 && [1, 2, 3].every((r) => ranks.includes(r));

  return (
    <section id="prizes" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Prizes</span>
          <h2 className="font-display text-h2 font-bold mt-3">
            What you'll walk away with.
          </h2>
        </motion.div>

        {topPrizes.length > 0 &&
          (isPodium ? (
            <PodiumLayout prizes={topPrizes} />
          ) : (
            <PrizeGrid prizes={topPrizes} />
          ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-h2 font-bold mt-3">
            Participation Perks
          </h2>
          <span className="eyebrow">What you get just for joining</span>
        </motion.div>

        {/* VERTICAL PERKS LIST */}
        <div className="flex flex-col gap-6 mb-14">
          {perks.map((perk, i) => (
            <PerkCard key={perk.sponsor + i} perk={perk} index={i} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rewards.map((reward, i) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl glass p-6 hover:shadow-ember transition-shadow text-center"
            >
              <span className="font-display text-lg font-bold text-gold block">
                {reward.title}
              </span>
              <p className="text-xs text-mist mt-2 leading-relaxed">{reward.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}