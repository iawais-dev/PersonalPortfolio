import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import NavbarSection from "@/components/Navbar";
import ProjectsSection from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <NavbarSection />
      <HeroSection />
      <hr />
      <AboutSection />
      <hr />
      <Skills />
      <hr />
      <ProjectsSection />
      <hr />
      <ContactSection />
      <Footer />
    </div>
  );
}
