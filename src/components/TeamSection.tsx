import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Daniyal Rasool", role: "CEO & Founder", initials: "DR" },
  { name: "Arslan Ahmad", role: "Project Manager", initials: "AA" },
  { name: "Laila Hassan", role: "Marketing Manager", initials: "LH" },
  { name: "Husnain Mehmood", role: "Social Media Manager", initials: "HM" },
  { name: "Ali Komail", role: "Content Manager", initials: "AK" },
];

const TeamSection = () => (
  <section id="team" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Our People</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Leadership Team</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group glass-card p-8 text-center hover-lift"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan via-primary to-neon-purple mx-auto mb-5 flex items-center justify-center">
              <span className="font-display text-xl font-bold text-primary-foreground">{member.initials}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
            <p className="text-sm text-neon-cyan mt-1">{member.role}</p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary mx-auto cursor-pointer transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
