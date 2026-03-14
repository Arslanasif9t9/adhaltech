import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, TestTube, Rocket, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ParticleBackground from "@/components/ParticleBackground";

const steps = [
  { icon: Search, title: "Discovery & Research", desc: "We dive deep into your business goals, target audience, and market landscape. Through stakeholder interviews and competitive analysis, we build a comprehensive understanding of what success looks like.", deliverables: ["Project brief", "Market analysis", "User personas", "Technical requirements"] },
  { icon: Lightbulb, title: "Strategy & Design", desc: "Our designers craft intuitive user experiences backed by research. We create wireframes, interactive prototypes, and pixel-perfect designs that bring your vision to life.", deliverables: ["Wireframes", "UI/UX design", "Interactive prototype", "Design system"] },
  { icon: Code2, title: "Agile Development", desc: "Using 2-week sprints, our engineers build your solution with clean, maintainable code. You get regular demos and direct access to the development team.", deliverables: ["Sprint demos", "Code reviews", "CI/CD pipeline", "Documentation"] },
  { icon: TestTube, title: "Quality Assurance", desc: "Rigorous testing at every level — unit, integration, performance, and security. We ensure your product is bulletproof before launch.", deliverables: ["Test reports", "Performance benchmarks", "Security audit", "UAT sign-off"] },
  { icon: Rocket, title: "Launch & Deploy", desc: "Smooth deployment with zero-downtime strategies. We handle infrastructure setup, monitoring, and ensure everything runs flawlessly from day one.", deliverables: ["Deployment plan", "Monitoring setup", "Launch checklist", "User training"] },
  { icon: Headphones, title: "Support & Growth", desc: "Post-launch, we provide ongoing support, performance optimization, and iterative improvements based on user feedback and analytics.", deliverables: ["Monthly reports", "Bug fixes", "Feature updates", "Scaling strategy"] },
];

const Process = () => (
  <div className="min-h-screen bg-background relative">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Link to="/" className="text-neon-cyan text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">How We Work</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">Our Process</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 6-step methodology that transforms your ideas into market-ready digital products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-primary to-neon-purple" />
            <div className="space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2">
                    <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-8 transition-shadow duration-500 hover:neon-glow-indigo ml-16 md:ml-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-neon-cyan" />
                        </div>
                        <span className="text-xs font-display text-muted-foreground uppercase tracking-wider">Step {i + 1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{step.desc}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-display text-neon-cyan uppercase tracking-wider">Deliverables:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((d) => (
                            <span key={d} className="px-2 py-1 text-xs rounded bg-secondary/50 text-muted-foreground">{d}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary neon-glow-indigo border-2 border-background" />
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12">
            <h2 className="font-display text-3xl font-bold gradient-text mb-4">Let's Start Building Together</h2>
            <p className="text-muted-foreground mb-8">Every great product starts with a conversation. Tell us about your vision.</p>
            <Link to="/#contact" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold neon-glow-indigo inline-flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
);

export default Process;
