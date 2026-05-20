import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — UFW Italy" },
      { name: "description", content: "Read the general terms and conditions related to website use, event information, registrations and official communications." },
      { property: "og:title", content: "Terms & Conditions — UFW Italy" },
      { property: "og:description", content: "Read the general terms and conditions related to website use, event information, registrations and official communications." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="TERMS & CONDITIONS"
        title="Website Terms & Conditions"
        subtitle="Read the general terms and conditions related to website use, event information, registrations and official communications."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-muted-foreground">
          <p>
            By using the UFW Italy website, you agree to the terms and conditions governing access to and usage of the site, event details, and communication channels.
          </p>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">Website use</h3>
            <p>
              The content on this website is provided for informational purposes only. UFW Italy makes reasonable efforts to ensure accuracy, but event details and availability are subject to change.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">Registrations and participation</h3>
            <p>
              Participation in any event, fighter registration or partnership request is subject to UFW Italy's approval and the rules of the respective event or program.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">Communications</h3>
            <p>
              All messages and requests submitted through the website are treated as official inquiries and may be used to improve our services and event planning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
