import React from 'react';
import { Zap, Shield, Users, Award, Clock, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Fast Approvals',
      description: 'Get loan approvals in 24-48 hours with our streamlined process and quick decision-making.'
    },
    {
      icon: Shield,
      title: 'Licensed & Trusted',
      description: 'Fully licensed nationwide lender with 15+ years of experience and an A+ BBB rating.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Work with experienced loan officers who understand commercial real estate and guide you through every step.'
    },
    {
      icon: Award,
      title: 'Competitive Rates',
      description: 'Access competitive interest rates and flexible terms tailored to your specific investment strategy.'
    },
    {
      icon: Clock,
      title: 'Quick Closings',
      description: 'Close loans in as little as 7-10 days for hard money loans and 2-3 weeks for bridge loans.'
    },
    {
      icon: TrendingUp,
      title: 'Flexible Terms',
      description: 'Customized loan structures with flexible underwriting to fit your unique financing needs.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Anchor Commercial Capital
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine speed, expertise, and competitive rates to help you seize real estate opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and competitive loan quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply Now
            </a>
            <a
              href="tel:+19542895914"
              className="inline-block bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
            >
              Call (954) 289-5914
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
