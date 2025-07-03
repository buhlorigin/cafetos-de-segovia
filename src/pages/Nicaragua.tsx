import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { NicaraguaMap } from '../components/NicaraguaMap';
import { RegionInfoPanel } from '../components/RegionInfoPanel';
import { CoffeeSpiderChart } from '../components/CoffeeSpiderChart';

interface Region {
  id: string;
  name: string;
  color: string;
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
                Mapa Interactivo de Regiones Cafeteras
              </h3>
              <div className="h-96">
                <NicaraguaMap 
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

      {/* Coffee Regions Overview */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">
            Regiones Cafeteras de Nicaragua
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-700 mb-4">Nueva Segovia</h3>
              <p className="text-stone-600 mb-4">
                Región montañosa fronteriza con Honduras, conocida por sus cafés de altura 
                con perfiles aromáticos complejos y acidez balanceada.
              </p>
              <div className="text-sm text-stone-500">
                <span className="font-semibold">Altitud:</span> 800-1,400 msnm
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-700 mb-4">Jinotega</h3>
              <p className="text-stone-600 mb-4">
                El mayor productor de café del país, con clima fresco de montaña 
                y suelos volcánicos ricos que producen cafés premium.
              </p>
              <div className="text-sm text-stone-500">
                <span className="font-semibold">Altitud:</span> 1,000-1,500 msnm
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-700 mb-4">Matagalpa</h3>
              <p className="text-stone-600 mb-4">
                Conocida como la "Capital del Café", con tradición cafetalera histórica 
                y producción de cafés gourmet de competencia.
              </p>
              <div className="text-sm text-stone-500">
                <span className="font-semibold">Altitud:</span> 800-1,300 msnm
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nicaragua;