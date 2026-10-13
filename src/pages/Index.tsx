
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HomeExtraSections from '../components/HomeExtraSections';
import PartnerBand from '../components/PartnerBand';
import InstagramFeed from '../components/InstagramFeed';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <HomeExtraSections />
      <InstagramFeed />
      <ContactSection />
      <PartnerBand />
      <Footer />
    </div>
  );
};

export default Index;
