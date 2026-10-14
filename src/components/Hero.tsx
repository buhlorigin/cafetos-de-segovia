import { useTranslation } from 'react-i18next';
import { useLocale } from '@/lib/locale';
import * as React from "react";

const Hero = () => {
  const { t } = useTranslation();
  const { lp } = useLocale();
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  const content = (
    <>
      <img src="/brand/cafetos-logo-light.png" alt="Cafetos de Segovia" className="h-[150px] md:h-[220px] w-auto mb-8" />
      <span className="eyebrow !text-amber-300">{t('hero.eyebrow')}</span>
      <h1 className="text-parchment mb-12" style={{ fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 1.1, maxWidth: "760px" }}>
        {t('hero.title')}
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a href={lp('/services')} className="bg-cherry text-parchment px-8 py-4 font-medium tracking-wide hover:bg-amber-800 transition-colors duration-200">{t('hero.services')}</a>
        <a href={lp('/farms')} className="border border-parchment text-parchment px-8 py-4 font-medium tracking-wide hover:bg-parchment hover:text-coffee transition-colors duration-200">{t('hero.farms')}</a>
      </div>
    </>
  );

  return (
    <section id="home" className="min-h-screen relative flex bg-coffee" style={{ backgroundColor: '#2B1D14' }}>
      <div className="relative z-10 w-full md:w-[58%] flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12 lg:px-20 pt-28 pb-16">
        {content}
      </div>
      <div className="absolute inset-0 md:relative md:inset-auto md:w-[42%] overflow-hidden">
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/media/beneficio-poster.jpg"
          src="/media/beneficio-loop-vertical.mp4"
          autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1}
        />
        <div className="absolute inset-0 md:hidden" style={{ backgroundColor: "rgba(30,20,14,0.5)" }}></div>
      </div>
    </section>
  );
};

export default Hero;
