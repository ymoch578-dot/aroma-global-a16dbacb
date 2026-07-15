import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <motion.a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-olive text-primary-foreground shadow-[var(--shadow-soft)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
