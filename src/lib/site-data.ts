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
  brand: "Spices Export Grade",
  tagline: "Premium Indonesian Spices for the Global Market",
  email: "sales@spices.suksesekspormandiri.com",
  emailAlt: "salessuksesekspormandiri@gmail.com",
  whatsapp: "+62 851 2448 0871",
  whatsappLink:
    "https://wa.me/6285124480871?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20spice%20products.",
  location: "Malang Regency, East Java Province, Indonesia",
};

const CINNAMON_DESCRIPTION = `Indonesian cassia cinnamon is prized around the world for its warm, sweet aroma and deep golden-brown color. Our cinnamon is harvested from mature Cinnamomum burmannii trees, where the inner bark is carefully peeled, cleaned, and dried under controlled conditions to preserve its essential oil content. The result is a fragrant, versatile spice that brings a familiar comfort to sweet and savory applications alike.

We offer several present forms to match your market needs: elegant rolled quills for premium retail, uniform sticks for food service and gifting, broken pieces for industrial extraction, and finely ground powder for bakery and seasoning manufacturers. Each batch is sorted by hand and machine-cleaned to remove bark residue, ensuring a clean, uniform appearance that meets export standards.

Cinnamon is widely used in bakery products, confectionery, flavored beverages, spice blends, and aromatherapy products. Its essential oil is also a valuable raw material for flavoring, fragrance, and personal-care industries. We welcome trial orders and can customize packing under your private label.`;

const CLOVE_DESCRIPTION = `Clove is one of Indonesia's most iconic spices, recognized by its nail-shaped flower buds and powerful, warming aroma. Our cloves are harvested at just the right moment of maturity, when the buds are still closed and richest in essential oil. After harvest, they are carefully sun-dried and cleaned to remove stems, leaves, and other foreign matter, leaving only dark, whole buds with a strong, aromatic profile.

This spice is valued for its high eugenol content, which gives clove its distinctive warmth and makes it indispensable in the food, seasoning, and extraction industries. The buds are available in whole form for retail, spice grinding, and premium culinary use, and can also be prepared in customized sizes or ground according to buyer requirements.

Clove is essential in bakery, curry blends, spice mixes, and beverage flavoring. It is also used in the production of essential oils, oleoresins, and personal-care products. We are happy to discuss your preferred grade, packing format, and delivery schedule to build a reliable supply partnership.`;

const NUTMEG_DESCRIPTION = `Nutmeg delivers a rich, subtly sweet aroma with warm, woody undertones that have made it a staple in kitchens and food factories worldwide. Our nutmeg is selected from fully mature fruits, then dried and graded to preserve its full flavor and attractive appearance. We supply whole nutmeg both in-shell and shelled, as well as broken and ground forms to suit different processing needs.

The whole kernel is popular for premium retail, gourmet food service, and traditional spice markets. Industrial buyers often prefer broken pieces or powder for use in sauces, seasonings, bakery fillings, and extraction. We sort each batch by size, color, and aroma to ensure consistency and cleanliness, and we can arrange additional testing or treatment as required by your destination market.

Nutmeg is widely used in bakery, dairy, processed foods, beverages, and spice blends. Its essential oil and oleoresin are also valuable in the fragrance and flavor industries. Let us know your specifications and packaging preferences, and we will prepare a tailored offer.`;

const BLACK_PEPPER_DESCRIPTION = `Black pepper is the world's most traded spice, and Indonesian Lampung pepper is especially respected for its bold, well-rounded heat and complex aroma. Our black pepper consists of fully matured berries that are carefully harvested, washed, and sun-dried to develop their characteristic dark, wrinkled skin and sharp pungency.

We supply clean, machine-sorted black pepper in whole, cracked, and ground forms. Whole pepper is ideal for grinders, premium retail, and gourmet markets, while cracked and ground grades are preferred by manufacturers of seasonings, sauces, processed meats, and ready-to-eat foods. Each batch is checked for moisture, density, and foreign matter to ensure it performs consistently in industrial and retail use.

Black pepper is fundamental to savory food manufacturing, spice blends, meat processing, snacks, and food service. It is also a source of piperine used in extraction and nutritional applications. We can adapt the grade, mesh size, and packing to your requirements.`;

const WHITE_PEPPER_DESCRIPTION = `White pepper offers a cleaner, more delicate heat than black pepper, making it the preferred choice for light-colored sauces, soups, and premium food products. Our white pepper is produced by water-retting fully ripened berries, then removing the outer skin and drying the inner seed until it reaches a creamy, uniform color with a sharp, refined flavor.

The Muntok style is especially valued for its consistent appearance and smooth, lingering heat without the dark specks that black pepper can leave. We supply whole, cracked, and finely ground white pepper suitable for premium seasoning, processed seafood, dairy-based sauces, and international food-service chains. Each batch is washed and sorted to control moisture, black berry count, and impurities.

White pepper is essential in European and Asian cuisines, light sauces, mayonnaise, processed meats, and ready meals. We are ready to accommodate custom granulation, packing, and private-label requirements for your market.`;

export interface Product {
  slug: string;
  name: string;
  latin: string;
  category: "Whole Spices" | "Ground Spices";
  popular: boolean;
  short: string;
  overview: string;
  description: string;
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
      "Our cassia cinnamon is carefully harvested, sun-dried, and hand-sorted to meet international export expectations. It is valued for its warm, sweet aroma and deep golden-brown color, making it a versatile choice for premium food and flavoring applications.",
    description: CINNAMON_DESCRIPTION,
    image: cinnamonImg,
    origin: "Indonesia",
    specifications: [],
    packaging: ["Available on request: PP woven bags, carton boxes, vacuum packs, private label"],
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
    a: "We commonly quote FOB Indonesian ports and can arrange CFR/CIF to your destination port on request.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We typically work with T/T (bank transfer) with an advance payment and balance against shipping documents, or irrevocable L/C at sight for larger contracts. Terms are discussed openly during negotiation.",
  },
];
