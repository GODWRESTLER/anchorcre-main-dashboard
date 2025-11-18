import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">Anchor</span>
              <span className="text-2xl font-light text-gray-600 ml-1">CRE</span>
            </a>
          </div>
          <a
            href="tel:+19542895914"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(954) 289-5914</span>
          </a>
        </div>
      </div>
    </header>
  );
}
