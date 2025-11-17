import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const loanTypes = [
    { name: 'Commercial Loans', href: '#services' },
    { name: 'Bridge Loans', href: '#services' },
    { name: 'Construction Loans', href: '#services' },
    { name: 'Hard Money Loans', href: '#services' },
    { name: 'Yacht Financing', href: '#services' },
    { name: 'Aircraft Financing', href: '#services' }
  ];

  const resources = [
    { name: 'Loan Programs', href: '#loan-programs' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Anchor <span className="text-blue-400">Commercial Capital</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Licensed nationwide lender providing fast, competitive financing for commercial real estate since 2009.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/anchor-commercial-capital"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/anchorcommercial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Loan Types</h4>
            <ul className="space-y-2">
              {loanTypes.map((loan, index) => (
                <li key={index}>
                  <a
                    href={loan.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(loan.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {loan.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(resource.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+19542895914"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>(954) 289-5914</span>
              </a>
              <a
                href="mailto:loans@anchorcreloans.com"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors break-all"
              >
                <Mail size={18} />
                <span>loans@anchorcreloans.com</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin size={18} />
                <span>Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Anchor Commercial Capital. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Licensing
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center md:text-left">
            Licensed Mortgage Lender. Equal Housing Lender. NMLS# [License Number]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
