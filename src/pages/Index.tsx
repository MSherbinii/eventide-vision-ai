import HeroSection from "@/components/PitchDeck/HeroSection";
import ProblemSection from "@/components/PitchDeck/ProblemSection";
import MarketTimingSection from "@/components/PitchDeck/MarketTimingSection";
import SolutionSection from "@/components/PitchDeck/SolutionSection";
import BusinessModelSection from "@/components/PitchDeck/BusinessModelSection";
import TeamTimelineSection from "@/components/PitchDeck/TeamTimelineSection";
import FundingSection from "@/components/PitchDeck/FundingSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl gradient-text">PerceptionTech</div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#problem" className="hover:text-primary transition-colors">Problem</a>
              <a href="#market" className="hover:text-primary transition-colors">Market</a>
              <a href="#solution" className="hover:text-primary transition-colors">Solution</a>
              <a href="#business" className="hover:text-primary transition-colors">Business</a>
              <a href="#team" className="hover:text-primary transition-colors">Team</a>
              <a href="#funding" className="hover:text-primary transition-colors">Funding</a>
            </div>
            <Button variant="gradient" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="market">
          <MarketTimingSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="business">
          <BusinessModelSection />
        </div>
        <div id="team">
          <TeamTimelineSection />
        </div>
        <div id="funding">
          <FundingSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="gradient-text font-bold text-2xl mb-4">PerceptionTech</div>
          <p className="text-muted-foreground mb-6">
            Transforming industrial vision with event-based perception technology
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>© 2025 PerceptionTech</span>
            <span>•</span>
            <span>Pitch Deck v1.0</span>
            <span>•</span>
            <span>Pre-Seed Stage</span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          variant="glow"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
