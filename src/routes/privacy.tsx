import { PageHero } from "@/components/PageHero";

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY POLICY"
        title="Privacy & Data Protection"
        subtitle="Learn how UFW Italy protects your personal information and respects your privacy when using our website and contact forms."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-muted-foreground">
          <p>
            UFW Italy is committed to safeguarding your personal information. We collect only the data needed to respond to your requests, manage event participation, and support sponsor communication.
          </p>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">What we collect</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Contact details submitted through our forms and emails</li>
              <li>Event registration and fighter application information</li>
              <li>Communications for sponsorship and partnership requests</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-wider">How we use it</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To answer inquiries and manage event participation</li>
              <li>To coordinate sponsorships, partnerships and fighter registrations</li>
              <li>To improve our website experience and communication efforts</li>
            </ul>
          </div>
          <p>
            We do not share your personal data with third parties unless required for event organization, legal obligations, or with your explicit consent.
          </p>
        </div>
      </section>
    </>
  );
}
