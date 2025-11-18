import { Zap, Shield, TrendingUp, Users, Clock, FileCheck } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Closing',
      description: 'Close your commercial bridge loan in 7-10 days with our streamlined process',
    },
    {
      icon: TrendingUp,
      title: 'High LTV',
      description: 'Up to 75-80% loan-to-value on quality commercial and investor properties',
    },
    {
      icon: Shield,
      title: 'Direct Lender',
      description: 'We fund our own deals - no broker delays or third-party complications',
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: '6-24 month terms with prepayment options that work for your investment timeline',
    },
    {
      icon: FileCheck,
      title: '24-Hour Term Sheets',
      description: 'Get preliminary approval and term sheet within 24 hours of submission',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with experienced commercial lending specialists who understand investor needs',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose Anchor CRE for Bridge Financing?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We specialize in commercial bridge loans and real estate bridge financing for investors who need capital fast
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#lead-form"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started with Your Bridge Loan Today
          </a>
        </div>
      </div>
    </section>
  );
}
