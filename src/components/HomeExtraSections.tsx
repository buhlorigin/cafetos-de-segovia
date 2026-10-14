import { useEffect, useRef, useState } from 'react';
import { Sun, Factory, Snowflake, FlaskConical, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFarms, farmNetwork } from '../data/farms';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/lib/locale';

const captionShade = { backgroundImage: 'linear-gradient(to top, rgba(30,20,14,0.85), rgba(30,20,14,0))' };

const stepMedia = [
  { n: '01', src: '/media/beneficio-parchment-drying.jpg', pos: 'center 30%' },
  { n: '02', src: '/media/beneficio-color-sorter.jpg', pos: 'center' },
  { n: '03', src: '/media/beneficio-lot-storage.jpg', pos: 'center' },
  { n: '04', src: '/media/beneficio-cupping-lab.jpg', pos: 'center' },
];
type Step = typeof stepMedia[number] & { title: string; text: string };

const stripIcons = [Sun, Factory, Snowflake, FlaskConical, ShieldCheck];

const useInView = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
};

const StepCard = ({ s, className = '' }: { s: Step; className?: string }) => {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-sm transition-all duration-700 ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
      <img src={s.src} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: s.pos }} />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-parchment max-w-md" style={captionShade}>
        <div className="text-xs tracking-[0.25em] uppercase mb-1 font-medium" style={{ color: "#F5F0E8" }}>{s.n} · {s.title}</div>
        <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF" }}>{s.text}</p>
      </div>
    </div>
  );
};

const CountUp = ({ n, display = '', suffix = '' }: { n: number | null; display?: string; suffix?: string }) => {
  const [ref, seen] = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen || n === null) return;
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => { const p = Math.min(1, (t - t0) / 1200); setV(Math.round(p * n)); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, n]);
  return <span ref={ref}>{n === null ? display : v}{suffix}</span>;
};

const HomeExtraSections = () => {
  const { t } = useTranslation();
  const { lp } = useLocale();
  const farms = useFarms();
  const steps: Step[] = stepMedia.map((m, i) => ({ ...m, ...(t('home.steps', { returnObjects: true }) as { title: string; text: string }[])[i] }));
  const strip = (t('home.strip', { returnObjects: true }) as string[]).map((label, i) => ({ icon: stripIcons[i], label }));
  const numbers = [
    { value: 12, suffix: '+', display: '', label: t('home.numbers.yearsLabel') },
    { value: 60, suffix: '+', display: '', label: t('home.numbers.containers') },
    { value: 15, suffix: '+', display: '', label: t('home.numbers.farms') },
    { value: null, suffix: '', display: t('home.numbers.altitude'), label: t('home.numbers.altitudeLabel') },
  ];
  const row = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => row.current?.scrollBy({ left: d * row.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <>
      {/* The Beneficio */}
      <section className="py-[72px] md:py-[120px] bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow">{t('home.beneficio.eyebrow')}</span>
          <h2 className="text-4xl md:text-6xl text-coffee mb-6">{t('home.beneficio.title')}</h2>
          <p className="text-lg leading-relaxed mb-12" style={{ maxWidth: 640, color: '#5A4636' }}>
            {t('home.beneficio.text')}
          </p>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[720px]">
            <StepCard s={steps[0]} className="col-span-2 row-span-2" />
            <StepCard s={steps[1]} className="row-span-2" />
            <StepCard s={steps[2]} />
            <StepCard s={steps[3]} />
          </div>
          {/* Mobile carousel */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-2">
            {steps.map((s) => (
              <StepCard key={s.n} s={s} className="snap-center shrink-0 w-[85vw] h-[460px]" />
            ))}
          </div>

          <div className="mt-10 border-y border-stone-300 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {strip.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-coffee">
                <Icon className="w-5 h-5 text-cherry shrink-0" />
                <span className="text-sm tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Coffee */}
      <section className="py-[72px] md:py-[120px]" style={{ backgroundColor: '#2B1D14', color: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow !text-amber-300">{t('home.coffee.eyebrow')}</span>
          <h2 className="text-4xl md:text-6xl mb-12" style={{ color: '#F5F0E8' }}>{t('home.coffee.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border p-8" style={{ borderColor: 'rgba(245,240,232,0.2)' }}>
              <h3 className="text-3xl mb-4" style={{ color: '#F5F0E8' }}>{t('home.coffee.greenTitle')}</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>{t('home.coffee.greenText')}</p>
            </div>
            <div className="border p-8" style={{ borderColor: 'rgba(245,240,232,0.2)' }}>
              <h3 className="text-3xl mb-4" style={{ color: '#F5F0E8' }}>{t('home.coffee.lotsTitle')}</h3>
              <ul className="space-y-2">
                {(t('home.coffee.processes', { returnObjects: true }) as string[]).map((p) => (
                  <li key={p} className="flex items-center" style={{ color: 'rgba(245,240,232,0.8)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: '#9E2B25' }} />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Farms preview */}
      <section className="py-[72px] md:py-[120px] bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">{t('home.farms.eyebrow')}</span>
              <h2 className="text-4xl md:text-6xl text-coffee mb-4">{t('home.farms.title')}</h2>
              <p className="text-lg" style={{ color: '#5A4636' }}>{t('home.farms.text')}</p>
            </div>
            <div className="hidden md:flex gap-2 shrink-0">
              <button onClick={() => scroll(-1)} aria-label={t('home.farms.prev')} className="w-11 h-11 border border-coffee text-coffee flex items-center justify-center hover:bg-coffee hover:text-parchment transition-colors"><ChevronLeft size={20} /></button>
              <button onClick={() => scroll(1)} aria-label={t('home.farms.next')} className="w-11 h-11 border border-coffee text-coffee flex items-center justify-center hover:bg-coffee hover:text-parchment transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>
          <div ref={row} className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none' }}>
            {farms.map((f) => (
              <a key={f.name} href={lp('/farms')} className="snap-start shrink-0 w-[75vw] sm:w-[45%] lg:w-[30%] group">
                <div className="overflow-hidden aspect-[4/5] mb-4">
                  <img src={f.images[0]} alt={f.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl text-coffee">{f.name}</h3>
                <p className="text-sm mt-1" style={{ color: '#5A4636' }}>{[f.details.location.replace(', Nueva Segovia', ''), f.details.altitude].filter(Boolean).join(' · ')}</p>
              </a>
            ))}
            <a href={lp('/farms') + '#partner-farms'} className="snap-start shrink-0 w-[75vw] sm:w-[45%] lg:w-[30%] group">
              <div className="aspect-[4/5] bg-forest text-parchment flex items-center justify-center p-6 mb-4">
                <h3 className="text-3xl text-parchment">{t('home.farms.partner', { count: farmNetwork.partnerCount })}</h3>
              </div>
              <p className="text-sm text-coffee">{t('home.farms.more')}</p>
            </a>
          </div>
          <a href={lp('/farms')} className="inline-block mt-10 border border-coffee text-coffee px-8 py-4 font-medium tracking-wide hover:bg-coffee hover:text-parchment transition-colors">{t('home.farms.explore')}</a>
        </div>
      </section>

      {/* Numbers band */}
      <section className="py-[72px] md:py-[120px]" style={{ backgroundColor: '#2F4A3A', color: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 text-center items-start gap-10 md:grid-cols-2 md:text-left md:gap-12 lg:grid-cols-4" style={{ containerType: 'inline-size' }}>
          {numbers.map((x) => (
            <div key={x.label}>
              <div className="font-serif whitespace-nowrap leading-none mb-4 text-[clamp(2.25rem,4cqw,4.5rem)]"><CountUp n={x.value} display={x.display} suffix={x.suffix} /></div>
              <div className="text-sm leading-snug line-clamp-2 max-w-[16rem]" style={{ color: 'rgba(255,255,255,0.8)' }}>{x.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-[96px] md:py-[160px] text-center" style={{ backgroundImage: 'url(/media/beneficio-drying-beds.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30,20,14,0.55)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl mb-6" style={{ color: '#F5F0E8' }}>{t('home.cta.title')}</h2>
          <p className="text-xl mb-10" style={{ color: '#F5F0E8' }}>{t('home.cta.text')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${lp('/contact')}?subject=${encodeURIComponent(t('home.cta.samplesSubject'))}`} className="px-8 py-4 font-medium tracking-wide" style={{ backgroundColor: '#9E2B25', color: '#F5F0E8' }}>{t('home.cta.samples')}</a>
            <a href={lp('/contact')} className="px-8 py-4 font-medium tracking-wide border hover:bg-parchment hover:text-coffee transition-colors" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>{t('home.cta.contact')}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeExtraSections;
