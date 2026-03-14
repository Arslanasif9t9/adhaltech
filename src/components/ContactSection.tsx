import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Globe, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (error) throw error;
      toast.success("Message sent successfully! We'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-display text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Contact Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted-foreground">
              Ready to bring your vision to life? Get in touch and let's discuss how ADHAL TECH can help you build something extraordinary.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "arslanahmadt58@gmail.com" },
                { icon: Globe, label: "Fully Remote — Serving Clients Worldwide" },
                { icon: MessageSquare, label: "Available 24/7 for Consultations" },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:neon-glow-indigo transition-shadow duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-neon-cyan transition-colors duration-300" />
                  </div>
                  <span className="text-foreground text-sm">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            {[
              { key: "name" as const, label: "Name", type: "text" },
              { key: "email" as const, label: "Email", type: "email" },
            ].map(({ key, label, type }) => (
              <div key={key} className="relative">
                <input
                  type={type}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={label}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:neon-glow-indigo transition-all duration-300"
                />
              </div>
            ))}
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Message"
              rows={5}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:neon-glow-indigo transition-all duration-300 resize-none"
            />
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity neon-glow-indigo disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
