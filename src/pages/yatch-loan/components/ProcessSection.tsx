import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Handshake, Key } from 'lucide-react';

const processSteps = [
  {
    icon: FileText,
    title: 'Submit Yacht Details',
    description: 'Complete our 2-minute yacht financing application with vessel details',
    timeline: '2 minutes',
    color: 'bg-blue-500'
  },
  {
    icon: Search,
    title: 'Lender Matching',
    description: 'Our system matches you with qualified marine lenders for your specific yacht financing needs',
    timeline: '24-48 hours',
    color: 'bg-green-500'
  },
  {
    icon: Handshake,
    title: 'Lender Introductions',
    description: 'Connect directly with matched marine lenders to discuss rates and terms',
    timeline: '2-5 days',
    color: 'bg-purple-500'
  },
  {
    icon: Key,
    title: 'Loan Closing',
    description: 'Complete documentation and close your yacht financing',
    timeline: '15-45 days',
    color: 'bg-orange-500'
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            From Inquiry to{' '}
            <span className="text-blue-500">Setting Sail</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our automated matching system and marine lender relationships accelerate your 
            yacht financing timeline.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center text-sm font-bold text-slate-600 lg:block hidden">
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-2xl mb-6`}
                  >
                    <step.icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {step.timeline}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
              <p className="text-slate-700 font-semibold">
                Our specialized yacht financing program offers competitive rates with flexible terms. 
                Interest-only payment options and no prepayment penalties provide maximum flexibility.
              </p>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Marine Specialists vs. Traditional Banks?
            </h3>
            <p className="text-slate-600 mb-6">
              While traditional banks often don't understand yacht values and marine markets, 
              Anchor Marine Capital connects you with lenders who specialize in yacht financing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">7.5%-9.0%</div>
                <div className="text-slate-600">Starting Rates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">$75M</div>
                <div className="text-slate-600">Max Loan Size</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">20 Years</div>
                <div className="text-slate-600">Max Terms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">Interest Only</div>
                <div className="text-slate-600">Payment Options</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;