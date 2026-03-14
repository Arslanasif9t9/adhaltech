import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ParticleBackground from "@/components/ParticleBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    items: [
      { q: "What is ADHAL TECH?", a: "ADHAL TECH is a fully remote, global software house established in 2021. We specialize in web development, mobile apps, AI/ML solutions, IoT platforms, and cloud-native applications for clients worldwide." },
      { q: "Where is ADHAL TECH located?", a: "We're a 100% remote company with team members across multiple countries. We serve clients in the UK, US, Pakistan, UAE, and beyond." },
      { q: "What industries do you serve?", a: "We work across healthcare, fintech, e-commerce, agriculture, education, logistics, and more. Our diverse experience allows us to bring cross-industry insights to every project." },
    ],
  },
  {
    category: "Projects & Process",
    items: [
      { q: "How long does a typical project take?", a: "Timelines vary by scope. An MVP typically takes 6-10 weeks, a mid-size project 3-4 months, and enterprise solutions 4-8+ months. We provide detailed timelines during the discovery phase." },
      { q: "What is your development methodology?", a: "We follow Agile/Scrum with 2-week sprints. You get regular demos, sprint reviews, and direct communication with the development team throughout the project." },
      { q: "Do you provide post-launch support?", a: "Yes! We offer flexible support plans ranging from 30 days (Starter) to 12 months (Enterprise). This includes bug fixes, performance monitoring, feature updates, and scaling support." },
      { q: "Can I see progress during development?", a: "Absolutely. We provide bi-weekly sprint demos, access to a staging environment, and real-time project tracking through our project management tools." },
    ],
  },
  {
    category: "Technical",
    items: [
      { q: "What technologies do you use?", a: "We work with React, Next.js, Flutter, Python, Node.js, TypeScript, TensorFlow, AWS, Azure, Docker, Kubernetes, and many more. We choose the best stack for each project's unique requirements." },
      { q: "Do you handle hosting and deployment?", a: "Yes, we manage the full deployment pipeline including CI/CD setup, cloud infrastructure (AWS, Azure, GCP), monitoring, and ongoing DevOps support." },
      { q: "Can you integrate with our existing systems?", a: "Absolutely. We specialize in API integrations, legacy system modernization, and building bridges between old and new systems. We'll assess your current setup during discovery." },
    ],
  },
  {
    category: "Pricing & Engagement",
    items: [
      { q: "How much does a project cost?", a: "Every project is unique, so we provide custom quotes based on scope, complexity, and timeline. Contact us for a free consultation and detailed estimate." },
      { q: "What engagement models do you offer?", a: "We offer fixed-price projects, time & materials, and dedicated team models. We'll recommend the best approach based on your project needs and budget." },
      { q: "Do you sign NDAs?", a: "Yes, we're happy to sign NDAs before any project discussions. Your intellectual property and business ideas are always protected." },
    ],
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background relative">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link to="/" className="text-neon-cyan text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Got Questions?</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">FAQs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about working with ADHAL TECH.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          {faqs.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h2 className="font-display text-xl font-bold text-foreground mb-4">{group.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {group.items.map((item, i) => (
                  <AccordionItem key={i} value={`${gi}-${i}`} className="glass-card px-6 border-none">
                    <AccordionTrigger className="font-display text-foreground text-left hover:text-neon-cyan transition-colors hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12">
            <h2 className="font-display text-3xl font-bold gradient-text mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">Our team is ready to help. Reach out and we'll get back to you within 24 hours.</p>
            <Link to="/#contact" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold neon-glow-indigo inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
);

export default FAQ;
