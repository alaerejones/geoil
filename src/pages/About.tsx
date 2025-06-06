
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import Achievements from "@/components/about/Achievements";
import TeamMembers from "@/components/about/TeamMembers";
import CoreValues from "@/components/about/CoreValues";
import MissionVision from "@/components/about/MissionVision";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="About Us"
        description="Learn about GGL's 15+ years of expertise in geotechnical engineering and environmental consulting across West Africa. Our commitment to integrity, excellence, and innovation."
        keywords="about GGL, geotechnical engineering company, environmental consulting Nigeria, engineering expertise West Africa"
      />
      
      <Navigation />
      <ScrollToTop />
      
      <AboutHero />
      <CompanyOverview />
      <Achievements />
      <TeamMembers />
      <CoreValues />
      <MissionVision />
      <AboutCTA />
      
      <Footer />
    </div>
  );
};

export default About;
