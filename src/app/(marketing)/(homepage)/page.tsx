import ProductShowcase from "@/components/ui/homepage/product-showcase";
import HomepageFeatures from "@/components/ui/homepage/homepage-features";
import HomepageFeedback from "@/components/ui/homepage/homepage-feedback";
import HomepageHero from "@/components/ui/homepage/homepage-hero";
import HomepageMoreFeature from "@/components/ui/homepage/homepage-more-feature";
import HomepageCheckout from "@/components/ui/homepage/homepage-sellxd";

const Homepage: React.FC = () => {
  return (
    <>
    <HomepageHero />
    <ProductShowcase />
    <HomepageFeatures />
    <HomepageCheckout />
    <HomepageMoreFeature /> 
    <HomepageFeedback />
    </>
  );
};

export default Homepage;