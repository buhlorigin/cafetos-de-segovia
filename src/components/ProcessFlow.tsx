
const ProcessFlow = () => {
  const processes = [
    {
      title: "CLASSIFICATION",
      description: "Floating, separating greens leaves and stones.",
      icon: "🌿"
    },
    {
      title: "ELECTRONIC - HAND SORT",
      description: "Electronic and Hand picking to separate non optimal state of ripeness, greens, dried and unripped.",
      icon: "🔍"
    },
    {
      title: "FERMENTATION",
      description: "If its defined for the variety anaerobic fermentation to standardize the profile.",
      icon: "⚗️"
    },
    {
      title: "DRYING",
      description: "Mechanical or greenhouse drying in 3 stages.",
      icon: "☀️"
    },
    {
      title: "QUALITY CONTROL",
      description: "Every Storage Keep unit is cupped to ensure profile and score.",
      icon: "✅"
    },
    {
      title: "WAREHOUSING",
      description: "Coffee is stored at optimal conditions to preserve quality.",
      icon: "🏭",
      highlight: true
    },
    {
      title: "MILLING & PACKING",
      description: "Coffee is milled in house, then vacuum packed in 24kg boxes to facilitate stacking and preserve quality.",
      icon: "📦"
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Process</span>
          </h2>
          <p className="text-xl text-stone-600">
            From farm to export - every step is carefully controlled
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                process.highlight ? 'bg-amber-700 text-white' : 'bg-white'
              }`}
            >
              <div className="text-4xl mb-4">{process.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${process.highlight ? 'text-white' : 'text-stone-800'}`}>
                {process.title}
              </h3>
              <p className={`leading-relaxed ${process.highlight ? 'text-white/90' : 'text-stone-600'}`}>
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
