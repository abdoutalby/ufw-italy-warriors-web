import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — UFW Italy Experience" },
      { name: "description", content: "Discover the best moments from UFW Italy international championships, fights, face offs and training camps." },
      { property: "og:title", content: "UFW Italy — The Experience" },
      { property: "og:description", content: "Photos from international events, fights and seminars." },
      { property: "og:image", content: "/og-gallery.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { src: g1, label: "Face Offs" },
  { src: g2, label: "Fighters" },
  { src: g3, label: "Championships" },
  { src: g4, label: "Arena Nights" },
  { src: g5, label: "Training Camps" },
  { src: g6, label: "Behind The Scenes" },
];

const categories = ["Fighters", "Face Offs", "Championships", "Awards", "International Guests", "Training Camps", "Behind The Scenes"];

function Gallery() {
  return (
    <>
      <PageHero eyebrow="THE EXPERIENCE" title="UFW Gallery" subtitle="Explore the best moments from our international events, championships, seminars and fight nights." />

      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <span key={c} className="px-4 py-2 text-xs tracking-[0.2em] gold-border text-foreground/80 hover:text-gold hover:bg-card cursor-pointer transition-colors">
              {c.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure key={i} className="group relative overflow-hidden gold-border aspect-[4/5]">
              <img
                src={it.src}
                alt={it.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-[10px] tracking-[0.3em] text-gold mb-1">UFW MOMENT</p>
                <p className="font-display text-xl tracking-wider text-foreground">{it.label.toUpperCase()}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
