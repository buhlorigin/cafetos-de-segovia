
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Four Generations of 
              <span className="text-amber-700"> Coffee Excellence</span>
            </h2>
            
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Cafetos de Segovia has been cultivating exceptional coffee in the 
              mountains of Nueva Segovia, Nicaragua for over four generations. 
              Our family's deep connection to the land and commitment to quality 
              ensures every bean we export meets the highest standards.
            </p>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              From our high-altitude farms to your cup, we maintain complete 
              traceability and control over every step of the process, delivering 
              specialty coffee that tells the story of our heritage and the 
              unique terroir of Northern Nicaragua.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">1,200m+</h3>
                <p className="text-stone-600">Altitude of our farms</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">85+</h3>
                <p className="text-stone-600">Cup score quality</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4896&q=80"
                alt="Coffee beans on wooden plate"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-700 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
