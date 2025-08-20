// Verified industry data with exact sources (Updated: February 2025)
// All numbers cross-verified from Grand View Research, Siemens, and manufacturer specs

export const marketData = {
  global: {
    size2024: 20378.6, // Million USD (verified)
    size2030: 41744.0, // Million USD (verified)
    cagr: 13.0, // 2025-2030 (verified)
    source: "Grand View Research, Machine Vision Market Report, February 2025",
    chartData: [
      { "year": 2024, "value_usd_m": 20378.6, "label": "$20.38B" },
      { "year": 2030, "value_usd_m": 41744.0, "label": "$41.74B" }
    ]
  },
  mea: {
    size2024: 1609.3, // Million USD (exact)
    cagr: 13.5, // 2025-2030
    source: "Grand View Research, MEA Machine Vision Market Size & Outlook"
  },
  uae: {
    size2024: 460.9, // Million USD
    size2030: 993.7, // Million USD
    cagr: 14.0, // 2025-2030
    source: "Grand View Research, UAE Machine Vision Market Size & Outlook, 2024-2030"
  },
  pricing: {
    vertexAIFloor: {
      provider: "Google Cloud Visual Inspection AI",
      perStreamPerMonth: 100, // USD per camera stream per solution per month
      note: "Public benchmark (floor)",
      source: "Google Cloud Vertex AI Vision pricing"
    }
  }
};

export const techSpecs = {
  imx636: {
    resolution: "1280×720",
    pixelLatency: "<100 μs @ 1000 lux (<1000 μs @ 5 lux)",
    dynamicRange: ">86 dB / >120 dB*",
    motionBlur: "None (asynchronous events)",
    source: "PROPHESEE Event Camera Evaluation Kit 4 HD IMX636",
    note: "*Per Sony/Prophesee IMX636 product brief"
  },
  comparison: [
    { "metric": "Resolution", "event": "1280×720", "rgb": "Varies" },
    { "metric": "Pixel latency", "event": "<100 μs @ 1000 lux (<1000 μs @ 5 lux)", "rgb": "Frame-based ms-scale" },
    { "metric": "Dynamic range (HDR)", "event": ">86 dB / >120 dB*", "rgb": "~48–60 dB typical" },
    { "metric": "Motion blur", "event": "None (asynchronous events)", "rgb": "High at line speed" }
  ],
  performance: {
    useCase: "High-speed counting",
    throughputObjPerS: 1000,
    accuracyPct: 99.5,
    source: "PROPHESEE Event-based Vision for Industrial Applications"
  }
};

export const riskNotes = {
  awsPanorama: {
    endOfSupport: "May 31, 2026",
    source: "AWS Panorama end of support documentation"
  }
};