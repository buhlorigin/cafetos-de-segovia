
const Services = () => {
  const services = [
    {
      title: "Specialty Coffee Export",
      description: "Direct export of premium specialty coffee beans to roasters and distributors worldwide, with complete quality control and documentation.",
      features: ["Quality certifications", "Custom packaging", "Flexible shipping terms"]
    },
    {
      title: "Farm Traceability",
      description: "Complete transparency from farm to export, providing detailed information about origin, processing methods, and quality scores.",
      features: ["Lot tracking", "Processing details", "Quality reports"]
    },
    {
      title: "Custom Processing",
      description: "Tailored processing methods including washed, natural, and honey processes to meet specific buyer requirements.",
      features: ["Multiple processing options", "Quality consistency", "Custom profiles"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Services</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We offer comprehensive coffee export services, ensuring quality and 
            traceability from our farms to your facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                {service.title}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-stone-600">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
