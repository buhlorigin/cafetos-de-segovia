
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProcessFlow from '../components/ProcessFlow';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-heritage relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-coffee-gold">Services</span>
          </h1>
          <p className="text-2xl text-stone-200 leading-relaxed font-medium">
            Cafetos de Segovia is your partner in finding the best Specialty Coffees of the Cordillera de Dipilto and Jalapa, the coveted highlands of Nueva Segovia.
          </p>
        </div>
      </section>

      {/* Coffee Producers Section */}
      <section className="py-24 bg-gradient-origin relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                <span className="text-coffee-gold">Coffee</span> Producers
              </h2>
              <p className="text-xl text-stone-200 leading-relaxed mb-8">
                Cafetos de Segovia is a committed long-term partner of coffee producers in the region. We provide year-round guidance on state-of-the-art farm management from planting to harvest.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-coffee-gold mb-3 text-lg">Produce</h3>
                  <p className="text-stone-200">Farm management and cultivation guidance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-coffee-gold mb-3 text-lg">Milling</h3>
                  <p className="text-stone-200">Dry mill processing services</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-coffee-gold mb-3 text-lg">Quality Control</h3>
                  <p className="text-stone-200">Comprehensive quality assurance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-coffee-gold mb-3 text-lg">Export</h3>
                  <p className="text-stone-200">Global logistics and shipping</p>
                </div>
              </div>
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

      {/* Customer Section */}
      <section className="py-24 bg-gradient-heritage relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee cupping and quality control"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                <span className="text-coffee-gold">Customer</span> Services
              </h2>
              <p className="text-xl text-stone-200 leading-relaxed mb-8">
                For our customers, Cafetos de Segovia's services range from coffee selection and farm inspections to cupping, quality control, and export logistics. We arrange farm visits and accompany you in Nicaragua to ensure the quality you expect arrives at your port.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-stone-200">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mr-4"></div>
                  <span className="text-lg">Coffee selection and sourcing</span>
                </li>
                <li className="flex items-center text-stone-200">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mr-4"></div>
                  <span className="text-lg">Farm inspections and visits</span>
                </li>
                <li className="flex items-center text-stone-200">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mr-4"></div>
                  <span className="text-lg">Professional cupping services</span>
                </li>
                <li className="flex items-center text-stone-200">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mr-4"></div>
                  <span className="text-lg">Export logistics and documentation</span>
                </li>
              </ul>
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
