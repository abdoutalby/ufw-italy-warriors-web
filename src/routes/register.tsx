import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register as a Fighter — UFW Italy" },
      { name: "description", content: "Apply as a fighter, coach or team representative for upcoming UFW Italy events and international fight opportunities." },
      { property: "og:title", content: "Register as a Fighter — UFW Italy" },
      { property: "og:description", content: "Join UFW Italy and apply for upcoming events, seminars and international fight opportunities." },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: Register,
});

function Register() {
  return (
    <>
      <PageHero
        eyebrow="FIGHTER REGISTRATION"
        title="Register as a Fighter"
        subtitle="Are you a fighter, coach or team representative? Apply now for upcoming UFW Italy events and international fight opportunities."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold mb-4">JOIN UFW ITALY</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-6">Start your international fighting journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              UFW Italy offers fighters and teams the opportunity to compete, train and grow on an international stage.
              Register today to receive event invitations, athlete support and personalized fight placement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Professional fight and tournament registration",
              "International match-making and fighter placement",
              "Coaches and teams invited for official representation",
              "Access to elite training seminars and camps",
            ].map((item) => (
              <div key={item} className="p-6 bg-card gold-border">
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Need personalized guidance or team registration details? Our official staff can assist with your application.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 gradient-gold-bg text-primary-foreground font-display tracking-[0.2em] text-sm shadow-gold hover:scale-[1.02] transition-transform"
            >
              CONTACT THE TEAM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
