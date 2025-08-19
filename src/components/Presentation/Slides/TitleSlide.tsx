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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Company Title */}
          <div className="space-y-6">
            <div className="text-8xl md:text-9xl font-bold tracking-tight">
              <span className="gradient-text animate-float">PerceptionTech</span>
            </div>
            <div className="text-3xl md:text-4xl font-light text-muted-foreground">
              Event-Based Vision Solutions
            </div>
            <div className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The world's first complete Perception-as-a-Service platform using neuromorphic vision sensors
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 glow-effect floating-card">
              <div className="text-center space-y-4">
                <Eye className="w-12 h-12 mx-auto text-primary animate-pulse-glow" />
                <div className="text-4xl font-bold gradient-text">
                  $<CountingNumber from={0} to={69.49} duration={3} />B
                </div>
                <p className="text-lg text-muted-foreground">Market by 2034</p>
              </div>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20 glow-effect floating-card">
              <div className="text-center space-y-4">
                <Zap className="w-12 h-12 mx-auto text-secondary animate-bounce-slow" />
                <div className="text-4xl font-bold gradient-text">
                  <CountingNumber from={0} to={1000} duration={3} />x
                </div>
                <p className="text-lg text-muted-foreground">Faster Processing</p>
              </div>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 glow-effect floating-card">
              <div className="text-center space-y-4">
                <Target className="w-12 h-12 mx-auto text-accent animate-spin-slow" />
                <div className="text-4xl font-bold gradient-text">
                  <CountingNumber from={0} to={13.04} duration={3} />%
                </div>
                <p className="text-lg text-muted-foreground">Market CAGR</p>
              </div>
            </Card>
          </div>

          {/* Pitch Info */}
          <div className="pt-8">
            <div className="text-xl font-semibold mb-2">Pre-Seed Funding Round</div>
            <div className="text-lg text-muted-foreground">
              Seeking $1.5M for 18.75% equity • Q1 2025
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