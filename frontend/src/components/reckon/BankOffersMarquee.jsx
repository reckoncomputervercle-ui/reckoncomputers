import React from "react";

// Inline SVG bank logos — always render, no external dependencies
const HdfcLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[110px]">
    <rect x="4" y="4" width="192" height="72" fill="#FFFFFF" stroke="#004C8F" strokeWidth="2" />
    <rect x="4" y="4" width="96" height="72" fill="#004C8F" />
    <rect x="100" y="4" width="96" height="72" fill="#ED232A" />
    <rect x="78" y="26" width="44" height="28" fill="#FFFFFF" />
    <text x="100" y="70" textAnchor="middle" fill="#004C8F" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="10" letterSpacing="1">
      HDFC BANK
    </text>
  </svg>
);

const AmexLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[100px]">
    <rect width="200" height="80" fill="#006FCF" />
    <text x="100" y="34" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" letterSpacing="1">AMERICAN</text>
    <text x="100" y="58" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" letterSpacing="1">EXPRESS</text>
  </svg>
);

const HsbcLogo = () => (
  <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[120px]">
    <g transform="translate(8,8)">
      <polygon points="32,0 64,16 64,48 32,64 0,48 0,16" fill="#DB0011" />
      <polygon points="32,8 56,20 56,44 32,56 8,44 8,20" fill="#FFFFFF" />
      <polygon points="32,8 56,20 32,32" fill="#DB0011" />
      <polygon points="56,20 56,44 32,32" fill="#FFFFFF" />
      <polygon points="56,44 32,56 32,32" fill="#DB0011" />
      <polygon points="32,56 8,44 32,32" fill="#FFFFFF" />
      <polygon points="8,44 8,20 32,32" fill="#DB0011" />
      <polygon points="8,20 32,8 32,32" fill="#FFFFFF" />
    </g>
    <text x="92" y="52" fill="#0F172A" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="34" letterSpacing="1">HSBC</text>
  </svg>
);

const OneCardLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[100px]">
    <rect width="200" height="80" rx="6" fill="#0F172A" />
    <text x="100" y="54" textAnchor="middle" fill="#FFFFFF" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="700" fontSize="42">One</text>
  </svg>
);

const YesBankLogo = () => (
  <svg viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[110px]">
    <path d="M 4 12 L 28 60 L 52 12" stroke="#ED1C24" strokeWidth="10" fill="none" strokeLinecap="round" />
    <text x="60" y="54" fill="#004B93" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" letterSpacing="1">YES BANK</text>
  </svg>
);

const RblLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[100px]">
    <rect width="200" height="80" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
    <text x="100" y="36" textAnchor="middle" fill="#DC2626" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26" letterSpacing="2">RBL</text>
    <text x="100" y="62" textAnchor="middle" fill="#DC2626" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" letterSpacing="4">BANK</text>
  </svg>
);

const DbsLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[100px]">
    <rect width="200" height="80" fill="#ED1C24" />
    <text x="100" y="56" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="44" letterSpacing="2">DBS</text>
  </svg>
);

const BarodaLogo = () => (
  <svg viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg" className="max-h-14 max-w-[120px]">
    <g transform="translate(6,10)">
      <circle cx="30" cy="30" r="28" fill="#F37021" />
      <text x="30" y="38" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24">b</text>
    </g>
    <text x="72" y="36" fill="#F37021" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16">Bank of</text>
    <text x="72" y="58" fill="#F37021" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18">Baroda</text>
  </svg>
);

const BANK_OFFERS = [
  {
    bank: "HDFC Bank",
    text: "Get 7.5% Instant Discount Upto ₹7,500 on HDFC Bank Credit Card EMI",
    svg: <HdfcLogo />,
  },
  {
    bank: "American Express",
    text: "Get 5% Instant Discount Upto ₹20,000 on American Express Card EMI transactions",
    svg: <AmexLogo />,
  },
  {
    bank: "HSBC Bank",
    text: "Get Upto ₹12,000 Instant Discount on HSBC Bank Cards for EMI and Non-EMI",
    svg: <HsbcLogo />,
  },
  {
    bank: "OneCard",
    text: "Get Upto ₹20,000 Instant Discount on OneCard Credit Card EMI",
    svg: <OneCardLogo />,
  },
  {
    bank: "Yes Bank",
    text: "Get 5% Instant Discount Upto ₹2,500 on YES Bank Credit Card EMI",
    svg: <YesBankLogo />,
  },
  {
    bank: "RBL Bank",
    text: "Get Instant Discount Upto ₹4,000 on RBL Bank Credit Card EMI",
    svg: <RblLogo />,
  },
  {
    bank: "DBS Bank",
    text: "Get 10% Instant Discount Upto ₹3,000 on DBS Bank Credit Card EMI / Non-EMI",
    svg: <DbsLogo />,
  },
  {
    bank: "Bank of Baroda",
    text: "Get 10% Instant Discount Upto ₹3,000 on Bank of Baroda Card EMI",
    svg: <BarodaLogo />,
  },
];

function OfferCard({ offer }) {
  return (
    <div
      className="shrink-0 w-[360px] md:w-[420px] h-[140px] bg-white border border-[#E2E8F0] p-4 flex items-center gap-4 hover:border-[#0055FF] transition-colors shadow-sm"
      data-testid={`offer-${offer.bank.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className="shrink-0 w-[120px] md:w-[130px] h-full flex items-center justify-center pr-4"
        style={{ borderRight: "1.5px dashed #CBD5E1" }}
      >
        {offer.svg}
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
        <p className="text-[13px] md:text-[14px] leading-snug font-medium text-[#0F172A]">
          {offer.text}
        </p>
        <p className="text-[11px] font-semibold text-[#E11D2A]">
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
