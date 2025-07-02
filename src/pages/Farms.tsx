
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Farms = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({ bethania: 0, hortensias: 0 });

  const farms = [
    {
      name: "Finca Bethania",
      description: "Nestled in the high-altitude mountains of Dipilto, Finca Bethania represents three generations of coffee excellence. This family-managed farm spans 25 hectares of pristine mountainous terrain, where traditional farming methods meet innovative processing techniques. The farm's unique microclimate, characterized by cool nights and warm days, creates the perfect conditions for slow cherry maturation, resulting in complex and refined flavor profiles. Bethania has consistently produced Cup of Excellence level quality coffees, with several lots scoring above 85 points. The farm's commitment to sustainability includes maintaining native shade trees, implementing water conservation systems, and supporting local wildlife habitats.",
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
      name: "Rainforest Alliance",
      logo: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Fair Trade",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Buenas Prácticas Agrícolas",
      logo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Organic Certification",
      logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Farms</span>
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Exceptional terroir in the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Farms Section */}
      {farms.map((farm, farmIndex) => (
        <section key={farm.name} className={`py-16 ${farmIndex % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${farmIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={farmIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl font-bold text-stone-800 mb-6">
                  <span className="text-amber-700">{farm.name}</span>
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  {farm.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-stone-700 mb-1">Location</h4>
                    <p className="text-stone-600">{farm.details.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-700 mb-1">Altitude</h4>
                    <p className="text-stone-600">{farm.details.altitude}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-700 mb-1">Varieties</h4>
                    <p className="text-stone-600">{farm.details.varieties}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-700 mb-1">Processing</h4>
                    <p className="text-stone-600">{farm.details.processing}</p>
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
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Our <span className="text-amber-700">Certifications</span>
            </h2>
            <p className="text-xl text-stone-600">
              Committed to sustainable and ethical coffee production
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-20 h-20 object-contain mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-stone-800 text-sm">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Request Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Request <span className="text-amber-700">Samples</span>
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Experience the exceptional quality of our farm-specific lots
          </p>
          <a 
            href="/contact"
            className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 shadow-lg inline-block"
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
