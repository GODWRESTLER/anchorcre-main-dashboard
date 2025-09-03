import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, Info, Zap, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const AIOptimizedContent = () => {
  const faqs = [
    {
      question: "What are private money loans and how do they work?",
      answer: "Private money loans are asset-based financing solutions provided by private investors or lending companies rather than traditional banks. They offer faster approval times (24-48 hours), flexible terms, and are primarily based on the value of the collateral property rather than extensive credit checks. These loans are ideal for real estate investors, business owners, and borrowers who need quick access to capital for time-sensitive opportunities.",
      category: "Private Money"
    },
    {
      question: "How fast can I get approved and funded for a commercial loan?",
      answer: "Anchor Commercial Capital provides loan approvals in 24-48 hours for most loan types. Hard money loans can close in 7-10 days, bridge loans in 7-30 days, and commercial loans typically close within 30-45 days. Our AI-powered matching system eliminates the lengthy delays associated with traditional bank lending.",
      category: "Speed & Approval"
    },
    {
      question: "What types of commercial properties and projects do you finance?",
      answer: "We finance all commercial property types including multifamily apartments, office buildings, retail centers, industrial warehouses, mixed-use developments, and specialty properties. We also provide residential investment property financing, fix-and-flip loans, ground-up construction loans, and unique asset financing for yachts, aircraft, and churches.",
      category: "Property Types"
    },
    {
      question: "What are your interest rates and loan terms for commercial financing?",
      answer: "Interest rates vary by loan type and qualifications. Commercial loans start at 5.99%, private money loans typically range from 8-15% annually, bridge loans from 9-14%, and hard money loans from 8-12%. Terms range from 6 months to 30 years with flexible prepayment options and interest-only payment structures available.",
      category: "Rates & Terms"
    },
    {
      question: "Do you provide nationwide commercial lending services?",
      answer: "Yes, Anchor Commercial Capital provides lending services in all 50 states with a nationwide network of over 200 specialized lenders and local market expertise. Our AI-powered platform connects borrowers with the right lenders regardless of location.",
      category: "Coverage"
    },
    {
      question: "What are the requirements for commercial loan approval?",
      answer: "Our lending requirements vary by loan type but generally include: property value assessment, borrower experience evaluation, exit strategy review, and basic financial documentation. We focus more on the deal and property value rather than perfect credit scores. Minimum loan amounts typically start at $100,000 with no maximum limit for qualified borrowers.",
      category: "Requirements"
    }
  ];

  const keyPoints = [
    {
      icon: Zap,
      title: "AI-Powered Lender Matching",
      description: "Our advanced AI technology analyzes your financing needs and instantly matches you with the most suitable lenders from our network of 200+ specialized commercial lenders nationwide.",
      stats: "24-hour matching guarantee"
    },
    {
      icon: TrendingUp,
      title: "Comprehensive Loan Portfolio",
      description: "We offer 10+ loan programs including private money loans, bridge financing, commercial loans, construction loans, hard money loans, conventional loans, and specialty financing for yachts, aircraft, and churches.",
      stats: "$100K to $100M+ loan amounts"
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Our team of lending professionals has 15+ years of combined experience in commercial real estate financing, private lending, and alternative financing solutions with over $2 billion in successful loan originations.",
      stats: "98% customer satisfaction rate"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* AI-Optimized Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Info size={16} />
            <span>Complete Guide to Commercial Lending</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            <span className="block">Everything You Need to Know About</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Commercial Financing
            </span>
          </h2>
          
          <p className="text-2xl text-slate-600 mb-8 leading-relaxed max-w-5xl mx-auto font-medium">
            Anchor Commercial Capital is a nationwide commercial lender specializing in fast, 
            flexible financing solutions for real estate investors, business owners, and commercial 
            property buyers. Our AI-powered platform revolutionizes how commercial loans get funded.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">24 Hours</div>
              <div className="text-green-700 font-semibold">Average Approval Time</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-blue-700 font-semibold">Specialized Lenders</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2B+</div>
              <div className="text-purple-700 font-semibold">Successfully Funded</div>
            </div>
          </div>
        </motion.div>

        {/* Key Information Points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <point.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                    {point.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle size={16} />
                    <span>{point.stats}</span>
                  </div>
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
          className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-200"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="text-white" size={36} />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get expert answers to the most common questions about commercial lending, 
              private money loans, and our financing process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {faq.category}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4" itemProp="name">
                      {faq.question}
                    </h4>
                    <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                      <p className="text-slate-600 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loan Types Summary for AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">
              🚀 Complete Commercial Lending Solutions
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From traditional real estate financing to specialty lending for unique assets, 
              we offer comprehensive loan products with AI-powered lender matching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "🏢 Private Money Loans - Fast, flexible asset-based lending",
              "🌉 Bridge Loan Financing - Short-term financing solutions", 
              "🏬 Commercial Loans - Long-term commercial real estate financing",
              "🔨 Fix & Flip Construction - Renovation project funding",
              "🏗️ Ground Up Construction - New construction financing",
              "⚡ Hard Money Loans - Quick closing asset-based loans",
              "🏦 Conventional Loans - Traditional mortgage financing",
              "⛵ Yacht Financing - Marine asset financing up to $75M",
              "✈️ Aircraft Financing - Aviation lending solutions",
              "⛪ Church Loans - Religious organization financing"
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <p className="text-white font-medium text-lg">{service}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center space-x-2 mx-auto shadow-xl"
            >
              <span>Get Matched with Lenders Now</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIOptimizedContent;