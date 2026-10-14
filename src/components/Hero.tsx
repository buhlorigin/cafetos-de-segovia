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
      <img src="/brand/cafetos-logo-light.png" alt="Cafetos de Segovia" className="h-[150px] md:h-[220px] lg:h-[300px] w-auto mb-8" />
      <span className="eyebrow !text-amber-300">{t('hero.eyebrow')}</span>
      <h1 className="text-parchment mb-12" style={{ fontSize: "clamp(2.75rem, 3.6vw, 4.25rem)", lineHeight: 1.1 }}>
        {t('hero.title')}
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a href={lp('/services')} className="bg-cherry text-parchment px-8 py-4 lg:px-8 lg:py-[18px] lg:text-[17px] font-medium tracking-wide hover:bg-amber-800 transition-colors duration-200">{t('hero.services')}</a>
        <a href={lp('/farms')} className="border border-parchment text-parchment px-8 py-4 lg:px-8 lg:py-[18px] lg:text-[17px] font-medium tracking-wide hover:bg-parchment hover:text-coffee transition-colors duration-200">{t('hero.farms')}</a>
      </div>
    </>
  );

  return (
    <section id="home" className="min-h-screen relative flex bg-coffee" style={{ backgroundColor: '#2B1D14' }}>
      <div className="relative z-10 w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:pl-[6vw] md:pr-[4vw] pt-28 pb-16">
        <div className="w-full max-w-[640px] flex flex-col items-center md:items-start">{content}</div>
      </div>
      <div className="absolute inset-0 md:relative md:inset-auto md:w-1/2 lg:w-[55%] overflow-hidden">
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover object-center"
          poster="/media/beneficio-poster.jpg"
          src="/media/beneficio-loop-vertical.mp4"
          autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1}
        />
        <div className="hidden md:block absolute inset-x-0 top-0 h-[140px] pointer-events-none" style={{ backgroundImage: "linear-gradient(to bottom, rgba(30,20,14,0.55), rgba(30,20,14,0))" }}></div>
        <div className="absolute inset-0 md:hidden" style={{ backgroundColor: "rgba(30,20,14,0.5)" }}></div>
      </div>
    </section>
  );
};

export default Hero;
