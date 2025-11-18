import { MapPin, CheckCircle2 } from 'lucide-react';

export default function EligibilitySection() {
  const states = [
    'Alabama', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Idaho', 'Illinois', 'Indiana',
    'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <MapPin className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nationwide Direct Lender
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We fund commercial bridge loans across all 50 states where permitted. As a direct lender, we control the entire process from application to funding.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            States We Serve
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {states.map((state, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{state}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
          <p className="text-gray-700 mb-3">
            This loan product is for commercial or investor-purpose real estate. Not for owner-occupied primary residences.
          </p>
          <p className="text-sm text-gray-600">
            Terms and availability vary by property type, LTV, borrower experience and state regulatory approval.
          </p>
        </div>
      </div>
    </section>
  );
}
