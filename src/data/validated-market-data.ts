// Validated Market Data for Eventide Vision Pitch Deck
// Sources: Grand View Research, MarketsandMarkets, Prophesee, Industry Reports

export const marketData = {
  // Machine Vision Market Size
  marketSize: {
    current: {
      year: 2024,
      value: 20.38, // in billions USD
      source: "Grand View Research, 2024"
    },
    projected: {
      year: 2030,
      value: 41.74, // in billions USD
      cagr: 13.0, // percentage
      source: "Grand View Research Market Report 2024"
    },
    segments: {
      qualityAssurance: {
        percentage: 35,
        growth: "Largest application segment"
      },
      identification: {
        percentage: 20,
        growth: "15% CAGR"
      },
      positioning: {
        percentage: 18,
        growth: "12% CAGR"
      },
      measurement: {
        percentage: 27,
        growth: "11% CAGR"
      }
    }
  },

  // Regional Growth
  regionalGrowth: {
    mena: {
      cagr: 13.5,
      keyMarkets: ["UAE", "Saudi Arabia", "Egypt"],
      drivers: ["Vision 2030", "Industrial diversification", "Smart manufacturing"]
    },
    europe: {
      cagr: 12.8,
      keyMarkets: ["Germany", "France", "UK"],
      drivers: ["Industry 4.0", "Automation", "Quality standards"]
    },
    gcc: {
      cagr: 14.0,
      marketSize2030: 2.1, // billions USD
      topSectors: ["Oil & Gas", "Manufacturing", "Logistics"]
    }
  },

  // Event-Based Vision Advantages
  eventBasedAdvantages: {
    dataReduction: {
      typical: "50-200x less data",
      conservative: "10x minimum",
      aggressive: "Up to 1000x in static scenes"
    },
    latency: {
      eventBased: "Microsecond (< 1ms)",
      frameBased: "16-33ms typical (30-60fps)"
    },
    powerConsumption: {
      eventBased: "10-60W (Jetson platform)",
      frameBased: "200-400W (GPU systems)"
    },
    dynamicRange: {
      eventBased: "120dB",
      frameBased: "60-70dB typical"
    }
  },

  // Industry Applications
  applications: {
    pharmaceutical: {
      useCase: "High-speed pill counting",
      performance: "1000+ objects/second at 99.5% accuracy",
      roi: "6-month payback"
    },
    foodBeverage: {
      useCase: "Packaging inspection",
      performance: "60m/s line speed capability",
      roi: "Reduce waste by 30%"
    },
    automotive: {
      useCase: "Defect detection on parts",
      performance: "Sub-millimeter precision",
      roi: "Reduce recalls by 40%"
    },
    electronics: {
      useCase: "PCB inspection",
      performance: "Microsecond response time",
      roi: "Improve yield by 15%"
    }
  },

  // Competitive Landscape
  competitors: {
    hardware: {
      prophesee: {
        focus: "Event-based sensors",
        model: "Hardware + SDK",
        limitation: "No turnkey solution"
      },
      sony: {
        product: "IMX636 sensor",
        focus: "Component sales",
        limitation: "Requires integration expertise"
      },
      samsung: {
        focus: "DVS sensors",
        market: "Research/automotive",
        limitation: "Limited industrial focus"
      }
    },
    software: {
      cognex: {
        market: "Traditional machine vision",
        limitation: "Frame-based only"
      },
      keyence: {
        market: "Industrial sensors",
        limitation: "No event-based offering"
      }
    }
  },

  // Pricing Benchmarks
  pricing: {
    traditional: {
      hardware: "$5,000-15,000 per camera",
      software: "$1,000-5,000 per license",
      integration: "$20,000-100,000",
      maintenance: "15-20% annually"
    },
    eventide: {
      pilot: "$2,500/month (1-2 lines)",
      growth: "$7,500/month (3-5 lines)",
      enterprise: "Custom (unlimited)",
      integration: "$15,000-50,000 one-time"
    }
  },

  // Egypt Engineering Market
  egyptAdvantage: {
    talentPool: {
      csGraduates: "15,000+ annually",
      topUniversities: ["Cairo University", "AUC", "GUC"],
      englishProficiency: "High"
    },
    costStructure: {
      classA: { range: "$700-1000/month", experience: "5+ years" },
      classB: { range: "$500-700/month", experience: "2-5 years" },
      classC: { range: "$300-500/month", experience: "0-2 years" }
    },
    comparison: {
      vsGermany: "70% cost savings",
      vsUS: "80% cost savings",
      quality: "Same output quality"
    }
  },

  // Demo Videos & Resources
  demoResources: {
    propheseeDemo: "https://www.prophesee.ai/demo/high-speed-counting/",
    useCaseVideos: [
      {
        title: "High-Speed Pellet Counting",
        description: "1000+ objects/second with 99.5% accuracy",
        thumbnail: "/demo-counting.jpg"
      },
      {
        title: "Surface Defect Detection",
        description: "Real-time detection at 60m/s",
        thumbnail: "/demo-defects.jpg"
      }
    ]
  },

  // Financial Projections
  projections: {
    year1: {
      customers: 5,
      arr: 300000, // €300K
      teamSize: 10
    },
    year2: {
      customers: 20,
      arr: 3000000, // €3M
      teamSize: 25
    },
    year3: {
      customers: 50,
      arr: 10000000, // €10M
      teamSize: 45
    }
  }
};

// Validation sources
export const sources = {
  marketSize: [
    "Grand View Research - Machine Vision Market Report 2024",
    "MarketsandMarkets - Industrial Automation Market Analysis",
    "Mordor Intelligence - Computer Vision Market Forecast"
  ],
  technology: [
    "Prophesee Technical Documentation",
    "IDS Imaging - Event-Based Vision Whitepaper",
    "IEEE Papers on Neuromorphic Vision"
  ],
  pricing: [
    "Industry interviews with 10+ manufacturers",
    "Competitor analysis (Cognex, Keyence pricing)",
    "Pilot project feedback"
  ]
};
