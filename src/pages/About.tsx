
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      title: "HERITAGE",
      content: "Cafetos de Segovia was founded by Ana and Martha Albir, representing the third generation of their family's coffee legacy. We bridge tradition with innovation, providing transparent and socially responsible connections to Nicaraguan coffee farmers. Our passionate team of specialists ensures the highest quality standards throughout the entire production chain, building lasting relationships with partner farms and buyers worldwide.",
      image: "/lovable-uploads/9af00c73-ef74-4288-be9b-729040476183.png"
    },
    {
      title: "OUR COFFEE",
      content: "We partner with exceptional farmers to navigate changing environmental conditions while preserving traditional farming culture. Our collaboration with outstanding importers and roasters focuses on sustainability and quality excellence. Through innovative micro-milling and advanced processing techniques, we enhance flavors and maintain consistency. Every cup tells the story of dedicated farmers and our commitment to environmental stewardship.",
      image: "/lovable-uploads/61995db6-6905-4ef9-bd32-819b5d987166.png"
    },
    {
      title: "SUSTAINABILITY",
      content: "At Cafetos de Segovia, sustainability is our foundation. We cultivate coffee with deep reverence for the terroir, implementing practices that preserve our environment for future generations. Our connection with nature defines our identity and legacy, ensuring that every bean reflects our commitment to responsible farming and environmental protection.",
      image: "/lovable-uploads/ac750844-c94d-41fb-aa34-b940c2163cc6.png"
    },
    {
      title: "INNOVATION",
      content: "Innovation drives our pursuit of excellence in specialty coffee. We continuously explore cutting-edge processing methods and quality enhancement techniques. Our commitment to creativity and pioneering approaches ensures we deliver exceptional coffee experiences while maintaining the highest standards of consistency and flavor development.",
      image: "/lovable-uploads/a45a3c49-43d8-40ef-b238-3768a245bd5e.png"
    }
    ,{
      title: "DRYING & PROCESSING",
      content: "Placeholder text: our coffee is dried slowly on patios and raised beds, turned by hand throughout the day. We monitor moisture constantly until each lot reaches its ideal level, protecting flavor and stability for export.",
      image: "/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png"
    },
    {
      title: "LABORATORY & QUALITY CONTROL",
      content: "Placeholder text: in our cupping lab every lot is evaluated before export. We check moisture and density, cup each lot, and select only the coffees that meet our standards.",
      image: "/lovable-uploads/2fb707ad-4139-4528-9715-3a9f2960ad90.png"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            About <span className="text-amber-700">Cafetos de Segovia</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            Three generations of coffee excellence from the highlands of Nueva Segovia
          </p>
        </div>
      </section>

      {/* Values Sections */}
      {values.map((value, index) => (
        <section key={value.title} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-stone-800 mb-6 text-amber-700">
                  {value.title}
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  {value.content}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default About;
