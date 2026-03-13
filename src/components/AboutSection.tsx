import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, value: "100+", label: "Projects Delivered" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Cpu, value: "12+", label: "Service Lines" },
  { icon: Rocket, value: "50+", label: "Startups Launched" },
];

const milestones = [
  { year: "2021", title: "Founded", desc: "ADHAL TECH was established with a mission to deliver intelligent digital solutions globally." },
  { year: "2022", title: "Global Expansion", desc: "Expanded client base across UK, US, Pakistan, and the Middle East with 30+ projects delivered." },
  { year: "2023", title: "AI & IoT Era", desc: "Launched AI/ML solutions, IoT platforms, and crossed 60+ successfully delivered projects." },
  { year: "2024", title: "100+ Projects", desc: "Became a trusted partner for startups, delivering MVPs, SaaS platforms, and enterprise software." },
  { year: "2025", title: "Cloud & Automation", desc: "Pioneered cloud-native solutions and automation systems for businesses worldwide." },
  { year: "2026", title: "Continuing Growth", desc: "Scaling operations with new service lines, strategic partnerships, and innovation-first approach." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Who We Are</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mb-4">About ADHAL TECH</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are a fully online global software house delivering multi-vendor platforms, e-commerce systems, IoT solutions, advisory platforms, and custom enterprise software to clients worldwide.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="glass-card p-6 text-center group cursor-default"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:neon-glow-indigo transition-shadow duration-500">
              <s.icon className="w-7 h-7 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-primary to-neon-purple hidden md:block" />
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`md:w-1/2 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-6 inline-block transition-shadow duration-500 hover:neon-glow-indigo"
                >
                  <span className="text-neon-cyan font-display font-bold text-lg">{m.year}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                </motion.div>
              </div>
              <div className="hidden md:flex w-4 h-4 rounded-full bg-primary neon-glow-indigo shrink-0" />
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
