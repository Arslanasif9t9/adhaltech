import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Python", "Django", "Node.js",
  "Flutter", "React Native", "TensorFlow", "PyTorch", "AWS", "Azure",
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
  "Figma", "Firebase", "Supabase", "Tailwind CSS", "FastAPI", "OpenAI",
];

const TechSection = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Our Stack</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Technologies We Use</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -4 }}
            className="glass-card px-5 py-3 font-display text-sm text-foreground hover:text-neon-cyan hover:neon-glow-cyan transition-all duration-300 cursor-default animate-float"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechSection;
