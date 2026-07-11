import cinnamonImg from "@/assets/product-cinnamon.jpg";
import cloveImg from "@/assets/product-clove.jpg";
import nutmegImg from "@/assets/product-nutmeg.jpg";
import blackPepperImg from "@/assets/product-black-pepper.jpg";
import whitePepperImg from "@/assets/product-white-pepper.jpg";
import galleryPlantation from "@/assets/gallery-plantation.jpg";
import galleryHarvest from "@/assets/gallery-harvest.jpg";
import galleryWarehouse from "@/assets/gallery-warehouse.jpg";
import galleryProcessing from "@/assets/gallery-processing.jpg";
import galleryPackaging from "@/assets/gallery-packaging.jpg";
import galleryContainer from "@/assets/gallery-container.jpg";

export const COMPANY = {
  name: "PT Sukses Ekspor Mandiri",
  tagline: "Premium Indonesian Spices for the Global Market",
  email: "export@suksesekspormandiri.com",
  whatsapp: "+62 812 3456 7890",
  whatsappLink:
    "https://wa.me/6281234567890?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20spice%20products.",
  location: "Jakarta, Indonesia",
};

export interface Product {
  slug: string;
  name: string;
  latin: string;
  category: "Whole Spices" | "Ground Spices";
  popular: boolean;
  short: string;
  overview: string;
  image: string;
  origin: string;
  specifications: { label: string; value: string }[];
  packaging: string[];
  moq: string;
  applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "cinnamon",
    name: "Cinnamon",
    latin: "Cinnamomum burmannii",
    category: "Whole Spices",
    popular: true,
    short:
      "Aromatic Indonesian cassia cinnamon with rich oil content, available as sticks, quills, and broken grades.",
    overview:
      "Our cinnamon is sourced from the highlands of Sumatra, where volcanic soil and ideal climate produce cassia bark with an exceptionally sweet aroma and high essential oil content. Carefully harvested, sun-dried, and hand-sorted to meet international export grades.",
    image: cinnamonImg,
    origin: "Kerinci, Sumatra, Indonesia",
    specifications: [
      { label: "Type", value: "Cassia Vera (KA, KB, KC grades)" },
      { label: "Form", value: "Sticks, quills, broken, powder" },
      { label: "Moisture", value: "Max 13.5%" },
      { label: "Oil Content", value: "1.5% – 4%" },
      { label: "Length", value: "8 cm – 30 cm (customizable)" },
    ],
    packaging: ["Carton box 10–20 kg", "PP woven bag 25 kg", "Custom private label"],
    moq: "1 x 20 ft container (approx. 8–10 tons) — smaller trial orders negotiable",
    applications: ["Bakery & confectionery", "Beverage & tea blends", "Seasoning industry", "Aromatherapy & extraction"],
  },
  {
    slug: "clove",
    name: "Clove",
    latin: "Syzygium aromaticum",
    category: "Whole Spices",
    popular: true,
    short:
      "Hand-picked whole cloves from Sulawesi and Maluku with deep aroma and high eugenol content.",
    overview:
      "Indonesia is the historic home of the clove tree, and our cloves are hand-picked at optimal maturity from smallholder plantations in Sulawesi and the Maluku Islands. Sun-dried and machine-cleaned, they deliver the deep, warm aroma international buyers expect.",
    image: cloveImg,
    origin: "Sulawesi & Maluku Islands, Indonesia",
    specifications: [
      { label: "Grade", value: "AB1, AB2, Lal Pari" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Headless", value: "Max 5%" },
      { label: "Foreign Matter", value: "Max 0.5%" },
      { label: "Eugenol Content", value: "70% – 85%" },
    ],
    packaging: ["PP woven bag 25 kg / 50 kg", "Vacuum pack available", "Custom private label"],
    moq: "500 kg — full container preferred for best pricing",
    applications: ["Food & seasoning", "Cigarette industry", "Essential oil extraction", "Pharmaceutical & oral care"],
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    latin: "Myristica fragrans",
    category: "Whole Spices",
    popular: true,
    short:
      "Premium Banda-origin nutmeg, whole and shelled, with rich buttery aroma prized by food manufacturers.",
    overview:
      "From the original Spice Islands of Banda and North Sulawesi, our nutmeg is graded by size and quality — ABCD, shrivel, and BWP grades — to serve everything from whole retail packing to industrial grinding and oleoresin extraction.",
    image: nutmegImg,
    origin: "Banda & North Sulawesi, Indonesia",
    specifications: [
      { label: "Grade", value: "ABCD, Shrivel, BWP" },
      { label: "Form", value: "Whole with shell / shelled" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Broken", value: "Max 5%" },
      { label: "Aflatoxin", value: "Within EU limits (tested per lot)" },
    ],
    packaging: ["PP woven bag 25 kg", "Carton box 10–25 kg", "Vacuum pack available"],
    moq: "500 kg — full container preferred for best pricing",
    applications: ["Food manufacturing", "Bakery & dairy flavoring", "Oleoresin & essential oil", "Traditional medicine"],
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    latin: "Piper nigrum",
    category: "Whole Spices",
    popular: true,
    short:
      "Bold Lampung black pepper with strong piperine content, machine-cleaned to export standard.",
    overview:
      "Lampung black pepper is world-renowned for its bold berries and sharp, complex heat. We supply machine-cleaned, sun-dried black pepper meeting ASTA and FAQ standards, with density and moisture controlled per buyer specification.",
    image: blackPepperImg,
    origin: "Lampung, Sumatra, Indonesia",
    specifications: [
      { label: "Grade", value: "FAQ 500 g/l, 550 g/l, ASTA" },
      { label: "Moisture", value: "Max 12–13%" },
      { label: "Foreign Matter", value: "Max 1%" },
      { label: "Light Berries", value: "Max 2–10% per grade" },
      { label: "Piperine", value: "4% – 6%" },
    ],
    packaging: ["PP woven bag 25 kg / 50 kg", "Jumbo bag 500–1000 kg", "Custom private label"],
    moq: "1 x 20 ft container (approx. 13–15 tons) — trial orders negotiable",
    applications: ["Seasoning & spice blends", "Meat processing", "Food service & retail", "Extraction industry"],
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    latin: "Piper nigrum",
    category: "Whole Spices",
    popular: false,
    short:
      "Muntok white pepper from Bangka Island — clean, creamy heat favored by premium food industries.",
    overview:
      "Muntok white pepper from Bangka Island is one of the world's most sought-after white peppers. Produced by water-retting fully ripened berries, it delivers a clean, sharp heat without the dark specks — ideal for light-colored sauces and premium food applications.",
    image: whitePepperImg,
    origin: "Bangka Island, Indonesia",
    specifications: [
      { label: "Grade", value: "Muntok FAQ 630 g/l, Double Washed" },
      { label: "Moisture", value: "Max 13%" },
      { label: "Foreign Matter", value: "Max 0.5%" },
      { label: "Black Berries", value: "Max 2%" },
      { label: "Piperine", value: "5% – 7%" },
    ],
    packaging: ["PP woven bag 25 kg / 50 kg", "Vacuum pack available", "Custom private label"],
    moq: "500 kg — full container preferred for best pricing",
    applications: ["Light sauces & soups", "Processed meat & seafood", "Premium seasoning", "Food service"],
  },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Tons Annual Capacity" },
  { value: 5, suffix: "", label: "Product Categories" },
];

export const PROCESS_STEPS = [
  { step: 1, title: "Inquiry", desc: "Send your requirements — product, grade, quantity, and destination port." },
  { step: 2, title: "Product Selection", desc: "We recommend the right grades and specifications for your market." },
  { step: 3, title: "Sampling", desc: "Physical samples are dispatched for your quality evaluation." },
  { step: 4, title: "Negotiation", desc: "Transparent pricing, terms, and delivery schedule agreement." },
  { step: 5, title: "Production", desc: "Sourcing, cleaning, sorting, and preparation to agreed specification." },
  { step: 6, title: "Quality Checking", desc: "Pre-shipment inspection of moisture, purity, and grade compliance." },
  { step: 7, title: "Packing", desc: "Export-standard packing with fumigation and labeling as required." },
  { step: 8, title: "Shipping", desc: "Container loading, documentation, and shipment to your port." },
];

export const WHY_US = [
  { title: "Reliable Supply Chain", desc: "Long-term partnerships with farmer groups across Indonesia's key spice regions ensure consistent availability." },
  { title: "Premium Quality Selection", desc: "Every lot is hand-sorted, machine-cleaned, and inspected before shipment." },
  { title: "Competitive Pricing", desc: "Direct sourcing from origin keeps our pricing transparent and competitive." },
  { title: "Export Documentation Support", desc: "Complete assistance with phytosanitary, certificate of origin, and shipping documents." },
  { title: "Flexible Packaging", desc: "From bulk PP bags to private-label retail packing — tailored to your market." },
  { title: "Responsive Communication", desc: "Dedicated export team replies within 24 hours, in clear professional English." },
  { title: "Reliable Logistics Coordination", desc: "Established relationships with major shipping lines from Indonesian ports." },
  { title: "Long-term Partnership", desc: "We grow with our buyers — many partners have worked with us for years." },
];

export const GALLERY = [
  { src: galleryPlantation, alt: "Indonesian spice plantation at sunrise", w: 1200, h: 900, label: "Plantation" },
  { src: galleryHarvest, alt: "Farmer hand-harvesting cloves", w: 900, h: 1200, label: "Harvest" },
  { src: galleryWarehouse, alt: "Export warehouse with spice sacks", w: 1200, h: 900, label: "Warehouse" },
  { src: galleryProcessing, alt: "Quality sorting and grading process", w: 900, h: 1200, label: "Processing" },
  { src: galleryPackaging, alt: "Export packaging line", w: 1200, h: 900, label: "Packaging" },
  { src: galleryContainer, alt: "Container loading at Indonesian port", w: 1200, h: 900, label: "Container Loading" },
];

export const FAQS = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ varies by product — typically 500 kg for clove, nutmeg, and white pepper, and one full 20 ft container for cinnamon and black pepper. We are open to discussing smaller trial orders for new partners.",
  },
  {
    q: "What is the typical lead time?",
    a: "For in-stock grades, preparation takes 2–3 weeks after order confirmation. Full production-to-shipment lead time is usually 3–5 weeks depending on quantity, season, and vessel schedule.",
  },
  {
    q: "What packaging options do you offer?",
    a: "Standard export packing is 25 kg or 50 kg PP woven bags. We also offer carton boxes, vacuum packs, jumbo bags, and custom private-label packaging on request.",
  },
  {
    q: "Do you support private label?",
    a: "Yes. We can pack under your brand with your label design, subject to minimum quantities. Share your requirements and our team will confirm feasibility and pricing.",
  },
  {
    q: "Which shipping terms do you work with?",
    a: "We commonly quote FOB Indonesian ports (Jakarta, Surabaya, Panjang, Belawan) and can arrange CFR/CIF to your destination port on request.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We typically work with T/T (bank transfer) with an advance payment and balance against shipping documents, or irrevocable L/C at sight for larger contracts. Terms are discussed openly during negotiation.",
  },
];
