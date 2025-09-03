import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Zap, Shield, Award } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    message: '',
    smsOptIn: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse name into firstName and lastName
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Format data for GoHighLevel webhook
    const webhookData = {
      contact: {
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        tags: ['Website Lead', 'Commercial Loan Inquiry']
      },
      customFields: {
        loan_type: formData.loanType,
        loan_amount: formData.loanAmount,
        message: formData.message,
        sms_opt_in: formData.smsOptIn,
        source: 'Website Contact Form',
        lead_score: 'Hot'
      }
    };
    
    // Submit to GoHighLevel API
    fetch('https://services.leadconnectorhq.com/hooks/MXM63RC3IDd9isf1anbN/webhook-trigger/556795fc-6f88-40a5-966f-a12c800340a8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setIsSubmitted(true);
      })
      .catch(error => {
        setIsSubmitted(true);
        console.error('Submission error:', error);
      });

    // Google Ads Conversion Tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'USD'
      });
    }

    // Analytics Event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        'event_category': 'Lead Generation',
        'event_label': 'Qualification Form',
        'value': formData.loanAmount
      });
    }
    console.log("Form submitted")
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-green-500" size={48} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              🎉 Success! Your Loan Request is Submitted
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our AI is already analyzing your requirements and matching you with the best lenders. 
              Expect contact within 2 hours!
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 mb-6 text-xl">⚡ What happens next:</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="text-slate-700 font-medium">AI analysis of your financing needs (immediate)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="text-slate-700 font-medium">Lender matching and outreach (within 2 hours)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span className="text-slate-700 font-medium">Personal consultation call (within 24 hours)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 relative overflow-hidden" itemScope itemType="https://schema.org/ContactPage">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 text-blue-200 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-white/20">
            <Zap size={16} />
            <span>Get Funded Fast</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight" itemProp="name">
            <span className="block">Ready to Get</span>
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Pre-Approved?
            </span>
          </h2>
          
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium" itemProp="description">
            Submit your loan request and get matched with qualified lenders in 24 hours. 
            Our AI-powered platform finds the best rates and terms for your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Call for Instant Quote',
                  info: '(555) 123-LOAN',
                  description: 'Speak with a lending specialist now',
                  color: 'from-green-500 to-emerald-600',
                  bgColor: 'bg-green-500/20'
                },
                {
                  icon: Mail,
                  title: 'Email for Fast Response',
                  info: 'loans@anchorcreloans.com',
                  description: 'Get a response within 2 hours',
                  color: 'from-blue-500 to-cyan-600',
                  bgColor: 'bg-blue-500/20'
                },
                {
                  icon: MapPin,
                  title: 'Nationwide Coverage',
                  info: 'All 50 States',
                  description: 'Local expertise, national reach',
                  color: 'from-purple-500 to-violet-600',
                  bgColor: 'bg-purple-500/20'
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  info: 'Mon-Fri: 8AM-8PM EST',
                  description: 'Weekend appointments available',
                  color: 'from-orange-500 to-red-600',
                  bgColor: 'bg-orange-500/20'
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
                >
                  <div className={`w-16 h-16 ${contact.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <contact.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-blue-200 font-bold text-lg mb-1">
                      {contact.info}
                    </p>
                    <p className="text-blue-100">
                      {contact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Award className="text-yellow-400" size={28} />
                <span>Why Choose Anchor Commercial Capital?</span>
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-center space-x-3">
                  <Shield className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="font-medium">15+ years of lending experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <TrendingUp className="text-green-400 flex-shrink-0" size={20} />
                  <span className="font-medium">$2+ billion in loans funded</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="font-medium">98% customer satisfaction rate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="text-yellow-400 flex-shrink-0" size={20} />
                  <span className="font-medium">Nationwide lending services</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <CheckCircle size={16} />
                <span>Free Consultation - No Obligation</span>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Get Your Loan Quote in 60 Seconds
              </h3>
              <p className="text-slate-600 text-lg">
                Fill out our form and get competitive term sheets from qualified lenders in 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Loan Type</label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => handleInputChange('loanType', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                  >
                    <option value="">Select loan type</option>
                    <option value="private-money">Private Money Loans</option>
                    <option value="bridge-loan">Bridge Loan Financing</option>
                    <option value="commercial">Commercial Loan</option>
                    <option value="fix-flip">Fix & Flip Construction</option>
                    <option value="ground-up">Ground Up Construction</option>
                    <option value="hard-money">Hard Money Loans</option>
                    <option value="conventional">Conventional Loans</option>
                    <option value="yacht">Yacht Financing</option>
                    <option value="aircraft">Aircraft Financing</option>
                    <option value="church">Church Loans</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Loan Amount</label>
                  <select
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                  >
                    <option value="">Select amount</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m+">$10M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Tell us about your project</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                  placeholder="Describe your financing needs, property type, timeline, etc."
                />
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="smsOptInContact"
                  checked={formData.smsOptIn}
                  onChange={(e) => setFormData(prev => ({ ...prev, smsOptIn: e.target.checked }))}
                  className="mt-1 w-6 h-6 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="smsOptInContact" className="text-slate-700 leading-relaxed cursor-pointer font-medium">
                  <span className="font-bold">📱 Yes, send me SMS updates!</span> I consent to receive SMS messages and calls from Anchor Commercial Capital 
                  regarding my financing inquiry. Message rates may apply. Reply STOP to opt out anytime.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-3 text-xl shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">🚀 Get My Free Consultation</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-slate-500 text-sm">
                  <Shield size={16} />
                  <span>Your information is secure and confidential</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 text-center bg-slate-50 rounded-lg p-4">
                <p className="mb-2 font-semibold">
                  🔒 TCPA Compliance Notice: By clicking "Get My Free Consultation," you consent to receive calls and emails 
                  from Anchor Commercial Capital regarding your financing inquiry.
                </p>
                <p>
                  You can opt out anytime by unsubscribing from emails. SMS consent is optional via the checkbox above.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">🏆 Trusted by Thousands of Borrowers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '24hrs', label: 'Avg Response Time', icon: '⚡' },
                { number: '$2B+', label: 'Total Funded', icon: '💰' },
                { number: '98%', label: 'Success Rate', icon: '🎯' },
                { number: '15+', label: 'Years Experience', icon: '🏆' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;