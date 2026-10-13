import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Adds a gentle fade-up to every section as it scrolls into view.
const ScrollEffects = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('main section, #root section')).filter(
      (el) => el.id !== 'home'
    );
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in-view'), io.unobserve(e.target))),
      { threshold: 0.08 }
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('fade-up');
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
};

export default ScrollEffects;
