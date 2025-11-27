import { useState } from 'react';
import { Send, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

interface FormData {
  loan_goal: string;
  experience_level: string;
  purchase_price: string;
  cash_ready: string;
  credit_score: string;
  property_state: string;
  timeline: string;
  arv_optional: string;
  portfolio_value: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  agree_terms: boolean;
}

export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState<FormData>({
    loan_goal: '',
    experience_level: '',
    purchase_price: '',
    cash_ready: '',
    credit_score: '',
    property_state: '',
    timeline: '',
    arv_optional: '',
    portfolio_value: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    agree_terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const webhookUrl = 'https://services.leadconnectorhq.com/hooks/MXM63RC3IDd9isf1anbN/webhook-trigger/556795fc-6f88-40a5-966f-a12c800340a8';

      const payload = {
        name: formData.contact_name,
        email: formData.contact_email,
        phone: formData.contact_phone,
        loan_goal: formData.loan_goal,
        experience_level: formData.experience_level,
        purchase_price: formData.purchase_price,
        cash_ready: formData.cash_ready,
        credit_score: formData.credit_score,
        property_state: formData.property_state,
        timeline: formData.timeline,
        arv_optional: formData.arv_optional,
        portfolio_value: formData.portfolio_value,
        agree_terms: formData.agree_terms ? 'yes' : 'no'
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            loan_goal: '',
            experience_level: '',
            purchase_price: '',
            cash_ready: '',
            credit_score: '',
            property_state: '',
            timeline: '',
            arv_optional: '',
            portfolio_value: '',
            contact_name: '',
            contact_email: '',
            contact_phone: '',
            agree_terms: false,
          });
          setCurrentStep(1);
        }, 5000);
      } else {
        console.error('Form submission failed:', response.statusText);
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.loan_goal && formData.experience_level;
      case 2:
        return formData.purchase_price && formData.cash_ready && formData.credit_score;
      case 3:
        return formData.property_state && formData.timeline;
      case 4:
        return formData.contact_name && formData.contact_email && formData.contact_phone && formData.agree_terms;
      default:
        return false;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <section id="lead-form" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Get Pre-Qualified in 60 Seconds
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Fill out the form below and we'll get back to you with a preliminary term sheet.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-900">Thank you!</h3>
                <p className="text-green-700">We'll review your deal and get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-orange-500 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>

                    <div>
                      <label htmlFor="loan_goal" className="block text-sm font-semibold text-gray-700 mb-2">
                        What do you need funding for? *
                      </label>
                      <select
                        id="loan_goal"
                        name="loan_goal"
                        required
                        value={formData.loan_goal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="purchase">Purchase a Property</option>
                        <option value="refinance">Refinance / Cash-Out</option>
                        <option value="fix-flip">Fix & Flip</option>
                        <option value="bridge">Bridge / Hard Money</option>
                        <option value="construction">New Construction</option>
                        <option value="exploring">Just Exploring Options</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience_level" className="block text-sm font-semibold text-gray-700 mb-2">
                        What's your real estate experience level? *
                      </label>
                      <select
                        id="experience_level"
                        name="experience_level"
                        required
                        value={formData.experience_level}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your experience</option>
                        <option value="first">First Deal</option>
                        <option value="1-3">1–3 Deals Closed</option>
                        <option value="4-10">4–10 Deals Closed</option>
                        <option value="10+">10+ Deals Closed</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Financial Details */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Details</h3>

                    <div>
                      <label htmlFor="purchase_price" className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated purchase price (or value)? *
                      </label>
                      <input
                        type="text"
                        id="purchase_price"
                        name="purchase_price"
                        required
                        placeholder="$300,000"
                        value={formData.purchase_price}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="cash_ready" className="block text-sm font-semibold text-gray-700 mb-2">
                        How much cash do you have available for this project? *
                      </label>
                      <select
                        id="cash_ready"
                        name="cash_ready"
                        required
                        value={formData.cash_ready}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        <option value="<20k">Less than $20,000</option>
                        <option value="20k-50k">$20,000 – $50,000</option>
                        <option value="50k-100k">$50,000 – $100,000</option>
                        <option value="100k-250k">$100,000 – $250,000</option>
                        <option value="250k+">$250,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="credit_score" className="block text-sm font-semibold text-gray-700 mb-2">
                        What's your approximate credit score? *
                      </label>
                      <select
                        id="credit_score"
                        name="credit_score"
                        required
                        value={formData.credit_score}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        <option value="720+">720+</option>
                        <option value="680-719">680–719</option>
                        <option value="620-679">620–679</option>
                        <option value="<620">Below 620</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="arv_optional" className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated ARV (if rehab or flip)?
                      </label>
                      <input
                        type="text"
                        id="arv_optional"
                        name="arv_optional"
                        placeholder="$___ (optional)"
                        value={formData.arv_optional}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolio_value" className="block text-sm font-semibold text-gray-700 mb-2">
                        Current portfolio value? (optional)
                      </label>
                      <input
                        type="text"
                        id="portfolio_value"
                        name="portfolio_value"
                        placeholder="$___"
                        value={formData.portfolio_value}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Property & Timeline */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Property & Timeline</h3>

                    <div>
                      <label htmlFor="property_state" className="block text-sm font-semibold text-gray-700 mb-2">
                        What state is the property located in? *
                      </label>
                      <input
                        type="text"
                        id="property_state"
                        name="property_state"
                        required
                        placeholder="FL, TX, OH, etc."
                        value={formData.property_state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                        When do you need funding? *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (1–7 Days)</option>
                        <option value="1-3weeks">1–3 Weeks</option>
                        <option value="1-2months">1–2 Months</option>
                        <option value="researching">Just Researching</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>

                    <div>
                      <label htmlFor="contact_name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your full name *
                      </label>
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        required
                        value={formData.contact_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        required
                        placeholder="your@email.com"
                        value={formData.contact_email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile number for updates *
                      </label>
                      <input
                        type="tel"
                        id="contact_phone"
                        name="contact_phone"
                        required
                        placeholder="(555) 123-4567"
                        value={formData.contact_phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <input
                        type="checkbox"
                        id="agree_terms"
                        name="agree_terms"
                        required
                        checked={formData.agree_terms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="agree_terms" className="text-sm text-gray-700">
                        I agree to receive updates about my loan request. *
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        canProceed()
                          ? 'bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canProceed()}
                      className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        canProceed()
                          ? 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      Submit My Deal
                    </button>
                  )}
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
