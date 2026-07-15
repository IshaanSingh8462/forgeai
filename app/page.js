import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Schedule from "../components/Schedule";
import Prizes from "../components/Prizes";
import Mentors from "../components/Mentors";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Mentors />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
