
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
          <source src="https://drive.google.com/uc?export=download&id=1FYy8hsUXmgMdUfpz8cZX2y4l2KDDHs6h" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Cafetos de Segovia is your partner in finding the best Specialty Coffees of the Cordillera de Dipilto and Jalapa, the coveted highlands of Nueva Segovia.
        </h1>
        
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
