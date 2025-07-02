
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      title: "HERITAGE",
      content: "Cafetos de Segovia was founded by Ana and Martha Albir, representing the third generation of their family's coffee legacy. We bridge tradition with innovation, providing transparent and socially responsible connections to Nicaraguan coffee farmers. Our passionate team of specialists ensures the highest quality standards throughout the entire production chain, building lasting relationships with partner farms and buyers worldwide.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OUR COFFEE",
      content: "We partner with exceptional farmers to navigate changing environmental conditions while preserving traditional farming culture. Our collaboration with outstanding importers and roasters focuses on sustainability and quality excellence. Through innovative micro-milling and advanced processing techniques, we enhance flavors and maintain consistency. Every cup tells the story of dedicated farmers and our commitment to environmental stewardship.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SUSTAINABILITY",
      content: "At Cafetos de Segovia, sustainability is our foundation. We cultivate coffee with deep reverence for the terroir, implementing practices that preserve our environment for future generations. Our connection with nature defines our identity and legacy, ensuring that every bean reflects our commitment to responsible farming and environmental protection.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "INNOVATION",
      content: "Innovation drives our pursuit of excellence in specialty coffee. We continuously explore cutting-edge processing methods and quality enhancement techniques. Our commitment to creativity and pioneering approaches ensures we deliver exceptional coffee experiences while maintaining the highest standards of consistency and flavor development.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-heritage relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-coffee-gold">Cafetos de Segovia</span>
          </h1>
          <p className="text-2xl text-stone-200 leading-relaxed font-medium">
            Three generations of coffee excellence from the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Values Sections */}
      {values.map((value, index) => (
        <section key={value.title} className={`py-24 ${index % 2 === 0 ? 'bg-gradient-origin' : 'bg-gradient-heritage'} relative`}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl font-bold text-white mb-8">
                  <span className="text-coffee-gold">{value.title}</span>
                </h2>
                <p className="text-xl text-stone-200 leading-relaxed">
                  {value.content}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default About;
