
const ContactSection = () => {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-8">
          Ready to <span className="text-amber-700">Connect?</span>
        </h2>
        <p className="text-2xl text-stone-600 mb-12">
          Partner with us for premium Nicaraguan specialty coffee
        </p>
        
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-stone-800 mb-6">Get In Touch</h3>
              <div className="space-y-3 text-xl text-stone-600">
                <p>ana@cafetosdesegovia.com</p>
                <p>+505 8733 1928</p>
                <p>Nueva Segovia, Nicaragua</p>
              </div>
            </div>
            
            <div>
              <a 
                href="/contact"
                className="inline-block bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
