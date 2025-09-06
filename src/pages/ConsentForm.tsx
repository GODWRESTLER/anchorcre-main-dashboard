import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsConsent: false,
    callConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit consent data
    const submissionData = {
      contact: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        source: 'consent-form',
        tags: ['consent-form-lead', 'explicit-consent']
      },
      customFields: {
        smsConsent: formData.smsConsent,
        callConsent: formData.callConsent,
        formId: 'consent-form',
        pageUrl: window.location.href,
        consentDate: new Date().toISOString()
      }
    };

    fetch('https://services.leadconnectorhq.com/hooks/MXM63RC3IDd9isf1anbN/webhook-trigger/556795fc-6f88-40a5-966f-a12c800340a8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submissionData),
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
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-12 shadow-xl max-w-2xl mx-6 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-500" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Consent Recorded Successfully!
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Thank you for providing your communication preferences. We'll contact you according to your specified preferences.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            <span>Return to Home</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Phone className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Communication Consent Form</h1>
              <p className="text-slate-600">Manage your communication preferences</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Communication Preferences
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Please provide your contact information and specify how you'd like us to communicate with you 
                regarding your financing inquiry and related services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="john@example.com"
                  required
                />
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

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Communication Consent (Optional)
                </h3>
                
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="callConsent"
                    checked={formData.callConsent}
                    onChange={(e) => handleInputChange('callConsent', e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <label htmlFor="callConsent" className="text-slate-700 text-sm leading-relaxed cursor-pointer">
                    I consent to receive calls from Anchor Commercial Capital regarding my financing inquiry. 
                    This may include calls using automated telephone dialing systems or prerecorded messages.
                  </label>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    checked={formData.smsConsent}
                    onChange={(e) => handleInputChange('smsConsent', e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-500 border-2 border-slate-300 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <label htmlFor="smsConsent" className="text-slate-700 text-sm leading-relaxed cursor-pointer">
                    By checking this box you are agreeing to receive recurring messages from Anchor Commercial Capital 
                    related to your request for information. Message frequency varies per user. Message and data rates may apply. 
                    Carriers are not liable for delayed or undelivered messages. Text HELP for help and STOP to unsubscribe. 
                    <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-600 ml-1">Privacy Policy</Link>.
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 text-sm text-slate-600">
                <h4 className="font-semibold mb-2">10DLC Keyword Information:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Text <strong>LOAN</strong> or <strong>DEAL</strong> to opt-in to updates</li>
                  <li>• Text <strong>STOP</strong> to unsubscribe from all messages</li>
                  <li>• Text <strong>HELP</strong> for assistance and contact information</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 text-sm text-slate-600">
                <p className="mb-2">
                  <strong>Note:</strong> These consent options are optional and not required to receive our services. 
                  You can change your preferences at any time by contacting us or using the opt-out methods provided.
                </p>
                <p>
                  By submitting this form, you consent to receive emails from Anchor Commercial Capital. 
                  Phone and SMS consent are controlled by the checkboxes above.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
              >
                Submit Consent Preferences
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsentForm;