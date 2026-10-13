
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            <span className="text-amber-700">Contact</span> Us
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Ready to source premium Nicaraguan specialty coffee?
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-stone-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-8">
                <span className="text-amber-700">CAFETOS DE SEGOVIA</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">Address</h3>
                  <p className="text-stone-600">
                    Km 231 carretera Ocotal-Jalapa<br />
                    Mozonte, Nueva Segovia, Nicaragua
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">Phone</h3>
                  <p className="text-stone-600">+505 8733 1928</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">General Requests</h3>
                  <a 
                    href="mailto:ana@cafetosdesegovia.com" 
                    className="text-amber-700 hover:text-amber-800 transition-colors block"
                  >
                    ana@cafetosdesegovia.com
                  </a>
                  <a 
                    href="mailto:martha@cafetosdesegovia.com" 
                    className="text-amber-700 hover:text-amber-800 transition-colors block"
                  >
                    martha@cafetosdesegovia.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">Business Hours</h3>
                  <p className="text-stone-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Central Standard Time (CST)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">
                What We Offer
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-stone-600">Farm visits and origin tours</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-stone-600">Custom sample preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-stone-600">Quality certificates and cup scores</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-stone-600">Complete traceability documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-stone-600">Export logistics support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-stone-600">Long-term partnership development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visit our dry mill */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Visit our dry mill</h2>
            <p className="text-xl text-stone-600">Cafetos de Segovia, Beneficio Seco</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=JGWW%2B4FJ+Ramamesa+Nicaragua&output=embed"
                title="Cafetos de Segovia dry mill location"
                className="w-full h-[300px] md:h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-800 mb-3">Cafetos de Segovia, Beneficio Seco</h3>
              <p className="text-stone-600 mb-8">JGWW+4FJ, Ramamesa, Nueva Segovia, Nicaragua</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=CAFETOS+DE+SEGOVIA+JGWW%2B4FJ+Ramamesa+Nicaragua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Cafetos de Segovia can meet your specialty coffee needs
          </p>
          <a 
            href="mailto:ana@cafetosdesegovia.com"
            className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200 shadow-lg inline-block"
          >
            Send Us an Email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
