import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of AI in Software Development",
    preview: "How artificial intelligence is transforming the way we build, test, and deploy software at scale.",
    date: "Mar 10, 2026",
    category: "AI",
  },
  {
    title: "Building Scalable SaaS Platforms",
    preview: "Key architectural patterns and best practices for building multi-tenant cloud applications.",
    date: "Feb 28, 2026",
    category: "Cloud",
  },
  {
    title: "IoT in 2026: Trends & Opportunities",
    preview: "Exploring the latest innovations in connected devices and smart automation systems.",
    date: "Feb 15, 2026",
    category: "IoT",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Insights</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Latest from Our Blog</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group glass-card overflow-hidden hover-lift cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-neon-purple/20 flex items-center justify-center">
              <span className="text-4xl font-display font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mt-2 group-hover:text-neon-cyan transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-3">{post.preview}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-primary group-hover:text-neon-cyan transition-colors">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
