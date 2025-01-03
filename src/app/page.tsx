import AboutSection from "@/Components/About";
import ContactSection from "@/Components/Contact";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/Hero";
import NavbarSection from "@/Components/Navbar";
import ProjectsSection from "@/Components/Project";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="">
    <NavbarSection/>
    <HeroSection />
    <hr />
    <AboutSection/>
    <hr />
    <Skills/>
    <hr />
    <ProjectsSection/>
    <hr />
    <ContactSection/>
    <Footer/>
    </div>
  );
}
