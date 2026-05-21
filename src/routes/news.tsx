import { PageHero } from "@/components/PageHero";
import { ArrowRight, Newspaper } from "lucide-react";

const posts = [
  {
    tag: "ANNOUNCEMENT",
    title: "UFW 27 — The Road of Warriors heads to Tunisia",
    excerpt: "An international card of Kickboxing & K1 fights confirmed for May 24, 2026.",
    date: "April 2026",
  },
  {
    tag: "ORGANIZATION",
    title: "Leonardo Marinelli appointed President of UFW Italy",
    excerpt: "The Italian branch officially launches under the leadership of Leonardo Marinelli.",
    date: "March 2026",
  },
  {
    tag: "PARTNERSHIP",
    title: "UFW Italy strengthens international cooperation",
    excerpt: "New strategic partnerships across Europe to expand the UFW INTERNATIONAL network.",
    date: "February 2026",
  },
];

export default function News() {
  return (
    <>
      <PageHero eyebrow="LATEST" title="UFW News" subtitle="Announcements, event updates and official communications from UFW Italy." />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {posts.map((p) => (
            <article key={p.title} className="group p-8 gold-border hover:bg-card transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-[0.3em] text-gold">{p.tag}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">
                {p.title}
              </h2>
              <p className="text-muted-foreground mb-4">{p.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm text-gold tracking-[0.2em]">
                READ MORE <ArrowRight size={14} />
              </span>
            </article>
          ))}
          <div className="text-center pt-8">
            <Newspaper className="mx-auto text-gold mb-3 opacity-50" size={28} />
            <p className="text-xs tracking-[0.3em] text-muted-foreground">MORE UPDATES COMING SOON</p>
          </div>
        </div>
      </section>
    </>
  );
}
