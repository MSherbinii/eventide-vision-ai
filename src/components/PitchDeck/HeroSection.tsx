import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Eye, Zap, Target } from "lucide-react";
import { CountingNumber } from "@/components/Animations/CinematicTransitions";
import FloatingCamera3D from "@/components/3D/FloatingCamera3D";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      </div>
      
      {/* 3D Camera Component */}
      <div className="absolute right-10 top-1/4 w-96 h-96 opacity-60">
        <FloatingCamera3D />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text animate-float">Event-Based</span>
              <br />
              <span className="text-foreground">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The world's first complete Perception-as-a-Service platform using neuromorphic vision sensors
            </p>
          </div>

          {/* Key Stats with Animated Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 glow-effect floating-card">
              <div className="text-center space-y-2">
                <Eye className="w-8 h-8 mx-auto text-primary animate-pulse-glow" />
                <div className="text-3xl font-bold gradient-text">
                  $<CountingNumber from={0} to={20.3} duration={2} />B
                </div>
                <p className="text-sm text-muted-foreground">Global Machine Vision Market</p>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 glow-effect floating-card">
              <div className="text-center space-y-2">
                <Zap className="w-8 h-8 mx-auto text-secondary animate-bounce-slow" />
                <div className="text-3xl font-bold gradient-text">
                  <CountingNumber from={0} to={1000} duration={2} />x
                </div>
                <p className="text-sm text-muted-foreground">Faster Data Processing</p>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 glow-effect floating-card">
              <div className="text-center space-y-2">
                <Target className="w-8 h-8 mx-auto text-accent animate-spin-slow" />
                <div className="text-3xl font-bold gradient-text">
                  <CountingNumber from={0} to={13.04} duration={2} />%
                </div>
                <p className="text-sm text-muted-foreground">Market CAGR</p>
              </div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group neon-glow"
              onClick={() => {
                document.getElementById('problem')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              View Pitch Deck
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="tech" 
              size="xl" 
              className="shimmer-effect"
              onClick={() => {
                document.getElementById('market')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Market Analysis
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements with Enhanced Animations */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-pulse-glow opacity-60 pulse-ring"></div>
      <div className="absolute bottom-32 right-32 w-2 h-2 bg-secondary rounded-full animate-pulse-glow opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-accent rounded-full animate-float opacity-40"></div>
      
      {/* Additional floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;