import LandingTennis from "./LandingTennis";
import NewsletterSection from "./NewsletterSection";
import TennisAcademySection from "./TennisAcademySection";
import TennisHeroSection from "./TennisHeroSection";
import TennisPricingSection from "./TennisPriceingSection";
import TennisSchool from "./TennisSchool";
import Tennissuggetions from "./Tennissuggetions";

const TennisPage = () => {
return (

<div>

    <TennisHeroSection />
    <LandingTennis />
    <TennisAcademySection />
    <Tennissuggetions />
    <TennisPricingSection />
    <TennisSchool />
    <NewsletterSection />
</div>

);

}
export default TennisPage;