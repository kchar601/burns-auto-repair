import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import CtaLink from "../../Components/CtaLink/CtaLink";

function Homepage() {
  return (
    <main>
      <HeroSection />
      <FeaturedServices outline={true} />
      <TestimonialsCarousel />
      <ValueProp img={"src/assets/shop-upclose.jpeg"}>
        <h2>The "No-Nonsense" Guarantee</h2>
        <p>
          We know the anxiety that comes with visiting an auto shop: "Do I
          really need this part? Are they overcharging me?" At Burns' Auto
          Repair, we silence that noise.
        </p>
        <ul>
          <li>Nearly 70 Years of Serving Newtown</li>
          <li>Family Owned & Operated</li>
          <li>Honest & Transparent Pricing</li>
          <li>ASE Certified Technicians</li>
        </ul>
        <CtaLink link={"/about"}>Learn More About Us</CtaLink>
      </ValueProp>
    </main>
  );
}

export default Homepage;
