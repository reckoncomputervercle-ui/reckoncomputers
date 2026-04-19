import { CreditCard, Sparkles } from "lucide-react";

const BANK_OFFERS = [
  {
    bank: "HDFC Bank",
    headline: "7.5%",
    sub: "Instant Discount",
    max: "up to ₹7,500",
    min: "Min ₹7,500",
    type: "Credit Card EMI",
    validTill: "30 Apr 2026",
    bg: "#004C8F",
    accent: "#ED232A",
  },
  {
    bank: "RBL Bank",
    headline: "₹4,000",
    sub: "Flat Instant Discount",
    max: "up to ₹4,000",
    min: "Min ₹20,000",
    type: "Credit Card EMI",
    validTill: "30 Apr 2026",
    bg: "#0F1E44",
    accent: "#E01C3D",
  },
  {
    bank: "DBS Bank",
    headline: "10%",
    sub: "Instant Discount",
    max: "up to ₹3,000",
    min: "Min ₹15,000",
    type: "EMI & Non-EMI",
    validTill: "30 Jun 2026",
    bg: "#C8102E",
    accent: "#FFFFFF",
  },
  {
    bank: "Bank of Baroda",
    headline: "10%",
    sub: "Instant Discount",
    max: "up to ₹3,000",
    min: "Min ₹7,500",
    type: "BOB Card EMI",
    validTill: "30 Jun 2026",
    bg: "#F37021",
    accent: "#003B5C",
  },
  {
    bank: "Yes Bank",
    headline: "5%",
    sub: "Instant Discount",
    max: "up to ₹2,500",
    min: "Min ₹10,000",
    type: "Credit Card EMI",
    validTill: "30 Apr 2026",
    bg: "#0066B3",
    accent: "#FFD520",
  },
];

function OfferCard({ offer }) {
  return (
    <div
      className="relative shrink-0 w-[300px] md:w-[340px] h-[170px] p-5 text-white overflow-hidden flex flex-col justify-between"
      style={{ backgroundColor: offer.bg }}
      data-testid={`offer-${offer.bank.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Subtle circuit / shine overlay */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
        style={{ backgroundColor: offer.accent }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-10"
        style={{ backgroundColor: offer.accent }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 opacity-80" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-90">
            {offer.type}
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-70">
          Valid · {offer.validTill}
        </span>
      </div>

      <div className="relative">
        <div className="font-display font-bold text-[40px] leading-none tracking-tight">
          {offer.headline}
        </div>
        <div className="mt-1 text-[13px] opacity-90">
          {offer.sub} {offer.max}
        </div>
      </div>

      <div className="relative flex items-end justify-between">
        <div className="font-display font-semibold text-[15px] leading-tight">
          {offer.bank}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
          {offer.min}
        </div>
      </div>
    </div>
  );
}

export default function BankOffersMarquee() {
  const loop = [...BANK_OFFERS, ...BANK_OFFERS];
  return (
    <div
      className="relative overflow-hidden border-t border-white/10 bg-[#0A0F1C]"
      data-testid="bank-offers-marquee"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-6 pb-4 flex items-center gap-3">
        <Sparkles className="w-4 h-4 text-[#06B6D4]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#06B6D4]">
          Bank Offers · Pay with EMI · Save Instantly
        </span>
      </div>
      <div
        className="relative py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div className="flex gap-4 rc-marquee-track group-hover:[animation-play-state:paused]">
          {loop.map((o, i) => (
            <OfferCard key={`${o.bank}-${i}`} offer={o} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-5 flex items-center justify-between gap-3 flex-wrap">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 max-w-xl">
          * Standard bank T&amp;Cs apply. One card one transaction during offer
          period. Offers cannot be clubbed. Check store for full details.
        </p>
        <a
          href="https://wa.me/919823177666?text=Hi%20Reckon%2C%20I%27d%20like%20to%20know%20more%20about%20the%20bank%20EMI%20offers."
          target="_blank"
          rel="noopener noreferrer"
          data-testid="offers-enquire-btn"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#06B6D4] hover:underline"
        >
          Enquire about offers →
        </a>
      </div>
    </div>
  );
}
