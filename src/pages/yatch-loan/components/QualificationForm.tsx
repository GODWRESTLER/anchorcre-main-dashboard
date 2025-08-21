import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const QualificationForm = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    yachtType: '',
    loanAmount: '',
    timeline: '',
    creditScore: '',
    loanDetail: 'Yacht Loan',
    name: '',
    email: '',
    phone: '',
    smsOptIn: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to GoHighLevel API
    fetch('https://services.leadconnectorhq.com/hooks/MXM63RC3IDd9isf1anbN/webhook-trigger/4d4c058e-3856-489e-b717-995c21a8befc', {
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
    // Optionally: Remove this if you only want to show thank you on successful API submit
    // setIsSubmitted(true);
    // console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
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
              Lender Matching Request Submitted!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Thank you! We'll analyze your financing needs and connect you with qualified lenders within 24-48 hours.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">What happens next:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">AI analysis of your financing requirements (immediate)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Lender matching and outreach (within 24 hours)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Personal follow-up call to discuss options (24-48 hours)</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              By submitting this form, you consent to receive calls and SMS messages. 
              Message and data rates may apply. Reply STOP to opt out.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="qualify" className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Yacht Loan Quote in{' '}
            <span className="text-blue-500">2 Minutes</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            AI-powered matching with specialized marine lenders. Fast approvals for your dream yacht purchase.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="text-blue-500" size={20} />
              <span className="text-slate-600">24-48hr Response</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <Calculator className="text-blue-500" size={20} />
              <span className="text-slate-600">Marine Financing Specialists</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step <= currentStep ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Yacht Financing Details</h3>
                
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Loan Type</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['New Yacht Purchase', 'Pre-Owned Yacht', 'Yacht Refinancing', 'Yacht Construction'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleInputChange('loanType', type)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.loanType === type
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Yacht Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Motor Yacht', 'Sailing Yacht', 'Sport Fishing', 'Catamaran', 'Superyacht', 'Trawler'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleInputChange('yachtType', type)}
                        className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all text-sm sm:text-base ${
                          formData.yachtType === type
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Financing Amount</label>
                  <select
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select financing amount</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-25m">$10M - $25M</option>
                    <option value="25m-50m">$25M - $50M</option>
                    <option value="50m+">$50M - $75M</option>
                  </select>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Timeline & Credit</h3>
                
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">When do you need funding?</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['ASAP (< 30 days)', '30-60 days', '2-3 months', 'Planning stage (3+ months)'].map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => handleInputChange('timeline', timeline)}
                        className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all text-sm sm:text-base ${
                          formData.timeline === timeline
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Credit Score Range</label>
                  <select
                    value={formData.creditScore}
                    onChange={(e) => handleInputChange('creditScore', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select credit score range</option>
                    <option value="750+">750+ (Excellent)</option>
                    <option value="700-749">700-749 (Good)</option>
                    <option value="650-699">650-699 (Fair)</option>
                    <option value="600-649">600-649 (Poor)</option>
                    <option value="<600">Below 600</option>
                  </select>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-3 sm:p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 sm:p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-base"
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
                    className="w-full p-3 sm:p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-base"
                    required
                  />
                </div>

                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="smsOptIn"
                    checked={formData.smsOptIn}
                    onChange={(e) => handleInputChange('smsOptIn', e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <label htmlFor="smsOptIn" className="text-slate-700 text-sm leading-relaxed cursor-pointer">
                    I consent to receive SMS messages and robo calls from Anchor Marine Capital 
                    regarding my yacht financing inquiry. Message and data rates may apply. Reply STOP to opt out.
                  </label>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 text-xs sm:text-sm text-slate-600">
                  <p className="mb-2">
                    <strong>TCPA Compliance Notice:</strong> By providing your contact information and clicking "Get Matched with Marine Lenders," 
                    you consent to receive calls and emails from Anchor Marine Capital regarding your yacht financing inquiry. 
                  </p>
                  <p>
                    You can opt out at any time by unsubscribing from emails. SMS consent is optional and controlled by the checkbox above.
                  </p>
                </div>
              </motion.div>
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-4 sm:px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  Back
                </button>
              )}
              
              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2 text-sm sm:text-base"
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2 text-sm sm:text-base"
                >
                  <span>Get My Yacht Loan Quote</span>
                  <ArrowRight size={20} />
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QualificationForm;