import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import CapabilitiesSection from "./Components/CapabilitiesSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import { getSiteContent } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar name={content.profile.name} />
      <HeroSection content={content} />
      <AboutSection content={content} />
      <CapabilitiesSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} />
    </>
  );
}
