import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="ADHAL TECH" className="w-8 h-8" />
            <h3 className="font-display text-xl font-bold gradient-text">ADHAL TECH</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Building intelligent digital solutions for the future. A fully remote global software house.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Explore</h4>
          <div className="space-y-2">
            {[
              { label: "About", to: "/#about" },
              { label: "Services", to: "/#services" },
              { label: "Portfolio", to: "/#portfolio" },
              { label: "Contact", to: "/#contact" },
            ].map((link) => (
              <motion.div key={link.label} whileHover={{ x: 4 }}>
                <Link to={link.to} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Company</h4>
          <div className="space-y-2">
            {[
              { label: "Case Studies", to: "/case-studies" },
              { label: "Our Process", to: "/process" },
              { label: "Pricing", to: "/pricing" },
              { label: "Careers", to: "/careers" },
              { label: "FAQ", to: "/faq" },
            ].map((link) => (
              <motion.div key={link.label} whileHover={{ x: 4 }}>
                <Link to={link.to} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Follow Us</h4>
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-indigo transition-all duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ADHAL TECH. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
