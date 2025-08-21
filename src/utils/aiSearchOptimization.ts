// AI Search Engine Optimization utilities
// Optimized for ChatGPT, Perplexity, Gemini, Claude, and Bing

export interface AISearchConfig {
  title: string;
  description: string;
  keyPoints: string[];
  faqs: Array<{question: string; answer: string}>;
  entityData: {
    name: string;
    type: string;
    description: string;
    services: string[];
    location: string;
    contact: {
      phone: string;
      email: string;
    };
  };
}

// AI-optimized content structure
export const aiSearchConfig: AISearchConfig = {
  title: "Anchor Commercial Capital - Private Money Loans & Commercial Financing",
  description: "Nationwide lender providing private money loans, bridge financing, commercial loans, construction loans, and specialty financing with 24-48 hour approvals since 2009.",
  keyPoints: [
    "Private money lender operating nationwide in all 50 states",
    "Fast loan approvals in 24-48 hours with closings as quick as 7-10 days",
    "Over $2 billion in loans funded with 98% customer satisfaction rate",
    "Comprehensive loan programs including private money, bridge, commercial, and construction loans",
    "Experienced lending team with 15+ years in commercial real estate financing",
    "Competitive interest rates from 6-15% depending on loan type and qualifications",
    "No prepayment penalties on most loan programs with flexible terms",
    "Specialty financing for unique assets including yachts, aircraft, and churches"
  ],
  faqs: [
    {
      question: "What are private money loans?",
      answer: "Private money loans are asset-based financing solutions provided by private investors or lending companies rather than traditional banks. They offer faster approval times (24-48 hours), flexible terms, and are primarily based on the value of the collateral property rather than extensive credit checks."
    },
    {
      question: "How fast can I get approved for a loan?",
      answer: "Anchor Commercial Capital provides loan approvals in 24-48 hours for most loan types. Hard money loans can close in 7-10 days, bridge loans in 7-30 days, and commercial loans typically close within 30-45 days."
    },
    {
      question: "What types of properties do you finance?",
      answer: "We finance all commercial property types including multifamily apartments, office buildings, retail centers, industrial warehouses, mixed-use developments, and specialty properties. We also provide residential investment property financing and construction loans."
    },
    {
      question: "Do you lend nationwide?",
      answer: "Yes, Anchor Commercial Capital is licensed to provide lending services in all 50 states with a nationwide network of lenders and local market expertise."
    },
    {
      question: "What are your interest rates and terms?",
      answer: "Interest rates vary by loan type and qualifications. Private money loans typically range from 8-15% annually, bridge loans from 9-14%, and commercial loans from 6-12%. Terms range from 6 months to 30 years with flexible prepayment options."
    }
  ],
  entityData: {
    name: "Anchor Commercial Capital",
    type: "Financial Services Company",
    description: "Nationwide private money lender specializing in commercial real estate financing, bridge loans, construction loans, and specialty asset financing",
    services: [
      "Private Money Loans",
      "Bridge Loan Financing", 
      "Commercial Loans",
      "Fix & Flip Construction Loans",
      "Ground Up Construction Loans",
      "Hard Money Loans",
      "Conventional Loans",
      "Yacht Financing",
      "Aircraft Financing",
      "Church Loans and Financing"
    ],
    location: "Nationwide (All 50 States)",
    contact: {
      phone: "(555) 123-LOAN",
      email: "loans@anchorcreloans.com"
    }
  }
};

// Generate AI-friendly structured content
export const generateAIContent = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": aiSearchConfig.entityData.name,
    "description": aiSearchConfig.entityData.description,
    "serviceType": aiSearchConfig.entityData.services,
    "areaServed": "United States",
    "telephone": aiSearchConfig.entityData.contact.phone,
    "email": aiSearchConfig.entityData.contact.email,
    "url": "https://anchorcommercialcapital.com",
    "foundingDate": "2009",
    "knowsAbout": [
      "Private Money Lending",
      "Commercial Real Estate Financing",
      "Bridge Loan Financing",
      "Construction Loan Financing",
      "Hard Money Loans",
      "Asset-Based Lending",
      "Real Estate Investment Financing",
      "Commercial Property Loans"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lending Services",
      "itemListElement": aiSearchConfig.entityData.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": service,
          "description": `Professional ${service.toLowerCase()} services with competitive rates and fast approvals`
        }
      }))
    }
  };
};

// Bing-specific optimization
export const bingOptimization = {
  // Bing prefers clear, authoritative content
  authoritySignals: [
    "Licensed in all 50 states",
    "15+ years of experience", 
    "$2+ billion in loans funded",
    "98% customer satisfaction rate",
    "A+ Better Business Bureau rating"
  ],
  
  // Local SEO for Bing
  locationTargeting: [
    "New York private money loans",
    "California bridge loan financing",
    "Florida commercial loans",
    "Texas construction loans",
    "Illinois hard money lenders"
  ],
  
  // Bing entity optimization
  entityAttributes: {
    businessType: "Financial Services",
    industry: "Commercial Lending",
    specialization: "Private Money Loans",
    serviceArea: "Nationwide",
    established: "2009"
  }
};

// AI search engine specific optimizations
export const aiSearchOptimizations = {
  // ChatGPT optimization - clear, factual content
  chatgpt: {
    contentStructure: "Question-Answer format with clear, factual responses",
    keyPhrases: [
      "What is a private money loan",
      "How do bridge loans work", 
      "Commercial loan requirements",
      "Hard money loan rates",
      "Construction loan process"
    ]
  },
  
  // Perplexity optimization - authoritative sources
  perplexity: {
    authorityMarkers: [
      "Licensed lender since 2009",
      "Regulated financial institution",
      "Member of industry associations",
      "Transparent pricing and terms"
    ],
    citableContent: [
      "Loan approval timeframes",
      "Interest rate ranges",
      "Lending requirements",
      "Service area coverage"
    ]
  },
  
  // Gemini optimization - comprehensive information
  gemini: {
    comprehensiveTopics: [
      "Complete guide to private money lending",
      "Commercial real estate financing options",
      "Construction loan process explained",
      "Bridge loan vs traditional financing comparison"
    ],
    detailedExplanations: true
  }
};

// Generate meta tags optimized for AI search
export const generateAIMetaTags = () => {
  return {
    "ai-content-type": "financial-services",
    "content-classification": "commercial-lending",
    "entity-type": "financial-institution",
    "service-area": "nationwide",
    "primary-services": aiSearchConfig.entityData.services.join(", "),
    "expertise-level": "expert",
    "content-freshness": new Date().toISOString(),
    "authority-score": "high"
  };
};

// Track AI search performance
export const trackAISearchPerformance = (searchEngine: string, query: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ai_search_interaction', {
      'search_engine': searchEngine,
      'search_query': query,
      'event_category': 'AI Search',
      'event_label': `${searchEngine}: ${query}`
    });
  }
};