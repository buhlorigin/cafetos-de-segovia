import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections: { eyebrow: string; title: string; image: string; text: string; facts?: string[]; cta?: boolean }[] = [
  { eyebrow: "The origin", title: "A country shaped by coffee", image: "/media/hero-poster.jpg",
    text: "Coffee is one of Nicaragua's most important exports and the livelihood of thousands of families, most of them small and medium producers. Almost all of it is arabica, grown in the cool mountains of the north, where altitude, volcanic soils and a clear dry season give the beans their density and sweetness." },
  { eyebrow: "Climate & altitude", title: "Mountains, mist and a real dry season", image: "/media/farm-bethania-1.jpg",
    text: "The coffee regions of the north sit between roughly 1,000 and 1,800 metres. Cool nights slow the ripening of the cherry, which builds sugars and acidity, and a long dry season from November to April makes slow, careful sun drying possible. Most coffee here grows under shade, among native trees, fruit trees and bananas." },
  { eyebrow: "Where we grow", title: "Nueva Segovia, the northernmost coffee region", image: "/media/farm-agua-sarca-1.jpg",
    text: "Nueva Segovia borders Honduras and is home to the Serranías de Dipilto y Jalapa nature reserve, where many of our farms and partner producers grow coffee. The region is known for clean, sweet and structured cups, and its coffees regularly stand out in the Cup of Excellence Nicaragua, including lots from our own family farms.",
    facts: ["Our farms: 1,150–1,800 m", "Harvest: November to April", "Municipalities: Dipilto, Mozonte, Macuelizo, San Fernando"] },
  { eyebrow: "In the cup", title: "From classic varieties to new expressions", image: "/media/about-drying-parchment.jpg",
    text: "Caturra, Red and Yellow Catuaí and Maracaturra, the large-bean variety Nicaragua is known for, grow alongside newer and rarer varieties such as Java, Pacamara, Parainema, Marsellesa and Geisha. Washed coffee remains the tradition, while naturals, honeys and anaerobic fermentations open new profiles every harvest." },
  { eyebrow: "The journey", title: "From the mountain to the port", image: "/media/beneficio-lot-storage.jpg", cta: true,
    text: "Cherries are picked by hand, processed at the farm or the wet mill, and brought down as parchment to dry mills like ours. There the coffee is dried, rested, milled, sorted and cupped before it leaves by truck for the port and, from there, for roasters around the world." },
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

    {sections.map((s, i) => (
      <section key={s.title} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
            <span className="eyebrow">{s.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl text-stone-800 mb-6">{s.title}</h2>
            <p className="text-lg text-stone-600 leading-relaxed">{s.text}</p>
            {s.facts && <ul className="mt-8 flex flex-wrap gap-3">{s.facts.map(f => <li key={f} className="border border-stone-300 rounded-sm px-4 py-2 text-sm text-coffee">{f}</li>)}</ul>}
            {s.cta && <Link to="/services" className="mt-8 inline-block bg-primary text-primary-foreground px-7 py-3 rounded-sm font-medium hover:bg-primary/90">See how we work</Link>}
          </div>
        </div>
      </section>
    ))}

    <Footer />
  </div>
);

export default Nicaragua;
