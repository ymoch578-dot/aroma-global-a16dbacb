import cinnamonAsset from "@/assets/cinnamon_1.png.asset.json";
import cloveAsset from "@/assets/cloves_1.png.asset.json";
import nutmegAsset from "@/assets/nutmeg_1.png.asset.json";
import blackPepperAsset from "@/assets/black_pepper_1.png.asset.json";
import whitePepperAsset from "@/assets/white_pepper_1.png.asset.json";

const cinnamonImg = cinnamonAsset.url;
const cloveImg = cloveAsset.url;
const nutmegImg = nutmegAsset.url;
const blackPepperImg = blackPepperAsset.url;
const whitePepperImg = whitePepperAsset.url;
import cinnamon2Asset from "@/assets/cinnamon_2.png.asset.json";
import cloves2Asset from "@/assets/cloves_2.png.asset.json";
import nutmeg2Asset from "@/assets/nutmeg_2.png.asset.json";
import blackPepper2Asset from "@/assets/black_pepper_2.png.asset.json";
import whitePepper2Asset from "@/assets/white_pepper_2.png.asset.json";

export const COMPANY = {
  name: "PT Sukses Ekspor Mandiri",
  brand: "Spices Premium Indonesia",
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
    packaging: ["25 kg / 50 kg PP woven bags", "Carton boxes", "Vacuum packs", "Private label"],
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
      "Hand-picked whole cloves with deep aroma and high eugenol content, prepared for export markets.",
    overview:
      "Our cloves are hand-picked at optimal maturity and then sun-dried and machine-cleaned to deliver the deep, warm aroma that international buyers expect. They are a trusted ingredient for food, seasoning, and extraction industries around the world.",
    description: CLOVE_DESCRIPTION,
    image: cloveImg,
    origin: "Indonesia",
    specifications: [],
    packaging: ["25 kg / 50 kg PP woven bags", "Carton boxes", "Vacuum packs", "Private label"],
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
      "Premium whole and shelled nutmeg with rich buttery aroma, trusted by food manufacturers worldwide.",
    overview:
      "Our nutmeg is selected from fully mature fruits and graded by size, color, and quality to serve everything from whole retail packing to industrial grinding and extraction. It is valued for its rich, subtly sweet aroma and consistent appearance.",
    description: NUTMEG_DESCRIPTION,
    image: nutmegImg,
    origin: "Indonesia",
    specifications: [],
    packaging: ["25 kg / 50 kg PP woven bags", "Carton boxes", "Vacuum packs", "Private label"],
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
      "Bold Indonesian black pepper with sharp, complex heat, machine-cleaned for export markets.",
    overview:
      "Our black pepper is harvested from fully matured berries, washed, and sun-dried to develop its characteristic dark, wrinkled skin and bold pungency. It is machine-cleaned and sorted to meet consistent export quality for both industrial and retail buyers.",
    description: BLACK_PEPPER_DESCRIPTION,
    image: blackPepperImg,
    origin: "Indonesia",
    specifications: [],
    packaging: ["25 kg / 50 kg PP woven bags", "Jumbo bags", "Carton boxes", "Private label"],
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
      "Clean, creamy white pepper with refined heat, ideal for light-colored sauces and premium food products.",
    overview:
      "Our white pepper is produced by water-retting fully ripened berries and removing the outer skin, resulting in a creamy, uniform color with a sharp, refined flavor. It is favored by premium food manufacturers and food-service chains for its clean appearance and gentle heat.",
    description: WHITE_PEPPER_DESCRIPTION,
    image: whitePepperImg,
    origin: "Indonesia",
    specifications: [],
    packaging: ["25 kg / 50 kg PP woven bags", "Vacuum packs", "Carton boxes", "Private label"],
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
