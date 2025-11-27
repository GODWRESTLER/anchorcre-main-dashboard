import { Phone, Calendar } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 safe-area-inset-bottom">
      <div className="flex">
        <a
          href="tel:+19542895914"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-4 flex items-center justify-center gap-2 font-semibold transition-colors active:bg-blue-800"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <a
          href="https://links.clouddrafted.com/widget/booking/Z4VlFfTa2n47oEBpBwko"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 px-4 flex items-center justify-center gap-2 font-semibold transition-colors active:bg-orange-700"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Consultation</span>
        </a>
      </div>
    </div>
  );
}
