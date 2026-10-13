import * as React from "react";

const Hero = () => {
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden bg-coffee">
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/media/hero-loop-mobile-720p.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/media/hero-loop-1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30,20,14,0.45)" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="eyebrow !text-amber-300">Specialty Coffee Export · Nicaragua</span>
        <h1
          className="text-parchment mb-12 mx-auto"
          style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", lineHeight: 1.1, maxWidth: "900px" }}
        >
          Cafetos de Segovia is your partner in finding the best Specialty Coffees in Nueva Segovia
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/services"
            className="bg-cherry text-parchment px-8 py-4 font-medium tracking-wide hover:bg-amber-800 transition-colors duration-200"
          >
            Our Services
          </a>
          <a
            href="/farms"
            className="border border-parchment text-parchment px-8 py-4 font-medium tracking-wide hover:bg-parchment hover:text-coffee transition-colors duration-200"
          >
            Our Farms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
