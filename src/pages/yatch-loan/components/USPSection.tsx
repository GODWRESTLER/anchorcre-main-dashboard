import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, Clock } from 'lucide-react';

const uspFeatures = [
  {
    icon: Zap,
    title: 'Fast Yacht Loan Approvals',
    description: 'Get matched with specialized marine lenders in 24-48 hours. Quick decisions for your dream yacht.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Marine Financing Experts',
    description: 'Access to yacht lenders, marine banks, and specialty boat financing sources nationwide.',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Yacht Financing Expertise',
    description: 'Deep relationships with marine lenders who understand yacht values, depreciation, and marine markets.',
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: 'Competitive Rates',
    description: 'Access to the most competitive yacht financing rates. Terms up to 20 years for qualified buyers.',
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
            <span className="text-blue-500">Anchor Marine Capital</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get matched with specialized marine lenders who understand yacht financing. 
            Fast approvals, flexible terms, and competitive rates for your yacht financing needs.
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
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-6 ${feature.color}`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
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
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
              <p className="text-blue-700 font-semibold text-center">
                ⚓ YACHT SEASON: Secure financing now for spring delivery - Best rates available
              </p>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Us Over Traditional Marine Lenders?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4 text-center">
                  Traditional Marine Lenders
                </h4>
                <ul className="space-y-3 text-slate-600">
                  <li>• Limited loan options and terms</li>
                  <li>• Slower approval process</li>
                  <li>• Higher rates and fees</li>
                  <li>• Less flexible underwriting</li>
                  <li>• Limited yacht expertise</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4 text-center">
                  Anchor Marine Capital's Approach
                </h4>
                <ul className="space-y-3 text-slate-600">
                  <li>• Multiple lender network for best options</li>
                  <li>• Fast 24-48 hour approvals</li>
                  <li>• Competitive rates and terms</li>
                  <li>• Flexible underwriting criteria</li>
                  <li>• Deep marine financing expertise</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 mb-4">
                Loan Terms & Structure
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <ul className="space-y-3 text-slate-600">
                  <li>• <strong>Loan Amount:</strong> $500K to $75MM</li>
                  <li>• <strong>Terms:</strong> 2 to 20 years</li>
                  <li>• <strong>Interest Rates:</strong> 7.5% - 9.0%</li>
                  <li>• <strong>Payment:</strong> Interest only options</li>
                  <li>• <strong>Prepayment:</strong> No penalty</li>
                </ul>
                <ul className="space-y-3 text-slate-600">
                  <li>• <strong>Yacht specs:</strong> Model, year built, etc.</li>
                  <li>• <strong>Location:</strong> Proof of docked location</li>
                  <li>• <strong>Registration:</strong> Method of registration</li>
                  <li>• <strong>Financials:</strong> Borrower financial info</li>
                  <li>• <strong>Eligibility:</strong> US clients only</li>
                </ul>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-600 italic">
                  LTV dependent on loan size, age of yacht and borrower's financials
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;