import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'David Martinez',
    role: 'Real Estate Investor',
    company: 'Martinez Properties',
    rating: 5,
    text: 'Needed financing for a retail plaza in Texas. Anchor Commercial Capital connected me with private lenders offering 6.2% rates and 80% LTV. The flexibility made all the difference in closing the deal.',
    avatar: '👩‍💼',
    loanAmount: '$3.2M Retail Plaza'
  },
  {
    name: 'Sarah Johnson',
    role: 'Commercial Investor',
    company: 'Johnson Investments',
    rating: 5,
    text: 'Working on multiple office building acquisitions. Their private lender network included regional specialists I never would have found. The competitive rates and terms were exactly what I needed.',
    avatar: '👩‍💼',
    loanAmount: '$12M Portfolio'
  },
  {
    name: 'James Wilson',
    role: 'Commercial Developer',
    company: 'Wilson Development',
    rating: 5,
    text: 'Developing mixed-use properties across Florida and Illinois. Their network includes private lenders in each market with local expertise. The 7-year terms at 6.8% made our projects profitable.',
    avatar: '👨‍💻',
    loanAmount: '$18M Development'
  },
  {
    name: 'Lisa Thompson',
    role: 'Commercial Investor',
    company: 'Thompson Commercial',
    rating: 5,
    text: 'Industrial properties require specialized financing. Their private commercial lenders understood our asset class and offered 75% LTV at 6.5%. The long-term amortization improved our cash flow significantly.',
    avatar: '👩‍💻',
    loanAmount: '$5.8M Industrial'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories from{' '}
            <span className="text-blue-400">CRE Investors</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Commercial real estate investors share how our private lender network 
            helped them secure competitive financing with flexible terms and better rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-400 fill-current" />
                ))}
              </div>

              <Quote className="text-slate-600 mb-4" size={24} />

              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-blue-400 font-semibold text-sm">
                    {testimonial.loanAmount}
                  </div>
                  <div className="text-slate-500 text-xs">
                    Loan Amount
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="text-blue-400" size={20} />
              <span className="text-white font-semibold">$500M+ Facilitated</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="text-slate-400">
              Private Lender Network
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;