
const WorldMap = () => {
  const countries = ["USA", "UK", "Europe", "China", "Southeast Asia", "Australia"];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-8">
            Our <span className="text-amber-700">Global</span> Markets
          </h2>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto">
            Cafetos de Segovia exports premium specialty coffee to discerning roasters and importers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {countries.map((country) => (
            <div key={country} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-stone-800">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
