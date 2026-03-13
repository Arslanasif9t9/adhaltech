import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const fullText = "Building Intelligent Digital Solutions for the Future";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-neon-cyan font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Global Software House
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 min-h-[3em] md:min-h-[2.5em]">
            <span className="gradient-text">{displayed}</span>
            <span className="animate-pulse-glow text-primary">|</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We craft cutting-edge software solutions for startups and enterprises worldwide — from AI-powered platforms to scalable cloud systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity neon-glow-indigo"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg glass-card gradient-border text-foreground font-display font-semibold hover:bg-secondary/50 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
