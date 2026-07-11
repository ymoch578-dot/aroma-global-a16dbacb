import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/export-process", label: "Export Process" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "glass-panel shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-baseline gap-2">
          <span
            className={`font-display text-xl font-bold tracking-tight lg:text-2xl ${
              solid ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Sukses Ekspor Mandiri
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                solid ? "text-foreground" : "text-primary-foreground/90"
              }`}
              activeProps={{ className: "text-gold! font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          className={`lg:hidden ${solid ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-site flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  activeProps={{ className: "text-primary font-semibold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-base font-semibold text-accent-foreground"
              >
                Request a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
