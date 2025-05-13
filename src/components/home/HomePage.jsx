import CatagorySections from "./CatagorySections";
import FounderSection from "./FounderSection";
import HeroSlider from "./HeroSlider";
import Lucky from "./Lucky";
import MarcoSide from "./MarcoSide";
import ServiceSection from "./ServiceSection";
import TreatmentCTA from "./TreatmentCTA";
import WellnessBlogSection from "./WellnessBlogSection";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <MarcoSide />
      <CatagorySections />
      <ServiceSection />
      <Lucky />
      <FounderSection />
      <WellnessBlogSection />
      <TreatmentCTA />
    </div>
  );
}
export default HomePage;