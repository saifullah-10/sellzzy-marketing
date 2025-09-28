import HomepageFeatures from "../../../components/ui/homepage/homepage-features";
import HomepageFeedback from "../../../components/ui/homepage/homepage-feedback";
import HomepageHero from "../../../components/ui/homepage/homepage-hero";
import HomepageMoreFeature from "../../../components/ui/homepage/homepage-more-feature";

const Homepage: React.FC = () => {
  return (
    <>
    <HomepageHero />
    <HomepageFeatures />
    {/* <HomepageMoreFeature /> */}
    <HomepageFeedback />
    </>
  );
};

export default Homepage;