
const Farms = () => {
  const farms = [
    {
      name: "Finca El Mirador",
      altitude: "1,350m",
      varieties: "Caturra, Bourbon",
      processing: "Washed, Natural",
      description: "Our flagship farm with panoramic views of the Nueva Segovia mountains."
    },
    {
      name: "Finca Las Nubes",
      altitude: "1,280m",
      varieties: "Pacamara, Maragogipe",
      processing: "Honey, Natural",
      description: "Known for its exceptional microclimates and unique flavor profiles."
    },
    {
      name: "Finca Vista Verde",
      altitude: "1,400m",
      varieties: "Geisha, SL28",
      processing: "Washed, Experimental",
      description: "Our highest altitude farm, producing our most exclusive lots."
    }
  ];

  return (
    <section id="farms" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Farms</span> & Traceability
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Each of our farms has its own unique characteristics, contributing to 
            the diverse flavor profiles in our coffee portfolio.
          </p>
        </div>

        {/* Hero Farm Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80"
            alt="Coffee farms in Nicaragua mountains"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farms.map((farm, index) => (
            <div key={index} className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                {farm.name}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {farm.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-700">Altitude:</span>
                  <span className="text-amber-700 font-semibold">{farm.altitude}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-700">Varieties:</span>
                  <span className="text-stone-600">{farm.varieties}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-700">Processing:</span>
                  <span className="text-stone-600">{farm.processing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-stone-800 mb-4">
            Complete Traceability
          </h3>
          <p className="text-lg text-stone-600 mb-6 max-w-3xl mx-auto">
            Every lot we export comes with detailed traceability information, 
            including farm origin, processing method, quality scores, and harvest details.
          </p>
          <a 
            href="#contact"
            className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 inline-block"
          >
            Request Sample & Spec Sheet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Farms;
