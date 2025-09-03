import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';

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
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold border border-blue-400/30 backdrop-blur-sm">
              <Zap size={16} className="text-blue-400" />
              <span>AI-Powered Commercial Lending Platform</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight"
            itemProp="headline"
          >
            <span className="block">Commercial Loans</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Funded in 24 Hours
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-3xl text-slate-200 mb-6 leading-relaxed max-w-5xl mx-auto font-medium">
              <span className="text-white font-bold">$100K to $100M+</span> commercial real estate financing with{' '}
              <span className="text-blue-300 font-bold">AI-powered lender matching</span>. 
              Skip the banks. Get funded fast.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle size={20} />
                <span className="font-semibold">24-Hour Approvals</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp size={20} />
                <span className="font-semibold">$2B+ Funded</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Zap size={20} />
                <span className="font-semibold">98% Success Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto backdrop-blur-sm"
          >
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-300 font-bold text-lg">URGENT MARKET ALERT</span>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-white font-semibold text-xl">
              Interest rates rising fast! Lock in your commercial loan rate before costs increase further.
            </p>
            <p className="text-red-200 text-sm mt-2">
              Submit your deal today - rates could be 0.5-1% higher next month
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all flex items-center space-x-3 text-xl shadow-2xl border border-blue-400/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Get Funded in 24 Hours</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={scrollToLoans}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white px-12 py-6 rounded-2xl font-bold hover:bg-white/20 transition-all shadow-xl bg-white/10 backdrop-blur-sm text-xl"
            >
              View Loan Programs
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: '24hrs', label: 'Avg Approval Time', icon: '⚡' },
              { number: '200+', label: 'Active Lenders', icon: '🏦' },
              { number: '$2B+', label: 'Loans Funded', icon: '💰' },
              { number: '98%', label: 'Success Rate', icon: '🎯' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto"
            itemScope 
            itemType="https://schema.org/ContactPoint"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Call Now</div>
                  <div className="text-blue-200 text-xl font-semibold" itemProp="telephone">(555) 123-LOAN</div>
                  <div className="text-slate-400 text-sm">Instant Response</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="text-green-400" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Email Us</div>
                  <div className="text-green-200 text-lg font-semibold" itemProp="email">loans@anchorcreloans.com</div>
                  <div className="text-slate-400 text-sm">2-Hour Response</div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Business Hours</div>
                  <div className="text-purple-200 font-semibold">Mon-Fri: 8AM-8PM EST</div>
                  <div className="text-slate-400 text-sm">Weekend Available</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-slate-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-medium">Nationwide lending professionals ready to help</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;