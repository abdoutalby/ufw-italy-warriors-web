import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="GET IN TOUCH" title="Contact UFW Italy" subtitle="Events, partnerships, fighter representation or international cooperation — reach out to the team." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.5fr] gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] text-gold mb-4">HEADQUARTERS</p>
              <h3 className="font-display text-2xl uppercase tracking-wider mb-2">UFW Italy</h3>
              <p className="flex items-center gap-2 text-muted-foreground"><MapPin size={16} className="text-gold" /> Italy</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs tracking-[0.4em] text-gold">EMAIL</p>
              {[
                ["General", "contact@ufw-world.com"],
                ["International", "international@ufw-world.com"],
                ["Partnership", "partnership@ufw-world.com"],
              ].map(([label, email]) => (
                <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 p-3 gold-border hover:bg-card transition-colors group">
                  <Mail size={16} className="text-gold" />
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-muted-foreground">{label.toUpperCase()}</p>
                    <p className="text-sm group-hover:text-gold transition-colors">{email}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-xs tracking-[0.4em] text-gold mb-3">WHATSAPP</p>
              <a href="https://wa.me/393396309178" className="flex items-center gap-3 p-3 gold-border hover:bg-card transition-colors group">
                <MessageCircle size={16} className="text-gold" />
                <p className="text-sm group-hover:text-gold transition-colors">+39 339 630 9178</p>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 md:p-10 gold-border bg-card space-y-5"
          >
            <div>
              <p className="text-xs tracking-[0.4em] text-gold mb-2">SEND A MESSAGE</p>
              <h3 className="font-display text-2xl uppercase tracking-wider">Get in touch</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Country" name="country" />
              <Field label="Subject" name="subject" required />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.3em] text-gold mb-2">MESSAGE</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-background gold-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.01] transition-transform disabled:opacity-60"
            >
              {sent ? "MESSAGE SENT" : (<>SEND MESSAGE <Send size={14} /></>)}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] text-gold mb-2">{label.toUpperCase()}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background gold-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
