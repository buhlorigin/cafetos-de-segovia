import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapboxNicaraguaMap } from '../components/MapboxNicaraguaMap';
import { RegionInfoPanel } from '../components/RegionInfoPanel';
import { CoffeeSpiderChart } from '../components/CoffeeSpiderChart';

interface Region {
  id: string;
  name: string;
  color: string;
  coordinates: [number, number];
  coffeeInfo: {
    denomination: string;
    area: string;
    municipalities: string[];
    characteristics: string[];
    altitude: string;
    production: string;
    coffeeDetails?: {
      name: string;
      description: string;
      established: string;
      cupProfile?: string;
    };
  };
}

const Nicaragua = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            <span className="text-amber-700">Nicaragua</span> Cafetalera
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed font-medium">
            Explora las regiones productoras de café de Nicaragua y sus perfiles únicos
          </p>
        </div>
      </section>

      {/* Interactive Map and Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Map */}
            <div className="bg-stone-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-700 mb-6 text-center">
                Mapa Interactivo de Departamentos Cafeteros
              </h3>
              <div className="h-96">
                <MapboxNicaraguaMap 
                  onRegionSelect={setSelectedRegion}
                  selectedRegion={selectedRegion}
                />
              </div>
            </div>
            
            {/* Region Info Panel */}
            <div className="h-96">
              <RegionInfoPanel region={selectedRegion} />
            </div>
          </div>
          
          {/* Coffee Spider Chart */}
          {selectedRegion && (
            <div className="mt-12">
              <CoffeeSpiderChart 
                regionId={selectedRegion.id} 
                regionName={selectedRegion.name} 
              />
            </div>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Nicaragua;