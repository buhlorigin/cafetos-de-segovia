import React from 'react';
import { Award, Coffee } from 'lucide-react';
import { CoffeeSpiderChart } from './CoffeeSpiderChart';

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

interface CoffeeRegionDetailsProps {
  region: Region;
}

// Define which regions have Denomination of Origin and their coffee details
const regionCoffeeData: { [key: string]: any } = {
  'nueva-segovia': {
    hasDenomination: true,
    coffeeName: 'Café Dipilto',
    denominationText: 'First Designation of Origin',
    description: 'Café Dipilto is Nicaragua\'s first Designation of Origin, distinguished by its production and processes in specialty coffee quality.',
    cupProfile: 'Nueva Segovia Department is characterized by coffee with sweet flavors, excellent uniformity, good body and balance, medium acidity, in addition to highlighting its flavors and fragrances/aromas.'
  },
  'jinotega': {
    hasDenomination: true,
    coffeeName: 'Café Cuspire',
    denominationText: 'Designation of Origin',
    description: 'Café Cuspire represents the excellence of Jinotega\'s coffee tradition, known for its exceptional quality and unique mountain terroir characteristics.',
    cupProfile: 'Jinotega coffee is characterized by its complex aromatic profile, bright acidity, full body, and exceptional flavor clarity with notes of chocolate and citrus fruits.'
  },
  'madriz': {
    hasDenomination: true,
    coffeeName: 'Café Wiwilí',
    denominationText: 'Designation of Origin',
    description: 'Café Wiwilí showcases the unique characteristics of Madriz\'s mountainous microclimate and traditional farming methods.',
    cupProfile: 'Madriz coffee offers a balanced cup with medium body, gentle acidity, and distinctive sweet notes with hints of nuts and caramel.'
  },
  'rivas': {
    hasDenomination: true,
    coffeeName: 'La Isla de Ometepe',
    denominationText: 'Designation of Origin',
    description: 'La Isla de Ometepe produces coffee with unique volcanic island characteristics, creating a distinctive and exclusive flavor profile.',
    cupProfile: 'Ometepe coffee is distinguished by its unique volcanic terroir, offering medium body, bright acidity, and complex flavors with tropical fruit notes.'
  },
  'esteli': {
    hasDenomination: false,
    description: 'Regional Coffee Production (No Designation of Origin)',
    cupProfile: 'Estelí produces quality coffee with varying altitude characteristics, offering medium body, balanced acidity, and traditional flavor profiles.'
  },
  'matagalpa': {
    hasDenomination: false,
    description: 'Regional Coffee Production (No Designation of Origin)',
    cupProfile: 'Matagalpa, known as the Coffee Capital, produces exceptional specialty coffees with full body, complex flavors, and bright acidity with chocolate and floral notes.'
  },
  'boaco': {
    hasDenomination: false,
    description: 'Regional Coffee Production (No Designation of Origin)',
    cupProfile: 'Boaco produces diversified coffee with medium body, gentle acidity, and traditional characteristics suited for various brewing methods.'
  }
};

export const CoffeeRegionDetails: React.FC<CoffeeRegionDetailsProps> = ({ region }) => {
  const coffeeData = regionCoffeeData[region.id];
  
  if (!coffeeData) return null;

  return (
    <div className="mt-16 bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Coffee className="w-8 h-8 text-amber-700 mr-3" />
        <h2 className="text-3xl font-bold text-amber-800">
          Coffee Information - {region.name}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Coffee Details */}
        <div className="space-y-8">
          {/* Coffee Name Section */}
          {coffeeData.hasDenomination && (
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                {coffeeData.coffeeName}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                {coffeeData.description}
              </p>
              <div className="inline-block">
                <div className="flex items-center bg-amber-100 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-700 mr-2" />
                  <span className="text-amber-800 font-semibold">
                    {coffeeData.denominationText}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* No Denomination Section */}
          {!coffeeData.hasDenomination && (
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                {region.name} Coffee
              </h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                {coffeeData.description}
              </p>
            </div>
          )}

          {/* Cup Profile Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200">
            <div className="flex items-center mb-4">
              <Coffee className="w-6 h-6 text-amber-700 mr-2" />
              <h4 className="text-xl font-bold text-amber-800">Cup Profile</h4>
            </div>
            <p className="text-stone-600 leading-relaxed italic">
              {coffeeData.cupProfile}
            </p>
          </div>
        </div>

        {/* Right Side - Sensory Diagram */}
        <div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-amber-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-bold text-amber-800">
                Coffee Sensory Diagram
              </h4>
            </div>
            <div className="h-80">
              <CoffeeSpiderChart 
                regionId={region.id} 
                regionName={region.name} 
              />
            </div>
            <p className="text-center text-sm text-stone-500 mt-4">
              Scale of 0-10 points / Sensory profile of {region.name} coffee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};