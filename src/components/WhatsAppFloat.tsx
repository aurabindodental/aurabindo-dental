import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = '919866937777'; // Include country code without +
  const message = 'Hello! I would like to book an appointment at Aurobindo Dental Hospital.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-hover transition-smooth animate-scale-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
