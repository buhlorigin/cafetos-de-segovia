
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-heritage relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-coffee-gold">Contact</span> Us
          </h1>
          <p className="text-xl text-stone-200 leading-relaxed">
            Ready to source premium Nicaraguan specialty coffee?
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-origin relative">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-coffee-gold">CAFETOS DE SEGOVIA</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-coffee-gold mb-2">Address</h3>
                  <p className="text-stone-200">
                    Km 231 carretera Ocotal-Jalapa<br />
                    Mozonte, Nueva Segovia, Nicaragua
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-coffee-gold mb-2">Phone</h3>
                  <p className="text-stone-200">+505 8733 1928</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-coffee-gold mb-2">General Requests</h3>
                  <a 
                    href="mailto:ana@cafetosdesegovia.com" 
                    className="text-coffee-gold hover:text-white transition-colors"
                  >
                    ana@cafetosdesegovia.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-coffee-gold mb-2">Business Hours</h3>
                  <p className="text-stone-200">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Central Standard Time (CST)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                What We Offer
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-stone-200">Farm visits and origin tours</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-stone-200">Custom sample preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-stone-200">Quality certificates and cup scores</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-stone-200">Complete traceability documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-stone-200">Export logistics support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-coffee-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-stone-200">Long-term partnership development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-heritage relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-stone-200 mb-8">
            Let's discuss how Cafetos de Segovia can meet your specialty coffee needs
          </p>
          <a 
            href="mailto:ana@cafetosdesegovia.com"
            className="bg-coffee-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-coffee-cherry transition-colors duration-200 shadow-lg inline-block"
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
