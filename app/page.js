import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Schedule from "../components/Schedule";
import Prizes from "../components/Prizes";
import Mentors from "../components/Mentors";
import Ambassadors from "../components/Ambassadors";
import Organizers from "../components/Organizers";
import Sponsors from "../components/Sponsors";
import FAQ, { faqSchema } from "../components/FAQ";
import Footer from "../components/Footer";
import { FaqJsonLd } from "../components/StructuredData";

export default function Home() {
  return (
    <SmoothScroll>
      {/* FAQPage schema mirrors the visible FAQ section content 1:1 —
          see components/FAQ.js `faqSchema`. */}
      <FaqJsonLd items={faqSchema} />
      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Mentors />
        <Ambassadors />
        <Organizers />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
