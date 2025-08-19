import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import CostOfFrameVisionSlide from "@/components/Presentation/Slides/CostOfFrameVisionSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import BusinessModelSlide from "@/components/Presentation/Slides/BusinessModelSlide";
import RoadmapSlide from "@/components/Presentation/Slides/RoadmapSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import FinancialsSlide from "@/components/Presentation/Slides/FinancialsSlide";

const Index = () => {
  const slides = [
    { id: 'title', title: 'Perception-as-a-Service', component: TitleSlide },
    { id: 'problem', title: 'Problem', component: ProblemSlide },
    { id: 'cost', title: 'Cost of Frame Vision', component: CostOfFrameVisionSlide },
    { id: 'solution', title: 'Perception OS', component: SolutionSlide },
    { id: 'market', title: 'Market Timing', component: MarketSlide },
    { id: 'competition', title: 'Competition', component: CompetitionSlide },
    { id: 'business-model', title: 'Business Model', component: BusinessModelSlide },
    { id: 'roadmap', title: 'Roadmap', component: RoadmapSlide },
    { id: 'team', title: 'Team & Hiring', component: TeamSlide },
    { id: 'financials', title: 'Financials', component: FinancialsSlide }
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