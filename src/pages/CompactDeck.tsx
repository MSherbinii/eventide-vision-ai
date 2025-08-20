import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import CostOfFrameVisionSlide from "@/components/Presentation/Slides/CostOfFrameVisionSlide";
import BusinessModelSlide from "@/components/Presentation/Slides/BusinessModelSlide";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import AskSlide from "@/components/Presentation/Slides/AskSlide";
import { CustomCursor } from "@/components/ui/custom-cursor";

// Compact Pre-Seed Deck - 10 Slides
const CompactDeck = () => {
  const slides = [
    { id: 'title', title: 'Eventide Vision', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlide },
    { id: 'cost', title: 'Cost Reality Check', component: CostOfFrameVisionSlide },
    { id: 'solution', title: 'Our Solution', component: SolutionSlide },
    { id: 'market', title: 'Market Opportunity', component: MarketSlide },
    { id: 'business-model', title: 'Business Model', component: BusinessModelSlide },
    { id: 'competition', title: 'Why We Win', component: CompetitionSlide },
    { id: 'team', title: 'Team', component: TeamSlide },
    { id: 'ask', title: 'The Ask', component: AskSlide }
  ];

  return (
    <>
      {/* Custom Cursor for premium feel */}
      <CustomCursor />
      
      {/* Main Presentation */}
      <PresentationSlider 
        slides={slides}
        autoPlay={false}
        autoPlayInterval={30000}
      />
    </>
  );
};

export default CompactDeck;
