
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WorldMap from '../components/WorldMap';
import InstagramFeed from '../components/InstagramFeed';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorldMap />
      <InstagramFeed />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
