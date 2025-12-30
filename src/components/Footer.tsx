import { Mail, Phone, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anchor CRE Loans</h3>
            <p className="text-gray-400 leading-relaxed">
              Providing commercial financing solutions specializing in bridge loans, commercial financing, and investor real estate loans nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+19542895914"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(954) 289-5914</span>
              </a>
              <a
                href="mailto:loans@anchorcreloans.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>loans@anchorcreloans.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="/privacy-policy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Anchor Commercial Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>Commercial Financing Solutions</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 leading-relaxed">
          <p>
            Anchor Commercial Capital provides commercial financing solutions. Loan terms, rates, and availability subject to credit approval and may vary by state, property type, and borrower qualifications. This is not a commitment to lend. All information provided is for informational purposes only and does not constitute a loan application or offer of credit.
          </p>
        </div>
      </div>
    </footer>
  );
}
