
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedMapbox from '../components/EnhancedMapbox';

const Farms = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({ bethania: 0, hortensias: 0 });

  const farms = [
    {
      name: "Finca Bethania",
      description: "Nestled in the high-altitude mountains of Dipilto, Finca Bethania represents three generations of coffee excellence. This family-managed farm spans 25 hectares of pristine mountainous terrain, where traditional farming methods meet innovative processing techniques. The farm's unique microclimate creates perfect conditions for slow cherry maturation, resulting in complex flavor profiles. Bethania consistently produces Cup of Excellence level quality coffees, with several lots scoring above 85 points.",
      images: [
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      details: {
        location: "Dipilto, Nueva Segovia",
        altitude: "1,350-1,500m",
        varieties: "Red & Yellow Catuai, Maracaturra, Java, Caturra, Bourbon",
        processing: "Natural, Washed, Experimental"
      }
    },
    {
      name: "Finca Las Hortensias",
      description: "Located in Buenos Aires, Dipilto, at 1,250–1,450 m with constant breezes and morning mist. A small 10-hectare farm passed through generations, known for its floral surroundings and expressive lots. It's a finalist of the Nicaragua Cup of Excellence multiple times. Here, tradition inspires innovation: they use careful fermentation, natural shade and biodiversity, creating lots that reflect both patience and purpose.",
      images: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      details: {
        location: "Buenos Aires, Dipilto",
        altitude: "1,250-1,450m",
        varieties: "Geisha, Red & Yellow Catuai, Maracaturra, Bourbon",
        processing: "Natural, Washed, Honey, Experimental"
      }
    }
  ];

  const certifications = [
    {
      name: "Fair Trade",
      logo: "/lovable-uploads/b4b923b8-b0f0-464f-a514-946bc07b2715.png"
    },
    {
      name: "Rainforest Alliance",
      logo: "/lovable-uploads/d84c8f7a-07b2-4e44-9862-7e4a76628d99.png"
    },
    {
      name: "EU Organic",
      logo: "/lovable-uploads/9b9aa40d-3262-495f-b99b-9fad968a74b3.png"
    }
  ];

  const handleImageScroll = (farmIndex: number, direction: 'prev' | 'next') => {
    const farmKey = farmIndex === 0 ? 'bethania' : 'hortensias';
    const currentIndex = activeImageIndex[farmKey];
    const maxIndex = farms[farmIndex].images.length - 1;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    }
    
    setActiveImageIndex(prev => ({ ...prev, [farmKey]: newIndex }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-heritage relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-coffee-gold">Farms</span>
          </h1>
          <p className="text-2xl text-stone-200 leading-relaxed font-medium">
            Exceptional terroir in the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Farms Section */}
      {farms.map((farm, farmIndex) => (
        <section key={farm.name} className={`py-24 ${farmIndex % 2 === 0 ? 'bg-gradient-origin' : 'bg-gradient-heritage'} relative`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${farmIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={farmIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl font-bold text-white mb-8">
                  <span className="text-coffee-gold">{farm.name}</span>
                </h2>
                <p className="text-xl text-stone-200 leading-relaxed mb-8">
                  {farm.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-semibold text-coffee-gold mb-2">Location</h4>
                    <p className="text-stone-200">{farm.details.location}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-semibold text-coffee-gold mb-2">Altitude</h4>
                    <p className="text-stone-200">{farm.details.altitude}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-semibold text-coffee-gold mb-2">Varieties</h4>
                    <p className="text-stone-200">{farm.details.varieties}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-semibold text-coffee-gold mb-2">Processing</h4>
                    <p className="text-stone-200">{farm.details.processing}</p>
                  </div>
                </div>
              </div>
              
              {/* Instagram-style Photo Gallery */}
              <div className={farmIndex % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <div 
                      className="flex transition-transform duration-300 ease-out"
                      style={{ 
                        transform: `translateX(-${activeImageIndex[farmIndex === 0 ? 'bethania' : 'hortensias'] * 80}%)`,
                        width: `${farm.images.length * 100}%`
                      }}
                    >
                      {farm.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="w-full flex-shrink-0 relative" style={{ width: '80%' }}>
                          <img
                            src={image}
                            alt={`${farm.name} - Image ${imageIndex + 1}`}
                            className="w-full h-96 object-cover"
                          />
                          {imageIndex < farm.images.length - 1 && (
                            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-black/20"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={() => handleImageScroll(farmIndex, 'prev')}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-stone-700" />
                  </button>
                  <button
                    onClick={() => handleImageScroll(farmIndex, 'next')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-stone-700" />
                  </button>
                  
                  {/* Image indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {farm.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() => setActiveImageIndex(prev => ({ 
                          ...prev, 
                          [farmIndex === 0 ? 'bethania' : 'hortensias']: imageIndex 
                        }))}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          activeImageIndex[farmIndex === 0 ? 'bethania' : 'hortensias'] === imageIndex 
                            ? 'bg-amber-700 scale-125' 
                            : 'bg-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Certifications Section */}
      <section className="py-24 bg-gradient-origin relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-coffee-gold">Certifications</span>
            </h2>
            <p className="text-xl text-stone-200">
              Committed to sustainable and ethical coffee production
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center transform hover:scale-105">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-32 h-32 object-contain mx-auto mb-6"
                />
                <h3 className="font-bold text-white text-lg">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Farm Locations Map */}
      <EnhancedMapbox />

      {/* Sample Request Section */}
      <section className="py-24 bg-gradient-heritage relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Request <span className="text-coffee-gold">Samples</span>
          </h2>
          <p className="text-xl text-stone-200 mb-8">
            Experience the exceptional quality of our farm-specific lots
          </p>
          <a 
            href="/contact"
            className="bg-coffee-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-coffee-cherry transition-colors duration-200 shadow-lg inline-block"
          >
            Request Samples & Spec Sheets
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Farms;
