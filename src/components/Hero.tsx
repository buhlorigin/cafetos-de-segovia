
const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 leading-tight">
          Premium Coffee
          <br />
          <span className="text-amber-700">From Nicaragua</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Family-owned specialty coffee exporter from the mountains of Nueva Segovia, 
          bringing you traceable, high-quality beans from our heritage farms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#services"
            className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 shadow-lg"
          >
            Our Services
          </a>
          <a 
            href="#farms"
            className="border-2 border-stone-700 text-stone-700 px-8 py-4 rounded-lg font-semibold hover:bg-stone-700 hover:text-white transition-colors duration-200"
          >
            Explore Our Farms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
