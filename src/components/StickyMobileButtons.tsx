import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const StickyMobileButtons = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-2 p-3 max-w-screen-sm mx-auto">
        <a
          href="tel:+19542895914"
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md active:scale-95 transform"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center space-x-2 bg-slate-900 text-white py-4 px-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-md active:scale-95 transform"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Calendar size={20} />
          <span>Schedule</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileButtons;
