import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ParticleBackground from "@/components/ParticleBackground";

const caseStudies = [
  {
    title: "ShopFlow Multi-Vendor Marketplace",
    client: "E-commerce Startup, UK",
    challenge: "Build a scalable multi-vendor marketplace handling 10,000+ concurrent users with real-time inventory sync.",
    solution: "Developed a microservices architecture using Node.js, React, and PostgreSQL with Redis caching. Implemented real-time WebSocket notifications and AI-powered recommendation engine.",
    results: [
      { metric: "300%", label: "Revenue Growth" },
      { metric: "99.9%", label: "Uptime" },
      { metric: "2.1s", label: "Avg Load Time" },
      { metric: "50K+", label: "Daily Users" },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    color: "from-neon-cyan/20 to-primary/20",
  },
  {
    title: "MedConnect Telemedicine Platform",
    client: "Healthcare Provider, US",
    challenge: "Create a HIPAA-compliant telemedicine platform with video consultations, e-prescriptions, and health record management.",
    solution: "Built a secure Flutter mobile app with end-to-end encrypted video calls, integrated with EHR systems, and added AI-powered symptom checker.",
    results: [
      { metric: "85%", label: "Patient Satisfaction" },
      { metric: "40K+", label: "Consultations/Month" },
      { metric: "60%", label: "Cost Reduction" },
      { metric: "4.8★", label: "App Rating" },
    ],
    tags: ["Flutter", "Python", "TensorFlow", "WebRTC", "Azure"],
    color: "from-primary/20 to-neon-purple/20",
  },
  {
    title: "AgriSense Smart Farming IoT",
    client: "Agriculture Corp, Pakistan",
    challenge: "Deploy IoT sensors across 500+ acres to monitor soil conditions, weather patterns, and automate irrigation systems.",
    solution: "Designed custom IoT firmware, built a real-time dashboard with predictive analytics using machine learning for crop yield optimization.",
    results: [
      { metric: "35%", label: "Water Savings" },
      { metric: "28%", label: "Yield Increase" },
      { metric: "500+", label: "Acres Monitored" },
      { metric: "24/7", label: "Real-time Monitoring" },
    ],
    tags: ["IoT", "Python", "TensorFlow", "React", "MQTT"],
    color: "from-neon-purple/20 to-neon-cyan/20",
  },
  {
    title: "FinTrack Pro Investment Dashboard",
    client: "FinTech Startup, UAE",
    challenge: "Build an AI-powered financial portfolio tracker with real-time market data, risk analysis, and automated trading signals.",
    solution: "Created a React dashboard with Python backend for ML predictions, integrated with multiple market data APIs and implemented algorithmic trading strategies.",
    results: [
      { metric: "15K+", label: "Active Users" },
      { metric: "92%", label: "Prediction Accuracy" },
      { metric: "$2M+", label: "Assets Tracked" },
      { metric: "< 100ms", label: "Data Latency" },
    ],
    tags: ["React", "Python", "PyTorch", "FastAPI", "WebSocket"],
    color: "from-neon-cyan/20 to-primary/20",
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background relative">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
            <Link to="/" className="text-neon-cyan text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
            <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Success Stories</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">Case Studies</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className={`h-4 bg-gradient-to-r ${cs.color}`} />
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-display rounded-full bg-primary/10 text-neon-cyan">{tag}</span>
                  ))}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">{cs.title}</h2>
                <p className="text-neon-cyan font-display text-sm mb-6">{cs.client}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock size={16} className="text-primary" /> Challenge
                    </h3>
                    <p className="text-muted-foreground text-sm">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle size={16} className="text-neon-cyan" /> Solution
                    </h3>
                    <p className="text-muted-foreground text-sm">{cs.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-secondary/50 rounded-lg p-4 text-center">
                      <p className="font-display text-2xl font-bold text-foreground">{r.metric}</p>
                      <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12">
            <h2 className="font-display text-3xl font-bold gradient-text mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how ADHAL TECH can transform your business with technology.</p>
            <Link to="/#contact" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold neon-glow-indigo inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
);

export default CaseStudies;
