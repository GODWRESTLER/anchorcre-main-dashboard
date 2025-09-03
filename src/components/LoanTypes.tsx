import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Hammer, 
  Plane, 
  Ship, 
  Church, 
  TrendingUp,
  Construction,
  Banknote,
  ArrowRight,
  Clock
} from 'lucide-react';

const loanTypes = [
  {
    icon: Building2,
    title: 'Bridge Loan Financing',
    description: 'Lightning-fast bridge loans that close in 7-30 days. Perfect for time-sensitive commercial deals.',
    features: ['7-30 day closings', 'Up to 80% LTV', 'Interest-only payments'],
    color: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-500',
    link: '/bridge-loan',
    urgency: 'Term sheets in 24hrs'
  },
  {
    icon: TrendingUp,
    title: 'Commercial Real Estate Loans',
    description: 'Competitive CRE financing with rates as low as 5.99%. Get the capital you need to scale.',
    features: ['Rates from 5.99%', 'Up to 85% LTV', 'Terms up to 10 years'],
    color: 'from-purple-500 to-violet-600',
    iconBg: 'bg-purple-500',
    link: '/commercial',
    urgency: 'Lock in low rates today'
  },
  {
    icon: Hammer,
    title: 'Fix & Flip Construction',
    description: 'Fund your next flip with specialized construction loans. Up to 90% LTV for experienced investors.',
    features: ['90% LTV available', 'Draw-based funding', '2-week closings'],
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500',
    link: '/fix-flip-loans',
    urgency: 'Fund in 2 weeks'
  },
  {
    icon: Church,
    title: 'Church & Ministry Loans',
    description: 'Specialized financing for religious organizations. Rates starting at 4.50% with flexible terms.',
    features: ['Rates from 4.50%', 'Ministry-focused', 'Up to 80% LTV'],
    color: 'from-amber-500 to-yellow-600',
    iconBg: 'bg-amber-500',
    link: '/church-loan',
    urgency: 'Faith-based financing'
  },
  {
    icon: Construction,
    title: 'Ground Up Construction',
    description: 'New construction financing from $500K to $100M. Easy 7-draw process with competitive rates.',
    features: ['Up to 90% LTC', '7-draw process', '18-month terms'],
    color: 'from-red-500 to-pink-600',
    iconBg: 'bg-red-500',
    link: '/ground-up-construction',
    urgency: 'Rates from 9.00%'
  },
  {
    icon: Banknote,
    title: 'Hard Money Loans',
    description: 'Asset-based lending with 7-10 day closings. No income verification required.',
    features: ['7-10 day closings', 'No income docs', 'Up to 70% LTV'],
    color: 'from-indigo-500 to-blue-600',
    iconBg: 'bg-indigo-500',
    link: '/hard-money',
    urgency: 'Close in 7-10 days'
  },
  {
    icon: Ship,
    title: 'Yacht Financing',
    description: 'Premium marine financing up to $75M. Competitive rates with flexible terms for luxury vessels.',
    features: ['Up to $75M financing', 'Marine expertise', '20-year terms'],
    color: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-500',
    link: '/yatch-loan',
    urgency: 'Marine specialists'
  },
  {
    icon: Plane,
    title: 'Aircraft Financing',
    description: 'Aviation loans with rates from 7.5%-9.0%. No upfront fees or prepayment penalties.',
    features: ['Rates from 7.5%', 'No upfront fees', 'Up to 20 years'],
    color: 'from-sky-500 to-indigo-500',
    iconBg: 'bg-sky-500',
    link: '/aircraft-financing',
    urgency: 'Aviation experts'
  }
];

const LoanTypes = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="loan-types" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden" itemScope itemType="https://schema.org/Service">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp size={16} />
            <span>Complete Lending Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight" itemProp="name">
            <span className="block">Loan Programs That</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Deliver Term Sheets
            </span>
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium" itemProp="description">
            From <span className="font-bold text-slate-900">$100K fix & flips</span> to <span className="font-bold text-slate-900">$100M+ developments</span>, 
            <span className="text-blue-600 font-semibold"> AI-powered matching</span> delivers competitive term sheets in 24 hours, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 relative overflow-hidden"
              itemScope itemType="https://schema.org/FinancialProduct"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${loan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Urgency Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {loan.urgency}
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-20 h-20 ${loan.iconBg} rounded-2xl mb-6 shadow-lg relative z-10`}
              >
                <loan.icon className="text-white" size={36} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10" itemProp="name">
                {loan.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-lg relative z-10" itemProp="description">
                {loan.description}
              </p>

              <ul className="space-y-3 mb-8 relative z-10">
                {loan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-slate-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(loan.link, '_blank')}
                className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 rounded-xl font-bold hover:from-slate-900 hover:to-black transition-all flex items-center justify-center space-x-2 group relative z-10"
              >
                <span>Get Term Sheets</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 max-w-5xl mx-auto text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Term Sheets for Complex Deals?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our AI-powered platform can structure creative financing solutions for unique situations. 
                Get matched with specialized lenders and receive term sheets in 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center space-x-2 shadow-xl"
                >
                  <span>Get Custom Term Sheets</span>
                  <ArrowRight size={20} />
                </motion.button>
                
                <div className="flex items-center space-x-2 text-blue-200">
                  <Clock size={16} />
                  <span className="text-sm font-medium">Term sheets delivered in 24 hours guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanTypes;