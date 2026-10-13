import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HomeExtraSections from '../components/HomeExtraSections';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <HomeExtraSections />
      <Footer />
    </div>
  );
};

export default Index;
