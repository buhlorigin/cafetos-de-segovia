
const WorldMap = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Global</span> Markets
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Cafetos de Segovia exports premium specialty coffee to discerning roasters and importers worldwide.
          </p>
        </div>

        <div className="relative">
          <img 
            src="/lovable-uploads/469ffa63-ee01-4319-a7d9-8a0e70f2c73a.png" 
            alt="Our Current Markets - World Map" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">USA</h3>
              <p className="text-stone-600 text-sm">Premium roasters</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">Europe</h3>
              <p className="text-stone-600 text-sm">Specialty importers</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">South Korea</h3>
              <p className="text-stone-600 text-sm">Third wave coffee</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">Australia</h3>
              <p className="text-stone-600 text-sm">Boutique roasters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
