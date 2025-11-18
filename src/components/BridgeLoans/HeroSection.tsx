import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Commercial & Investor Bridge Loans — Close in 7-10 Days
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
            Short-Term (6-24 mo) asset-based financing. Up to 75-80% LTV.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={scrollToForm}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Upload Your Deal – Get Term Sheet in 24 Hrs
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://links.clouddrafted.com/widget/booking/Z4VlFfTa2n47oEBpBwko"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Book a Free 15-Min Consultation
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-blue-100">
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>Nationwide Direct Lender • Over $500 Million Funded</span>
          </div>
        </div>
      </div>
    </section>
  );
}
