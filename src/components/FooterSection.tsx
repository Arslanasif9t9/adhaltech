import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold gradient-text mb-3">ADHAL TECH</h3>
          <p className="text-muted-foreground text-sm">
            Building intelligent digital solutions for the future. A fully remote global software house serving clients across UK, US, Pakistan, and beyond.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ x: 4 }}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </motion.a>
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
