import About from "./About/page";
import Expertise from "./Expertise/page";
import Hero from "./Hero/page";
import Parallax from "./Parallax/page";
import PricingPlans from "./PricingPlans/page";
import Services from "./Services/page";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Parallax />
      <Services />
      <Expertise />
      <PricingPlans />
    </>
  );
}
