import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, Clock } from 'lucide-react';

const uspFeatures = [
  {
    icon: Zap,
    title: 'Competitive Rates',
    description: 'Interest rates from 7.5%-9.0% with interest-only payment options. No upfront fees or prepayment penalties.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Lease or Lending Options',
    description: 'Flexible financing solutions with both lease and lending options available for aircraft acquisitions.',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Aviation Expertise',
    description: 'Deep understanding of aircraft values, registration requirements, and aviation industry financing needs.',
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: 'Up to 20 Year Terms',
    description: 'Extended financing terms up to 20 years with flexible repayment structures designed for aircraft ownership.',
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
            <span className="text-blue-500">Aircraft Financing</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get matched with specialized aviation lenders who understand aircraft financing. 
            Competitive rates, flexible terms, and expert guidance for your aircraft acquisition needs.
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
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6">
              <p className="text-red-700 font-semibold text-center">
                ⚠️ URGENT: Interest rates are rising - Submit your aircraft financing project before costs increase further
              </p>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Us Over Traditional Aircraft Lenders?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  Traditional Aircraft Lenders
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Slow approval process (45-90+ days)</li>
                  <li>• Higher interest rates and fees</li>
                  <li>• Rigid qualification requirements</li>
                  <li>• Limited loan-to-value ratios</li>
                  <li>• Prepayment penalties and restrictions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Our Aircraft Financing Approach
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Fast 2 week closing timeline</li>
                  <li>• Competitive 7.5%-9.0% interest rates</li>
                  <li>• Flexible qualification criteria</li>
                  <li>• Up to 20-year financing terms</li>
                  <li>• No upfront fees or prepayment penalties</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mt-6">
              <p className="text-green-700 font-semibold text-center">
                ✈️ OPPORTUNITY: Secure competitive aircraft financing rates before market conditions change
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;