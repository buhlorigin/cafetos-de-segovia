import { useTranslation } from 'react-i18next';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const { t } = useTranslation();
  const media = [
    {
            image: "/media/about-heritage-family.jpg"
    },
    {
            image: "/media/cherries-hand-sorting.jpg"
    },
    {
            image: "/lovable-uploads/ac750844-c94d-41fb-aa34-b940c2163cc6.png"
    },
    {
            image: "/lovable-uploads/a45a3c49-43d8-40ef-b238-3768a245bd5e.png"
    }
    ,{
            image: "/media/about-drying-parchment.jpg"
    },
    {
            image: "/media/beneficio-cupping-lab.jpg"
    }
  ];

  const values = media.map((m, i) => ({ ...m, ...(t('about.values', { returnObjects: true }) as { title: string; content: string }[])[i] }));

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
            {t('about.titleA')}<span className="text-amber-700">Cafetos de Segovia</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            {t('about.subtitle')}
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
                <figure>
                <img
                  src={value.image}
                  alt={value.title}
                  className={`w-full object-cover object-center rounded-sm ${index === 0 ? 'aspect-[1402/1072] h-auto object-top' : index >= 4 ? 'h-[320px] lg:h-[420px]' : 'h-80'}`}
                />
                </figure>
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
