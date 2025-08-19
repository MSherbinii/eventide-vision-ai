import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import BusinessModelSlide from "@/components/Presentation/Slides/BusinessModelSlide";
import TeamTimelineSection from "@/components/PitchDeck/TeamTimelineSection";
import FundingSection from "@/components/PitchDeck/FundingSection";

const Index = () => {
  const slides = [
    {
      id: 'title',
      title: 'PerceptionTech - Event-Based Vision',
      component: TitleSlide
    },
    {
      id: 'problem',
      title: 'The Problem',
      component: ProblemSlide
    },
    {
      id: 'market',
      title: 'Market Opportunity',
      component: MarketSlide
    },
    {
      id: 'solution',
      title: 'Our Solution',
      component: SolutionSlide
    },
    {
      id: 'business',
      title: 'Business Model',
      component: BusinessModelSlide
    },
    {
      id: 'team',
      title: 'Team & Timeline',
      component: TeamTimelineSection
    },
    {
      id: 'funding',
      title: 'Funding Ask',
      component: FundingSection
    }
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