import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import WhyChooseUs from "@/pages/WhyChooseUs";
import ExportProcess from "@/pages/ExportProcess";
import Sustainability from "@/pages/Sustainability";
import Gallery from "@/pages/Gallery";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PT Sukses Ekspor Mandiri" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PT Sukses Ekspor Mandiri" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Sukses Ekspor Mandiri",
          description: "Premium Indonesian spice exporter for the global B2B market.",
          slogan: "Premium Indonesian Spices for the Global Market",
          address: { "@type": "PostalAddress", addressCountry: "ID", addressLocality: "Malang" },
        })}</script>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/export-process" element={<ExportProcess />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
