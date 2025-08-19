// Source: Grand View Research, Machine Vision Market, accessed Aug 2025.
// Global: $20,378.6M (2024) → $41,744.0M (2030), 13.0% CAGR (2025–2030)
// MEA: ~$1.61B (2024), ~13.5% CAGR to 2030

export const marketData = {
  global: {
    size2024: 20378.6, // Million USD
    size2030: 41744.0, // Million USD  
    cagr: 13.0,
    source: "Grand View Research, Machine Vision Market Size & Share Report, 2025"
  },
  mea: {
    size2024: 1610, // Million USD (approximate)
    cagr: 13.5,
    source: "Grand View Research, MEA Machine Vision Market"
  },
  pricing: {
    vertexAIFloor: {
      perStreamPerMonth: 100, // USD per camera stream per solution per month
      source: "Google Cloud Vertex AI Vision pricing"
    }
  }
};

export const techSpecs = {
  imx636: {
    resolution: "HD (1280×720)",
    latency: "< 100 µs @ 1000 lux",
    dynamicRange: "> 120 dB",
    source: "PROPHESEE Event-based sensor IMX636 Sony-Prophesee"
  },
  useCases: {
    highSpeedCounting: "~1000 objects/second",
    applications: ["Quality assurance", "Predictive maintenance", "Area monitoring"],
    source: "PROPHESEE High Speed Counting with event-based vision"
  }
};

export const riskNotes = {
  awsPanorama: {
    endOfSupport: "May 31, 2026",
    source: "AWS Panorama end of support documentation"
  }
};