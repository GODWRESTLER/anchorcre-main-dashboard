import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, Clock } from 'lucide-react';

const uspFeatures = [
  {
    icon: Zap,
    title: 'Specialized Church Programs',
    description: 'Tailored financing solutions for churches, synagogues, and non-profit organizations with competitive rates and flexible terms.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Conventional & Hard Money',
    description: 'Wide array of programs from major institutions plus hard money options for challenging situations or urgent needs.',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Religious Organization Expertise',
    description: 'Deep understanding of church finances, tithes, plate income, and the unique needs of religious organizations.',
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: 'Flexible Loan Terms',
    description: 'Loans from $500K to $25M with 15-20 year amortization and 3-5 year ARM terms designed for church budgets.',
    color: 'text-orange-500'
  }
];

const USPSection = () => {
  return (
    <section id="loans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Our{' '}
            <span className="text-blue-500">Church Financing</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Church financing is a highly specialized area of commercial real estate finance. 
            We understand the unique needs of religious organizations and offer tailored solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uspFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6 group-hover:bg-slate-200 transition-colors`}
              >
                <feature.icon className={`${feature.color}`} size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Church Financial Programs Overview
            </h3>
            <p className="text-slate-600 mb-6">
              Our church and synagogue program is well suited to help finance all types of church needs including property acquisition, refinance notes, debt reduction, and construction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Conventional Financing
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Rates starting at 4.50% to 5.00%</li>
                  <li>• Loan sizes from $500K to $25M</li>
                  <li>• 15-20 year amortization</li>
                  <li>• No prepayment penalty</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Hard Money for Churches
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Rates starting at 9.99% to 11%</li>
                  <li>• For churches with equity but credit issues</li>
                  <li>• Fast cash when time is critical</li>
                  <li>• Bridge financing available</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;