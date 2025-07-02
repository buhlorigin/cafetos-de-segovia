
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import EpicWorldMap from '../components/EpicWorldMap';
import InstagramFeed from '../components/InstagramFeed';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <EpicWorldMap />
      <InstagramFeed />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
