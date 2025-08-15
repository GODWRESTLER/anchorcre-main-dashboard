// SEO utility functions for dynamic optimization

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
}

// Default SEO configurations for different pages/sections
export const seoConfigs = {
  home: {
    title: "Private Money Loans & Commercial Financing | Anchor Commercial Capital",
    description: "Get private money loans, bridge financing, commercial loans & construction financing with 24-48hr approvals. Licensed nationwide lender since 2009. Apply today!",
    keywords: "private money loans, hard money loans, bridge loans, commercial loans, construction loans, fix and flip loans, yacht financing, aircraft financing, church loans, real estate financing"
  },
  privateMoneyLoans: {
    title: "Private Money Loans - Fast Approval | Anchor Commercial Capital",
    description: "Private money loans with 24-48hr approval. Asset-based lending for real estate investors. Competitive rates, flexible terms. Apply now!",
    keywords: "private money loans, private lenders, asset based lending, real estate financing, investor loans"
  },
  bridgeLoans: {
    title: "Bridge Loan Financing - Quick Closings | Anchor Commercial Capital", 
    description: "Bridge loan financing with 7-30 day closings. Up to 80% LTV, interest-only payments. Perfect for time-sensitive real estate deals.",
    keywords: "bridge loans, bridge financing, short term loans, real estate bridge loans, commercial bridge loans"
  },
  commercialLoans: {
    title: "Commercial Loans & Real Estate Financing | Anchor Commercial Capital",
    description: "Commercial real estate loans for all property types. Competitive rates, long-term financing, nationwide coverage. Get pre-approved today!",
    keywords: "commercial loans, commercial real estate loans, commercial financing, business loans, commercial mortgages"
  },
  constructionLoans: {
    title: "Construction Loans - Fix & Flip + Ground Up | Anchor Commercial Capital",
    description: "Construction loans for fix & flip and ground-up projects. Draw-based funding, fast approvals, experienced contractor network.",
    keywords: "construction loans, fix and flip loans, ground up construction, construction financing, rehab loans"
  },
  hardMoneyLoans: {
    title: "Hard Money Loans - 7-10 Day Closings | Anchor Commercial Capital",
    description: "Hard money loans with 7-10 day closings. No income verification, up to 70% LTV. Asset-based lending for time-sensitive deals.",
    keywords: "hard money loans, hard money lenders, fast closing loans, asset based loans, real estate hard money"
  },
  yachtFinancing: {
    title: "Yacht Financing - Marine Loans up to $50M | Anchor Commercial Capital",
    description: "Yacht financing for luxury boats and yachts. Up to $50M financing, competitive marine rates, flexible terms. Apply today!",
    keywords: "yacht financing, boat loans, marine financing, yacht loans, luxury boat financing"
  },
  aircraftFinancing: {
    title: "Aircraft Financing - Aviation Loans | Anchor Commercial Capital",
    description: "Aircraft financing for private and commercial aircraft. New & used aircraft loans, competitive aviation rates, quick approvals.",
    keywords: "aircraft financing, airplane loans, aviation financing, aircraft loans, private jet financing"
  },
  churchLoans: {
    title: "Church Loans & Religious Organization Financing | Anchor Commercial Capital",
    description: "Church loans and financing for religious organizations. Ministry-focused lending, flexible repayment, competitive rates.",
    keywords: "church loans, church financing, religious organization loans, ministry financing, church mortgages"
  }
};

// Generate structured data for loan products
export const generateLoanProductSchema = (loanType: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": loanType,
    "description": description,
    "provider": {
      "@type": "FinancialService",
      "name": "Anchor Commercial Capital",
      "url": "https://anchorcommercialcapital.com"
    },
    "category": "Loan",
    "areaServed": "US"
  };
};

// Generate FAQ structured data
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Update page SEO dynamically
export const updatePageSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', config.keywords);
  }
  
  // Update canonical URL
  if (config.canonical) {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', config.canonical);
    }
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  if (config.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', config.ogImage);
    }
  }
};

// Track page views for SEO analytics
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': pageName
      }
    });
  }
};

// Generate breadcrumb structured data
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};