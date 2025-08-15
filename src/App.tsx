import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoanTypes from './components/LoanTypes';
import AboutSection from './components/AboutSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import AIOptimizedContent from './components/AIOptimizedContent';
import BingOptimization from './components/BingOptimization';
import AISearchSchema from './components/AISearchSchema';
import YatchLoan from "./pages/yatch-loan/YatchLoan"
import GroundUpConstruction from "./pages/ground-up-construction/GroundUpConstruction"
import CommercialPage from "./pages/commercial/CommercialPage"
import ChurchLoan from "./pages/church-loan/ChurchLoan"
import FixFlipLoans from "./pages/fix-flip-loans/FixFlipLoans"
import HardMoneyPage from "./pages/hardmoney/HardMoneyPage"
import Footer from './components/Footer';
import BridgeLoanPage from './pages/bridgeloan/BridgeLoanPage'; // Your bridge loan page
import AirCraftFinancing from './pages/aircraft-financing/AirCraftFinancing'; // Your bridge loan page


function App() {
  return (
    <HelmetProvider>
      <div className="bg-slate-50 min-h-screen">
        {/* Components that appear on every page */}


        <Routes>
          {/* Home/Landing Page Route */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <LoanTypes />
              <AboutSection />
              <ServicesOverview />
              <WhyChooseUs />
              <AIOptimizedContent />
              <BingOptimization />
              <ContactSection />
              <Footer />
            </>
          } />

          {/* Bridge Loan Page Route */}
          <Route path="/bridge-loan" element={<BridgeLoanPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/hard-money" element={<HardMoneyPage />} />
          <Route path="/church-loan" element={<ChurchLoan />} />
          <Route path="/fix-flip-loans" element={<FixFlipLoans />} />
          <Route path="/yatch-loan" element={<YatchLoan />} />
          <Route path="/ground-up-construction" element={<GroundUpConstruction />} />
          <Route path="/aircraft-financing" element={<AirCraftFinancing />} />
        </Routes>

        {/* Components that appear on every page */}

      </div>
    </HelmetProvider>
  );
}

export default App;