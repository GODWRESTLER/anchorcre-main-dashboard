import React from 'react';
import { Helmet } from 'react-helmet-async';
import { aiSearchConfig, generateAIContent } from '../utils/aiSearchOptimization';

const AISearchSchema = () => {
  const structuredData = generateAIContent();
  
  // Additional schema for AI search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aiSearchConfig.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get a Private Money Loan",
    "description": "Step-by-step guide to getting approved for a private money loan",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Submit Application",
        "text": "Complete our online application with property and borrower information"
      },
      {
        "@type": "HowToStep", 
        "name": "Property Evaluation",
        "text": "Our team evaluates the property value and loan-to-value ratio"
      },
      {
        "@type": "HowToStep",
        "name": "Loan Approval",
        "text": "Receive loan approval within 24-48 hours"
      },
      {
        "@type": "HowToStep",
        "name": "Closing",
        "text": "Close on your loan in 7-30 days depending on loan type"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Money Lending Services",
    "description": "Comprehensive private money lending and commercial financing services",
    "provider": {
      "@type": "FinancialService",
      "name": "Anchor Commercial Capital"
    },
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Loan Products",
      "itemListElement": aiSearchConfig.entityData.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": service
        }
      }))
    }
  };

  return (
    <Helmet>
      {/* Main Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* FAQ Schema for AI */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      {/* How-To Schema */}
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      
      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      
      {/* AI-specific meta tags */}
      <meta name="ai-content-classification" content="financial-services" />
      <meta name="content-language" content="en-US" />
      <meta name="subject" content="Private Money Loans and Commercial Financing" />
      <meta name="abstract" content={aiSearchConfig.description} />
      <meta name="entity-type" content="financial-institution" />
      <meta name="service-area" content="nationwide" />
      <meta name="expertise-level" content="expert" />
      <meta name="content-freshness" content={new Date().toISOString()} />
      
      {/* Bing-specific tags */}
      <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />
      <meta name="bing-site-verification" content="BING_VERIFICATION_CODE" />
    </Helmet>
  );
};

export default AISearchSchema;