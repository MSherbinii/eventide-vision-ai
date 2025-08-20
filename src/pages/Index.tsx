import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import WhyNowSlide from "@/components/Presentation/Slides/WhyNowSlide";
import CostOfFrameVisionSlide from "@/components/Presentation/Slides/CostOfFrameVisionSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import GoToMarketSlide from "@/components/Presentation/Slides/GoToMarketSlide";
import BusinessModelSlide from "@/components/Presentation/Slides/BusinessModelSlide";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import RoadmapSlide from "@/components/Presentation/Slides/RoadmapSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import AskSlide from "@/components/Presentation/Slides/AskSlide";
import InvestorROISlide from "@/components/Presentation/Slides/InvestorROISlide";

const Index = () => {
  const slides = [
    { id: 'title', title: 'Eventide Vision: Perception-as-a-Service for Factories', component: TitleSlide },
    { id: 'problem', title: 'Frame-based Vision Struggles', component: ProblemSlide },
    { id: 'why-now', title: 'Timing Is Everything', component: WhyNowSlide },
    { id: 'cost', title: 'The Cost of Frame-Only Vision', component: CostOfFrameVisionSlide },
    { id: 'solution', title: 'Perception OS for the Factory', component: SolutionSlide },
    { id: 'market', title: 'Big & Growing Market', component: MarketSlide },
    { id: 'go-to-market', title: 'Where We Win First', component: GoToMarketSlide },
    { id: 'business-model', title: 'PaaS + Licensing Model', component: BusinessModelSlide },
    { id: 'competition', title: 'Competitive Landscape', component: CompetitionSlide },
    { id: 'roadmap', title: 'Roadmap & Milestones', component: RoadmapSlide },
    { id: 'team', title: 'Team & Hiring Plans', component: TeamSlide },
    { id: 'ask', title: 'Pre-Seed Ask', component: AskSlide },
    { id: 'investor-roi', title: 'Investor ROI Projection', component: InvestorROISlide }
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