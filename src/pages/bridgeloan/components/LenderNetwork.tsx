import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Shield, TrendingUp } from 'lucide-react';

const lenderTypes = [
  {
    icon: Building,
    title: 'Private Capital',
    description: 'Direct access to private lenders specializing in commercial real estate',
    features: ['Asset-based lending', 'Flexible terms', 'Quick decisions'],
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Regional Banks',
    description: 'Community and regional banks with local market expertise',
    features: ['Relationship focus', 'Market knowledge', 'Competitive pricing'],
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Specialty Lenders',
    description: 'Specialized CRE lenders for unique property types and situations',
    features: ['Niche expertise', 'Creative solutions', 'Industry focus'],
    color: 'text-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Institutional Capital',
    description: 'Life companies, CMBS, and other institutional funding sources',
    features: ['Large loan capacity', 'Long-term financing', 'Competitive rates'],
    color: 'text-orange-500'
  }
];

const LenderNetwork = () => {
  const scrollToForm = () => {
    const element = document.getElementById('qualify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lenders" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive{' '}
            <span className="text-blue-500">Lender Network</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access to 150+ active lenders across all commercial real estate financing types. 
            From acquisition to development, we connect you with the right capital source.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {lenderTypes.map((lender, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-6 group-hover:bg-slate-200 transition-colors`}
              >
                <lender.icon className={`${lender.color}`} size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {lender.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {lender.description}
              </p>

              <ul className="space-y-2">
                {lender.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Network Advantage
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our years of relationship building have created a comprehensive network 
              that gives you access to more financing options than going direct.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Active Lenders' },
              { number: '$25B+', label: 'Available Capital' },
              { number: '48hr', label: 'Avg Response Time' },
              { number: '20-50', label: 'Weekly Qualified Leads' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Connect with Our Network
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LenderNetwork;