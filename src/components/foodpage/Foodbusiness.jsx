import { Contact, Nut } from "lucide-react";
import ContactUsFood from "./ContactUsFood";
import FoodDelivery from "./FoodDelivery";
import FoodHero from "./FoodHero";
import HealthyFood from "./HealthyFood";
import NutriPlatesMealPlans from "./NutriPlatesMealPlans";
import Testimonials from "./Testimonials";
import WhatWeServeSection from "./WhatWeServeSection";

const FoodBusiness = () => {
  return (
    <div>
      <FoodHero />
      <HealthyFood />
      <FoodDelivery />
      <WhatWeServeSection />
      <NutriPlatesMealPlans />
      <ContactUsFood />
      <Testimonials />
    </div>
  );
}
export default FoodBusiness;