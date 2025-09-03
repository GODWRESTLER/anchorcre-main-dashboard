import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Award, Clock, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'AI-Powered Matching',
    description: 'Our advanced AI analyzes your needs and matches you with the perfect lender in 24 hours.',
    color: 'text-blue-500',
    bgColor: 'from-blue-500 to-cyan-600',
    stat: '24hr guarantee'
  },
  {
    icon: DollarSign,
    title: 'Competitive Rates',
    description: 'Access to exclusive rates through our network of 200+ specialized commercial lenders.',
    color: 'text-green-500',
    bgColor: 'from-green-500 to-emerald-600',
    stat: 'Rates from 5.99%'
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your information is protected with enterprise-grade security and complete confidentiality.',
    color: 'text-purple-500',
    bgColor: 'from-purple-500 to-violet-600',
    stat: '256-bit encryption'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with seasoned lending professionals who understand complex commercial deals.',
    color: 'text-orange-500',
    bgColor: 'from-orange-500 to-red-600',
    stat: '15+ years experience'
  },
  {
    icon: Clock,
    title: 'Lightning Fast Closings',
    description: 'Close faster with our streamlined process and dedicated support team.',
    color: 'text-red-500',
    bgColor: 'from-red-500 to-pink-600',
    stat: '7-45 day closings'
  },
  {
    icon: Award,
    title: 'Proven Success',
    description: 'Over $2 billion in successful loan originations with a 98% customer satisfaction rate.',
    color: 'text-indigo-500',
    bgColor: 'from-indigo-500 to-blue-600',
    stat: '$2B+ funded'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-32 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 text-blue-200 px-6 py-3 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-white/20">
            <Award size={16} />
            <span>Industry Leading Platform</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block">Why Choose</span>
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Anchor Commercial Capital?
            </span>
          </h2>
          
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            We're not just another lender - we're your AI-powered financing partner with 
            cutting-edge technology and unmatched industry expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Stat Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                {advantage.stat}
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30 relative z-10"
              >
                <advantage.icon className="text-white" size={36} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                {advantage.title}
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed relative z-10">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              🏆 Industry-Leading Results
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our numbers speak for themselves. See why thousands of borrowers trust 
              Anchor Commercial Capital for their financing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-green-400 mb-3">98%</div>
              <div className="text-white font-semibold text-lg">Customer Satisfaction</div>
              <div className="text-blue-200 text-sm mt-2">Based on 2,847 reviews</div>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-blue-400 mb-3">24hr</div>
              <div className="text-white font-semibold text-lg">Average Response Time</div>
              <div className="text-blue-200 text-sm mt-2">Guaranteed lender matching</div>
            </div>
            <div className="text-center bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-purple-400 mb-3">$2B+</div>
              <div className="text-white font-semibold text-lg">Successfully Funded</div>
              <div className="text-blue-200 text-sm mt-2">Since 2009</div>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2 mx-auto shadow-xl"
            >
              <span>Experience the Difference</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;