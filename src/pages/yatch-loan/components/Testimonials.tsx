import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Captain James Mitchell',
    role: 'Yacht Owner',
    company: 'Private Yacht Owner',
    rating: 5,
    text: 'Needed to finance a 65-foot Hatteras quickly before someone else bought it. Anchor Marine Capital connected me with three qualified marine lenders within 48 hours. Got the best rate I\'ve ever seen.',
    avatar: '⚓',
    loanAmount: '$850K • 7.8% Interest Only'
  },
  {
    name: 'Sarah Thompson',
    role: 'Yacht Broker',
    company: 'Thompson Yacht Sales',
    rating: 5,
    text: 'My clients needed financing for a custom Sunseeker. Their network included marine lenders I never would have found on my own. The automated matching saved me weeks of research.',
    avatar: '🛥️',
    loanAmount: '$2.1M • 15 Year Term'
  },
  {
    name: 'Robert Martinez',
    role: 'Fleet Owner',
    company: 'Martinez Marine Group',
    rating: 5,
    text: 'Expanding our charter fleet with three new catamarans. Anchor Marine Capital\'s network includes marine lenders nationwide. Having specialized lender relationships has been a game-changer.',
    avatar: '⛵',
    loanAmount: '$4.2M • Interest Only'
  },
  {
    name: 'Lisa Chen',
    role: 'Superyacht Owner',
    company: 'Private Owner',
    rating: 5,
    text: 'Superyachts require specialized lenders who understand luxury marine assets. Anchor Marine Capital connected me with lenders who actually compete for our business. Better terms, faster process.',
    avatar: '🛳️',
    loanAmount: '$8.5M • 20 Year Term'
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
            <span className="text-blue-400">Yacht Enthusiasts</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Yacht owners, brokers, and marine enthusiasts share how our marine lender network 
            and automated matching helped them secure better yacht financing faster.
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
              Marine Financing Experts
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;