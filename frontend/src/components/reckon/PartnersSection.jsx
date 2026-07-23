import { motion } from "framer-motion";
import {
  SiHp,
  SiDell,
  SiLenovo,
  SiIntel,
  SiAmd,
  SiAsus,
  SiMsibusiness,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { Zap, ShieldCheck, Printer, Video, Gamepad2 } from "lucide-react";

// Gaming & Commercial brands — ASUS and MSI, distributed by Reckon in Marathwada region
const GAMING_BRANDS = [
  {
    name: "ASUS",
    badge: "Commercial Distributor · Marathwada",
    render: () => <SiAsus className="w-16 h-16 md:w-20 md:h-20 text-[#0F172A]" />,
  },
  {
    name: "MSI",
    badge: "Commercial Distributor · Marathwada",
    render: () => (
      <SiMsibusiness className="w-16 h-16 md:w-20 md:h-20 text-[#C8102E]" />
    ),
  },
];

// Primary IT partner brands (main row)
const PRIMARY_BRANDS = [
  {
    name: "HP",
    badge: "Regional Distributor",
    flagship: true,
    render: () => <SiHp className="w-16 h-16 md:w-24 md:h-24" />,
  },
  {
    name: "Lenovo",
    badge: "Authorized Partner",
    render: () => <SiLenovo className="w-12 h-12" />,
  },
  {
    name: "Dell",
    badge: "Authorized Partner",
    render: () => <SiDell className="w-12 h-12" />,
  },
  {
    name: "Intel",
    badge: "18+ yr Channel Partner",
    render: () => <SiIntel className="w-12 h-12" />,
  },
  {
    name: "Microsoft",
    badge: "Authorized Dealer",
    render: () => <FaMicrosoft className="w-12 h-12" />,
  },
  {
    name: "AMD",
    badge: "Authorized Dealer",
    render: () => <SiAmd className="w-12 h-12" />,
  },
];

// Surveillance brands — Regional Distributor status
const SURVEILLANCE_BRANDS = [
  {
    name: "CP Plus",
    badge: "Regional Distributor",
    render: () => (
      <svg
        viewBox="0 0 180 44"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
        aria-label="CP Plus"
      >
        <text
          x="0"
          y="34"
          fontFamily="Outfit, Arial Black, sans-serif"
          fontSize="36"
          fontWeight="900"
          fill="#C41E1E"
          letterSpacing="-1"
        >
          CP
        </text>
        <rect x="56" y="6" width="32" height="32" rx="2" fill="#C41E1E" />
        <text
          x="60"
          y="32"
          fontFamily="Outfit, sans-serif"
          fontSize="30"
          fontWeight="900"
          fill="#FFFFFF"
        >
          +
        </text>
        <text
          x="96"
          y="32"
          fontFamily="Outfit, sans-serif"
          fontSize="22"
          fontWeight="700"
          fill="#1F1F1F"
          letterSpacing="1"
        >
          PLUS
        </text>
      </svg>
    ),
  },
  {
    name: "Hikvision",
    badge: "Regional Distributor",
    render: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Hikvision_logo.svg/512px-Hikvision_logo.svg.png"
        alt="Hikvision"
        loading="lazy"
        className="h-10 object-contain"
        onError={(e) => {
          const fallback = document.createElement("span");
          fallback.className =
            "font-display font-bold text-2xl text-[#D71921]";
          fallback.textContent = "Hikvision";
          e.currentTarget.replaceWith(fallback);
        }}
      />
    ),
  },
  {
    name: "Dahua",
    badge: "Regional Distributor",
    render: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dahua_Technology_logo.svg/512px-Dahua_Technology_logo.svg.png"
        alt="Dahua Technology"
        loading="lazy"
        className="h-9 object-contain"
        onError={(e) => {
          const fallback = document.createElement("span");
          fallback.className =
            "font-display font-bold text-2xl text-[#E31E24]";
          fallback.textContent = "Dahua";
          e.currentTarget.replaceWith(fallback);
        }}
      />
    ),
  },
];

// Other brands
const OTHER_BRANDS = [
  {
    name: "Epson",
    badge: "Authorized Dealer",
    render: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Epson_logo.svg/512px-Epson_logo.svg.png"
        alt="Epson"
        loading="lazy"
        className="h-9 object-contain"
        onError={(e) => {
          const fallback = document.createElement("span");
          fallback.className =
            "font-display font-bold text-2xl text-[#003399]";
          fallback.textContent = "EPSON";
          e.currentTarget.replaceWith(fallback);
        }}
      />
    ),
  },
  {
    name: "Quick Heal",
    badge: "Authorized Dealer",
    render: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Quick_Heal_Technologies_Logo.svg/512px-Quick_Heal_Technologies_Logo.svg.png"
        alt="Quick Heal"
        loading="lazy"
        className="h-9 object-contain"
        onError={(e) => {
          const fallback = document.createElement("span");
          fallback.className =
            "font-display font-bold text-2xl text-[#E4002B]";
          fallback.textContent = "Quick Heal";
          e.currentTarget.replaceWith(fallback);
        }}
      />
    ),
  },
  {
    name: "Numeric",
    badge: "Authorized Dealer",
    render: () => (
      <svg
        viewBox="0 0 170 36"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-auto"
        aria-label="Numeric"
      >
        <text
          x="0"
          y="28"
          fontFamily="Outfit, sans-serif"
          fontSize="32"
          fontWeight="900"
          fill="#002C6C"
          letterSpacing="-1"
        >
          numeric
        </text>
        <circle cx="156" cy="26" r="5" fill="#E30613" />
      </svg>
    ),
  },
  {
    name: "Artis",
    badge: "Authorized Dealer",
    render: () => (
      <svg
        viewBox="0 0 120 38"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-auto"
        aria-label="Artis"
      >
        <text
          x="0"
          y="30"
          fontFamily="Outfit, sans-serif"
          fontSize="32"
          fontWeight="900"
          fontStyle="italic"
          fill="#0F172A"
          letterSpacing="-1"
        >
          Art
        </text>
        <circle cx="62" cy="12" r="4" fill="#E11D2A" />
        <text
          x="56"
          y="30"
          fontFamily="Outfit, sans-serif"
          fontSize="32"
          fontWeight="900"
          fontStyle="italic"
          fill="#E11D2A"
        >
          i
        </text>
        <text
          x="72"
          y="30"
          fontFamily="Outfit, sans-serif"
          fontSize="32"
          fontWeight="900"
          fontStyle="italic"
          fill="#0F172A"
          letterSpacing="-1"
        >
          s
        </text>
      </svg>
    ),
  },
];

const DISTRIBUTORS = [
  "Savex Technologies",
  "Ingram Micro",
  "Redington India",
  "Rashi Peripherals (RP Tech)",
];

function BrandTile({ brand, variant = "light", accent = "#0055FF", testId }) {
  const isDark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className={`group relative p-5 md:p-6 border-r border-b border-[#E2E8F0] flex flex-col justify-between min-h-[150px] transition-all duration-300 ${
        isDark
          ? "bg-[#0A0F1C] text-white hover:bg-[#0F172A]"
          : "bg-white hover:bg-[#F8FAFC]"
      }`}
      data-testid={testId || `brand-${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center justify-start h-16">{brand.render()}</div>
      <div>
        <div
          className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
            isDark ? "text-white/50" : "text-[#475569]"
          }`}
        >
          {brand.badge}
        </div>
        <div
          className="mt-1 font-display font-semibold text-[15px]"
          style={{ color: isDark ? "#fff" : "#0F172A" }}
        >
          {brand.name}
        </div>
      </div>
      <span
        className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="rc-section bg-[#F8FAFC] text-[#0F172A]"
      data-testid="section-partners"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[2px] bg-[#0055FF]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
                03 / Partnerships & Brands
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.02] tracking-tight max-w-3xl">
              Official partner to the world's biggest tech brands.
            </h2>
          </div>
          <p className="text-[#475569] max-w-sm text-sm">
            Every product sourced through authorized channels — genuine
            warranty, verified inventory and OEM pricing.
          </p>
        </motion.div>

        {/* Primary IT Brands */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-[#475569]">
            <Zap className="w-3.5 h-3.5 text-[#0055FF]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
              IT — Distributors & Authorized Partners
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-[#E2E8F0]">
            {PRIMARY_BRANDS.map((b) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className={`group relative p-5 md:p-6 border-r border-b border-[#E2E8F0] transition-all duration-300 flex flex-col justify-between min-h-[150px] ${
                  b.flagship
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0055FF] text-white hover:bg-[#0044CC]"
                    : "bg-white hover:bg-[#0A0F1C] hover:text-white"
                }`}
                data-testid={`brand-${b.name.toLowerCase()}`}
              >
                {b.render()}
                <div>
                  <div
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                      b.flagship
                        ? "text-white/70"
                        : "text-[#475569] group-hover:text-white/60"
                    }`}
                  >
                    {b.badge}
                  </div>
                  <div
                    className={`mt-1 font-display font-semibold ${
                      b.flagship ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {b.name}
                  </div>
                  {b.flagship && (
                    <div className="mt-6 md:mt-10 inline-flex items-center gap-2 bg-white text-[#0055FF] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em]">
                      <Zap className="w-3 h-3" /> Flagship partnership
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gaming & Commercial — ASUS & MSI (Marathwada Distributor) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-[#475569]">
            <Gamepad2 className="w-3.5 h-3.5 text-[#0055FF]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
              Gaming & Commercial — Authorized Distributor · Marathwada
            </span>
          </div>
          <div className="grid grid-cols-2 border-t border-l border-[#E2E8F0]">
            {GAMING_BRANDS.map((b) => (
              <BrandTile key={b.name} brand={b} accent="#0055FF" />
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#0055FF]">
            Authorized MSI & ASUS Commercial Distribution — Marathwada Region
          </p>
        </div>

        {/* Surveillance */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-[#475569]">
            <Video className="w-3.5 h-3.5 text-[#0055FF]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
              Surveillance — Regional Distributors
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-[#E2E8F0]">
            {SURVEILLANCE_BRANDS.map((b) => (
              <BrandTile key={b.name} brand={b} accent="#0055FF" />
            ))}
          </div>
        </div>

        {/* Other brands + distributors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 text-[#475569]">
              <Printer className="w-3.5 h-3.5 text-[#0055FF]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
                Other Authorized Brands
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#E2E8F0]">
              {OTHER_BRANDS.map((b) => (
                <BrandTile key={b.name} brand={b} accent="#06B6D4" />
              ))}
            </div>
          </div>

          <div className="lg:pl-6 mt-6 lg:mt-0">
            <div className="flex items-center gap-2 mb-3 text-[#475569]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
                National Distributors
              </span>
            </div>
            <div className="bg-[#0A0F1C] text-white p-6 h-full">
              <ul className="space-y-3 text-sm">
                {DISTRIBUTORS.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 border-b border-white/10 pb-2.5 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 bg-[#06B6D4]" />
                    <span className="font-medium">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
