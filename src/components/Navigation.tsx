import { useTranslation } from 'react-i18next';
import { LanguageToggle, basePath, useLocale } from '@/lib/locale';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { t } = useTranslation();
  const { lp } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: lp('/') },
    { name: t('nav.about'), href: lp('/about') },
    { name: t('nav.services'), href: lp('/services') },
    { name: t('nav.farms'), href: lp('/farms') },
    { name: t('nav.nicaragua'), href: lp('/nicaragua') },
    { name: t('nav.contact'), href: lp('/contact') },
  ];

  const solid = scrolled || basePath(window.location.pathname) !== '/';
  const text = solid ? 'text-coffee' : 'text-parchment';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? 'bg-parchment/80 backdrop-blur-md border-b border-stone-200' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-24">
            <a href={lp('/')} className="flex items-center gap-3">
              <img src={solid ? '/brand/cafetos-logo-transparent.png' : '/brand/cafetos-logo-light.png'} alt="Cafetos de Segovia" className="h-12 md:h-16 w-auto" />
              <span className={`font-serif text-2xl transition-colors duration-500 ${text}`}>Cafetos de Segovia</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm uppercase tracking-[0.18em] transition-colors duration-300 hover:text-cherry ${text}`}
                >
                  {item.name}
                </a>
              ))}
              <LanguageToggle className={text} />
            </div>

            <button onClick={() => setIsOpen(true)} className={`md:hidden ${text}`} aria-label={t('nav.openMenu')}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-parchment flex flex-col md:hidden">
          <div className="flex justify-between items-center h-20 px-6">
            <span className="font-serif text-2xl text-coffee">Cafetos de Segovia</span>
            <button onClick={() => setIsOpen(false)} className="text-coffee" aria-label={t('nav.closeMenu')}>
              <X size={28} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="font-serif text-4xl text-coffee hover:text-cherry">
                {item.name}
              </a>
            ))}
            <LanguageToggle className="text-coffee mt-4 text-base" onSwitch={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
