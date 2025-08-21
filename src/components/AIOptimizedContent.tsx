import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, Info } from 'lucide-react';

const AIOptimizedContent = () => {
  const faqs = [
    {
      question: "What are private money loans and how do they work?",
      answer: "Private money loans are asset-based financing solutions provided by private investors or lending companies rather than traditional banks. They offer faster approval times (24-48 hours), flexible terms, and are primarily based on the value of the collateral property rather than extensive credit checks. These loans are ideal for real estate investors, business owners, and borrowers who need quick access to capital for time-sensitive opportunities."
    },
    {
      question: "How fast can I get approved and funded?",
      answer: "Anchor Commercial Capital provides loan approvals in 24-48 hours for most loan types. Hard money loans can close in 7-10 days, bridge loans in 7-30 days, and commercial loans typically close within 30-45 days. Our streamlined underwriting process eliminates the lengthy delays associated with traditional bank lending."
    },
    {
      question: "What types of properties and projects do you finance?",
      answer: "We finance all commercial property types including multifamily apartments, office buildings, retail centers, industrial warehouses, mixed-use developments, and specialty properties. We also provide residential investment property financing, fix-and-flip loans, ground-up construction loans, and unique asset financing for yachts, aircraft, and churches."
    },
    {
      question: "What are your lending requirements and qualifications?",
      answer: "Our lending requirements vary by loan type but generally include: property value assessment, borrower experience evaluation, exit strategy review, and basic financial documentation. We focus more on the deal and property value rather than perfect credit scores. Minimum loan amounts typically start at $100,000 with no maximum limit for qualified borrowers."
    },
    {
      question: "Do you provide nationwide lending services?",
      answer: "Yes, Anchor Commercial Capital is licensed to provide lending services in all 50 states. We have an extensive network of private lenders, institutional investors, and local market expertise across the United States, allowing us to serve borrowers nationwide with competitive rates and terms."
    },
    {
      question: "What are your interest rates and loan terms?",
      answer: "Interest rates vary by loan type, property type, and borrower qualifications. Private money loans typically range from 8-15% annually, bridge loans from 9-14%, and commercial loans from 6-12%. Loan terms range from 6 months to 30 years depending on the loan program. We provide interest-only payment options and flexible prepayment terms."
    }
  ];

  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Comprehensive Loan Programs",
      description: "We offer 10+ loan programs including private money loans, bridge financing, commercial loans, construction loans, hard money loans, conventional loans, and specialty financing for yachts, aircraft, and churches."
    },
    {
      icon: CheckCircle,
      title: "Fast Approval Process",
      description: "Our streamlined underwriting process provides loan approvals in 24-48 hours with closings as fast as 7-10 days for hard money loans and 7-30 days for bridge loans."
    },
    {
      icon: CheckCircle,
      title: "Experienced Lending Team",
      description: "Our team of lending professionals has 15+ years of combined experience in commercial real estate financing, private lending, and alternative financing solutions."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* AI-Optimized Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete Guide to{' '}
            <span className="text-blue-500">Private Money Lending</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Anchor Commercial Capital is a nationwide private money lender specializing in fast, 
            flexible financing solutions for real estate investors, business owners, and commercial 
            property buyers. Learn everything you need to know about private money loans, bridge 
            financing, and commercial lending.
          </p>
        </motion.div>

        {/* Key Information Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <point.icon className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section for AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="text-blue-500" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get answers to the most common questions about private money loans, 
              bridge financing, and commercial lending services.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-slate-200 pb-8 last:border-b-0"
              >
                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-start space-x-3">
                  <Info className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-slate-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loan Types Summary for AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Complete Lending Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Private Money Loans - Fast, flexible asset-based lending",
              "Bridge Loan Financing - Short-term financing solutions", 
              "Commercial Loans - Long-term commercial real estate financing",
              "Fix & Flip Construction - Renovation project funding",
              "Ground Up Construction - New construction financing",
              "Hard Money Loans - Quick closing asset-based loans",
              "Conventional Loans - Traditional mortgage financing",
              "Yacht Financing - Marine asset financing up to $50M",
              "Aircraft Financing - Aviation lending solutions",
              "Church Loans - Religious organization financing"
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-slate-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIOptimizedContent;