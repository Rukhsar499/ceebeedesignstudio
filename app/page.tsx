
import HeroBanner from "./component/layout/HeroBanner";
import ServicesSection from "./component/layout/ServicesSection";
import WhyCeebee from "./component/layout/WhyCeebee";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <HeroBanner />
      <WhyCeebee />
     <ServicesSection />
    
    </div>
  );
}
