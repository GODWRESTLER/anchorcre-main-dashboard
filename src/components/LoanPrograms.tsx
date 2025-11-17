import React from 'react';
import { Check } from 'lucide-react';

const LoanPrograms = () => {
  const programs = [
    {
      name: 'Bridge Loan',
      rate: '9-14%',
      term: '6-24 months',
      ltv: 'Up to 75%',
      features: [
        'Interest-only payments',
        'No prepayment penalty',
        'Quick 2-3 week closing',
        'Flexible underwriting',
        'Purchase or refinance'
      ],
      popular: false
    },
    {
      name: 'Commercial Loan',
      rate: '6-12%',
      term: '5-30 years',
      ltv: 'Up to 80%',
      features: [
        'Fixed or variable rates',
        'Cash-out refinancing',
        'All property types',
        'Recourse and non-recourse',
        'Long-term financing'
      ],
      popular: true
    },
    {
      name: 'Construction Loan',
      rate: '8-15%',
      term: '12-36 months',
      ltv: 'Up to 85% LTC',
      features: [
        'Ground-up construction',
        'Major renovations',
        'Interest reserves',
        'Multiple draw schedules',
        'Convert to permanent'
      ],
      popular: false
    }
  ];

  return (
    <section id="loan-programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Flexible Loan Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the loan program that best fits your investment strategy and timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                program.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-6">{program.name}</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Interest Rate</span>
                  <span className="text-slate-900 font-semibold">{program.rate}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Loan Term</span>
                  <span className="text-slate-900 font-semibold">{program.term}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Max LTV</span>
                  <span className="text-slate-900 font-semibold">{program.ltv}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                  program.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanPrograms;
