import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import CapabilitiesSection from "./Components/CapabilitiesSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
