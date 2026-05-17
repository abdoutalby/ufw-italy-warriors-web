import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import leonardo from "@/assets/leonardo.jpeg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UFW Italy — Official Italian Branch of UFW International" },
      { name: "description", content: "UFW ITALY is the official Italian branch of UFW INTERNATIONAL, led by President Leonardo Marinelli." },
      { property: "og:title", content: "About UFW Italy" },
      { property: "og:description", content: "Official Italian branch of UFW INTERNATIONAL." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const specialties = [
  "International combat sports events",
  "Professional Kickboxing & K1 championships",
  "MMA & Muay Thai events",
  "International fighter exchanges",
  "Sports seminars & camps",
  "International sports cooperation",
  "Professional event management",
  "Franchise and partnership development",
];

function About() {
  return (
    <>
      <PageHero eyebrow="WHO WE ARE" title="About UFW Italy" subtitle="The official Italian branch of UFW INTERNATIONAL — building bridges between countries, athletes and organizations through sport, discipline and respect." />

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">OUR ORGANIZATION</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-6">
              Professional. <span className="gradient-gold-text">International.</span> Uncompromising.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              UFW ITALY is a professional combat sports organization specialized in elevating
              fighters, events and the sport itself to the highest international standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded with an international vision, UFW aims to build bridges between countries,
              athletes and organizations through sport, discipline and respect.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">WE SPECIALIZE IN</p>
            <ul className="space-y-3">
              {specialties.map((s) => (
                <li key={s} className="flex items-start gap-3 p-3 border-b border-border">
                  <Check size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={leonardo} alt="Leonardo Marinelli" className="w-full max-w-md mx-auto gold-border shadow-elegant" width={800} height={1000} loading="lazy" />
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">PRESIDENT</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">
              Leonardo <span className="gradient-gold-text">Marinelli</span>
            </h2>
            <p className="text-sm tracking-[0.3em] text-gold mb-6">PRESIDENT OF UFW ITALY</p>
            <p className="text-muted-foreground leading-relaxed">
              Under the leadership of Leonardo Marinelli, UFW ITALY drives the expansion of the
              UFW INTERNATIONAL network — developing professional events, strategic partnerships
              and international collaborations across Europe and worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-gold mb-4">OUR MISSION</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-8">
            <span className="gradient-gold-text">"Build the global ring."</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To develop a strong international combat sports network capable of connecting
            organizations, athletes and promoters worldwide through professional events,
            strategic collaborations and a shared commitment to professionalism.
          </p>
        </div>
      </section>
    </>
  );
}
