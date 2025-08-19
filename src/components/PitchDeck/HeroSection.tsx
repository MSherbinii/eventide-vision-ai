import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Eye, Zap, Target } from "lucide-react";
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
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text">Event-Based</span>
              <br />
              <span className="text-foreground">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The world's first complete Perception-as-a-Service platform using neuromorphic vision sensors
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 glow-effect">
              <div className="text-center space-y-2">
                <Eye className="w-8 h-8 mx-auto text-primary" />
                <div className="text-3xl font-bold gradient-text">$20.3B</div>
                <p className="text-sm text-muted-foreground">Global Machine Vision Market</p>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 glow-effect">
              <div className="text-center space-y-2">
                <Zap className="w-8 h-8 mx-auto text-secondary" />
                <div className="text-3xl font-bold gradient-text">1000x</div>
                <p className="text-sm text-muted-foreground">Faster Data Processing</p>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 glow-effect">
              <div className="text-center space-y-2">
                <Target className="w-8 h-8 mx-auto text-accent" />
                <div className="text-3xl font-bold gradient-text">13.04%</div>
                <p className="text-sm text-muted-foreground">Market CAGR</p>
              </div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              View Pitch Deck
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Market Analysis
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
      <div className="absolute bottom-32 right-32 w-2 h-2 bg-secondary rounded-full animate-pulse-glow opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-accent rounded-full animate-float opacity-40"></div>
    </section>
  );
};

export default HeroSection;