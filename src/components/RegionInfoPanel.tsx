import React from 'react';
import { MapPin, Building, Mountain, Users, Award, TrendingUp } from 'lucide-react';

interface RegionInfoPanelProps {
  region: {
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
  } | null;
}

export const RegionInfoPanel: React.FC<RegionInfoPanelProps> = ({ region }) => {
  if (!region) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 h-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Select a department</h3>
          <p className="text-sm">
            Click on any department on the map to see detailed information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header with region color */}
      <div 
        className="h-24 flex items-center justify-center text-white relative"
        style={{ backgroundColor: region.color }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold">{region.name}</h2>
          <p className="text-sm opacity-90">Department of Nicaragua</p>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* General Information Section */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            General Information
          </h3>
          
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-gray-600 mr-2" />
                <span className="font-semibold text-gray-700 text-sm">Area</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{region.coffeeInfo.area}</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center mb-2">
                <Mountain className="w-4 h-4 text-gray-600 mr-2" />
                <span className="font-semibold text-gray-700 text-sm">Altitude</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{region.coffeeInfo.altitude}</p>
            </div>
          </div>
          
          {/* Production */}
          <div className="bg-green-50 rounded-lg p-3 mb-4">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
              <span className="font-semibold text-green-700 text-sm">Main Production</span>
            </div>
            <p className="text-base font-bold text-green-900">{region.coffeeInfo.production}</p>
          </div>
          
          {/* Municipalities */}
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <Building className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold text-gray-700 text-sm">Municipalities</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {region.coffeeInfo.municipalities.map((municipality, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {municipality}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};