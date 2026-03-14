import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#hero", to: "/" },
  { label: "About", href: "#about", to: "/#about" },
  { label: "Services", href: "#services", to: "/#services" },
  { label: "Portfolio", href: "#portfolio", to: "/#portfolio" },
  { label: "Case Studies", href: "/case-studies", to: "/case-studies" },
  { label: "Process", href: "/process", to: "/process" },
  { label: "Pricing", href: "/pricing", to: "/pricing" },
  { label: "Careers", href: "/careers", to: "/careers" },
  { label: "FAQ", href: "/faq", to: "/faq" },
  { label: "Contact", href: "#contact", to: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item: typeof navItems[0]) => {
    setMobileOpen(false);
    if (item.to.startsWith("/#") && isHome) {
      const el = document.querySelector(item.to.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderLink = (item: typeof navItems[0], className: string) => {
    if (item.to.startsWith("/#")) {
      if (isHome) {
        return (
          <a href={item.href} onClick={() => setMobileOpen(false)} className={className}>
            {item.label}
          </a>
        );
      }
      return (
        <Link to={item.to} onClick={() => setMobileOpen(false)} className={className}>
          {item.label}
        </Link>
      );
    }
    return (
      <Link to={item.to} onClick={() => setMobileOpen(false)} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ADHAL TECH" className="w-8 h-8" />
            <span className="font-display text-xl font-bold gradient-text">ADHAL TECH</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.div key={item.label} whileHover={{ y: -2 }}>
                {renderLink(
                  item,
                  `text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${
                    location.pathname === item.to ? "text-foreground after:scale-x-100" : ""
                  }`
                )}
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 flex flex-col items-center gap-5 lg:hidden overflow-y-auto pb-10"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {renderLink(
                  item,
                  "font-display text-xl text-foreground hover:text-primary transition-colors"
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
