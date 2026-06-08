
import HeroBanner from "./component/layout/HeroBanner";
import ServicesSection from "./component/layout/ServicesSection";
import WhyCeebee from "./component/layout/WhyCeebee";
import SplitText from "./component/layout/SplitText";
import Roadmap from "./component/layout/Roadmap";
import TestimonialSlider from "./component/layout/TestimonialSlider";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-san">
     <HeroBanner />
      <WhyCeebee />
      <Roadmap />
      <TestimonialSlider />
     <ServicesSection />
     
    <SplitText text="Origin Objects" />
    </div>
  );
}
