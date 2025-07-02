import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const EnhancedMapbox = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey] = useState('pk.eyJ1IjoiYnVobG9yaWdpbiIsImEiOiJjbWNtNWhvaDAwYm03MmpzZGd3M2t3aDQ2In0.MtZWli9bG73mspo2-2ct8Q');
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coffee farm locations in Nicaragua
  const farmLocations = [
    {
      name: "Finca Bethania",
      coordinates: [-86.1167, 13.7167], // Dipilto, Nueva Segovia
      description: "High-altitude farm producing Cup of Excellence level quality coffees"
    },
    {
      name: "Finca Las Hortensias", 
      coordinates: [-86.1000, 13.7000], // Buenos Aires, Dipilto
      description: "Multiple Cup of Excellence finalist with expressive lots"
    }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey) return;

    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-86.1, 13.7], // Nueva Segovia, Nicaragua
      zoom: 10,
      pitch: 45,
      bearing: -15
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add farm markers
      farmLocations.forEach((farm, index) => {
        // Create custom marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';
        markerEl.style.cssText = `
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #b45309, #d97706);
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 14px;
        `;
        markerEl.innerHTML = (index + 1).toString();

        // Create popup
        const popup = new mapboxgl.Popup({ 
          offset: 25,
          closeButton: false,
          className: 'farm-popup'
        }).setHTML(`
          <div style="padding: 10px; text-align: center;">
            <h3 style="margin: 0 0 8px 0; color: #b45309; font-weight: bold;">${farm.name}</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">${farm.description}</p>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat(farm.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Add coffee region highlighting
      map.current!.addSource('nicaragua-coffee-region', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {
            name: 'Nueva Segovia Coffee Region'
          },
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [-86.3, 13.5],
              [-85.8, 13.5], 
              [-85.8, 13.9],
              [-86.3, 13.9],
              [-86.3, 13.5]
            ]]
          }
        }
      });

      map.current!.addLayer({
        id: 'coffee-region-fill',
        type: 'fill',
        source: 'nicaragua-coffee-region',
        paint: {
          'fill-color': '#b45309',
          'fill-opacity': 0.2
        }
      });

      map.current!.addLayer({
        id: 'coffee-region-border',
        type: 'line',
        source: 'nicaragua-coffee-region',
        paint: {
          'line-color': '#b45309',
          'line-width': 3,
          'line-opacity': 0.8
        }
      });

      // Smooth flyTo animation showcasing the region
      setTimeout(() => {
        map.current?.flyTo({
          center: [-86.1, 13.7],
          zoom: 11,
          pitch: 60,
          bearing: 30,
          duration: 3000,
          essential: true
        });
      }, 1000);
    });
  };

  useEffect(() => {
    initializeMap();
  }, []);

  // Remove the handleApiKeySubmit function since we auto-initialize

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-500/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Coffee <span className="text-amber-400">Origins</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Discover the highland terroir of Nueva Segovia, where our exceptional coffees are cultivated in perfect harmony with nature
          </p>
        </div>

        <div className="relative">
          <div 
            ref={mapContainer} 
            className="w-full h-[600px] rounded-2xl shadow-2xl border border-white/20"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {farmLocations.map((farm, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{farm.name}</h3>
              </div>
              <p className="text-stone-300">{farm.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedMapbox;