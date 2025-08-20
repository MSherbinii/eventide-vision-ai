import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import CostOfFrameVisionSlide from "@/components/Presentation/Slides/CostOfFrameVisionSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import GoToMarketSlide from "@/components/Presentation/Slides/GoToMarketSlide";
import BusinessModelSlideV2 from "@/components/Presentation/Slides/BusinessModelSlideV2";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import RoadmapSlideV2 from "@/components/Presentation/Slides/RoadmapSlideV2";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import AskSlideV2 from "@/components/Presentation/Slides/AskSlideV2";
// Compact deck: omit Investor ROI slide for brevity

const Index = () => {
  // Compact 10-slide deck optimized for pre-seed investors
  const slides = [
    { id: 'title', title: 'LuminarX AI', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlide },
    { id: 'solution', title: 'Our Solution', component: SolutionSlide },
    { id: 'market', title: 'Market Opportunity', component: MarketSlide },
    { id: 'business-model', title: 'Business Model', component: BusinessModelSlideV2 },
    { id: 'go-to-market', title: 'Go-to-Market', component: GoToMarketSlide },
    { id: 'competition', title: 'Why We Win', component: CompetitionSlide },
    { id: 'roadmap', title: 'Roadmap', component: RoadmapSlideV2 },
    { id: 'team', title: 'Team', component: TeamSlide },
    { id: 'ask', title: 'The Ask', component: AskSlideV2 }
  ];

  return (
    <PresentationSlider 
      slides={slides}
      autoPlay={false}
      autoPlayInterval={45000}
    />
  );
};

export default Index;