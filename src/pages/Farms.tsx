
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedMapbox from '../components/EnhancedMapbox';

const Farms = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({ bethania: 0, hortensias: 0 });
  const [bethaniaImageIndex, setBethaniaImageIndex] = useState(0);
  const [hortensiaImageIndex, setHortensiaImageIndex] = useState(0);

  const farms = [
    {
      name: "Finca Bethania",
      description: "Nestled in the high-altitude mountains of Dipilto, Finca Bethania represents three generations of coffee excellence. This family-managed farm spans 25 hectares of pristine mountainous terrain, where traditional farming methods meet innovative processing techniques. The farm's unique microclimate creates perfect conditions for slow cherry maturation, resulting in complex flavor profiles. Bethania consistently produces Cup of Excellence level quality coffees, with several lots scoring above 85 points.",
      images: [
        "/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png",
        "/lovable-uploads/61079dbc-cb5a-4ea7-ba8c-a3386a5c6671.png",
        "/lovable-uploads/ad277da2-06aa-4822-8f6b-4cf494471a2e.png",
        "/lovable-uploads/52010541-91f5-494c-909b-02fc63d9e224.png",
        "/lovable-uploads/2fb707ad-4139-4528-9715-3a9f2960ad90.png"
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
        "/lovable-uploads/2b6cfe6f-9101-406b-9e51-7a0c2a273fff.png",
        "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png",
        "/lovable-uploads/376c0056-37ee-48ff-aa28-93b13e5bf4f2.png",
        "/lovable-uploads/ed78fb31-f8e1-405d-8294-7a05021c5bd0.png",
        "/lovable-uploads/7c02df0f-01a0-4c8f-a12c-dcbc5c934000.png"
      ],
      details: {
        location: "Buenos Aires, Dipilto",
        altitude: "1,250-1,450m",
        varieties: "Geisha, Red & Yellow Catuai, Maracaturra, Bourbon",
        processing: "Natural, Washed, Honey, Experimental"
      }
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

  // Auto-change background images for Finca Bethania every 3 seconds
  useEffect(() => {
    const bethaniaInterval = setInterval(() => {
      setBethaniaImageIndex(prev => 
        prev === farms[0].images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    const hortensiaInterval = setInterval(() => {
      setHortensiaImageIndex(prev => 
        prev === farms[1].images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => {
      clearInterval(bethaniaInterval);
      clearInterval(hortensiaInterval);
    };
  }, [farms]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            Our <span className="text-amber-700">Farms</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            Exceptional terroir in the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Farms Section */}
      {farms.map((farm, farmIndex) => (
        <div key={`wrap-${farm.name}`}>
        {farmIndex === 1 && (
          <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <svg className="w-12 h-12 text-amber-700 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.17 17c-1.93 0-3.5-1.57-3.5-3.5 0-3.5 2.5-6.5 6-7.5l.5 1.5c-2.5.83-4 2.5-4 4.5h1c1.93 0 3.5 1.57 3.5 3.5S9.1 17 7.17 17zm9.66 0c-1.93 0-3.5-1.57-3.5-3.5 0-3.5 2.5-6.5 6-7.5l.5 1.5c-2.5.83-4 2.5-4 4.5h1c1.93 0 3.5 1.57 3.5 3.5s-1.57 1.5-3.5 1.5z"/>
              </svg>
              <p className="text-2xl md:text-3xl font-serif italic text-stone-700 leading-relaxed">
                We value sustainability, innovation, and the people who make every harvest possible.
              </p>
              <div className="mt-6 w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
            </div>
          </section>
        )}
        {(
        farmIndex === 0 ? (
          // Special layout for Finca Bethania with background slideshow
          <section key={farm.name} className="relative min-h-screen">
            {/* Background Images with Auto-slideshow */}
            <div className="absolute inset-0">
              {farm.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imageIndex === bethaniaImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${farm.name} - Image ${imageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
                  
                  {/* Text Content with Blurred Background */}
                  <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      <span className="text-amber-300">{farm.name}</span>
                    </h2>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                      {farm.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Location</h4>
                        <p className="text-white/90">{farm.details.location}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Altitude</h4>
                        <p className="text-white/90">{farm.details.altitude}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Varieties</h4>
                        <p className="text-white/90">{farm.details.varieties}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Processing</h4>
                        <p className="text-white/90">{farm.details.processing}</p>
                      </div>
                    </div>

                    {/* Image indicators */}
                    <div className="flex justify-center space-x-3">
                      {farm.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={() => setBethaniaImageIndex(imageIndex)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            bethaniaImageIndex === imageIndex 
                              ? 'bg-amber-300 scale-125' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right side - let the image show through */}
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Special layout for Finca Las Hortensias with background slideshow
          <section key={farm.name} className="relative min-h-screen">
            {/* Background Images with Auto-slideshow */}
            <div className="absolute inset-0">
              {farm.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imageIndex === hortensiaImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${farm.name} - Image ${imageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
                  
                  {/* Empty left side - let the image show through */}
                  <div className="hidden lg:block"></div>

                  {/* Text Content with Blurred Background - positioned on the right */}
                  <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      <span className="text-amber-300">{farm.name}</span>
                    </h2>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                      {farm.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Location</h4>
                        <p className="text-white/90">{farm.details.location}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Altitude</h4>
                        <p className="text-white/90">{farm.details.altitude}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Varieties</h4>
                        <p className="text-white/90">{farm.details.varieties}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-amber-300 mb-1">Processing</h4>
                        <p className="text-white/90">{farm.details.processing}</p>
                      </div>
                    </div>

                    {/* Image indicators */}
                    <div className="flex justify-center space-x-3">
                      {farm.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={() => setHortensiaImageIndex(imageIndex)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            hortensiaImageIndex === imageIndex 
                              ? 'bg-amber-300 scale-125' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        )}


        </div>
      ))}



      
      {/* Farm Locations Map */}
      <EnhancedMapbox />

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
