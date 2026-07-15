/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#060504",
        abyss: "#0C0A08",
        ember: "#FF6B00",
        gold: "#FFB800",
        flare: "#FF9D4D",
        mist: "#B8B8C2",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "h2": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15" }],
      },
      backgroundImage: {
        "grid-glow": "radial-gradient(circle at 50% 0%, rgba(255,107,0,0.08), transparent 60%)",
      },
      boxShadow: {
        ember: "0 0 40px rgba(255,107,0,0.35)",
        flare: "0 0 40px rgba(255,157,77,0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
