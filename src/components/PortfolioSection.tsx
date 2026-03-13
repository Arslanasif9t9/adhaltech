import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "E-commerce", "SaaS", "IoT", "Web Apps", "Mobile Apps"];

const projects = [
  { title: "ShopFlow Multi-Vendor", category: "E-commerce", desc: "Multi-vendor marketplace with advanced analytics.", color: "from-neon-cyan/20 to-primary/20" },
  { title: "CloudSync Dashboard", category: "SaaS", desc: "Real-time cloud monitoring and management platform.", color: "from-primary/20 to-neon-purple/20" },
  { title: "SmartHome Hub", category: "IoT", desc: "IoT home automation with voice control integration.", color: "from-neon-purple/20 to-neon-cyan/20" },
  { title: "FinTrack Pro", category: "Web Apps", desc: "Financial portfolio tracker with AI predictions.", color: "from-neon-cyan/20 to-primary/20" },
  { title: "MedConnect", category: "Mobile Apps", desc: "Telemedicine app connecting patients with doctors.", color: "from-primary/20 to-neon-purple/20" },
  { title: "EduVerse LMS", category: "SaaS", desc: "Learning management system with live classes.", color: "from-neon-purple/20 to-neon-cyan/20" },
  { title: "FoodieFleet", category: "Mobile Apps", desc: "On-demand food delivery platform.", color: "from-neon-cyan/20 to-primary/20" },
  { title: "AgriSense", category: "IoT", desc: "Smart farming analytics and crop monitoring.", color: "from-primary/20 to-neon-purple/20" },
  { title: "LegalEase Portal", category: "Web Apps", desc: "Legal advisory platform with document automation.", color: "from-neon-purple/20 to-neon-cyan/20" },
  { title: "StyleMart", category: "E-commerce", desc: "Fashion e-commerce with AR try-on feature.", color: "from-neon-cyan/20 to-primary/20" },
  { title: "TravelWise", category: "Mobile Apps", desc: "AI-powered travel planning and booking.", color: "from-primary/20 to-neon-purple/20" },
  { title: "DataPulse Analytics", category: "SaaS", desc: "Business intelligence and data visualization.", color: "from-neon-purple/20 to-neon-cyan/20" },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Portfolio</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-display transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground neon-glow-indigo"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="group glass-card overflow-hidden cursor-pointer transition-shadow duration-500 hover:neon-glow-indigo">
                  <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                    <span className="font-display text-5xl font-bold text-foreground/10 group-hover:text-foreground/25 group-hover:scale-125 transition-all duration-500">
                      {p.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-neon-cyan font-display uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-neon-cyan transition-colors"
                    >
                      <span>Preview</span>
                      <ExternalLink size={14} />
                    </motion.button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
