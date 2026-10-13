
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      title: "HERITAGE",
      content: "Cafetos de Segovia was founded by Ana and Martha Albir, representing the third generation of their family's coffee legacy. We bridge tradition with innovation, providing transparent and socially responsible connections to Nicaraguan coffee farmers. Our passionate team of specialists ensures the highest quality standards throughout the entire production chain, building lasting relationships with partner farms and buyers worldwide.",
      image: "/media/about-heritage-family.jpg"
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
      content: "Drying is where a good harvest is protected or lost, so we take it slowly. After processing, our coffee rests on raised beds in the open air, where it dries evenly with the sun and the mountain breeze. Our team turns every bed by hand several times a day and checks moisture until each lot reaches the right level for storage and export.\n\nNatural, honey and washed lots dry separately, and every bed is identified by farm and process. That way each lot keeps its own character and its own traceability, from the farm to the bag.",
      image: "/media/about-drying-parchment.jpg"
    },
    {
      title: "LABORATORY & QUALITY CONTROL",
      content: "Every lot is evaluated in our own cupping lab before we offer it. We roast samples, cup them blind alongside our reference lots, and score each one, so we know exactly what is in every bag before a buyer tastes it.\n\nAlongside cupping, we check moisture and the physical quality of the green coffee, looking for defects, size and uniformity. Only lots that meet our standards are prepared for export, and we cup them again before they ship.",
      image: "/media/beneficio-cupping-lab.jpg"
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
              <div className={index % 2 === 1 ? 'order-2 lg:order-none lg:col-start-2 lg:row-start-1' : 'order-2 lg:order-none lg:col-start-1 lg:row-start-1'}>
                <h2 className="text-3xl font-bold text-stone-800 mb-6 text-amber-700">
                  {value.title}
                </h2>
                <div className="space-y-5 text-lg text-stone-600 leading-relaxed">
                  {value.content.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
              <div className={index % 2 === 1 ? 'order-1 lg:order-none lg:col-start-1 lg:row-start-1' : 'order-1 lg:order-none lg:col-start-2 lg:row-start-1'}>
                <img
                  src={value.image}
                  alt={value.title}
                  className={`w-full object-cover rounded-sm ${index === 0 ? 'aspect-[1402/1072] h-auto object-top' : index >= 4 ? 'h-[320px] lg:h-[420px]' : 'h-80'}`}
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
