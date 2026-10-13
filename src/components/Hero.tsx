import * as React from "react";
import heroVideo from "../assets/hero-loop-1080p.mp4.asset.json";
import heroVideoMobile from "../assets/hero-loop-mobile-720p.mp4.asset.json";
import heroPoster from "../assets/hero-poster.jpg.asset.json";

const NARROW_QUERY = "(max-width: 767px)";

const isNarrowViewport = () =>
  typeof window !== "undefined" && window.matchMedia(NARROW_QUERY).matches;

const Hero = () => {
  const [isNarrow, setIsNarrow] = React.useState<boolean>(isNarrowViewport);

  React.useEffect(() => {
    const mql = window.matchMedia(NARROW_QUERY);
    const onChange = () => setIsNarrow(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const videoSrc = isNarrow ? heroVideoMobile.url : heroVideo.url;

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      {/* Hero video background */}
      <div className="absolute inset-0 overflow-hidden bg-coffee">
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={heroPoster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        ></video>
        <div className="absolute inset-0 bg-coffee/55"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="eyebrow !text-amber-300">Specialty Coffee Export · Nicaragua</span>
        <h1 className="text-parchment mb-12 leading-tight">
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
