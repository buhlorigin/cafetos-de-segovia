
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Farms = () => {
  const farms = [
    {
      name: "Finca Bethania",
      description: "High-altitude farm in Dipilto managed by the family, producing natural processed coffees with consistent Cup of Excellence level quality.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: {
        location: "Dipilto, Nueva Segovia",
        altitude: "1,350-1,500m",
        varieties: "Caturra, Bourbon, Pacamara",
        processing: "Natural, Washed"
      }
    },
    {
      name: "Finca Las Hortensias",
      description: "Located in Buenos Aires, Dipilto, at 1,250–1,450 m with constant breezes and morning mist. A small 10-hectare farm passed through generations, known for its floral surroundings and expressive lots. It's a finalist of the Nicaragua Cup of Excellence multiple times. Here, tradition inspires innovation: they use careful fermentation, natural shade and biodiversity, creating lots that reflect both patience and purpose.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: {
        location: "Buenos Aires, Dipilto",
        altitude: "1,250-1,450m",
        varieties: "Geisha, Pacamara, Bourbon",
        processing: "Natural, Honey, Experimental"
      }
    }
  ];

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
      {farms.map((farm, index) => (
        <section key={farm.name} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
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
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

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
