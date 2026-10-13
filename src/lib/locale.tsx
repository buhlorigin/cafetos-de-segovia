import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import i18n, { type Lang } from '@/i18n';

const SITE = 'https://cafetos-de-segovia.lovable.app';
const STORAGE_KEY = 'lang';
const BANNER_KEY = 'lang-banner-dismissed';

/** Strip the /es prefix to get the language-neutral path. */
export const basePath = (pathname: string) => {
  if (pathname === '/es') return '/';
  return pathname.startsWith('/es/') ? pathname.slice(3) : pathname;
};

export const localizedPath = (path: string, lang: Lang) => {
  if (lang === 'en') return path;
  if (path === '/') return '/es';
  return `/es${path}`;
};

export const useLocale = () => {
  const { i18n: inst } = useTranslation();
  const lang = (inst.language === 'es' ? 'es' : 'en') as Lang;
  return { lang, lp: (path: string) => localizedPath(path, lang) };
};

const pageKey = (path: string) => {
  const seg = path.split('/')[1] || 'home';
  return ['home', 'about', 'services', 'farms', 'nicaragua', 'contact'].includes(seg) ? seg : 'notFound';
};

/** Wraps every route: applies the URL's language, sets <html lang>, per-page meta and hreflang links. */
export const LocaleLayout = ({ lang }: { lang: Lang }) => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [banner, setBanner] = useState(false);
  if (i18n.language !== lang) i18n.changeLanguage(lang);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (lang === 'en' && stored === 'es') {
      navigate(localizedPath(basePath(pathname), 'es') + search + hash, { replace: true });
      return;
    }
    if (!stored && lang === 'en' && !localStorage.getItem(BANNER_KEY) && navigator.language?.toLowerCase().startsWith('es')) setBanner(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const base = basePath(pathname);
  const key = pageKey(base);
  const href = (l: Lang) => SITE + (localizedPath(base, l) === '/' ? '/' : localizedPath(base, l));

  const dismiss = () => { localStorage.setItem(BANNER_KEY, '1'); setBanner(false); };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t(`meta.${key}.title`)}</title>
        <meta name="description" content={t(`meta.${key}.description`)} />
        <meta property="og:title" content={t(`meta.${key}.title`)} />
        <meta property="og:description" content={t(`meta.${key}.description`)} />
        <meta property="og:url" content={href(lang)} />
        <link rel="canonical" href={href(lang)} />
        <link rel="alternate" hrefLang="en" href={href('en')} />
        <link rel="alternate" hrefLang="es" href={href('es')} />
        <link rel="alternate" hrefLang="x-default" href={href('en')} />
      </Helmet>
      <Outlet />
      {banner && (
        <div lang="es" role="region" aria-label="Idioma" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-sm z-[70] bg-parchment border border-stone-300 shadow-lg p-4 flex items-center gap-4 text-coffee">
          <p className="text-sm flex-1">{i18n.getFixedT('es')('banner.text')}</p>
          <button onClick={() => { localStorage.setItem(STORAGE_KEY, 'es'); setBanner(false); navigate(localizedPath(base, 'es') + search + hash); }} className="text-sm font-medium text-cherry underline underline-offset-4">{t('banner.switch')}</button>
          <button onClick={dismiss} aria-label={i18n.getFixedT('es')('banner.dismiss')} className="text-xl leading-none text-coffee">×</button>
        </div>
      )}
    </>
  );
};

/** "EN | ES" switch keeping the current page. */
export const LanguageToggle = ({ className = '', onSwitch }: { className?: string; onSwitch?: () => void }) => {
  const { lang } = useLocale();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const go = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    onSwitch?.();
    if (l !== lang) navigate(localizedPath(basePath(pathname), l) + search + hash);
  };
  return (
    <div role="group" aria-label={t('nav.language')} className={`flex items-center gap-2 text-sm tracking-[0.18em] ${className}`}>
      {(['en', 'es'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="opacity-60">|</span>}
          <button onClick={() => go(l)} aria-pressed={l === lang} lang={l} className={`uppercase transition-colors hover:text-cherry ${l === lang ? '!text-cherry font-medium' : ''}`}>{l}</button>
        </span>
      ))}
    </div>
  );
};
