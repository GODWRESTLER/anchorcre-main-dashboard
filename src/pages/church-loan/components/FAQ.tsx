import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Clock, CheckCircle, DollarSign, Building, Hammer, RefreshCw } from 'lucide-react';

const faqData = [
  {
    question: "What is the maximum amount of money a church can afford to borrow?",
    answer: "Underwriters take many factors into consideration when determining the maximum borrowing capacity of a church. A good rough estimate of the general range a church can borrow is to take the last 12 months of gross general tithes and offerings income and multiply that number by 3 times and by 5 times and that will generally give you the low end of what the church can borrow and the high end of what the Church can borrow. As an example: if a church has gross income of $500,000 per year they can probably borrow between $1,500,000 and $2,500,000."
  },
  {
    question: "What types of church financing do you offer?",
    answer: "We offer comprehensive church financing including: Property acquisition for new church buildings, refinancing existing mortgages, construction loans for new facilities (sanctuary, family life center, daycare, gymnasium), and remodeling projects from roof replacements to sanctuary overhauls."
  },
  {
    question: "What are your loan terms and rates?",
    answer: "Conventional Bank Loans: Competitive rates starting at 4.50%-5.00%, with 5, 7, or 20-year terms. Private Hard Money: Available for quick closings starting at 9.99%-11%. Loan amounts range from $500,000 to $25,000,000 nationwide."
  },
  {
    question: "What is the maximum loan-to-value ratio?",
    answer: "The maximum loan to value permitted is 75%. This is typical of most church lenders and means that the requirement for a church loan is a 25% cash injection by the church into the project."
  },
  {
    question: "How are loan approvals determined?",
    answer: "Loan approvals are not based solely upon financial ratios. We also look at other areas such as: leadership quality, ministry impact, commitment of the members, growth potential, and church location when reviewing loan requests."
  },
  {
    question: "What is the typical timeline for church loan approval?",
    answer: "Our process typically takes 4-6 weeks from application to closing. We'll contact you within 2-3 days of application submission, and all church loans are subject to approval by the lender's Board of Directors."
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "Step 1 - Application",
    description: "Complete your application online or send it to us by email",
    details: [
      "Nationwide coverage",
      "Loan Amounts: $500,000 to $25,000,000", 
      "3.5 times last years financials loan amounts",
      "Conventional Bank Loans Available - Competitive Rates, 5, 7, 20 year terms",
      "Private Hard Money Available - Quick Closings",
      "LTV: Maximum loan to value permitted is 75%"
    ]
  },
  {
    icon: Clock,
    title: "Step 2 - Review by Loan Team", 
    description: "We will contact you within 2-3 days. Additional church information may be requested.",
    details: []
  },
  {
    icon: CheckCircle,
    title: "Step 3 - Board Approval",
    description: "All church loans are subject to approval by lenders Board of Directors.",
    details: []
  },
  {
    icon: DollarSign,
    title: "Step 4 - Closing",
    description: "Typically 4-6 weeks upon selection of title company or real estate attorney.",
    details: []
  }
];

const loanTypes = [
  {
    icon: Building,
    title: "Purchase New Property",
    description: "We support both Daycare purchases and existing church building purchases."
  },
  {
    icon: RefreshCw,
    title: "Loan Refinancing", 
    description: "A little refinancing can go a long way. Learn about our cost-effective refinancing options to save money."
  },
  {
    icon: Hammer,
    title: "New Construction",
    description: "We offer tailored loans to your unique needs with advantages no bank can match. Church construction loans for:",
    details: ["Sanctuary", "Family Life Center", "Daycare", "Gymnasium"]
  },
  {
    icon: Building,
    title: "Remodel Project",
    description: "We fund various church remodeling projects, from roof replacements to sanctuary overhauls."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Church Financing{' '}
            <span className="text-blue-500">Made Easy</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process makes church financing simple and straightforward. 
            Here's everything you need to know about getting your church loan approved.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Simple 4-Step Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl mb-4">
                  <step.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                {step.details.length > 0 && (
                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-slate-500 flex items-start">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loan Types */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Types of Church Financing We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl mb-4">
                  <type.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {type.title}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {type.description}
                </p>
                {type.details && (
                  <ul className="space-y-1">
                    {type.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-slate-500 flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-slate-400" size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Church Financing Application?
            </h3>
            <p className="text-slate-600 mb-6">
              Get pre-qualified in minutes and connect with specialized church lenders nationwide.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('qualify');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Start Your Application
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;