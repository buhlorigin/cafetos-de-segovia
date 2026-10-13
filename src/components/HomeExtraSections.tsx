import { ShieldCheck, Lightbulb, Route, BadgeCheck } from 'lucide-react';

const HomeExtraSections = () => {
  const pillars = [
    { icon: ShieldCheck, title: "Food Safety", text: "Placeholder: strict hygiene and handling standards at every stage." },
    { icon: Lightbulb, title: "Innovation", text: "Placeholder: new processing methods that bring out unique flavors." },
    { icon: Route, title: "Traceability", text: "Placeholder: every lot tracked from farm to export container." },
    { icon: BadgeCheck, title: "HACCP Certified", text: "Placeholder: our beneficio follows HACCP food safety principles." },
  ];

  return (
    <>
      {/* Our Beneficio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="/lovable-uploads/2fb707ad-4139-4528-9715-3a9f2960ad90.png"
              alt="Our beneficio (dry mill) in Nueva Segovia"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">
                Our <span className="text-amber-700">Beneficio</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                Placeholder text: our dry mill is located in Nueva Segovia, in the heart of Nicaragua's coffee highlands.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                Being close to our farms means cherries and parchment arrive fresh, and the region's dry, sunny climate is ideal for slow, even drying.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Here we handle drying, milling, sorting and export preparation, so every lot leaves ready for its destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coffee */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-800 mb-12 text-center">
            Our <span className="text-amber-700">Coffee</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Green Export Coffee (Café Oro)</h3>
              <p className="text-stone-600 leading-relaxed">
                Export-ready green coffee, milled and sorted at our beneficio.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Processed Lots</h3>
              <ul className="space-y-2">
                {["Natural", "Honey", "Washed", "Experimental"].map((p) => (
                  <li key={p} className="flex items-center text-stone-600">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Food Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-800 mb-12 text-center">
            Quality & <span className="text-amber-700">Food Safety</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{title}</h3>
                <p className="text-stone-600">{text}</p>
                {title === "HACCP Certified" && (
                  <div className="mt-4 mx-auto w-28 h-28 border-2 border-dashed border-amber-300 rounded-full flex items-center justify-center text-xs text-stone-500">
                    HACCP badge
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeExtraSections;
