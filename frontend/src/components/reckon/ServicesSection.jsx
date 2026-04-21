import { motion } from "framer-motion";
import {
  Laptop,
  HardDrive,
  Video,
  Wrench,
  ArrowUpRight,
  Printer,
  RefreshCw,
} from "lucide-react";
import BankOffersMarquee from "@/components/reckon/BankOffersMarquee";

const SERVICES = [
  {
    icon: Laptop,
    title: "Laptop Dealer in Aurangabad",
    desc: "Authorized HP, Dell & Lenovo dealer — business, gaming, enterprise and consumer laptops plus custom-built desktops, all genuine with OEM warranty, for homes and offices across Chhatrapati Sambhajinagar.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/cfadf56b-cd05-4ed8-b011-684ac1316725/images/34c615d2760b4b750b1a60a85b06b0e12005e37248b82f4c04585d74b0ee189c.png",
    tag: "01",
  },
  {
    icon: HardDrive,
    title: "IT Hardware Supplier · Marathwada",
    desc: "Servers, storage, networking, peripherals & consumables — your single-window IT hardware supplier in Marathwada, from a single SKU to a full office rollout.",
    tag: "02",
  },
  {
    icon: Video,
    title: "CCTV Installation in Aurangabad",
    desc: "End-to-end CCTV installation in Aurangabad with CP Plus, Hikvision & Dahua — site survey, installation, DVR/NVR configuration and annual maintenance (AMC).",
    image:
      "https://static.prod-images.emergentagent.com/jobs/cfadf56b-cd05-4ed8-b011-684ac1316725/images/e0c86692241603b7ae4e62ba838fa4f6dba0af5e11894df864ed07f9fec981ab.png",
    tag: "03",
  },
  {
    icon: Wrench,
    title: "Computer Repair Service in Aurangabad",
    desc: "On-site & in-store computer repair service in Aurangabad — AMC contracts, motherboard-level diagnosis, chip-level repair and rapid-response service for offices and homes.",
    tag: "04",
  },
  {
    icon: Printer,
    title: "Printer Dealer in Aurangabad",
    desc: "Authorized printer dealer in Aurangabad for HP and Epson — inkjet, LaserJet, multifunction and large-format printers, with cartridge, toner and service support.",
    tag: "05",
  },
  {
    icon: RefreshCw,
    title: "Certified Refurbished Dealer",
    desc: "Factory-refurbished laptops, desktops & printers — fully tested, warranty-backed and up to 40% more affordable than new, ideal for startups and institutions in Marathwada.",
    tag: "06",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rc-section !items-stretch bg-[#0A0F1C] text-white"
      data-testid="section-services"
    >
      <div className="absolute inset-0 rc-grid-overlay opacity-30" />
      <div className="relative w-full flex flex-col">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-8 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#06B6D4]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#06B6D4]">
                04 / Services
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight max-w-3xl">
              IT hardware, CCTV & computer repair in Aurangabad —
              <br />
              <span className="text-white/50">under one roof.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm md:text-base">
            Whether you need a single laptop or a 500-user rollout with CCTV
            installation and AMC, Reckon Computers — the trusted IT solutions
            company in Marathwada — handles procurement, deployment and service
            end-to-end.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
          data-testid="services-grid"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden bg-[#0A0F1C] p-6 md:p-7 flex flex-col justify-between min-h-[240px]"
              data-testid={`service-${i + 1}`}
            >
              {s.image && (
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/80 via-[#0A0F1C]/70 to-[#0A0F1C]/95" />

              <div className="relative flex items-start justify-between">
                <s.icon className="w-8 h-8 text-[#06B6D4]" strokeWidth={1.8} />
                <span className="font-mono text-[10px] text-white/40 tracking-[0.22em]">
                  {s.tag}
                </span>
              </div>
              <div className="relative">
                <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-md">
                  {s.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity">
                  Enquire <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Bank EMI offers marquee */}
        <BankOffersMarquee />
      </div>
    </section>
  );
}
