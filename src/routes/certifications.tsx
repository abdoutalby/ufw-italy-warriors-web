import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Award, BadgeCheck, FileText, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Official Certifications — UFW Italy" },
      { name: "description", content: "UFW Italy is the officially recognized international partner and franchise representative of UFW INTERNATIONAL." },
      { property: "og:title", content: "UFW Italy — Official Franchise Certification" },
      { property: "og:description", content: "Recognized international franchise of UFW INTERNATIONAL." },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHero eyebrow="OFFICIAL DOCUMENTS" title="Certifications" subtitle="UFW ITALY is the officially recognized international partner and franchise representative of UFW INTERNATIONAL." />

      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">OFFICIAL FRANCHISE</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-6">
              Franchise <span className="gradient-gold-text">Attestation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This certification confirms the official collaboration and authorization granted to
              UFW ITALY to represent and develop the organization internationally in Italy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The certification strengthens the credibility and professionalism of the organization
              on an international level.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { icon: BadgeCheck, text: "Officially recognized by UFW INTERNATIONAL" },
                { icon: ShieldCheck, text: "Authorized to represent UFW in Italy" },
                { icon: Award, text: "Authorized international event organization" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={20} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground/90 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate placeholder */}
          <div className="relative">
            <div className="absolute -inset-3 gradient-gold-bg opacity-20 blur-2xl" />
            <div className="relative aspect-[3/4] gold-border bg-card p-10 flex flex-col items-center justify-center text-center shadow-elegant">
              <div className="w-20 h-20 rounded-full gradient-gold-bg grid place-items-center mb-6">
                <Award size={36} className="text-primary-foreground" />
              </div>
              <p className="text-[10px] tracking-[0.4em] text-gold mb-3">OFFICIAL CERTIFICATE</p>
              <h3 className="font-display text-2xl uppercase tracking-wider mb-2">
                Franchise Attestation
              </h3>
              <p className="font-display text-sm tracking-[0.3em] gradient-gold-text mb-6">
                UFW INTERNATIONAL × UFW ITALY
              </p>
              <div className="my-6 w-16 h-px gradient-gold-bg" />
              <p className="text-xs text-muted-foreground max-w-xs">
                Official franchise certificate document. The signed attestation will be displayed
                here.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-xs text-gold tracking-[0.3em]">
                <FileText size={14} /> CERTIFICATE PDF — COMING SOON
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-gold mb-4">INTERNATIONAL RECOGNITION</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
            <span className="gradient-gold-text">Trust. Authority. Standards.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            All UFW ITALY events, partnerships and athletic projects operate under the standards
            and supervision of the UFW INTERNATIONAL organization.
          </p>
        </div>
      </section>
    </>
  );
}
