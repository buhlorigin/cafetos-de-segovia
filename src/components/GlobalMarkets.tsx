import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

// Market locations with coordinates (longitude, latitude)
const markets = [
  { name: "USA", coordinates: [-98, 39], color: "#d97706" },
  { name: "UK", coordinates: [-3, 55], color: "#ea580c" },
  { name: "Europe", coordinates: [10, 54], color: "#dc2626" },
  { name: "China", coordinates: [104, 35], color: "#b91c1c" },
  { name: "Middle East", coordinates: [47, 29], color: "#991b1b" },
  { name: "Southeast Asia", coordinates: [101, 13], color: "#7c2d12" },
  { name: "Australia", coordinates: [133, -27], color: "#a16207" }
];

// Convert lat/lng to 3D coordinates on sphere
const latLngToVector3 = (lat: number, lng: number, radius: number = 2) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

// Globe component
const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1e293b"
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Market markers */}
      {markets.map((market, index) => {
        const position = latLngToVector3(market.coordinates[1], market.coordinates[0]);
        return (
          <group key={index}>
            <mesh position={[position.x, position.y, position.z]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color={market.color} emissive={market.color} emissiveIntensity={0.3} />
            </mesh>
            <Html position={[position.x * 1.2, position.y * 1.2, position.z * 1.2]}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-stone-800 shadow-lg border border-white/50">
                {market.name}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

const GlobalMarkets = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-500/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global <span className="text-amber-400">Markets</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Serving specialty coffee roasters and distributors across continents with exceptional Nicaraguan coffee
          </p>
        </div>

        <div className="relative">
          <div 
            className="w-full h-[600px] rounded-2xl overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[10, 10, 5]} 
                intensity={1}
                color="#ffffff"
              />
              <directionalLight 
                position={[-10, -10, -5]} 
                intensity={0.3}
                color="#f59e0b"
              />
              <Globe />
              <OrbitControls 
                enableZoom={true} 
                enablePan={false}
                autoRotate={!isHovered}
                autoRotateSpeed={0.5}
                minDistance={4}
                maxDistance={10}
              />
            </Canvas>
          </div>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
          {markets.map((market, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
              <div 
                className="w-4 h-4 rounded-full mx-auto mb-2"
                style={{ backgroundColor: market.color }}
              ></div>
              <h3 className="text-white font-semibold text-sm">{market.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-stone-300 text-lg">
            Interested in becoming a partner? 
            <a href="/contact" className="text-amber-400 hover:text-amber-300 font-semibold ml-2">
              Contact us today →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;