import About from "./About/page";
import Banner from "./Banner/page";
import Blog from "./Blogs/page";
import Expertise from "./Expertise/page";
import Faqs from "./Faq/page";
import Hero from "./Hero/page";
import Parallax from "./Parallax/page";
import PricingPlans from "./PricingPlans/page";
import Services from "./Services/page";
import Testimonial from "./Testimonial/page";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Parallax />
      <Services />
      <Expertise />
      <PricingPlans />
      <Testimonial />
      <Faqs />
      <Banner />
      <Blog />
    </>
  );
}
