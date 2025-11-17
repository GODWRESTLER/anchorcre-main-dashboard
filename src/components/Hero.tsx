import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const benefits = [
    '24-48 Hour Approvals',
    'Nationwide Lending',
    'Competitive Rates',
    'Flexible Terms'
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Licensed Nationwide Lender Since 2009
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Fast Approvals for Your{' '}
              <span className="text-blue-600">Commercial Real Estate</span> Needs
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Private money loans, bridge financing, and commercial loans with competitive rates
              and quick closings. Get the capital you need to seize opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+19542895914"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors shadow-md border-2 border-slate-200"
              >
                Call (954) 289-5914
              </a>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-600">
              <div>
                <div className="text-2xl font-bold text-slate-900">$500M+</div>
                <div>Loans Funded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div>Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">50</div>
                <div>States Covered</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial Real Estate"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
              <div className="text-3xl font-bold text-slate-900">24-48hrs</div>
              <div className="text-slate-600">Fast Approval</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
