import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, Handshake, Key } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Loan Consultation',
    description: 'Expert guidance to help you choose the right financing option for your needs.',
    features: ['Free consultation', 'Loan program comparison', 'Rate analysis']
  },
  {
    icon: Calculator,
    title: 'Pre-Qualification',
    description: 'Quick pre-qualification process to determine your borrowing capacity.',
    features: ['Fast approval', 'Credit analysis', 'Capacity assessment']
  },
  {
    icon: Handshake,
    title: 'Loan Processing',
    description: 'Streamlined processing with dedicated loan officers managing your file.',
    features: ['Dedicated support', 'Regular updates', 'Document management']
  },
  {
    icon: Key,
    title: 'Closing Support',
    description: 'Full support through closing with experienced closing coordinators.',
    features: ['Closing coordination', 'Title support', 'Funding assistance']
  }
];

const ServicesOverview = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our{' '}
            <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial consultation to closing, we provide comprehensive support 
            throughout your entire financing journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors"
              >
                <service.icon className="text-blue-500" size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you find 
              the perfect financing solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
              >
                Start Your Application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;