import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Globe, Smartphone, Palette, PenTool, Film, Brain,
  Cloud, Cog, Cable, Cpu, Rocket, Briefcase,
} from "lucide-react";
import { useRef, MouseEvent } from "react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom web apps, SPAs, and enterprise platforms with modern frameworks." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centric interfaces that are beautiful and highly functional." },
  { icon: PenTool, title: "Graphic Design", desc: "Brand identity, marketing materials, and visual storytelling." },
  { icon: Film, title: "Video Editing", desc: "Professional video production for marketing and social media." },
  { icon: Brain, title: "AI & ML Solutions", desc: "Intelligent systems, NLP, computer vision, and predictive analytics." },
  { icon: Cloud, title: "Cloud & SaaS", desc: "Scalable cloud-native applications and SaaS platform development." },
  { icon: Cog, title: "Automation Systems", desc: "Business process automation, RPA, and workflow optimization." },
  { icon: Cable, title: "API Development", desc: "RESTful and GraphQL APIs with robust documentation." },
  { icon: Cpu, title: "IoT Solutions", desc: "Connected device ecosystems and smart automation platforms." },
  { icon: Rocket, title: "Startup MVP", desc: "Rapid prototyping and MVP development for startups." },
  { icon: Briefcase, title: "Custom Business Software", desc: "Tailored enterprise solutions for complex business needs." },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

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

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Our Services</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <TiltCard className="group glass-card p-6 cursor-pointer transition-shadow duration-500 hover:neon-glow-indigo">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-neon-cyan group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
