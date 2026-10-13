
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HomeExtraSections from '../components/HomeExtraSections';
import WorldMap from '../components/WorldMap';
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
      <WorldMap />
      <InstagramFeed />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
