import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLoans = () => {
    const element = document.getElementById('loan-types');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
              Commercial & Private Lending Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span itemProp="name">Private Money Loans</span> &{' '}
            <span className="text-blue-400">Commercial Financing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto"
            itemProp="description"
          >
            Get <strong>private money loans</strong>, <strong>bridge financing</strong>, and <strong>commercial loans</strong> with 24-48 hour approvals. 
            Licensed nationwide lender since 2009 with over $2 billion funded. <strong>Apply today</strong> for fast financing solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {[
              'Fast Approvals in 24-48 Hours',
              'Competitive Rates & Terms', 
              'Nationwide Lending Network'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="text-blue-400" size={18} />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2 text-lg shadow-xl"
            >
              <span>Get Pre-Approved Today</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              onClick={scrollToLoans}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors shadow-xl bg-white/5"
            >
              View Loan Programs
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-semibold">Call Us Today</div>
                  <div className="text-blue-200">(555) 123-LOAN</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-blue-200">loans@anchorcreloans.com</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 text-slate-300">
              Licensed nationwide lending professionals ready to help
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;