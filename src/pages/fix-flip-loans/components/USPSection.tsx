import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, Clock } from 'lucide-react';

const uspFeatures = [
  {
    icon: Zap,
    title: 'Fast Fix & Flip Funding',
    description: 'Get matched with specialized fix & flip lenders in 24-48 hours. Quick decisions for time-sensitive renovation projects.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Fix & Flip Specialists',
    description: 'Access to private lenders, hard money lenders, and specialty construction financing sources for real estate investors.',
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Construction Loan Expertise',
    description: 'Deep relationships with lenders who understand renovation projects, construction draws, and investor needs.',
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: '2 Week Closings',
    description: 'Fix & flip loans designed for speed. From application to closing in 2 weeks with streamlined underwriting.',
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
            <span className="text-blue-500">Fix & Flip Loans</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get matched with specialized fix & flip lenders who understand real estate investment projects. 
            Fast approvals, flexible terms, and competitive rates for your renovation financing needs.
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
                ⚠️ URGENT: Interest rates are rising - Submit your fix & flip project before costs increase further
              </p>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Us Over Traditional Construction Lenders?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  Traditional Construction Lenders
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Slow approval process (45-90+ days)</li>
                  <li>• Complex draw process and inspections</li>
                  <li>• Rigid lending criteria for investors</li>
                  <li>• Limited understanding of fix & flip projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Our Fix & Flip Loan Approach
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Fast 2 week closing timeline</li>
                  <li>• Streamlined draw process</li>
                  <li>• Investor-friendly underwriting</li>
                  <li>• Multiple lender options specializing in fix & flip</li>
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