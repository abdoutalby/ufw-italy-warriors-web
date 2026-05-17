import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/ufw-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="UFW Italy" className="h-14 w-14" width={56} height={56} loading="lazy" />
            <div>
              <div className="font-display text-2xl tracking-widest text-gold">UFW ITALY</div>
              <div className="text-xs tracking-[0.3em] text-muted-foreground">THE ROAD OF WARRIORS</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-md">
            Official Italian branch of UFW INTERNATIONAL. International combat sports organization
            specialized in Kickboxing, K1, MMA and professional fight events.
          </p>
          <p className="mt-4 text-sm">
            <span className="text-muted-foreground">President: </span>
            <span className="text-gold font-semibold">Leonardo Marinelli</span>
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] text-gold mb-4">EXPLORE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About UFW Italy</Link></li>
            <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            <li><Link to="/partners" className="hover:text-gold">Partners & Sponsors</Link></li>
            <li><Link to="/certifications" className="hover:text-gold">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] text-gold mb-4">FOLLOW</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 grid place-items-center gold-border hover:bg-gold hover:text-primary-foreground transition-colors"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 grid place-items-center gold-border hover:bg-gold hover:text-primary-foreground transition-colors"><Instagram size={16} /></a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 grid place-items-center gold-border hover:bg-gold hover:text-primary-foreground transition-colors text-xs font-bold">TT</a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 grid place-items-center gold-border hover:bg-gold hover:text-primary-foreground transition-colors"><Youtube size={16} /></a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            contact@ufw-world.com<br />
            WhatsApp: +216 26 76 99 62
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© 2026 UFW ITALY — All Rights Reserved</p>
          <p className="tracking-[0.3em]">HONOR · DISCIPLINE · RESPECT</p>
        </div>
      </div>
    </footer>
  );
}
