import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "Private Money Loans & Commercial Financing | Anchor Commercial Capital",
  description = "Get private money loans, bridge financing, commercial loans & construction financing with 24-48hr approvals. Licensed nationwide lender since 2009. Apply today!",
  keywords = "private money loans, hard money loans, bridge loans, commercial loans, construction loans, fix and flip loans, yacht financing, aircraft financing, church loans, real estate financing",
  canonical = "https://anchorcommercialcapital.com",
  ogImage = "https://anchorcommercialcapital.com/og-image.jpg",
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;