import { useTranslation } from 'react-i18next';
import { useLocale } from '@/lib/locale';
import ClosingBand from '@/components/ClosingBand';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Factory, Coffee } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProcessFlow from '../components/ProcessFlow';
import { Button } from '../components/ui/button';

const ServiceItems = ({ items }: { items: string[][] }) => (
  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mt-8">
    {items.map(([title, text]) => (
      <div key={title} className="border-t border-stone-200 pt-5">
        <dt className="text-lg font-semibold text-coffee mb-2">{title}</dt>
        <dd className="text-lg leading-relaxed text-stone-600">{text}</dd>
      </div>
    ))}
  </dl>
);

const Services = () => {
  const { t } = useTranslation();
  const { lp } = useLocale();
  const contact = (subject: string) => `${lp('/contact')}?subject=${encodeURIComponent(subject)}`;
  return (
  <div className="min-h-screen bg-background text-coffee">
    <Navigation />
    <main>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h1 className="text-5xl md:text-6xl text-coffee mb-8">{t('services.title')}</h1>
          <p className="max-w-[760px] mx-auto text-xl leading-relaxed text-stone-600">
            {t('services.intro')}
          </p>
          <ol aria-label={t('services.journeyLabel')} className="relative grid grid-cols-3 max-w-4xl mx-auto mt-12 gap-3 sm:gap-8">
            <li aria-hidden="true" className="absolute left-[16.67%] right-[16.67%] top-6 border-t border-stone-300" />
            {[Sprout, Factory, Coffee].map((icon, i) => ({ icon, text: (t('services.journey', { returnObjects: true }) as string[])[i] })).map(({ icon: Icon, text }, index) => (
              <li key={text} className={`relative ${index === 1 ? 'text-cherry' : 'text-coffee'}`}>
                <span className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-background"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <span className="text-sm sm:text-lg leading-relaxed font-medium">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">{t('services.producers.eyebrow')}</span>
            <h2 className="text-4xl md:text-5xl text-coffee mb-6">{t('services.producers.title')}</h2>
            <p className="text-lg leading-relaxed text-stone-600">{t('services.producers.text')}</p>
            <ServiceItems items={t('services.producers.items', { returnObjects: true }) as string[][]} />
          </div>
          <img src="/media/services-producers.png" alt={t('services.producers.alt')} className="w-full h-[420px] lg:h-[580px] object-cover rounded-md" />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <img src="/media/services-team.png" alt={t('services.export.alt')} className="w-full h-[420px] lg:h-[580px] object-cover rounded-md" />
          <div>
            <span className="eyebrow">{t('services.export.eyebrow')}</span>
            <h2 className="text-4xl md:text-5xl text-coffee mb-6">{t('services.export.title')}</h2>
            <p className="text-lg leading-relaxed text-stone-600">{t('services.export.text')}</p>
            <ServiceItems items={t('services.export.items', { returnObjects: true }) as string[][]} />
          </div>
        </div>
      </section>
      <ProcessFlow />
      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              {t('services.certs.titleA')}<span className="text-amber-700">{t('services.certs.titleB')}</span>
            </h2>
            <p className="text-xl text-stone-600">
              {t('services.certs.text')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-stone-50 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center ">
              <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-amber-700 text-2xl font-bold">HACCP</span>
              </div>
              <h3 className="font-bold text-stone-800 text-lg">HACCP</h3>
              <p className="text-stone-600 text-sm mt-2">{t('services.certs.haccp')}</p>
            </div>
            <div className="bg-stone-50 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center ">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-700 text-lg font-bold">{t('services.certs.organicBadge')}</span>
              </div>
              <h3 className="font-bold text-stone-800 text-lg">{t('services.certs.organic')}</h3>
              <p className="text-stone-600 text-sm mt-2">{t('services.certs.organicText')}</p>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand heading={t('services.closing.title')} text={t('services.closing.text')} primary={{ label: t('services.closing.harvest'), to: contact(t('services.closing.harvestSubject')) }} secondary={{ label: t('services.closing.samples'), to: contact(t('services.closing.samplesSubject')) }} />
    </main>
    <Footer />
  </div>
  );
};

export default Services;
