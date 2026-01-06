import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "33771245355";
const WHATSAPP_MESSAGE = "Bonjour, je souhaite obtenir un devis pour vos services.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-white" />
    </a>
  );
}