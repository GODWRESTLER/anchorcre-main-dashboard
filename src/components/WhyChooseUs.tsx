import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Award, Clock, DollarSign } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Fast Approvals',
    description: 'Get approved in as little as 24-48 hours with our streamlined process.',
    color: 'text-blue-500'
  },
  {
    icon: DollarSign,
    title: 'Competitive Rates',
    description: 'Access to competitive rates through our extensive lender network.',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Secure & Confidential',
    description: 'Your information is protected with bank-level security and confidentiality.',
    color: 'text-purple-500'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with experienced lending professionals who understand your needs.',
    color: 'text-orange-500'
  },
  {
    icon: Clock,
    title: 'Quick Closings',
    description: 'Close faster with our efficient processing and dedicated support team.',
    color: 'text-red-500'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over $2 billion in loans funded with a 98% customer satisfaction rate.',
    color: 'text-indigo-500'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose{' '}
            <span className="text-blue-500">Anchor Commercial Capital</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're more than just a lender - we're your financing partner committed to 
            your success with personalized service and competitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-6 group-hover:bg-slate-200 transition-colors"
              >
                <advantage.icon className={advantage.color} size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {advantage.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients who've 
              experienced our exceptional service and competitive financing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-slate-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">24hr</div>
              <div className="text-slate-600">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">5000+</div>
              <div className="text-slate-600">Successful Closings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;