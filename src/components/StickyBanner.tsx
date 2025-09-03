import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ArrowRight } from 'lucide-react';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm md:text-base">
                  🔥 URGENT: Interest Rates Rising Fast
                </span>
              </div>
              <span className="hidden md:inline text-sm">
                Lock in your financing before rates increase further - Get term sheets in 24 hours
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center space-x-2 text-sm"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">Get Term Sheets Now</span>
                <span className="sm:hidden">Apply</span>
                <ArrowRight size={16} />
              </motion.button>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-red-200 transition-colors p-1"
                aria-label="Close banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyBanner;