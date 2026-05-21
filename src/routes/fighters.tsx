import { PageHero } from "@/components/PageHero";
import { ShieldCheck, Users } from "lucide-react";

const featureList = [
  "International fighters representing UFW Italy",
  "Stories of discipline, courage and respect",
  "Professional training and international competition readiness",
  "Support for athletes, coaches and teams",
  "Access to fight camps, seminars and global events",
];

export default function Fighters() {
  return (
    <>
      <PageHero
        eyebrow="MEET THE WARRIORS"
        title="UFW Italy Fighters"
        subtitle="Discover the athletes who carry the spirit of discipline, courage and international ambition for UFW Italy."
      />

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">OUR ATHLETES</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-6">
              Fighters driven by <span className="gradient-gold-text">honor</span>, <span className="gradient-gold-text">respect</span> and <span className="gradient-gold-text">ambition</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The UFW Italy roster brings together professional fighters, rising talents and veteran competitors ready to represent the organization at national and international levels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each athlete is supported with coaching, event preparation, and world-class opportunities to compete across the UFW International network.
            </p>
          </div>
          <div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <Users size={32} className="text-gold" />
                <div>
                  <p className="text-xs tracking-[0.4em] text-gold uppercase">FIGHTER FOCUS</p>
                  <h3 className="font-display text-2xl uppercase tracking-wider">Athlete development</h3>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {featureList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-gold shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
