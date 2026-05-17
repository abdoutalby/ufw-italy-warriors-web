import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Calendar, MapPin, Users } from "lucide-react";
import campImg from "@/assets/italia_camp_soon.jpeg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "International Events — UFW Italy" },
      { name: "description", content: "UFW Italy international fight events, championships, training camps and seminars." },
      { property: "og:title", content: "UFW Italy — International Events" },
      { property: "og:description", content: "Discover our upcoming international combat sports events." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

const events = [
  {
    title: "UFW 27 — The Road of Warriors",
    place: "Tunisia",
    date: "May 24, 2026",
    desc: "Elite Kickboxing & K1 event featuring international fighters and special guests.",
    tag: "FEATURED EVENT",
    featured: true,
  },
  {
    title: "UFW Italy International Camp",
    place: "Italy",
    date: "Coming Soon",
    desc: "International seminar and training camp for fighters, judges, coaches and promoters.",
    tag: "TRAINING CAMP",
  },
  {
    title: "UFW International Experience",
    place: "Italy",
    date: "Coming Soon",
    desc: "Professional combat sports experience gathering international organizations and elite fighters.",
    tag: "ELITE EVENT",
  },
];

function Events() {
  return (
    <>
      <PageHero eyebrow="UPCOMING" title="International Events" subtitle="Official international fight events, championships, training camps and professional combat experiences." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {events.map((e) => (
            <article
              key={e.title}
              className={`group gold-border transition-all hover:shadow-gold overflow-hidden ${e.featured ? "bg-card" : ""}`}
            >
              {/* Camp image banner for coming-soon events */}
              {e.date === "Coming Soon" && (
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={campImg}
                    alt="UFW Italy International Camp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-gold bg-background/70 px-3 py-1 backdrop-blur-sm">
                    {e.tag}
                  </span>
                </div>
              )}

              <div className={`grid md:grid-cols-[1fr_2fr] gap-8 p-8 md:p-12`}>
                <div className="border-r border-border pr-8">
                  {e.date !== "Coming Soon" && (
                    <p className="text-[10px] tracking-[0.3em] text-gold mb-4">{e.tag}</p>
                  )}
                  <div className="font-display text-5xl md:text-6xl gradient-gold-text leading-none">
                    {e.date.split(" ")[0] === "Coming" ? "TBA" : e.date.split(",")[0].split(" ")[1]}
                  </div>
                  <div className="font-display text-sm tracking-[0.3em] text-foreground mt-2">
                    {e.date.split(" ")[0] === "Coming" ? "COMING SOON" : `${e.date.split(" ")[0].toUpperCase()} ${e.date.split(",")[1]?.trim() || ""}`}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-gold" /> {e.place}
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-4 group-hover:text-gold transition-colors">
                    {e.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {["Kickboxing", "K1", "International Fighters", "Special Guests"].map((t) => (
                      <span key={t} className="px-3 py-1 text-[10px] tracking-[0.2em] gold-border text-gold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Users className="mx-auto text-gold mb-6" size={40} />
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-4">
            Want to <span className="gradient-gold-text">fight on the card?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Fighter applications, matchmaking and event promotion enquiries are reviewed by the
            UFW Italy team.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.02] transition-transform">
            <Calendar size={16} /> APPLY NOW
          </a>
        </div>
      </section>
    </>
  );
}
