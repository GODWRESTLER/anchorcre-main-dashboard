import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

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
    // Submit to GoHighLevel API
    fetch('https://services.leadconnectorhq.com/hooks/MXM63RC3IDd9isf1anbN/webhook-trigger/556795fc-6f88-40a5-966f-a12c800340a8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
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
        setIsSubmitted(true); // Optionally show error UI
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
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We've received your inquiry and will contact you within 24 hours to discuss your financing needs.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">What happens next:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Initial review of your financing needs (within 2 hours)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Personal consultation call (within 24 hours)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Customized loan proposal (24-48 hours)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" itemProp="name">
            Ready to Get{' '}
            <span className="text-blue-300">Pre-Approved</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed" itemProp="description">
            Contact us today for a free consultation and personalized financing solution. 
            Our experienced team is ready to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Call Us Today',
                  info: '(555) 123-LOAN',
                  description: 'Speak directly with a lending specialist'
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  info: 'loans@anchorcreloans.com',
                  description: 'Get a response within 2 hours'
                },
                {
                  icon: MapPin,
                  title: 'Nationwide Service',
                  info: 'Licensed in All 50 States',
                  description: 'Local expertise, national reach'
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  info: 'Mon-Fri: 8AM-8PM EST',
                  description: 'Weekend appointments available'
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <contact.icon className="text-blue-300" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-blue-200 font-semibold mb-1">
                      {contact.info}
                    </p>
                    <p className="text-blue-100 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                  <span>15+ years of lending experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                  <span>$2+ billion in loans funded</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                  <span>98% customer satisfaction rate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                  <span>Licensed nationwide lending</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Get Your Free Consultation
              </h3>
              <p className="text-slate-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Loan Type</label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => handleInputChange('loanType', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
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
                  <label className="block text-slate-700 font-semibold mb-2">Loan Amount</label>
                  <select
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
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
                <label className="block text-slate-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="Tell us about your financing needs..."
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                <input
                  type="checkbox"
                  id="smsOptInContact"
                  checked={formData.smsOptIn}
                  onChange={(e) => setFormData(prev => ({ ...prev, smsOptIn: e.target.checked }))}
                  className="mt-1 w-5 h-5 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="smsOptInContact" className="text-slate-700 text-sm leading-relaxed cursor-pointer">
                  I consent to receive SMS messages and robo calls from Anchor Commercial Capital 
                  regarding my financing inquiry. Message and data rates may apply. Reply STOP to opt out.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get My Free Consultation</span>
                <ArrowRight size={20} />
              </motion.button>

              <div className="text-xs text-slate-500 text-center">
                <p className="mb-2">
                  <strong>TCPA Compliance Notice:</strong> By providing your contact information and clicking "Get My Free Consultation," 
                  you consent to receive calls and emails from Anchor Commercial Capital regarding your financing inquiry.
                </p>
                <p>
                  You can opt out at any time by unsubscribing from emails. SMS consent is optional and controlled by the checkbox above.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
