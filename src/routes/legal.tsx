import { PageHero } from "@/components/PageHero";

export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL NOTICE"
        title="Official Legal Information"
        subtitle="Official legal information about UFW Italy, website ownership, brand representation and organizational communication."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-muted-foreground">
          <p>
            UFW Italy is the official Italian representative of UFW INTERNATIONAL. This website provides information about our events, sponsorships, and international collaborations.
          </p>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">Ownership</h3>
            <p>
              This website is owned and operated by UFW Italy. All content, branding, and event information are provided under the official franchise agreement with UFW INTERNATIONAL.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">Brand representation</h3>
            <p>
              UFW Italy is authorized to use UFW INTERNATIONAL branding and trademarks under the terms of our international franchise and partnership program.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">Communication</h3>
            <p>
              For official communications, partnership inquiries, or event requests, please use the contact details available on our website. UFW Italy follows the highest professional standards in all correspondence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
