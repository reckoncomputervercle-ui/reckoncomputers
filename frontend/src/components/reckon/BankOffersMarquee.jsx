const BANK_OFFERS = [
  {
    bank: "HDFC Bank",
    text: "Get 7.5% Instant Discount Upto ₹7,500 on HDFC Bank Credit Card EMI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png",
    alt: "HDFC Bank",
  },
  {
    bank: "RBL Bank",
    text: "Get Instant Discount Upto ₹4,000 on RBL Bank Credit Card EMI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/RBL_Bank_logo.svg/512px-RBL_Bank_logo.svg.png",
    alt: "RBL Bank",
  },
  {
    bank: "DBS Bank",
    text: "Get 10% Instant Discount Upto ₹3,000 on DBS Bank Credit Card EMI / Non-EMI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/DBS_Bank_Logo.svg/512px-DBS_Bank_Logo.svg.png",
    alt: "DBS Bank",
  },
  {
    bank: "Bank of Baroda",
    text: "Get 10% Instant Discount Upto ₹3,000 on Bank of Baroda Card EMI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bank_of_Baroda_logo.svg/512px-Bank_of_Baroda_logo.svg.png",
    alt: "Bank of Baroda",
  },
  {
    bank: "Yes Bank",
    text: "Get 5% Instant Discount Upto ₹2,500 on Yes Bank Credit Card EMI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Yes_Bank_logo.svg/512px-Yes_Bank_logo.svg.png",
    alt: "Yes Bank",
  },
];

function OfferCard({ offer }) {
  return (
    <div
      className="shrink-0 w-[360px] md:w-[420px] h-[140px] bg-white border border-[#E2E8F0] p-4 flex items-center gap-4 hover:border-[#0055FF] transition-colors shadow-sm"
      data-testid={`offer-${offer.bank.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="shrink-0 w-[90px] md:w-[104px] h-full flex items-center justify-center border-r border-[#E2E8F0] pr-4">
        <img
          src={offer.logo}
          alt={offer.alt}
          loading="lazy"
          className="max-h-12 md:max-h-14 max-w-full object-contain"
          onError={(e) => {
            const fallback = document.createElement("span");
            fallback.className =
              "font-display font-bold text-sm text-[#0F172A] text-center";
            fallback.textContent = offer.bank;
            e.currentTarget.replaceWith(fallback);
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] md:text-[14px] leading-snug font-medium text-[#0F172A]">
          {offer.text}
        </p>
        <p className="mt-2 text-[11px] font-semibold text-[#E11D2A]">
          *T&amp;C apply
        </p>
      </div>
    </div>
  );
}

export default function BankOffersMarquee() {
  const loop = [...BANK_OFFERS, ...BANK_OFFERS, ...BANK_OFFERS];
  return (
    <div className="relative bg-white" data-testid="bank-offers-marquee">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-6 pb-3 flex items-end justify-between gap-3 flex-wrap">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#0055FF]">
            Bank Offers
          </div>
          <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-[#0F172A]">
            Pay with EMI · Save instantly
          </h3>
        </div>
        <a
          href="https://wa.me/919823177666?text=Hi%20Reckon%2C%20I%27d%20like%20to%20know%20more%20about%20the%20bank%20EMI%20offers."
          target="_blank"
          rel="noopener noreferrer"
          data-testid="offers-enquire-btn"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0055FF] hover:underline"
        >
          Enquire about offers →
        </a>
      </div>
      <div className="overflow-hidden pb-6 [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
        <div className="flex gap-4 rc-marquee-track">
          {loop.map((o, i) => (
            <OfferCard key={`${o.bank}-${i}`} offer={o} />
          ))}
        </div>
      </div>
    </div>
  );
}
