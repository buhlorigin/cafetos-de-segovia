
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      title: "HERITAGE",
      content: "CAFETOS DE SEGOVIA was formed by Ana and Martha Albir, conducting the family coffee business in the third generation, as a response to the high demand for transparent and socially responsible connections to Nicaraguan coffee farmers. It brings together a team of highly motivated and passionate specialists in multiple aspects of coffee production with the goal to provide to our customers the highest level of quality — not only of coffee but also in terms of responsible and accountable assistance throughout the entire chain of production. The company works with partner farms and buyers around the world to establish long-lasting relationships.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OUR COFFEE",
      content: "Our most ambitious goal is to assist local farmers in coping with changing environmental conditions and the requirements of world markets while preserving their best traditional farming culture. We cooperate with outstanding importers and roasters who care about sustainability, and we provide guidance to our partner farms in their production organization. Here, micro-milling meets new processing techniques to improve quality and flavors. We actively advocate for the environment and the people who work in it.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SUSTAINABILITY",
      content: "At Cafetos, nature is our essence. We cultivate and source coffee with reverence for the terroir, knowing that our practices are not just sustainable but essential for the future. Our commitment to preserve and protect our environment reflects our deep connection with nature, which we hold dear as our identity and legacy.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "INNOVATION",
      content: "Creativity, cutting-edge ideas, and pioneering processes are part of our DNA. We constantly explore new horizons driven by our efficiency and our search for enhanced quality.",
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            About <span className="text-amber-700">Cafetos de Segovia</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            Three generations of coffee excellence from the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Values Sections */}
      {values.map((value, index) => (
        <section key={value.title} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-stone-800 mb-6 text-amber-700">
                  {value.title}
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed">
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

      {/* Gallery Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-stone-800 mb-12 text-center">
            Our <span className="text-amber-700">Story</span> in Pictures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
