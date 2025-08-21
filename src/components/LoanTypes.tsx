import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Hammer, 
  Plane, 
  Ship, 
  Church, 
  DollarSign, 
  TrendingUp,
  Construction,
  Banknote
} from 'lucide-react';

const loanTypes = [
  {

  {
    icon: Building2,
    title: 'Bridge Loan Financing',
    description: 'Short-term financing to bridge the gap between purchase and permanent financing.',
    features: ['7-30 day closings', 'Up to 80% LTV', 'Interest-only payments'],
    color: 'bg-green-500',
    link: '/bridge-loan'
  },
  {
    icon: TrendingUp,
    title: 'Commercial Loans',
    description: 'Comprehensive commercial real estate financing for all property types.',
    features: ['Competitive rates', 'Long-term financing', 'Nationwide coverage'],
    color: 'bg-purple-500',
    link: '/commercial'
  },
  {
    icon: Hammer,
    title: 'Fix & Flip Construction',
    description: 'Specialized financing for residential fix and flip projects.',
    features: ['Draw-based funding', 'Fast approvals', 'Experienced contractors'],
    color: 'bg-orange-500',
    link: '/fix-flip-loans'
  },
  {
    icon: Church,
    title: 'Church Loans & Financing',
    description: 'Specialized financing solutions for religious organizations and churches.',
    features: ['Ministry-focused', 'Flexible repayment', 'Competitive church rates'],
    color: 'bg-amber-500',
    link: '/church-loan'
  },
  {
    icon: Construction,
    title: 'Ground Up Construction',
    description: 'New construction financing for residential and commercial projects.',
    features: ['Construction-to-perm', 'Progress inspections', 'Competitive rates'],
    color: 'bg-red-500',
    link: '/ground-up-construction'
  },
  {
    icon: Banknote,
    title: 'Hard Money Loans',
    description: 'Asset-based lending with quick closings for time-sensitive deals.',
    features: ['7-10 day closings', 'No income verification', 'Up to 70% LTV'],
    color: 'bg-indigo-500',
    link: '/hard-money'
  },

  {
    icon: Ship,
    title: 'Yacht Financing',
    description: 'Specialized marine financing for luxury yachts and boats.',
    features: ['Up to $50M financing', 'Competitive marine rates', 'Flexible terms'],
    color: 'bg-cyan-500',
    link: '/yatch-loan'
  },
  {
    icon: Plane,
    title: 'Aircraft Financing',
    description: 'Aviation financing for private and commercial aircraft purchases.',
    features: ['New & used aircraft', 'Competitive aviation rates', 'Quick approvals'],
    color: 'bg-sky-500',
    link: '/aircraft-financing'
  }
];

const LoanTypes = () => {
  return (
    <section id="loan-types" className="py-24 bg-white" itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" itemProp="name">
            Comprehensive{' '}
            <span className="text-blue-500">Lending Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" itemProp="description">
            From traditional real estate financing to specialty lending for unique assets, 
            we offer a complete range of loan products to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-blue-200"
              itemScope itemType="https://schema.org/FinancialProduct"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 ${loan.color} rounded-2xl mb-6`}
              >
                <loan.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                {loan.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed" itemProp="description">
                {loan.description}
              </p>

              <ul className="space-y-2">
                {loan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(loan.link, '_blank')}
                className="mt-6 w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                Learn More
              </motion.button>
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
              Need a Custom Financing Solution?
            </h3>
            <p className="text-slate-600 mb-6">
              Our experienced lending team can structure creative financing solutions 
              for unique situations and specialized asset types.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Speak with a Lending Specialist
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanTypes;
