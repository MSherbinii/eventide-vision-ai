import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import CostOfFrameVisionSlide from "@/components/Presentation/Slides/CostOfFrameVisionSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import BusinessModelSlide from "@/components/Presentation/Slides/BusinessModelSlide";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import RoadmapSlideV2 from "@/components/Presentation/Slides/RoadmapSlideV2";
import TeamAskSlide from "@/components/Presentation/Slides/TeamAskSlide";
import { CustomCursor } from "@/components/ui/custom-cursor";

// Compact Pre-Seed Deck with Premium Design
const CompactDeck = () => {
  const slides = [
    { id: 'title', title: 'Eventide Vision', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlide },
    { id: 'cost', title: 'Cost Reality Check', component: CostOfFrameVisionSlide },
    { id: 'solution', title: 'Our Solution', component: SolutionSlide },
    { id: 'market', title: 'Market Opportunity', component: MarketSlide },
    { id: 'business-model', title: 'Business Model', component: BusinessModelSlide },
    { id: 'competition', title: 'Why We Win', component: CompetitionSlide },
    { id: 'roadmap', title: 'Timeline & Milestones', component: RoadmapSlideV2 },
    { id: 'team-ask', title: 'Team + Ask', component: TeamAskSlide }
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
