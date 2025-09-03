import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle, Phone, Zap, TrendingUp, Shield } from 'lucide-react';

const CallToAction = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanAmount: '',
    smsOptIn: false
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
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
        'event_label': 'CTA Form',
        'value': formData.loanAmount
      });
    }
    
    console.log('CTA Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-gradient-to-br from-green-600 via-blue-700 to-purple-900 relative overflow-hidden">
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
              🎉 Congratulations! Your Deal is Submitted
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our AI is analyzing your project and matching you with the best lenders right now. 
              Expect contact within 2 hours with competitive loan options!
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 mb-6 text-xl">⚡ Your Fast-Track Timeline:</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="text-slate-700 font-medium">AI analysis & lender matching (immediate)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="text-slate-700 font-medium">Qualified lender outreach (within 2 hours)</span>
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
    <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-700 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-6 py-3 rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-red-400/30">
            <Zap size={16} />
            <span>⚠️ URGENT: Rates Rising Fast</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block">Submit Your Deal</span>
            <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Before Rates Rise
            </span>
          </h2>
          
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Interest rates are climbing fast! Submit your commercial property deal today and get matched 
            with qualified lenders before financing costs increase further.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Clock,
                  title: '⚡ 24-Hour Lender Matching',
                  description: 'Our AI finds the perfect lender for your deal in 24 hours - no more endless applications'
                },
                {
                  icon: CheckCircle,
                  title: '💰 Competitive Rates Guaranteed',
                  description: 'Access exclusive rates from 200+ lenders competing for your business'
                },
                {
                  icon: Phone,
                  title: '🎯 Expert Support Team',
                  description: 'Dedicated lending specialists guide you from application to closing'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-blue-300" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
                <TrendingUp className="text-green-400" size={24} />
                <span>💬 What Our Clients Say:</span>
              </h3>
              <p className="text-blue-100 italic text-lg leading-relaxed">
                "Their AI matched me with 3 qualified lenders in 24 hours. Got 6.2% on my $2.8M multifamily deal - 
                better than any bank could offer. The process was incredibly smooth."
              </p>
              <div className="text-green-300 font-semibold mt-4">
                - Robert Chen, Commercial Real Estate Investor
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - CTA Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap size={16} />
                <span>🔥 Limited Time: Lock in Today's Rates</span>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Submit Your Commercial Deal
              </h3>
              <p className="text-slate-600 text-lg">
                Get matched with qualified lenders in 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2">Loan Amount Needed</label>
                <select 
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all hover:border-slate-300"
                >
                  <option value="">Select amount</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k-500k">$250K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-3m">$1M - $3M</option>
                  <option value="3m+">$3M+</option>
                </select>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="smsOptInCTA"
                  checked={formData.smsOptIn}
                  onChange={(e) => handleInputChange('smsOptIn', e.target.checked)}
                  className="mt-1 w-6 h-6 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="smsOptInCTA" className="text-slate-700 leading-relaxed cursor-pointer font-medium">
                  <span className="font-bold">📱 Yes, send me SMS updates!</span> I consent to receive SMS messages and calls from Anchor Commercial Capital 
                  regarding my financing inquiry. Message rates may apply. Reply STOP to opt out anytime.
                </label>
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-3 text-xl shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">🚀 Get My Term Sheets Now</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-slate-500 text-sm">
                  <Shield size={16} />
                  <span>100% secure and confidential</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 text-center bg-slate-50 rounded-lg p-4">
                <p className="mb-2 font-semibold">
                  🔒 TCPA Compliance: By clicking "Submit My Deal Now," you consent to receive calls and emails 
                  from Anchor Commercial Capital regarding your financing inquiry.
                </p>
                <p>
                  Opt out anytime by unsubscribing. SMS consent is optional via checkbox above.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24hrs</div>
              <div className="text-blue-200 text-sm">Lender Matching</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-blue-200 text-sm">Active Lenders</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;