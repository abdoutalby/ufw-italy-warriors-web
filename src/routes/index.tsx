import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Shield, Flame, Trophy, Globe, Users } from "lucide-react";
import hero from "@/assets/hero-fighter.jpg";
import leonardo from "@/assets/leonardo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UFW ITALY — The Road of Warriors" },
      { name: "description", content: "Official Italian branch of UFW INTERNATIONAL. Kickboxing, K1, MMA, Muay Thai and Boxing — international fight events and professional combat experiences." },
      { property: "og:title", content: "UFW ITALY — The Road of Warriors" },
      { property: "og:description", content: "International combat sports organization. Championships, training camps and professional fight experiences." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const values = [
  { icon: Shield, label: "HONOR" },
  { icon: Flame, label: "DISCIPLINE" },
  { icon: Users, label: "RESPECT" },
  { icon: Trophy, label: "PROFESSIONALISM" },
  { icon: Globe, label: "INTERNATIONAL UNITY" },
];

const events = [
  { name: "UFW 27 — The Road of Warriors", place: "Tunisia", date: "May 24, 2026", tag: "Kickboxing • K1" },
  { name: "UFW Italy International Camp", place: "Italy", date: "Coming Soon", tag: "Training Camp" },
  { name: "World Combat Experience", place: "Italy", date: "Coming Soon", tag: "Elite Event" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="UFW fighter in the ring"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 noise-texture opacity-30" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-xs sm:text-sm tracking-[0.5em] text-gold mb-6 animate-fade-in">
            INTERNATIONAL COMBAT SPORTS ORGANIZATION
          </p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl uppercase tracking-wider leading-[0.9]">
            <span className="block gradient-gold-text">UFW</span>
            <span className="block text-foreground">ITALY</span>
          </h1>
          <div className="my-8 mx-auto w-32 h-px gradient-gold-bg" />
          <p className="font-display text-xl sm:text-3xl tracking-[0.3em] text-foreground/90">
            THE ROAD OF WARRIORS
          </p>
          <p className="mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Kickboxing • K1 • MMA • Muay Thai • Boxing — Official international events,
            championships, training camps and professional fight experiences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.02] transition-transform"
            >
              JOIN THE EXPERIENCE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-8 py-4 gold-border text-gold font-display tracking-[0.2em] text-sm hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              UPCOMING EVENTS
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-muted-foreground animate-pulse">
          SCROLL
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-gold mb-6">WELCOME</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-8">
            <span className="gradient-gold-text">Welcome to UFW Italy</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            UFW – Ultimate Fighting Warriors is an international combat sports organization focused
            on developing high-level events, international cooperation and fighter opportunities
            worldwide.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            UFW ITALY represents the Italian branch of the organization, connecting athletes,
            coaches, promoters and fans through professional events and international projects.
          </p>
        </div>
      </section>

      {/* PRESIDENT */}
      <section className="py-24 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-gold-bg opacity-20 blur-2xl" />
            <img
              src={leonardo}
              alt="Leonardo Marinelli, President of UFW Italy"
              className="relative w-full max-w-md mx-auto object-cover gold-border shadow-elegant"
              width={800}
              height={1000}
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">OFFICIAL ITALIAN REPRESENTATION</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
              Leonardo<br /><span className="gradient-gold-text">Marinelli</span>
            </h2>
            <p className="text-sm tracking-[0.3em] text-gold mb-6">PRESIDENT OF UFW ITALY</p>
            <p className="text-muted-foreground leading-relaxed">
              Under his leadership, UFW ITALY develops international collaborations, professional
              events, training camps and strategic partnerships across Europe and worldwide.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Italian branch plays a major role in the expansion of the UFW INTERNATIONAL
              network — bridging countries, athletes and organizations through sport, discipline
              and respect.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-gold font-display tracking-[0.2em] text-sm hover:gap-3 transition-all"
            >
              DISCOVER OUR STORY <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-gold mb-4">OUR VALUES</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-16">
            <span className="gradient-gold-text">The Warrior's Code</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="group p-6 gold-border hover:bg-card transition-colors">
                <Icon className="mx-auto mb-4 text-gold group-hover:scale-110 transition-transform" size={32} />
                <p className="font-display text-sm tracking-[0.2em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-24 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-gold mb-3">UPCOMING</p>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider">
                <span className="gradient-gold-text">International Events</span>
              </h2>
            </div>
            <Link to="/events" className="text-gold font-display tracking-[0.2em] text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
              VIEW ALL <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <article key={e.name} className="group p-8 bg-background gold-border hover:shadow-gold transition-all">
                <p className="text-[10px] tracking-[0.3em] text-gold mb-4">{e.tag}</p>
                <h3 className="font-display text-xl uppercase tracking-wider mb-6 group-hover:text-gold transition-colors">
                  {e.name}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> {e.place}</p>
                  <p className="flex items-center gap-2"><Calendar size={14} className="text-gold" /> {e.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 noise-texture opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider mb-6">
            Become part of the <span className="gradient-gold-text">UFW network</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Partnerships, sponsorships, fighter representation — connect with the official Italian
            branch of UFW INTERNATIONAL.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.02] transition-transform"
          >
            BECOME A PARTNER <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
