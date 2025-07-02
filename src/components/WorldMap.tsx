
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const WorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapboxToken = 'pk.eyJ1IjoiYnVobG9yaWdpbiIsImEiOiJjbWNtNWhvaDAwYm03MmpzZGd3M2t3aDQ2In0.MtZWli9bG73mspo2-2ct8Q';

  const countries = ["USA", "UK", "Europe", "China", "Southeast Asia", "Australia", "Middle East"];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'naturalEarth',
      zoom: 1.2,
      center: [20, 20],
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Highlighted regions coordinates
    const regions: { name: string; coordinates: [number, number] }[] = [
      // USA
      { name: "USA", coordinates: [-95.7129, 37.0902] },
      // UK
      { name: "UK", coordinates: [-3.436, 55.378] },
      // Europe (Central)
      { name: "Europe", coordinates: [10.451526, 51.165691] },
      // China
      { name: "China", coordinates: [104.195397, 35.86166] },
      // Southeast Asia (Thailand/Vietnam area)
      { name: "Southeast Asia", coordinates: [101.975766, 4.210484] },
      // Australia
      { name: "Australia", coordinates: [133.775136, -25.274398] },
      // Middle East (Saudi Arabia/UAE area)
      { name: "Middle East", coordinates: [45.079162, 23.885942] }
    ];

    map.current.on('load', () => {
      // Add markers for each region
      regions.forEach((region) => {
        // Create a custom marker element
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = '#dc2626'; // red-600
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid #ffffff';
        el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        // Add popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          closeOnClick: false
        }).setHTML(`<div style="font-weight: bold; color: #dc2626;">${region.name}</div>`);

        // Create marker
        new mapboxgl.Marker(el)
          .setLngLat(region.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

        // Show popup on hover
        el.addEventListener('mouseenter', () => popup.addTo(map.current!));
        el.addEventListener('mouseleave', () => popup.remove());
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-8">
            Our <span className="text-amber-700">Global</span> Markets
          </h2>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto">
            Cafetos de Segovia exports premium specialty coffee to discerning roasters and importers worldwide.
          </p>
        </div>

        <div className="mb-8">
          <div 
            ref={mapContainer} 
            className="w-full h-96 rounded-lg shadow-lg border border-stone-200" 
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
          {countries.map((country) => (
            <div key={country} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-stone-800">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
