import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative z-10 bg-slate-900 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        
        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('loan-types')} className="text-slate-300 hover:text-white transition-colors">Loan Programs</button>
          <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">Contact</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Get Pre-Approved
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pt-4 border-t border-white/20"
        >
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('loan-types')} className="text-slate-300 hover:text-white transition-colors text-left">Loan Programs</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors text-left">About</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors text-left">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors text-left">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-left">
              Get Pre-Approved
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;