import { useTranslation } from 'react-i18next';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || '';
  const emailLink = `mailto:ana@cafetosdesegovia.com${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            <span className="text-amber-700">{t('contact.titleA')}</span>{t('contact.titleB')}
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-stone-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-8">
                <span className="text-amber-700">CAFETOS DE SEGOVIA</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">{t('contact.address')}</h3>
                  <p className="text-stone-600">
                    {t('contact.addressLine1')}<br />
                    {t('contact.addressLine2')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">{t('contact.phone')}</h3>
                  <p className="text-stone-600">+505 8733 1928</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">{t('contact.general')}</h3>
                  <a 
                    href={emailLink} 
                    className="text-amber-700 hover:text-amber-800 transition-colors block"
                  >
                    ana@cafetosdesegovia.com
                  </a>
                  <a 
                    href="mailto:martha@cafetosdesegovia.com" 
                    className="text-amber-700 hover:text-amber-800 transition-colors block"
                  >
                    martha@cafetosdesegovia.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-stone-700 mb-2">{t('contact.hours')}</h3>
                  <p className="text-stone-600">
                    {t('contact.hoursLine1')}<br />
                    {t('contact.hoursLine2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">
                {t('contact.offerTitle')}
              </h2>
              
              <ul className="space-y-4">
                {(t('contact.offer', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visit our dry mill */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">{t('contact.visitTitle')}</h2>
            <p className="text-xl text-stone-600">{t('contact.millName')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Cafetos+de+Segovia,+Nueva+Segovia,+Nicaragua&output=embed"
                title={t('contact.mapTitle')}
                className="w-full h-[300px] md:h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-800 mb-3">{t('contact.millName')}</h3>
              <p className="text-stone-600 mb-8">{t('contact.millLocation')}</p>
              <Button asChild size="lg" className="self-start">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cafetos+de+Segovia,+Nueva+Segovia,+Nicaragua"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('contact.directions')}
              </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('contact.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('contact.ctaText')}
          </p>
          <a 
            href={emailLink}
            className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200 shadow-lg inline-block"
          >
            {t('contact.ctaButton')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
