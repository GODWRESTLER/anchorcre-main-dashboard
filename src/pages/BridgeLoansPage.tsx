import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/BridgeLoans/HeroSection';
import TypicalTerms from '../components/BridgeLoans/TypicalTerms';
import LeadForm from '../components/BridgeLoans/LeadForm';
import TrustSection from '../components/BridgeLoans/TrustSection';
import EligibilitySection from '../components/BridgeLoans/EligibilitySection';
import BenefitsSection from '../components/BridgeLoans/BenefitsSection';
import MobileStickyCTA from '../components/BridgeLoans/MobileStickyCTA';
import Footer from '../components/Footer';

export default function BridgeLoansPage() {
  return (
    <>
      <Helmet>
        <title>Commercial & Investor Bridge Loans — Close in 7-10 Days | Anchor CRE</title>
        <meta
          name="description"
          content="Commercial bridge loans & real estate bridge financing for investors. Up to 75-80% LTV. Short-term 6-24 month terms. Nationwide direct lender. Get term sheet in 24 hours."
        />
        <meta
          name="keywords"
          content="commercial bridge loan, real estate bridge loan, bridge financing for investors, investor bridge loans, commercial real estate bridge financing"
        />
        <link rel="canonical" href="https://anchorcreloans.com/bridge-loans" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <TypicalTerms />
        <LeadForm />
        <TrustSection />
        <EligibilitySection />
        <BenefitsSection />
        <Footer />
        <MobileStickyCTA />
      </div>
    </>
  );
}
