import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LoanPrograms from '../components/LoanPrograms';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import StickyMobileButtons from '../components/StickyMobileButtons';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Private Money Loans & Commercial Financing | Anchor Commercial Capital</title>
        <meta
          name="description"
          content="Get private money loans, bridge financing, commercial loans & construction financing with 24-48hr approvals. Licensed nationwide lender since 2009. Apply today!"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <LoanPrograms />
          <WhyChooseUs />
          <Process />
          <Contact />
        </main>
        <Footer />
        <StickyMobileButtons />
      </div>
    </>
  );
};

export default HomePage;
