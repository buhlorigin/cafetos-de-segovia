
const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Cafetos de Segovia</h3>
            <p className="text-stone-300 mb-4">
              Premium specialty coffee exporter from Nueva Segovia, Nicaragua. 
              Four generations of coffee excellence.
            </p>
            <p className="text-stone-400 text-sm">
              © 2024 Cafetos de Segovia. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#farms" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Farms & Traceability
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-stone-300">
              <p>Nueva Segovia, Nicaragua</p>
              <p>export@cafetosdesegovia.com</p>
              <p>+505 2345 6789</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-stone-400">
            Crafted with passion in the mountains of Nueva Segovia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
