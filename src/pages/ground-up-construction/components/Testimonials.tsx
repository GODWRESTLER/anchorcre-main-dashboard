import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Chen',
    role: 'Real Estate Developer',
    company: 'Chen Development Group',
    rating: 5,
    text: 'Needed $2.5M for a ground up construction project in Austin. Anchor Commercial Capital connected me with lenders offering 9.25% rates and 85% LTC. Closed in 2 weeks with their easy 7 draw process.',
    avatar: '👨‍💼',
    loanAmount: '$2.5M Construction'
  },
  {
    name: 'Jennifer Walsh',
    role: 'Custom Home Builder',
    company: 'Walsh Custom Homes',
    rating: 5,
    text: 'Building 25 custom homes simultaneously. Got $15M financing at 9.50% with 90% LTC. The 7 draw process made construction management so much easier than traditional lenders.',
    avatar: '👩‍💼',
    loanAmount: '$15M Portfolio'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Real Estate Developer',
    company: 'Rodriguez Properties',
    rating: 5,
    text: 'Developing 50-unit single-family subdivision. Secured $45M at 9.75% with 18-month terms and 88% LTC. The streamlined process let us break ground 3 weeks ahead of schedule.',
    avatar: '👨‍💻',
    loanAmount: '$45M Development'
  },
  {
    name: 'Amanda Foster',
    role: 'Spec Home Builder',
    company: 'Foster Development LLC',
    rating: 5,
    text: 'Building spec homes in multiple markets. Got $8M portfolio financing at 9.00% with 75% LTV. The 7 draw process and 2-week closing timeline keeps our projects moving fast.',
    avatar: '👩‍💼',
    loanAmount: '$8M Portfolio'
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
           <span className="text-blue-400">Developers & Builders</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
           Real estate developers and builders share how our lender network 
           and automated matching helped them secure better construction financing faster.
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
              Construction Specialists
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;