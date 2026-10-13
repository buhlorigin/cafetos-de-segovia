import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedMapbox from '../components/EnhancedMapbox';

type Farm = {
  name: string;
  description: string;
  images: string[];
  details: { location: string; altitude: string; varieties: string; processing: string; difference: string };
};

const placeholderText = "Placeholder text: a family-run farm in the highlands of Nueva Segovia, dedicated to specialty coffee with careful harvesting and processing. Full story coming soon.";
const placeholderDiff = "Placeholder: what makes this farm unique will be added soon.";

const farms: Farm[] = [
  {
    name: "Finca Bethania",
    description: "Nestled in the high-altitude mountains of Dipilto, Finca Bethania represents three generations of coffee excellence. This family-managed farm spans 25 hectares of pristine mountainous terrain, where traditional farming methods meet innovative processing techniques. The farm's unique microclimate creates perfect conditions for slow cherry maturation, resulting in complex flavor profiles. Bethania consistently produces Cup of Excellence level quality coffees, with several lots scoring above 85 points.",
    images: [
      "/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png",
      "/lovable-uploads/61079dbc-cb5a-4ea7-ba8c-a3386a5c6671.png",
      "/lovable-uploads/ad277da2-06aa-4822-8f6b-4cf494471a2e.png",
      "/lovable-uploads/52010541-91f5-494c-909b-02fc63d9e224.png",
      "/lovable-uploads/2fb707ad-4139-4528-9715-3a9f2960ad90.png"
    ],
    details: {
      location: "Dipilto, Nueva Segovia",
      altitude: "1,350-1,500m",
      varieties: "Red & Yellow Catuai, Maracaturra, Java, Caturra, Bourbon",
      processing: "Natural, Washed, Experimental",
      difference: ""
    }
  },
  {
    name: "Finca Las Hortensias",
    description: "Located in Buenos Aires, Dipilto, at 1,250–1,450 m with constant breezes and morning mist. A small 10-hectare farm passed through generations, known for its floral surroundings and expressive lots. It's a finalist of the Nicaragua Cup of Excellence multiple times. Here, tradition inspires innovation: they use careful fermentation, natural shade and biodiversity, creating lots that reflect both patience and purpose.",
    images: [
      "/lovable-uploads/2b6cfe6f-9101-406b-9e51-7a0c2a273fff.png",
      "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png",
      "/lovable-uploads/376c0056-37ee-48ff-aa28-93b13e5bf4f2.png",
      "/lovable-uploads/ed78fb31-f8e1-405d-8294-7a05021c5bd0.png",
      "/lovable-uploads/7c02df0f-01a0-4c8f-a12c-dcbc5c934000.png"
    ],
    details: {
      location: "Buenos Aires, Dipilto",
      altitude: "1,250-1,450m",
      varieties: "Geisha, Red & Yellow Catuai, Maracaturra, Bourbon",
      processing: "Natural, Washed, Honey, Experimental",
      difference: ""
    }
  },
  ...[
    { name: "Finca Los Milagros", image: "/lovable-uploads/61079dbc-cb5a-4ea7-ba8c-a3386a5c6671.png", altitude: "To be confirmed" },
    { name: "Finca Agua Sarca", image: "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png", altitude: "1,150-1,400m" },
    { name: "Finca El Ciprés", image: "/lovable-uploads/ad277da2-06aa-4822-8f6b-4cf494471a2e.png", altitude: "To be confirmed" },
    { name: "Finca Mirjam", image: "/lovable-uploads/376c0056-37ee-48ff-aa28-93b13e5bf4f2.png", altitude: "1,200-1,350m" },
    { name: "Finca La Picona", image: "/lovable-uploads/52010541-91f5-494c-909b-02fc63d9e224.png", altitude: "1,250-1,400m" },
  ].map((f) => ({
    name: f.name,
    description: placeholderText,
    images: [f.image],
    details: {
      location: "Nueva Segovia (to be confirmed)",
      altitude: f.altitude,
      varieties: "To be confirmed",
      processing: "To be confirmed",
      difference: placeholderDiff,
    },
  })),
];

const pad = (n: number) => String(n).padStart(2, '0');

const Farms = () => {
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState(0);
  const sliderRef = useRef<HTMLElement>(null);
  const touchX = useRef<number | null>(null);
  const total = farms.length;

  const go = (i: number) => { setActive((i + total) % total); setPhoto(0); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') go(active + 1);
      if (e.key === 'ArrowLeft') go(active - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const jumpTo = (i: number) => {
    go(i);
    sliderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            Our <span className="text-amber-700">Farms</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            Exceptional terroir in the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow">Overview</span>
          <h2 className="text-4xl md:text-5xl text-stone-800 mb-10">Our Farms at a glance</h2>
          <ul className="border-t border-stone-300">
            {farms.map((farm, i) => (
              <li key={farm.name}>
                <button
                  onClick={() => jumpTo(i)}
                  className={`w-full grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1.5fr_1.5fr_1fr] gap-x-4 gap-y-1 items-baseline text-left py-5 border-b border-stone-300 transition-colors hover:bg-stone-100 px-2 ${active === i ? 'bg-stone-100' : ''}`}
                >
                  <span className="text-sm tracking-widest text-amber-700">{pad(i + 1)}</span>
                  <span className="font-serif text-2xl text-stone-800">{farm.name}</span>
                  <span className="col-start-2 md:col-start-auto text-stone-600">{farm.details.location}</span>
                  <span className="col-start-2 md:col-start-auto text-stone-600 md:text-right">{farm.details.altitude}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-stone-700 leading-relaxed">
            We value sustainability, innovation, and the people who make every harvest possible.
          </p>
          <div className="mt-6 w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
      </section>

      {/* Farm slideshow */}
      <section ref={sliderRef} className="py-20 bg-white scroll-mt-20" aria-roledescription="carousel" aria-label="Our farms">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 border-b border-stone-300 pb-4">
            {farms.map((farm, i) => (
              <button
                key={farm.name}
                onClick={() => go(i)}
                aria-current={active === i}
                className={`text-sm md:text-base pb-1 border-b-2 transition-colors ${active === i ? 'border-amber-700 text-stone-800' : 'border-transparent text-stone-600 hover:text-stone-800'}`}
              >
                {farm.name.replace('Finca ', '')}
              </button>
            ))}
          </div>

          <div
            className="relative"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
              touchX.current = null;
            }}
          >
            {farms.map((farm, i) => {
              const photoLeft = i % 2 === 0;
              const isActive = i === active;
              return (
                <div
                  key={farm.name}
                  aria-hidden={!isActive}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-opacity duration-700 ${isActive ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
                >
                  <div className={`relative ${photoLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                      <img src={farm.images[isActive ? photo % farm.images.length : 0]} alt={farm.name} className="w-full h-full object-cover" />
                    </div>
                    {farm.images.length > 1 && (
                      <div className="flex gap-2 mt-3">
                        {farm.images.map((_, p) => (
                          <button key={p} onClick={() => setPhoto(p)} aria-label={`Photo ${p + 1}`}
                            className={`h-1.5 flex-1 transition-colors ${p === photo ? 'bg-amber-700' : 'bg-stone-300 hover:bg-stone-400'}`} />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={photoLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <span className="eyebrow">Farm {pad(i + 1)} / {pad(total)}</span>
                    <h2 className="text-4xl md:text-5xl text-stone-800 mb-6">{farm.name}</h2>
                    <p className="text-stone-600 leading-relaxed mb-8">{farm.description}</p>
                    <dl className="border-t border-stone-300">
                      {[
                        ["Location", farm.details.location],
                        ["Altitude", farm.details.altitude],
                        ["Varieties", farm.details.varieties],
                        ["Processing", farm.details.processing],
                        ["What makes it different", farm.details.difference || "—"],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[9rem_1fr] gap-4 py-3 border-b border-stone-300">
                          <dt className="text-xs uppercase tracking-widest text-stone-600 pt-1">{label}</dt>
                          <dd className="text-stone-800">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12">
            <button onClick={() => go(active - 1)} aria-label="Previous farm"
              className="w-12 h-12 border border-stone-400 flex items-center justify-center text-stone-800 hover:bg-stone-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {farms.map((f, i) => (
                <button key={f.name} onClick={() => go(i)} aria-label={f.name}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? 'bg-amber-700' : 'bg-stone-300 hover:bg-stone-400'}`} />
              ))}
            </div>
            <button onClick={() => go(active + 1)} aria-label="Next farm"
              className="w-12 h-12 border border-stone-400 flex items-center justify-center text-stone-800 hover:bg-stone-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Farm Locations Map */}
      <EnhancedMapbox />

      {/* Sample Request Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Request <span className="text-amber-700">Samples</span>
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Experience the exceptional quality of our farm-specific lots
          </p>
          <a
            href="/contact"
            className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 inline-block"
          >
            Request Samples & Spec Sheets
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Farms;
