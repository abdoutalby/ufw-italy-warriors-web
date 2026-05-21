import { PageHero } from "@/components/PageHero";
import { Handshake } from "lucide-react";

const categories = [
  "Sports Equipment",
  "Nutrition Brands",
  "Fightwear Brands",
  "Gyms & Fitness Centers",
  "International Organizations",
  "Media Partners",
  "Streaming Partners",
  "Travel Partners",
];

export default function Partners() {
  return (
    <>
      <PageHero eyebrow="OUR NETWORK" title="Partners & Sponsors" subtitle="UFW ITALY collaborates with international organizations, sponsors and strategic partners to develop world-class combat sports experiences." />

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-gold mb-3">OFFICIAL SPONSORS</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
              Powering the <span className="gradient-gold-text">Road of Warriors</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/2] gold-border bg-card grid place-items-center text-muted-foreground hover:bg-background transition-colors"
              >
                <div className="text-center px-4">
                  <Handshake size={28} className="text-gold mx-auto mb-2 opacity-60" />
                  <p className="text-[10px] tracking-[0.3em]">SPONSOR {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-muted-foreground">
            Sponsor logos will be added here. Contact us to become an official partner.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-gold mb-3">SPONSORSHIP CATEGORIES</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
              <span className="gradient-gold-text">Partnership Opportunities</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c) => (
              <div key={c} className="p-6 gold-border text-center hover:bg-background transition-colors">
                <p className="font-display text-sm tracking-[0.2em] text-foreground">{c.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-wider mb-6">
            Become an <span className="gradient-gold-text">official partner</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            International cooperation is one of the foundations of our development strategy.
            Join the UFW Italy network and expand your brand on the international combat sports stage.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-10 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.02] transition-transform">
            CONTACT PARTNERSHIPS
          </a>
        </div>
      </section>
    </>
  );
}
