
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const WorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const markets = [
    { name: "USA", coordinates: [-95.7129, 37.0902], color: "#d97706", description: "North American specialty coffee market" },
    { name: "UK", coordinates: [-3.436, 55.378], color: "#ea580c", description: "British Isles premium coffee segment" },
    { name: "Europe", coordinates: [10.451526, 51.165691], color: "#dc2626", description: "Continental European markets" },
    { name: "Middle East", coordinates: [45.079162, 23.885942], color: "#b91c1c", description: "Growing Middle Eastern coffee culture" },
    { name: "China", coordinates: [104.195397, 35.86166], color: "#991b1b", description: "Expanding Chinese specialty coffee market" },
    { name: "Southeast Asia", coordinates: [101.975766, 4.210484], color: "#7c2d12", description: "Emerging Southeast Asian markets" },
    { name: "Australia", coordinates: [133.775136, -25.274398], color: "#a16207", description: "Australian coffee connoisseurs" }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnVobG9yaWdpbiIsImEiOiJjbWNtNWhvaDAwYm03MmpzZGd3M2t3aDQ2In0.MtZWli9bG73mspo2-2ct8Q';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [20, 20],
      zoom: 1.2,
      projection: 'naturalEarth'
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      // Add Nicaragua origin marker
      const nicaraguaEl = document.createElement('div');
      nicaraguaEl.style.cssText = `
        width: 16px;
        height: 16px;
        background: #fbbf24;
        border: 3px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      `;

      const nicaraguaPopup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: false 
      }).setHTML(`
        <div style="padding: 8px; text-align: center;">
          <h3 style="margin: 0 0 4px 0; color: #fbbf24; font-weight: bold;">NICARAGUA</h3>
          <p style="margin: 0; color: #6b7280; font-size: 12px;">Coffee Origin</p>
        </div>
      `);

      new mapboxgl.Marker(nicaraguaEl)
        .setLngLat([-86.1, 13.7])
        .setPopup(nicaraguaPopup)
        .addTo(map.current!);

      // Add market markers
      markets.forEach((market) => {
        const markerEl = document.createElement('div');
        markerEl.style.cssText = `
          width: 20px;
          height: 20px;
          background: ${market.color};
          border: 3px solid #ffffff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        `;

        const popup = new mapboxgl.Popup({ 
          offset: 25,
          closeButton: false 
        }).setHTML(`
          <div style="padding: 10px; text-align: center;">
            <h3 style="margin: 0 0 8px 0; color: ${market.color}; font-weight: bold;">${market.name}</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">${market.description}</p>
          </div>
        `);

        new mapboxgl.Marker(markerEl)
          .setLngLat(market.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-epic relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-traceability"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global <span className="text-coffee-gold">Markets</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Serving specialty coffee roasters and distributors across continents with exceptional Nicaraguan coffee
          </p>
        </div>

        {/* Mapbox World Map */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-12 border border-white/20">
          <div 
            ref={mapContainer} 
            className="w-full h-[500px] rounded-xl shadow-2xl"
          />
        </div>

        {/* Market Information Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {markets.map((market, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div 
                className="w-6 h-6 rounded-full mx-auto mb-3"
                style={{ backgroundColor: market.color }}
              ></div>
              <h3 className="text-white font-semibold text-sm">{market.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-stone-300 text-lg">
            Interested in becoming a partner? 
            <a href="/contact" className="text-coffee-gold hover:text-coffee-cherry font-semibold ml-2">
              Contact us today →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
