
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProcessFlow from '../components/ProcessFlow';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Services</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            CAFETOS DE SEGOVIA is your partner in finding the best Specialty Coffees of the Cordillera de Dipilto and Jalapa, the coveted highlands of Nueva Segovia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-stone-600">
            <p className="text-xl leading-relaxed mb-8">
              CAFETOS DE SEGOVIA is a committed long-term partner of coffee producers in the region with whom we cooperate closely year-round. We provide guidance on state-of-the-art farm management from planting to harvest to ensure optimal maturation. This becomes crucial when building long-term relationships with producers.
            </p>
            <p className="text-xl leading-relaxed mb-12">
              Our services to producers also include dry mill processing, sales, and export services.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Producers Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">
                <span className="text-amber-700">COFFEE</span> PRODUCERS
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                For our customers, CAFETOS DE SEGOVIA's services range from coffee selection, farm inspections, cupping, quality control, to export logistics. We arrange farm visits and are happy to accompany you while in Nicaragua. Once you find the right coffee, it's our job to ensure the quality you expect arrives at your port.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee producers working on farm"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      <Footer />
    </div>
  );
};

export default Services;
