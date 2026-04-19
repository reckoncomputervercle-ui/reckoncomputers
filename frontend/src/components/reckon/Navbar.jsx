import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAPS_URL =
  "https://www.google.com/maps/dir//Reckon+Computers,+Plot+No+22-B,+Opp.+Devgiri+Bank,+Zambad+Estate+Square,+Kalda+Corner,+Shahnoormiya+Darga+Road,+Chhatrapati+Sambhajinagar,+Maharashtra+431005/@20.3822555,85.8290159,9z";

export default function Navbar({ active, onNav, sections }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNav(id);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 rc-glass"
      data-testid="main-nav"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2.5 group"
          data-testid="nav-logo"
        >
          <span className="flex flex-col leading-none text-left">
            <span className="font-display font-extrabold text-[18px] tracking-tight text-[#A30000]">
              RECKON
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A30000]/80">
              Computers
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              data-testid={`nav-${s.id}`}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                active === s.id
                  ? "text-[#0055FF]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#0055FF]" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-location"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E2E8F0] text-[#0F172A] hover:border-[#0055FF] hover:text-[#0055FF] font-medium text-xs transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            Store
          </a>
          <a
            href="tel:+919823177666"
            className="font-mono text-xs text-[#475569] hover:text-[#0055FF] transition-colors"
            data-testid="nav-phone"
          >
            +91 98231 77666
          </a>
          <Button
            onClick={() => handleNav("contact")}
            data-testid="nav-contact-btn"
            className="rounded-none bg-[#0055FF] hover:bg-[#0044CC] text-white px-5"
          >
            Get in touch
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t border-[#E2E8F0] bg-white/95"
          data-testid="nav-mobile-panel"
        >
          <div className="px-5 py-4 flex flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                data-testid={`nav-mobile-${s.id}`}
                className={`text-left py-3 border-b border-[#E2E8F0] font-medium ${
                  active === s.id ? "text-[#0055FF]" : "text-[#0F172A]"
                }`}
              >
                {s.label}
              </button>
            ))}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-mobile-location"
              className="flex items-center gap-2 py-3 border-b border-[#E2E8F0] text-[#0F172A] font-medium"
            >
              <MapPin className="w-4 h-4 text-[#0055FF]" /> Store Location
            </a>
            <Button
              onClick={() => handleNav("contact")}
              className="mt-4 rounded-none bg-[#0055FF] hover:bg-[#0044CC] text-white"
              data-testid="nav-mobile-contact-btn"
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
