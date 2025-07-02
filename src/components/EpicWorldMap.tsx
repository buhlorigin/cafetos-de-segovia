import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { TextureLoader, Vector3 } from 'three';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Globe component with interactive markers
const Globe = ({ onRegionClick }: { onRegionClick: (region: string) => void }) => {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState<string | null>(null);
  
  // Load earth texture (using a free earth texture URL)
  const earthTexture = useLoader(TextureLoader, 'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg');
  
  // Region coordinates on the sphere
  const regions = [
    { name: "USA", position: new Vector3(-1.2, 0.5, 0.8), color: "#dc2626" },
    { name: "UK", position: new Vector3(-0.1, 1.2, 0.3), color: "#dc2626" },
    { name: "Europe", position: new Vector3(0.3, 1.0, 0.8), color: "#dc2626" },
    { name: "China", position: new Vector3(1.8, 0.8, 0.2), color: "#dc2626" },
    { name: "Southeast Asia", position: new Vector3(1.6, 0.2, 0.8), color: "#dc2626" },
    { name: "Australia", position: new Vector3(1.4, -0.8, 0.6), color: "#dc2626" },
    { name: "Middle East", position: new Vector3(0.8, 0.6, 1.2), color: "#dc2626" }
  ];

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshPhongMaterial map={earthTexture} />
      </Sphere>
      
      {/* Region markers */}
      {regions.map((region) => (
        <group key={region.name}>
          <Sphere
            position={region.position}
            args={[0.05, 16, 16]}
            onClick={() => onRegionClick(region.name)}
            onPointerOver={() => setHovered(region.name)}
            onPointerOut={() => setHovered(null)}
          >
            <meshBasicMaterial color={hovered === region.name ? "#fbbf24" : region.color} />
          </Sphere>
          
          {hovered === region.name && (
            <Html position={region.position} center>
              <div className="bg-stone-900 text-white px-3 py-1 rounded-lg shadow-lg pointer-events-none">
                <span className="text-sm font-semibold">{region.name}</span>
              </div>
            </Html>
          )}
        </group>
      ))}
      
      {/* Atmosphere glow */}
      <Sphere args={[2.05, 64, 64]}>
        <meshBasicMaterial color="#4ade80" transparent opacity={0.1} />
      </Sphere>
    </group>
  );
};

// Mapbox detailed view component
const MapboxView = ({ selectedRegion, onBack }: { selectedRegion: string; onBack: () => void }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapboxToken = 'pk.eyJ1IjoiYnVobG9yaWdpbiIsImEiOiJjbWNtNWhvaDAwYm03MmpzZGd3M2t3aDQ2In0.MtZWli9bG73mspo2-2ct8Q';

  // Region coordinates for detailed view
  const regionCoords: { [key: string]: { center: [number, number]; zoom: number } } = {
    "USA": { center: [-95.7129, 37.0902], zoom: 3 },
    "UK": { center: [-3.436, 55.378], zoom: 5 },
    "Europe": { center: [10.451526, 51.165691], zoom: 3 },
    "China": { center: [104.195397, 35.86166], zoom: 3 },
    "Southeast Asia": { center: [101.975766, 4.210484], zoom: 3 },
    "Australia": { center: [133.775136, -25.274398], zoom: 3 },
    "Middle East": { center: [45.079162, 23.885942], zoom: 3 }
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    const coords = regionCoords[selectedRegion] || { center: [0, 0], zoom: 1 };
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: coords.center as [number, number],
      zoom: coords.zoom,
      pitch: 45,
      bearing: 0
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker for the region
    new mapboxgl.Marker({ color: '#dc2626' })
      .setLngLat(coords.center as [number, number])
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [selectedRegion]);

  return (
    <div className="relative w-full h-full">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-10 bg-stone-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-stone-800 transition-colors"
      >
        ← Back to Globe
      </button>
      <div 
        ref={mapContainer} 
        className="w-full h-full rounded-lg" 
      />
    </div>
  );
};

const EpicWorldMap = () => {
  const [view, setView] = useState<'globe' | 'map'>('globe');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setView('map');
  };

  const handleBackToGlobe = () => {
    setView('globe');
    setSelectedRegion('');
  };

  const countries = ["USA", "UK", "Europe", "China", "Southeast Asia", "Australia", "Middle East"];

  return (
    <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="text-amber-400">Global</span> Markets
          </h2>
          <p className="text-2xl text-stone-300 max-w-4xl mx-auto">
            Cafetos de Segovia exports premium specialty coffee to discerning roasters and importers worldwide.
          </p>
        </div>

        <div className="mb-8">
          <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl border border-stone-700">
            {view === 'globe' ? (
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Suspense fallback={null}>
                  <Globe onRegionClick={handleRegionClick} />
                </Suspense>
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={false}
                  minDistance={3}
                  maxDistance={8}
                />
              </Canvas>
            ) : (
              <MapboxView selectedRegion={selectedRegion} onBack={handleBackToGlobe} />
            )}
          </div>
          
          {view === 'globe' && (
            <p className="text-center text-stone-400 mt-4 text-lg">
              🌍 Click on red markers to explore detailed market views
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
          {countries.map((country) => (
            <div 
              key={country} 
              className="bg-stone-800 p-6 rounded-lg shadow-lg border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer"
              onClick={() => handleRegionClick(country)}
            >
              <h3 className="text-lg font-semibold text-white">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpicWorldMap;