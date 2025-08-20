import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Professional pitch deck font pairing (following expert recommendations)
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'], // Body text
        'heading': ['Montserrat', 'Inter', '-apple-system', 'system-ui', 'sans-serif'], // Headlines & titles  
        'display': ['Montserrat', 'Inter', '-apple-system', 'system-ui', 'sans-serif'], // Large display text
      },
      fontSize: {
        // Pitch deck typography hierarchy (following 32-44pt headlines, 18-28pt body rule)
        'headline': ['2.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 44px headlines
        'title': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // 36px titles
        'subtitle': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }], // 24px subtitles
        'body-large': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }], // 20px large body
        'body': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }], // 18px standard body
        'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }], // 14px captions
      },
      colors: {
        // Psychology-Optimized Palette for Investor Presentations
        // Based on Alejandro Cremades color psychology research
        
        // Trust & Reliability (Blue Family)
        trust: "#1A2332",      // Primary navy - investor confidence
        navy: "#1A2332",       // Deep navy - tech industry standard
        
        // Growth & Action (Green Family) 
        growth: "#24B47E",     // Strategic green - positive outcomes
        success: "#24B47E",    // Action green - driving force
        
        // Innovation & Premium (Purple Family)
        innovation: "#6C5CE7", // Tech purple - advanced solutions
        premium: "#6C5CE7",    // Premium purple - luxury perception
        
        // Professional Foundation
        ink: "#0B0C10",        // Rich black - authority & power
        graphite: "#2B3446",   // Professional gray - sophistication
        paper: "#F7F7F8",      // Clean white - professionalism
        muted: "#C7CED9",      // Cool gray - non-distracting
        
        // Semantic tokens (maintain compatibility)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        // Psychology-informed shadows
        trust: "0 10px 30px rgba(26, 35, 50, 0.15)",   // Blue-tinted trust shadow
        growth: "0 8px 25px rgba(36, 180, 126, 0.12)", // Green-tinted growth shadow
        innovation: "0 12px 35px rgba(108, 92, 231, 0.15)", // Purple innovation shadow
        card: "0 10px 30px rgba(0,0,0,.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22,1,0.36,1)", // Apple-like professional easing
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        // Psychology-based animations
        'trust-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(26, 35, 50, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(26, 35, 50, 0)' }
        },
        'growth-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(36, 180, 126, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(36, 180, 126, 0.8)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'trust-pulse': 'trust-pulse 2s ease-in-out infinite',
        'growth-glow': 'growth-glow 3s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addBase }) {
      addBase({
        ":root": {
          "--ease-smooth": "cubic-bezier(0.22,1,0.36,1)",
          // Psychology-based CSS custom properties
          "--trust-color": "#1A2332",
          "--growth-color": "#24B47E", 
          "--innovation-color": "#6C5CE7",
        },
      });
    }
  ],
} satisfies Config;
