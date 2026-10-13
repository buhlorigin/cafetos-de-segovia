
const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-stone-900 to-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founders Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/0a3f2e9d-2fc6-431e-9ea7-ceb91791f712.png"
                alt="The Albir Family - Three Generations at Cafetos de Segovia"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-full opacity-20"></div>
          </div>

          {/* Quote Section */}
          <div className="relative">
            <div className="absolute top-0 left-0 text-8xl text-amber-500/20 font-serif leading-none">"</div>
            <blockquote className="relative z-10 pl-12">
              <p className="text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8">
                At Cafetos de Segovia, we are committed to integrity, transparency, and excellence. 
                From cultivation to export, every stage of our specialty green coffee process is traceable and intentional. 
                The exceptional flavor in every cup reflects our passion for natural process coffees and the purity of the Nicaragua origin.
              </p>
              <footer className="text-amber-400">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-amber-400"></div>
                  <cite className="text-xl font-semibold not-italic">Martha & Ana Albir</cite>
                </div>
                <p className="text-stone-300 mt-2 text-lg">Founders, Cafetos de Segovia</p>
              </footer>
            </blockquote>
            <div className="absolute bottom-0 right-0 text-8xl text-amber-500/20 font-serif leading-none rotate-180">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
