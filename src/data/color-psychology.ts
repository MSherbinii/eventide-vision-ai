// Color Psychology for Pitch Deck Presentations
// Based on research by Alejandro Cremades and color psychology studies

export const colorPsychologyPrinciples = {
  // Colors that build investor confidence and trust
  investorFriendly: {
    blue: {
      psychology: "Trust, stability, calmness, professionalism",
      effect: "Positively influences investor decision-making",
      usage: "Primary color for tech companies, backgrounds, trust elements",
      hex: "#1A2332", // Our primary navy
      recommendations: "Ideal for establishing credibility and reliability"
    },
    green: {
      psychology: "Growth, positivity, safe environment, action (GO color)",
      effect: "Signals growth potential and driving force",
      usage: "Action buttons, growth metrics, positive indicators",
      hex: "#24B47E", // Our accent green
      recommendations: "Perfect for showing progress and potential"
    },
    purple: {
      psychology: "Premium quality, luxury, innovation, advanced technology",
      effect: "Conveys sophistication and cutting-edge solutions",
      usage: "Innovation highlights, premium features, tech differentiation",
      hex: "#6C5CE7", // Our warning purple
      recommendations: "Great for tech companies showing innovation"
    },
    white: {
      psychology: "Professionalism, purity, cleanliness, safe choice",
      effect: "Creates clean, professional appearance",
      usage: "Text, backgrounds, contrast elements",
      hex: "#F7F7F8", // Our foreground
      recommendations: "Essential for readability and professionalism"
    },
    black: {
      psychology: "Formality, professionalism, power, authority",
      effect: "Establishes authority and seriousness",
      usage: "Backgrounds, headers, emphasis elements",
      hex: "#0B0C10", // Our background
      recommendations: "Creates strong visual hierarchy"
    }
  },

  // Colors to avoid or use carefully in pitch decks
  riskColors: {
    red: {
      psychology: "Danger, risk, warning, aggressiveness, overconfidence",
      effect: "Can signal risk to investors, creates negative associations",
      usage: "Avoid as primary color, use sparingly for urgent alerts only",
      recommendations: "Avoid in startup pitch decks - signals overconfidence"
    },
    orange: {
      psychology: "Confidence but potentially immature, innovation",
      effect: "Mixed signals - confidence but lack of maturity",
      usage: "Use carefully, can work for innovation in tech if balanced",
      recommendations: "Use sparingly and with mature color combinations"
    },
    yellow: {
      psychology: "Positivity, brightness, joy, but also anxiety",
      effect: "Can create anxiety if overused",
      usage: "Only in contrast with blues and greens, accent use only",
      recommendations: "Use minimally as accent, avoid as primary"
    }
  },

  // Color combination guidelines for investor presentations
  combinations: {
    recommended: [
      {
        name: "Trust & Growth",
        colors: ["Deep Blue", "Strategic Green", "Professional White"],
        psychology: "Establishes trust while showing growth potential",
        usage: "Primary palette for tech pitch decks"
      },
      {
        name: "Innovation & Reliability", 
        colors: ["Navy Blue", "Tech Purple", "Clean White"],
        psychology: "Shows cutting-edge innovation backed by reliability",
        usage: "Advanced technology presentations"
      },
      {
        name: "Professional Authority",
        colors: ["Rich Black", "Trust Blue", "Strategic Green"],
        psychology: "Conveys authority, trustworthiness, and action",
        usage: "Executive-level presentations"
      }
    ],
    avoid: [
      {
        combination: "Red + Green",
        reason: "Visually attractive but hard to read, accessibility issues"
      },
      {
        combination: "Orange + Blue", 
        reason: "Can be hard to read for some people"
      },
      {
        combination: "Too many warm colors",
        reason: "Can create aggressiveness and negative investor emotions"
      }
    ]
  },

  // Industry-specific color associations
  industryColors: {
    technology: {
      primary: "Blue (trust and stability)",
      secondary: "Purple (innovation)",
      accent: "Green (growth)",
      avoid: "Red (risk perception)"
    },
    artificial_intelligence: {
      primary: "Deep Blue (reliability)",
      secondary: "Purple (advanced tech)",
      accent: "Strategic Green (positive outcomes)",
      supporting: "Professional Black/White"
    },
    industrial_automation: {
      primary: "Trust Blue (safety and reliability)",
      secondary: "Growth Green (efficiency gains)", 
      accent: "Tech Purple (innovation)",
      supporting: "Professional grays"
    }
  },

  // Psychological effects on investor behavior
  investorPsychology: {
    decisionMaking: {
      coolColors: "Create calm, relaxed tone - better for decision making",
      warmColors: "Can create aggressiveness - avoid overuse",
      contrast: "Good contrast improves comprehension and attention"
    },
    trust: {
      blues: "Build immediate trust and credibility",
      consistency: "Consistent color use builds brand recognition",
      professionalism: "Clean, limited palette signals professionalism"
    },
    attention: {
      green: "Draws positive attention, signals action",
      purple: "Creates premium perception, memorable differentiation",
      balance: "Too many colors distract from content"
    }
  }
};

export const pitchDeckColorGuidelines = {
  dos: [
    "Use cool colors (blues, greens, purples) for calm, professional tone",
    "Establish visual hierarchy with consistent color system",
    "Use blue as primary for trust and tech credibility",
    "Use green strategically for growth and action elements",
    "Maintain good contrast for readability",
    "Keep palette limited to 3-4 primary colors",
    "Consider cultural associations of your target investors"
  ],
  donts: [
    "Avoid red as primary color - signals risk to investors",
    "Don't use too many warm colors - creates aggressiveness",
    "Avoid high contrast combos that strain readability",
    "Don't use similar shades that lack contrast",
    "Avoid bold patterns with multiple colors - distracts from content",
    "Don't ignore accessibility - ensure sufficient contrast ratios",
    "Avoid colors that clash with your industry expectations"
  ]
};