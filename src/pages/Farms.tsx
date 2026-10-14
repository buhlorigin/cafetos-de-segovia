import ClosingBand from '@/components/ClosingBand';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useFarms, type Farm } from '../data/farms';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/lib/locale';

type CoffeeArea = {
  text: string;
  image: string;
  altitude: string;
  varieties: string;
  farmNames: string[];
};

const coffeeAreas: CoffeeArea[] = [
  {
    text: "",
    image: "/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png",
    altitude: "",
    varieties: "",
    farmNames: ["Finca Agua Sarca", "Finca La Picona", "Finca Mirjam", "Finca El Ciprés", "Finca Las Hortensias", "Santa Isabel", "Santa Helena"],
  },
  {
    text: "",
    image: "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png",
    altitude: "",
    varieties: "",
    farmNames: ["La Esperanza", "Ojo de Agua", "Quebrada Las Naranjas", "Las Naranjas", "El Esfuerzo"],
  },
];

// Only approved origin names are published; unfinished area copy stays empty.
const originsPublished = true;

const pad = (n: number) => String(n).padStart(2, '0');

const Farms = () => {
  const { t } = useTranslation();
  const { lp } = useLocale();
  const allFarms = useFarms();
  const ownFarms = allFarms.filter((f) => f.type === 'own');
  const farms = allFarms.filter((f) => f.type === 'partner');
  const ownRef = useRef<HTMLElement>(null);
  const contact = (subject: string) => `${lp('/contact')}?subject=${encodeURIComponent(subject)}`;
  const areas = coffeeAreas.map((a, i) => ({ ...a, ...(t('farmsPage.areas', { returnObjects: true }) as { label: string; heading: string }[])[i] }));
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

  const badge = (f: Farm) => (
    <span className={`inline-block text-[11px] uppercase tracking-widest px-2.5 py-1 ${f.type === 'own' ? 'bg-cherry text-parchment' : 'border border-stone-400 text-stone-800'}`}>
      {t(f.type === 'own' ? 'farmsPage.founderBadge' : 'farmsPage.partnerBadge')}
    </span>
  );
  const jumpToFarm = (f: Farm) => {
    if (f.type === 'own') { ownRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    jumpTo(farms.indexOf(f));
  };
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
            {t('farmsPage.titleA')}<span className="text-amber-700">{t('farmsPage.titleB')}</span>
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            {t('farmsPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow">{t('farmsPage.overviewEyebrow')}</span>
          <h2 className="text-4xl md:text-5xl text-stone-800 mb-10">{t('farmsPage.overviewTitle')}</h2>
          <ul className="border-t border-stone-300">
            {allFarms.map((farm, i) => (
              <li key={farm.name}>
                <button
                  onClick={() => jumpToFarm(farm)}
                  className="w-full grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1.5fr_1.5fr_1fr] gap-x-4 gap-y-1 items-baseline text-left py-5 border-b border-stone-300 transition-colors hover:bg-stone-100 px-2"
                >
                  <span className="text-sm tracking-widest text-amber-700">{pad(i + 1)}</span>
                  <span className="flex flex-wrap items-center gap-3"><span className="font-serif text-2xl text-stone-800">{farm.name}</span>{badge(farm)}</span>
                  <span className="col-start-2 md:col-start-auto text-stone-600">{farm.details.location}</span>
                  <span className="col-start-2 md:col-start-auto text-stone-600 md:text-right">{farm.details.altitude}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Own farms */}
      <section ref={ownRef} className="py-20 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">{t('farmsPage.ownEyebrow')}</span>
            <h2 className="text-4xl md:text-5xl text-stone-800 mb-6">{t('farmsPage.ownTitle')}</h2>
            <p className="text-lg text-stone-600 leading-relaxed">{t('farmsPage.ownText')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ownFarms.map((farm) => (
              <article key={farm.name} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={farm.images[0]} alt={farm.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">{badge(farm)}</div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">{farm.name}</h3>
                  {farm.description && <p className="text-stone-600 leading-relaxed mb-6">{farm.description}</p>}
                  <dl className="border-t border-stone-300">
                    {[
                      [t('farmsPage.ownerLabel'), farm.owner],
                      [t('farmsPage.labels.location'), farm.details.location],
                      [t('farmsPage.labels.altitude'), farm.details.altitude],
                      [t('farmsPage.labels.size'), farm.details.size],
                      [t('farmsPage.labels.varieties'), farm.details.varieties],
                      [t('farmsPage.labels.processing'), farm.details.processing],
                      [t('farmsPage.labels.difference'), farm.details.difference],
                    ].filter(([, v]) => Boolean(v)).map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[8rem_1fr] gap-4 py-3 border-b border-stone-300">
                        <dt className="text-xs uppercase tracking-widest text-stone-600 pt-1">{label}</dt>
                        <dd className="text-stone-800">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-stone-700 leading-relaxed">
            {t('farmsPage.quote')}
          </p>
          <div className="mt-6 w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
      </section>

      {/* Farm slideshow */}
      <section ref={sliderRef} className="py-20 bg-white scroll-mt-20" aria-roledescription="carousel" aria-label={t('farmsPage.carousel')}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">{t('farmsPage.networkEyebrow')}</span>
            <h2 className="text-4xl md:text-5xl text-stone-800 mb-6">{t('farmsPage.networkTitle')}</h2>
            <p className="text-lg text-stone-600 leading-relaxed">{t('farmsPage.networkText')}</p>
          </div>
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
                          <button key={p} onClick={() => setPhoto(p)} aria-label={t('farmsPage.photo', { n: p + 1 })}
                            className={`h-1.5 flex-1 transition-colors ${p === photo ? 'bg-amber-700' : 'bg-stone-300 hover:bg-stone-400'}`} />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={photoLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center gap-4 mb-3"><span className="eyebrow !mb-0">{t('farmsPage.farmCounter', { n: pad(i + 1), total: pad(total) })}</span>{badge(farm)}</div>
                    <h2 className="text-4xl md:text-5xl text-stone-800 mb-6">{farm.name}</h2>
                    {farm.description && <p className="text-stone-600 leading-relaxed mb-8">{farm.description}</p>}
                    <dl className="border-t border-stone-300">
                      {[
                        [t('farmsPage.labels.location'), farm.details.location],
                        [t('farmsPage.labels.altitude'), farm.details.altitude],
                        [t('farmsPage.labels.size'), farm.details.size],
                        [t('farmsPage.labels.varieties'), farm.details.varieties],
                        [t('farmsPage.labels.processing'), farm.details.processing],
                        [t('farmsPage.labels.harvest'), farm.details.harvest],
                        [t('farmsPage.labels.difference'), farm.details.difference],
                      ].filter(([, value]) => Boolean(value)).map(([label, value]) => (
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
            <button onClick={() => go(active - 1)} aria-label={t('farmsPage.prev')}
              className="w-12 h-12 border border-stone-400 flex items-center justify-center text-stone-800 hover:bg-stone-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {farms.map((f, i) => (
                <button key={f.name} onClick={() => go(i)} aria-label={f.name}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? 'bg-amber-700' : 'bg-stone-300 hover:bg-stone-400'}`} />
              ))}
            </div>
            <button onClick={() => go(active + 1)} aria-label={t('farmsPage.next')}
              className="w-12 h-12 border border-stone-400 flex items-center justify-center text-stone-800 hover:bg-stone-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* More farms on request */}
      <section id="partner-farms" className="py-20 bg-forest text-parchment scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <span className="eyebrow !text-parchment">{t('farmsPage.partnerEyebrow')}</span>
          <h2 className="text-4xl md:text-5xl text-parchment mt-4 mb-6">{t('farmsPage.partnerTitle')}</h2>
          <p className="text-lg text-parchment leading-relaxed max-w-3xl mx-auto mb-10">
            {t('farmsPage.partnerText')}
          </p>
          <Button asChild size="lg" className="h-auto whitespace-normal py-4">
            <a href={contact(t('farmsPage.partnerSubject'))}>{t('farmsPage.partnerButton')}</a>
          </Button>
        </div>
      </section>

      {/* Where our coffee comes from — awaiting final copy */}
      {originsPublished && <section className="py-20 bg-forest text-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow !text-parchment">{t('farmsPage.originsEyebrow')}</span>
            <h2 className="text-4xl md:text-5xl text-parchment mt-4">{t('farmsPage.originsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {areas.map((area) => (
              <div key={area.label}>
                <div className="aspect-[16/10] overflow-hidden mb-8">
                  <img src={area.image} alt={area.label} className="w-full h-full object-cover" />
                </div>
                <span className="eyebrow !text-parchment">{area.label}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-parchment mt-3 mb-4">{area.heading}</h3>
                {area.text && <p className="text-parchment leading-relaxed mb-8">{area.text}</p>}
                <dl className="border-t border-parchment/30">
                  {[
                    [t('farmsPage.altitudeRange'), area.altitude],
                    [t('farmsPage.mainVarieties'), area.varieties],
                  ].filter(([, value]) => Boolean(value)).map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[9rem_1fr] gap-4 py-3 border-b border-parchment/30">
                      <dt className="text-xs uppercase tracking-widest text-parchment pt-1">{label}</dt>
                      <dd className="text-parchment">{value}</dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-[9rem_1fr] gap-4 py-3 border-b border-parchment/30">
                    <dt className="text-xs uppercase tracking-widest text-parchment pt-1">{t('farmsPage.farmsLabel')}</dt>
                    <dd className="flex flex-wrap gap-2">
                      {area.farmNames.map((name) => {
                        const farm = allFarms.find((f) => f.name === name);
                        if (!farm) return <span key={name} className="text-xs uppercase tracking-widest border border-parchment/40 px-3 py-1.5 text-parchment">{name}</span>;
                        return (
                          <Button variant="ghost"
                            key={name}
                            onClick={() => jumpToFarm(farm)}
                            className="text-xs uppercase tracking-widest border border-parchment/40 px-3 py-1.5 text-parchment hover:bg-parchment/10 transition-colors"
                          >
                            {name.replace('Finca ', '')}
                          </Button>
                        );
                      })}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>}

      <ClosingBand heading={t('farmsPage.closingTitle')} text={t('farmsPage.closingText')} primary={{ label: t('farmsPage.closingButton'), to: contact(t('farmsPage.closingSubject')) }} />

      <Footer />
    </div>
  );
};

export default Farms;
