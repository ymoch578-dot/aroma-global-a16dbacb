import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, PRODUCTS } from "@/lib/site-data";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact — Request a Quote | PT Sukses Ekspor Mandiri" },
      {
        name: "description",
        content:
          "Request a quotation for Indonesian cinnamon, clove, nutmeg, or pepper. Our export team responds within 24 hours.",
      },
      { property: "og:title", content: "Contact — PT Sukses Ekspor Mandiri" },
      {
        property: "og:description",
        content: "Send your inquiry — grades, pricing, and availability within 24 hours.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(150),
  country: z.string().trim().min(1, "Country is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  product: z.string().trim().min(1, "Select a product"),
  quantity: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function ContactPage() {
  const { product: preselected } = Route.useSearch();
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: preselected ?? "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = result.data;
    const lines = [
      `New Inquiry — ${d.product}`,
      `Name: ${d.name}`,
      `Company: ${d.company}`,
      `Country: ${d.country}`,
      `Email: ${d.email}`,
      d.phone ? `Phone: ${d.phone}` : "",
      d.quantity ? `Quantity: ${d.quantity}` : "",
      "",
      d.message,
    ].filter(Boolean);
    const wa = `https://wa.me/6281234567890?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(wa, "_blank", "noopener");
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Next Shipment"
        subtitle="Send your inquiry and our export team will respond within 24 hours with grades, pricing, and availability."
      />

      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            {sent ? (
              <div className="rounded-3xl bg-secondary p-12 text-center">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Thank you — your inquiry is on its way!
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We've opened WhatsApp with your inquiry details. You can also email us
                  directly at{" "}
                  <a href={`mailto:${COMPANY.email}`} className="font-semibold text-primary">
                    {COMPANY.email}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-border p-8 lg:p-10" noValidate>
                <h2 className="font-display text-2xl font-bold text-foreground">Send Inquiry</h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {(
                    [
                      { key: "name", label: "Name *", type: "text", placeholder: "Your full name" },
                      { key: "company", label: "Company *", type: "text", placeholder: "Company name" },
                      { key: "country", label: "Country *", type: "text", placeholder: "e.g. Germany" },
                      { key: "email", label: "Email *", type: "email", placeholder: "you@company.com" },
                      { key: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+49 ..." },
                    ] as const
                  ).map((f) => (
                    <div key={f.key}>
                      <label htmlFor={f.key} className="mb-1.5 block text-sm font-semibold text-foreground">
                        {f.label}
                      </label>
                      <input
                        id={f.key}
                        type={f.type}
                        value={form[f.key]}
                        onChange={set(f.key)}
                        placeholder={f.placeholder}
                        className={inputCls}
                      />
                      {errors[f.key] && <p className="mt-1 text-xs text-destructive">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="product" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Product Interested *
                    </label>
                    <select id="product" value={form.product} onChange={set("product")} className={inputCls}>
                      <option value="">Select a product…</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Multiple / Other">Multiple / Other</option>
                    </select>
                    {errors.product && <p className="mt-1 text-xs text-destructive">{errors.product}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="quantity" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={set("quantity")}
                      placeholder="e.g. 1 x 20ft container, 5 tons…"
                      className={inputCls}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your requirements — grade, destination port, timeline…"
                      className={inputCls}
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
                >
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="space-y-5">
              <div className="rounded-3xl bg-secondary p-7">
                <Mail className="text-gold" size={24} />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Email</h3>
                <a href={`mailto:${COMPANY.email}`} className="mt-1 block text-sm text-primary hover:text-gold">
                  {COMPANY.email}
                </a>
              </div>
              <div className="rounded-3xl bg-secondary p-7">
                <MessageCircle className="text-gold" size={24} />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">WhatsApp</h3>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-sm text-primary hover:text-gold"
                >
                  {COMPANY.whatsapp}
                </a>
                <p className="mt-2 text-xs text-muted-foreground">Fastest response — usually within hours.</p>
              </div>
              <div className="rounded-3xl bg-secondary p-7">
                <MapPin className="text-gold" size={24} />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Location</h3>
                <p className="mt-1 text-sm text-muted-foreground">{COMPANY.location}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Shipping from Jakarta, Surabaya, Panjang & Belawan ports.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
