"use client";

import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// TOP PRIZES — edit this array whenever amounts/copy change.
// Each entry needs a unique `rank` (1 = grand prize, 2, 3, ...).
// If you keep exactly ranks 1/2/3, they render as a podium.
// Add a 4th, drop one, or rename labels — it automatically falls
// back to a plain card grid instead, so nothing breaks.
// ─────────────────────────────────────────────────────────────
const topPrizes = [
  {
    rank: 1,
    label: "1st Place",
    amount: "$3300",
    desc: [
      "$100 Cash",
      "$300 Featherless Credits",
      "$50 AoPS Giftcard",
      "2-year CodeCrafters VIP membership for each team member",
    ],
  },
  {
    rank: 2,
    label: "2nd Place",
    amount: "$1515",
    desc: [
      "$50 Cash",
      "$25 AoPS Giftcard",
      "1-year CodeCrafters VIP membership for each team member",
    ],
  },
  {
    rank: 3,
    label: "3rd Place",
    amount: "$770",
    desc: [
      "$25 Cash",
      "$25 AoPS Giftcard",
      "6-month CodeCrafters VIP membership for each team member",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// SPONSOR PERK BANNER — swap these to feature a different sponsor.
// Logo file should live in /public.
// ─────────────────────────────────────────────────────────────
const PERK_SPONSOR_NAME = "Featherless.ai";
const PERK_SPONSOR_LOGO = "/featherless.png";
const PERK_HEADLINE = "$25 in free API credits for every participant.";
const PERK_HEADLINE_HIGHLIGHT = "$25 in free API credits"; // must match a substring of PERK_HEADLINE
const PERK_DESC =
  "Yours to keep just for showing up — whether or not you place in the top 3 or win a track. Use it to run open-weight LLMs for your project, no credit card required.";

const rewards = [
  { title: "Certificates", desc: "Every team that submits a project earns one." },
  { title: "ForgeHacks Spotlight", desc: "Standout projects get featured on our site and socials." },
  { title: "Audience Favorite", desc: "Voted on live by fellow hackers at the showcase." },
];

// Visual treatment per rank. Ranks without an entry here (4th place,
// a custom "Honorable Mention", etc.) just fall back to a neutral style
// instead of erroring.
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

      {/* RENDER LIST IF DESC IS AN ARRAY */}
      {Array.isArray(prize.desc) ? (
        <ul className="text-mist text-sm mt-4 space-y-1.5 text-center max-w-xs">
          {prize.desc.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        /* RENDER REGULAR PARAGRAPH IF DESC IS A STRING */
        prize.desc && (
          <p className="text-mist text-sm mt-4 max-w-xs leading-relaxed">
            {prize.desc}
          </p>
        )
      )}
    </motion.div>
  );
}

// Podium: 2nd on the left, 1st tallest in the middle, 3rd on the right.
// Only used when the data is exactly ranks 1/2/3.
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

// Fallback: any number/shape of prizes, sorted by rank, in a wrapping grid.
// This is what kicks in automatically if topPrizes is edited to not be
// exactly 1/2/3, so the section never breaks.
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

function PerkBanner() {
  const parts = PERK_HEADLINE.split(PERK_HEADLINE_HIGHLIGHT);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl glass p-7 md:p-8 flex flex-col md:flex-row items-center gap-6 mb-14 text-center md:text-left"
    >
      <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
        <img
          src={PERK_SPONSOR_LOGO}
          alt={`${PERK_SPONSOR_NAME} logo`}
          className="h-10 w-10 object-contain"
        />
      </div>
      <div>
        <span className="eyebrow">perk · {PERK_SPONSOR_NAME}</span>
        <p className="font-display text-2xl md:text-3xl font-bold mt-1">
          {parts[0]}
          <span className="text-gold">{PERK_HEADLINE_HIGHLIGHT}</span>
          {parts[1]}
        </p>
        <p className="text-mist text-sm mt-2 max-w-xl">{PERK_DESC}</p>
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

        <PerkBanner />

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