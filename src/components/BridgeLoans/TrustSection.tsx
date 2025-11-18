import { Building2, DollarSign, MapPin, Star } from 'lucide-react';

export default function TrustSection() {
  const fundedDeals = [
    {
      amount: '$4.2M',
      days: '9 days',
      type: 'Multifamily',
      location: 'Dallas, TX',
    },
    {
      amount: '$2.8M',
      days: '7 days',
      type: 'Retail Plaza',
      location: 'Miami, FL',
    },
    {
      amount: '$6.5M',
      days: '10 days',
      type: 'Office Building',
      location: 'Phoenix, AZ',
    },
    {
      amount: '$1.9M',
      days: '8 days',
      type: 'Industrial',
      location: 'Atlanta, GA',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Recent Funded Deals
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join hundreds of investors who've secured fast bridge financing through Anchor CRE
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fundedDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="text-2xl font-bold text-gray-900">{deal.amount}</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>{deal.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{deal.location}</span>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block font-semibold text-xs mt-2">
                  Closed in {deal.days}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 sm:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 p-4 rounded-full">
                <Star className="w-12 h-12" />
              </div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                "We closed in 10 days with Anchor CRE - exactly when we needed it. Professional team that understands investor deals."
              </p>
              <p className="text-blue-200">
                <span className="font-semibold">Michael Rodriguez</span> - Real Estate Investor, Phoenix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
