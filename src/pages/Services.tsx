
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
            Cafetos de Segovia is your partner in finding the best Specialty Coffees of the Cordillera de Dipilto and Jalapa, the coveted highlands of Nueva Segovia.
          </p>
        </div>
      </section>

      {/* Coffee Producers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">
                <span className="text-amber-700">Coffee</span> Producers
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Cafetos de Segovia is a committed long-term partner of coffee producers in the region. We provide year-round guidance on state-of-the-art farm management from planting to harvest.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-amber-700 mb-2">Produce</h3>
                  <p className="text-sm text-stone-600">Farm management and cultivation guidance</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-amber-700 mb-2">Milling</h3>
                  <p className="text-sm text-stone-600">Dry mill processing services</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-amber-700 mb-2">Quality Control</h3>
                  <p className="text-sm text-stone-600">Comprehensive quality assurance</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-amber-700 mb-2">Export</h3>
                  <p className="text-sm text-stone-600">Global logistics and shipping</p>
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
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee cupping and quality control"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">
                <span className="text-amber-700">Customer</span> Services
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                For our customers, Cafetos de Segovia's services range from coffee selection and farm inspections to cupping, quality control, and export logistics. We arrange farm visits and accompany you in Nicaragua to ensure the quality you expect arrives at your port.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-stone-600">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Coffee selection and sourcing
                </li>
                <li className="flex items-center text-stone-600">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Farm inspections and visits
                </li>
                <li className="flex items-center text-stone-600">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Professional cupping services
                </li>
                <li className="flex items-center text-stone-600">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Export logistics and documentation
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
