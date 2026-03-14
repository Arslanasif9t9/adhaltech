import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ParticleBackground from "@/components/ParticleBackground";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for MVPs and small projects",
    price: "Custom",
    features: [
      "Single platform (Web or Mobile)",
      "Up to 5 pages/screens",
      "Basic UI/UX design",
      "2 revision rounds",
      "30-day support",
      "Source code delivery",
    ],
    popular: false,
  },
  {
    name: "Growth",
    desc: "For scaling businesses and startups",
    price: "Custom",
    features: [
      "Multi-platform development",
      "Up to 15 pages/screens",
      "Custom UI/UX with prototyping",
      "API integrations",
      "5 revision rounds",
      "90-day support",
      "Performance optimization",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For complex enterprise solutions",
    price: "Custom",
    features: [
      "Unlimited platforms",
      "Unlimited pages/screens",
      "Advanced AI/ML integration",
      "Custom architecture design",
      "Unlimited revisions",
      "12-month support & maintenance",
      "Dedicated project manager",
      "SLA guarantee",
      "Security audit & compliance",
      "24/7 priority support",
    ],
    popular: false,
  },
];

const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology ensures rapid development without compromising quality." },
  { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security practices and 99.9% uptime guarantee." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock support team available across all time zones." },
];

const Pricing = () => (
  <div className="min-h-screen bg-background relative">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Link to="/" className="text-neon-cyan text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Transparent Pricing</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">Investment Plans</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project is unique. We offer flexible plans tailored to your specific needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`glass-card p-8 relative ${plan.popular ? "neon-glow-indigo gradient-border" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-display font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-6">{plan.desc}</p>
                <p className="font-display text-3xl font-bold text-foreground mb-8">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-neon-cyan mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/#contact"
                  className={`w-full py-3 rounded-lg font-display font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground neon-glow-indigo hover:opacity-90"
                      : "glass-card text-foreground hover:bg-secondary/50"
                  }`}
                >
                  Get Quote <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold gradient-text text-center mb-12">
            Why Choose ADHAL TECH?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  </div>
);

export default Pricing;
