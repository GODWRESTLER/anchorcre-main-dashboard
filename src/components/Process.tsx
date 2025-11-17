import React from 'react';
import { FileText, Search, CheckCircle, Key } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Submit Application',
      description: 'Complete our simple online application with property details and borrower information. Takes just 10 minutes.'
    },
    {
      icon: Search,
      number: '02',
      title: 'Property Evaluation',
      description: 'Our team quickly evaluates your property and financial documents to determine loan terms and approval.'
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'Get Approved',
      description: 'Receive your loan approval within 24-48 hours with clear terms, rates, and closing timeline.'
    },
    {
      icon: Key,
      number: '04',
      title: 'Close & Fund',
      description: 'Close on your loan in as little as 7-30 days depending on loan type. Funds wired directly to you.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From application to funding, we've streamlined the process to get you the capital you need quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center">
                      <Icon size={28} />
                    </div>
                    <div className="text-5xl font-bold text-slate-100">{step.number}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-blue-200"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
