import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Wifi, GraduationCap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ParticleBackground from "@/components/ParticleBackground";

const perks = [
  { icon: Wifi, title: "100% Remote", desc: "Work from anywhere in the world. We believe in results, not office hours." },
  { icon: Heart, title: "Health & Wellness", desc: "Health stipend, mental wellness support, and flexible time off." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual learning stipend for courses, conferences, and certifications." },
  { icon: Globe, title: "Global Team", desc: "Collaborate with talented people from 10+ countries worldwide." },
];

const openings = [
  { title: "Senior React Developer", type: "Full-time", location: "Remote", desc: "Build cutting-edge web applications using React, TypeScript, and modern tooling. 3+ years experience required." },
  { title: "Python/AI Engineer", type: "Full-time", location: "Remote", desc: "Develop AI/ML solutions using Python, TensorFlow, and cloud platforms. Experience with LLMs preferred." },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", desc: "Design intuitive user experiences for web and mobile platforms. Proficiency in Figma required." },
  { title: "Flutter Developer", type: "Full-time", location: "Remote", desc: "Build cross-platform mobile applications with Flutter. Experience with state management and REST APIs." },
  { title: "DevOps Engineer", type: "Contract", location: "Remote", desc: "Manage cloud infrastructure, CI/CD pipelines, and monitoring systems on AWS/Azure." },
  { title: "Content Strategist", type: "Part-time", location: "Remote", desc: "Create compelling tech content, case studies, and marketing materials for our brand." },
];

const Careers = () => (
  <div className="min-h-screen bg-background relative">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Link to="/" className="text-neon-cyan text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Join Our Team</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">Careers at ADHAL TECH</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building the future of digital solutions. Join a team of passionate innovators working on exciting projects worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">Why Work With Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="glass-card p-6 cursor-pointer transition-shadow duration-300 hover:neon-glow-indigo group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-neon-cyan transition-colors">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{job.desc}</p>
                    <div className="flex gap-4 mt-3">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Briefcase size={12} /> {job.type}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin size={12} /> {job.location}</span>
                    </div>
                  </div>
                  <Link to="/#contact" className="px-6 py-2 rounded-lg bg-primary/10 text-primary font-display text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all shrink-0 inline-flex items-center gap-2">
                    Apply <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
);

export default Careers;
