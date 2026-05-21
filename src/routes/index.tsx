import { Link } from "@/components/Link";
import { ArrowRight, Calendar, MapPin, Shield, ShieldCheck, Flame, Trophy, Globe, Users, Play, Star, MessageCircle, Handshake, Ticket, Briefcase, Download, MessageSquare, Send } from "lucide-react";
import hero from "@/assets/hero.jpeg";
import leonardo from "@/assets/leonardo.jpeg";

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

export default function Home() {
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

      {/* ACTION GRID */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-gold mb-3">GET INVOLVED</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider">
              <span className="gradient-gold-text">Join the Movement</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* FIGHTERS */}
            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Users className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">FIGHTERS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Discover the warriors behind UFW Italy. Our fighters represent discipline, courage, respect and the true spirit of combat sports. Each athlete carries a story, a mission and the ambition to rise on the international stage.
              </p>
              <Link
                to="/fighters"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                VIEW FIGHTERS <ArrowRight size={14} />
              </Link>
            </div>

            {/* SPONSORS */}
            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Star className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">SPONSORS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Become part of a growing international combat sports project. UFW Italy offers sponsors strong visibility, professional branding opportunities and access to a passionate sports audience across Italy and internationally.
              </p>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                BECOME A SPONSOR <ArrowRight size={14} />
              </Link>
            </div>

            {/* CONTACT US */}
            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <MessageCircle className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">CONTACT US</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                For partnerships, events, sponsorship, fighter registration or international collaboration, contact the official UFW Italy team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                CONTACT US <ArrowRight size={14} />
              </Link>
            </div>

            {/* WATCH EVENTS */}
            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Play className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">WATCH EVENTS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Experience the energy of UFW events: elite fighters, international guests, powerful emotions and unforgettable fight nights.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                WATCH EVENTS <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ACTION GRID 2 */}
      <section className="py-24 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-gold mb-3">QUICK ACCESS</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider">
              <span className="gradient-gold-text">Official Actions</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Calendar className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">EVENT DETAILS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Get full information about upcoming UFW Italy events, including date, location, fight card, program and participation details.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                EVENT DETAILS <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Handshake className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">REGISTER AS FIGHTER</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Are you a fighter, coach or team representative? Apply now to participate in upcoming UFW Italy events and international fight opportunities.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                REGISTER AS FIGHTER <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Ticket className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">BUY TICKETS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Reserve your place and live the UFW experience from inside the arena. Limited seats available for each event.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                BUY TICKETS <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Briefcase className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">PARTNERSHIP REQUEST</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                UFW Italy welcomes serious partners, sports organizations, gyms, media groups and international promoters interested in professional collaboration.
              </p>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                PARTNERSHIP REQUEST <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <ShieldCheck className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">VIEW CERTIFICATE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                UFW Italy operates as an official international partner and representative under the UFW International vision and franchise development program.
              </p>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                VIEW CERTIFICATE <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Download className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">DOWNLOAD CERTIFICATE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Download the official franchise and partnership attestation confirming the official collaboration between UFW Italy and UFW International.
              </p>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                DOWNLOAD CERTIFICATE <ArrowRight size={14} />
              </Link>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <MessageSquare className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">CONTACT VIA WHATSAPP</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Need a fast response? Contact the UFW Italy team directly via WhatsApp for events, partnerships and official requests.
              </p>
              <a
                href="https://wa.me/393396309178"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                CONTACT VIA WHATSAPP <ArrowRight size={14} />
              </a>
            </div>

            <div className="group p-8 gold-border bg-card hover:shadow-gold transition-all flex flex-col">
              <Send className="text-gold mb-5" size={32} />
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">SEND MESSAGE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Send us your request and our team will contact you as soon as possible.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-gold font-display tracking-[0.15em] text-xs hover:gap-3 transition-all"
              >
                SEND MESSAGE <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-gold mb-3">LEGAL & POLICIES</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-10">
            <span className="gradient-gold-text">Official Website Documents</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/privacy"
              className="inline-flex items-center justify-center px-8 py-4 gold-border text-gold font-display tracking-[0.2em] text-xs hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              to="/legal"
              className="inline-flex items-center justify-center px-8 py-4 gold-border text-gold font-display tracking-[0.2em] text-xs hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              LEGAL NOTICE
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center justify-center px-8 py-4 gold-border text-gold font-display tracking-[0.2em] text-xs hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              TERMS & CONDITIONS
            </Link>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.02] transition-transform"
            >
              BECOME A PARTNER <ArrowRight size={16} />
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center px-10 py-4 gold-border text-gold font-display tracking-[0.2em] text-sm hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              PARTNERSHIP REQUEST
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
