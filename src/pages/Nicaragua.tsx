import { useTranslation } from 'react-i18next';
import { useLocale } from '@/lib/locale';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const media: { image: string; cta?: boolean }[] = [
  { image: "/media/hero-poster.jpg" },
  { image: "/media/farm-bethania-1.jpg" },
  { image: "/media/farm-agua-sarca-1.jpg" },
  { image: "/media/about-drying-parchment.jpg" },
  { image: "/media/beneficio-lot-storage.jpg", cta: true },
];

const Nicaragua = () => {
  const { t } = useTranslation();
  const { lp } = useLocale();
  const sections = media.map((m, i) => ({ ...m, ...(t('nicaragua.sections', { returnObjects: true }) as { eyebrow: string; title: string; text: string; facts?: string[] }[])[i] }));
  return (
  <div className="min-h-screen">
    <Navigation />

    <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl text-amber-800 mb-6">{t('nicaragua.title')}</h1>
        <p className="text-2xl text-stone-600 leading-relaxed">{t('nicaragua.subtitle')}</p>
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
            {s.cta && <Link to={lp('/services')} className="mt-8 inline-block bg-primary text-primary-foreground px-7 py-3 rounded-sm font-medium hover:bg-primary/90">{t('nicaragua.cta')}</Link>}
          </div>
        </div>
      </section>
    ))}

    <Footer />
  </div>
  );
};

export default Nicaragua;
