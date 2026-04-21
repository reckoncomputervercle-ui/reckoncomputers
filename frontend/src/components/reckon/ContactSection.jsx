import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const WA_NUMBER = "919823177666";
const MAPS_URL =
  "https://www.google.com/maps/dir//Reckon+Computers,+Plot+No+22-B,+Opp.+Devgiri+Bank,+Zambad+Estate+Square,+Kalda+Corner,+Shahnoormiya+Darga+Road,+Chhatrapati+Sambhajinagar,+Maharashtra+431005/@20.3822555,85.8290159,9z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bdb98679e79c215:0x3d9b92c7b20c93a0!2m2!1d75.3367326!2d19.8678978";
const ADDRESS_FULL =
  "Plot No 22-B, Opp. Devgiri Bank, Zambad Estate Square, Kalda Corner, Shahnoormiya Darga Road, Chhatrapati Sambhajinagar, Maharashtra 431005";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildWhatsAppText = () =>
    `Hi Reckon Computers,%0A%0A` +
    `*Name:* ${form.name}%0A` +
    `*Email:* ${form.email}%0A` +
    `*Phone:* ${form.phone}%0A` +
    `*Subject:* ${form.subject || "General Enquiry"}%0A%0A` +
    `${form.message}`;

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setLoading(true);
    if (BACKEND_URL) {
      try {
        await axios.post(`${BACKEND_URL}/api/contact`, form, { timeout: 6000 });
      } catch (_) {
        /* silent fallback */
      }
    }
    const url = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppText()}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your message…");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "General Enquiry",
      message: "",
    });
    setLoading(false);
  };

  const waQuickLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hi Reckon Computers, I'd like to enquire about your products / services."
  )}`;

  return (
    <section
      id="contact"
      className="rc-section bg-[#F8FAFC] text-[#0F172A]"
      data-testid="section-contact"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-20 grid grid-cols-12 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#0055FF]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
              07 / Contact
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.02] tracking-tight">
            Let's talk
            <br />
            <span className="text-[#475569]">technology.</span>
          </h2>
          <p className="mt-6 text-[#475569] leading-relaxed max-w-md">
            Walk into our computer shop in Aurangabad, call us, or message on
            WhatsApp — our team replies within minutes during working hours.
          </p>

          {/* Store location card with map preview */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-map-link"
            className="mt-8 group flex items-start gap-4 p-5 bg-white border border-[#E2E8F0] hover:border-[#0055FF] transition-colors"
          >
            <div className="w-11 h-11 flex-shrink-0 bg-[#0055FF] text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0055FF]">
                  Store Location
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#475569] group-hover:text-[#0055FF]" />
              </div>
              <div className="mt-1 font-display font-semibold text-[15px] text-[#0F172A] leading-snug">
                Reckon Computers · Zambad Estate Square
              </div>
              <div className="mt-1 text-[13px] text-[#475569] leading-snug">
                {ADDRESS_FULL}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0055FF]">
                Get directions →
              </div>
            </div>
          </a>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-[#E2E8F0]">
            {[
              {
                icon: Phone,
                label: "Sales",
                value: "+91 98231 77666",
                href: "tel:+919823177666",
                testId: "contact-phone-1",
              },
              {
                icon: Phone,
                label: "Service",
                value: "+91 94230 29542",
                href: "tel:+919423029542",
                testId: "contact-phone-2",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@reckoncomputers.in",
                href: "mailto:info@reckoncomputers.in",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Sat · 10:00 AM – 8:30 PM",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href || "#contact"}
                data-testid={c.testId}
                className="group flex items-start gap-3 p-4 border-r border-b border-[#E2E8F0] hover:bg-white transition-colors"
              >
                <c.icon className="w-4 h-4 text-[#0055FF] mt-0.5" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-[#0F172A] font-medium text-[14px]">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a
            href={waQuickLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3 font-medium transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="col-span-12 lg:col-span-7 bg-white border border-[#E2E8F0] p-6 md:p-10"
          data-testid="contact-form"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="font-display text-xl font-semibold">
              Send an enquiry
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
              Required fields *
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Name *
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Your full name"
                required
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="you@company.com"
                required
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-email"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Phone *
              </Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="+91 98765 43210"
                required
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-phone"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Subject
              </Label>
              <Input
                id="subject"
                value={form.subject}
                onChange={onChange("subject")}
                placeholder="Bulk laptop quote, CCTV, AMC..."
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-subject"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Message *
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={onChange("message")}
                placeholder="Tell us what you need — quantity, timeline, any preferences..."
                required
                rows={5}
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF]"
                data-testid="contact-message"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-[#475569] max-w-sm leading-relaxed">
              Submitting opens WhatsApp with your enquiry pre-filled, ready to
              send.
            </p>
            <Button
              type="submit"
              disabled={loading}
              data-testid="contact-submit"
              className="rounded-none bg-[#25D366] hover:bg-[#1ebe5d] text-white h-12 px-7"
            >
              {loading ? "Opening..." : "Send via WhatsApp"}
              <FaWhatsapp className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.form>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 border-t border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex flex-col md:flex-row gap-1.5 md:items-center md:justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#475569]">
            © {new Date().getFullYear()} Reckon Computers · Chh. Sambhaji Nagar
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#475569]">
            Authorized HP, Dell & Lenovo Dealer · Intel · Microsoft Partner · IT Solutions Company in Marathwada
          </div>
        </div>
      </footer>
    </section>
  );
}
