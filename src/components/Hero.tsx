
const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://player.vimeo.com/external/432462130.hd.mp4?s=e6f6b2d4a5e7c8d9a0b1c2d3e4f5g6h7i8j9k0l1&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/1b04df38-679e-4168-bf8e-55f394725790.png" 
            alt="Cafetos de Segovia Logo" 
            className="mx-auto h-32 md:h-40 w-auto"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          CAFETOS DE SEGOVIA is your partner in finding the best Specialty Coffees of the Cordillera de Dipilto and Jalapa, the coveted highlands of Nueva Segovia.
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            At Cafetos de Segovia, we are committed to integrity, transparency, and excellence. 
            From cultivation to export, every stage of our specialty green coffee process is traceable and intentional. 
            The exceptional flavor in every cup reflects our passion for natural process coffees and the purity of the Nicaragua origin. 
            At Cafetos, we offer a product that is not only exceptional coffee in quality but also in authenticity.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/services"
            className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 shadow-lg"
          >
            Our Services
          </a>
          <a 
            href="/farms"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-stone-800 transition-colors duration-200"
          >
            Our Farms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
