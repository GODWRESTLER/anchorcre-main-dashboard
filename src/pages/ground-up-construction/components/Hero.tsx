import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('qualify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('process');
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
              Ground Up Construction Loan Specialist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ground Up Construction Loans{' '}
            <span className="text-blue-400">That Fund Fast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Ground up construction financing from $500K to $100M. Rates from 9.00% with up to 90% LTC & 75% LTV. 
            Single family up to 50 units and multi-family properties with 18-month terms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {[
              'Rates from 9.00%',
              'Up to 90% LTC & 75% LTV', 
              'Easy 7 Draw Process'
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
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2 text-lg shadow-xl"
            >
              <span>Get Construction Loan Quote</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              onClick={scrollToProcess}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors shadow-xl bg-white/5"
            >
              Construction Process
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">$500K-$100M</div>
                <div className="text-blue-200">Loan Amounts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">90% LTC</div>
                <div className="text-blue-200">Max Financing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">18 Months</div>
                <div className="text-blue-200">Max Terms</div>
              </div>
            </div>
            <div className="text-center mt-6 text-slate-300">
              Trusted by real estate developers and builders nationwide
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;