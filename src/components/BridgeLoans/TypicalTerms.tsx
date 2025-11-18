import { Clock, TrendingUp, Calendar } from 'lucide-react';

export default function TypicalTerms() {
  const terms = [
    {
      icon: Calendar,
      label: 'Term',
      value: '6-24 Months',
      description: 'Flexible short-term financing',
    },
    {
      icon: Clock,
      label: 'Close Time',
      value: '7-10 Days*',
      description: 'Fast turnaround from approval',
    },
    {
      icon: TrendingUp,
      label: 'LTV',
      value: 'Up to 75-80%',
      description: 'Varies by asset quality',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Typical Terms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {term.label}
                </h3>
                <p className="text-3xl font-bold text-blue-900 mb-2">
                  {term.value}
                </p>
                <p className="text-sm text-gray-600">{term.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          *Subject to underwriting & property eligibility
        </p>
      </div>
    </section>
  );
}
