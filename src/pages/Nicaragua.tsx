import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Publish these editorial sections once their final copy is supplied.
const editorialPublished = false;

const sections = [
  { eyebrow: "Origin", title: "Nicaragua as a coffee origin", image: "/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png",
    text: "Nicaragua has grown coffee for over 150 years. Its volcanic soils, mountain ranges and family farms make it one of Central America's most rewarding origins for specialty buyers." },
  { eyebrow: "Terroir", title: "Climate, altitude and the mountains of the north", image: "/lovable-uploads/2b6cfe6f-9101-406b-9e51-7a0c2a273fff.png",
    text: "In the north, pine-covered ranges rise above 1,500 m. Cool nights, morning mist and a clear dry season slow cherry maturation and build sweetness and structure in the cup." },
  { eyebrow: "Our home", title: "Nueva Segovia and Dipilto, where our farms are", image: "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png",
    text: "Our farms lie in the Cordillera de Dipilto and Jalapa, along the Honduran border. Café Dipilto is a protected designation of origin, recognised for its bright, clean and complex coffees." },
  { eyebrow: "Craft", title: "Varieties and processing traditions", image: "/lovable-uploads/ad277da2-06aa-4822-8f6b-4cf494471a2e.png",
    text: "Catuai, Caturra, Bourbon, Maracaturra and Java grow side by side. Washed coffees remain the tradition, while natural, honey and experimental fermentations open new flavour profiles." },
  { eyebrow: "Harvest", title: "Harvest season and the road to export", image: "/lovable-uploads/376c0056-37ee-48ff-aa28-93b13e5bf4f2.png",
    text: "Harvest runs from November to March. Cherries are hand-picked, processed and dried, then rested, milled, sorted and packed at the dry mill before shipping from Nicaraguan ports to roasters worldwide." },
];

const Nicaragua = () => (
  <div className="min-h-screen">
    <Navigation />

    <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl text-amber-800 mb-6">Nicaragua</h1>
        <p className="text-2xl text-stone-600 leading-relaxed">What makes Nicaragua special as a coffee origin</p>
      </div>
    </section>

    {editorialPublished && sections.map((s, i) => (
      <section key={s.title} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          </div>
          <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
            <span className="eyebrow">{String(i + 1).padStart(2, '0')} · {s.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl text-stone-800 mb-6">{s.title}</h2>
            <p className="text-lg text-stone-600 leading-relaxed">{s.text}</p>
          </div>
        </div>
      </section>
    ))}

    <Footer />
  </div>
);

export default Nicaragua;
