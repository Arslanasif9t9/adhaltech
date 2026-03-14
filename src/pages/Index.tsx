import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechSection from "@/components/TechSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <ParticleBackground />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TechSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
);

export default Index;
