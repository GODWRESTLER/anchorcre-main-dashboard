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
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Get Funded in{' '}
            <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">24 Hours</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-slate-200 mb-12 leading-relaxed max-w-5xl mx-auto font-medium"
            itemProp="description"
          >
            <span className="text-white font-semibold">$100K to $100M+</span> commercial real estate loans with{' '}
            <span className="text-blue-300 font-semibold">lightning-fast approvals</span>. Our AI-powered matching connects you with{' '}
            <span className="text-white font-semibold">200+ specialized lenders</span> in 24 hours. No banks. No delays. Just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-16"
          >
            {[
              '⚡ 24-Hour Approvals',
              '🎯 AI-Powered Matching', 
              '💰 $2B+ Funded',
              '🏆 98% Success Rate'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-slate-200 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all flex items-center space-x-3 text-xl shadow-2xl hover:shadow-blue-500/25 border border-blue-400/30"
            >
              <span>Get Funded Now</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              onClick={scrollToLoans}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all shadow-xl bg-white/10 backdrop-blur-sm text-xl"
            >
              See Loan Options
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
              Nationwide lending professionals ready to help
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;