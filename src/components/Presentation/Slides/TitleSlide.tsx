import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Zap, Target } from "lucide-react";
import { CountingNumber } from "@/components/Animations/CinematicTransitions";
import FloatingCamera3D from "@/components/3D/FloatingCamera3D";
import heroImage from "@/assets/hero-industrial.jpg";

const TitleSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      </div>
      
      {/* 3D Camera */}
      <div className="absolute right-10 top-1/4 w-96 h-96 opacity-60">
        <FloatingCamera3D />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Company Title */}
          <div className="space-y-4">
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text animate-float">Eventide Vision</span>
            </div>
            <div className="text-lg md:text-xl font-light text-muted-foreground">
              Perception-as-a-Service for Factories
            </div>
            <div className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Full-stack event-based vision + AI platform
            </div>
            <div className="text-xs text-accent font-medium">
              Why Now: Event sensor maturity meets automation demand
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 glow-effect floating-card">
              <div className="text-center space-y-2">
                <Eye className="w-8 h-8 mx-auto text-primary animate-pulse-glow" />
                <div className="text-2xl font-bold gradient-text">
                  $<CountingNumber from={0} to={20.38} duration={3} />B
                </div>
                <p className="text-sm text-muted-foreground">Market Size 2024</p>
              </div>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-secondary/20 glow-effect floating-card">
              <div className="text-center space-y-2">
                <Zap className="w-8 h-8 mx-auto text-secondary animate-bounce-slow" />
                <div className="text-2xl font-bold gradient-text">
                  $<CountingNumber from={0} to={41.74} duration={3} />B
                </div>
                <p className="text-sm text-muted-foreground">Market 2030</p>
              </div>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-accent/20 glow-effect floating-card">
              <div className="text-center space-y-2">
                <Target className="w-8 h-8 mx-auto text-accent animate-spin-slow" />
                <div className="text-2xl font-bold gradient-text">
                  <CountingNumber from={0} to={13.0} duration={3} />%
                </div>
                <p className="text-sm text-muted-foreground">Market CAGR</p>
              </div>
            </Card>
          </div>

          {/* Source Attribution */}
          <div className="pt-4 space-y-2">
            <div className="text-xs text-muted-foreground">
              Source: Grand View Research (2025)
            </div>
            <div className="text-lg font-semibold">Pre-Seed Funding Round</div>
            <div className="text-sm text-muted-foreground">
              Seeking $500K to fund MVP → pilots → traction to seed
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 6}s`
          }}
        />
      ))}
    </div>
  );
};

export default TitleSlide;