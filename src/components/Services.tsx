import React from 'react';
import { Building2, Home, Hammer, Ship, Plane, Church, TrendingUp, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Loans',
      description: 'Financing for office buildings, retail centers, industrial properties, and mixed-use developments.',
      features: ['Up to $50M', '5-30 year terms', 'Fixed & variable rates']
    },
    {
      icon: Home,
      title: 'Private Money Loans',
      description: 'Fast asset-based financing for real estate investors and developers with quick approvals.',
      features: ['24-48hr approval', 'Up to 75% LTV', 'Flexible terms']
    },
    {
      icon: TrendingUp,
      title: 'Bridge Loan Financing',
      description: 'Short-term financing to bridge the gap between immediate needs and long-term financing.',
      features: ['6-24 months', 'Fast closing', 'Competitive rates']
    },
    {
      icon: Hammer,
      title: 'Construction Loans',
      description: 'Ground-up construction and major renovation financing for residential and commercial projects.',
      features: ['Up to 85% LTC', 'Interest reserves', 'Draw schedules']
    },
    {
      icon: DollarSign,
      title: 'Hard Money Loans',
      description: 'Quick funding for time-sensitive deals, fix-and-flip projects, and distressed properties.',
      features: ['7-10 day close', 'Up to 70% ARV', 'Flexible credit']
    },
    {
      icon: Ship,
      title: 'Yacht Financing',
      description: 'Specialized financing for yacht purchases, from smaller vessels to luxury superyachts.',
      features: ['$100K - $50M', 'Up to 20 years', 'Competitive rates']
    },
    {
      icon: Plane,
      title: 'Aircraft Financing',
      description: 'Financing solutions for private and commercial aircraft purchases and refinancing.',
      features: ['All aircraft types', 'Flexible terms', 'Quick approval']
    },
    {
      icon: Church,
      title: 'Church Loans',
      description: 'Specialized financing for churches, including construction, purchase, and refinancing.',
      features: ['Up to 80% LTV', 'Long-term fixed', 'Flexible underwriting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Lending Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From commercial real estate to specialty financing, we provide tailored solutions
            for your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
