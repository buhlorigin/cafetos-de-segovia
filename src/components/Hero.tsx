
const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-coffee">
        {/* Poster / fallback while the video loads */}
        <img src="/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <iframe
          className="absolute inset-0 w-full h-full scale-150 pointer-events-none"
          src="https://www.youtube.com/embed/MkDChW801tU?autoplay=1&mute=1&loop=1&playlist=MkDChW801tU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0&end=0&version=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0&hl=en&color=white&enablejsapi=1"
          title="Coffee farm background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-coffee/55"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="eyebrow !text-amber-300">Specialty Coffee Export · Nicaragua</span>
        <h1 className="text-parchment mb-12 leading-tight">
          Cafetos de Segovia is your partner in finding the best Specialty Coffees in Nueva Segovia
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/services"
            className="bg-cherry text-parchment px-8 py-4 font-medium tracking-wide hover:bg-amber-800 transition-colors duration-200"
          >
            Our Services
          </a>
          <a 
            href="/farms"
            className="border border-parchment text-parchment px-8 py-4 font-medium tracking-wide hover:bg-parchment hover:text-coffee transition-colors duration-200"
          >
            Our Farms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
