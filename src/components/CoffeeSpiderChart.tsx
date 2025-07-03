import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Award } from 'lucide-react';

interface CoffeeSpiderChartProps {
  regionId: string;
  regionName: string;
}

export const CoffeeSpiderChart: React.FC<CoffeeSpiderChartProps> = ({ regionId, regionName }) => {
  // Coffee profile data for different regions based on spider diagrams
  const getCoffeeProfileData = (regionId: string) => {
    const profiles: { [key: string]: any[] } = {
      'nueva-segovia': [
        { attribute: 'Fragancia/Aroma', value: 8.5, fullMark: 10 },
        { attribute: 'Sabor', value: 8.0, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 7.5, fullMark: 10 },
        { attribute: 'Acidez', value: 6.5, fullMark: 10 },
        { attribute: 'Cuerpo', value: 8.0, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 8.0, fullMark: 10 },
        { attribute: 'Balance', value: 8.5, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.5, fullMark: 10 },
        { attribute: 'Uniformidad', value: 9.0, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 8.2, fullMark: 10 }
      ],
      'jinotega': [
        { attribute: 'Fragancia/Aroma', value: 8.0, fullMark: 10 },
        { attribute: 'Sabor', value: 8.5, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 7.5, fullMark: 10 },
        { attribute: 'Acidez', value: 7.0, fullMark: 10 },
        { attribute: 'Cuerpo', value: 8.0, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 8.0, fullMark: 10 },
        { attribute: 'Balance', value: 7.5, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.5, fullMark: 10 },
        { attribute: 'Uniformidad', value: 8.5, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 8.0, fullMark: 10 }
      ],
      'madriz': [
        { attribute: 'Fragancia/Aroma', value: 7.5, fullMark: 10 },
        { attribute: 'Sabor', value: 7.5, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 7.0, fullMark: 10 },
        { attribute: 'Acidez', value: 6.5, fullMark: 10 },
        { attribute: 'Cuerpo', value: 7.0, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 7.5, fullMark: 10 },
        { attribute: 'Balance', value: 7.0, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.0, fullMark: 10 },
        { attribute: 'Uniformidad', value: 7.5, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 7.3, fullMark: 10 }
      ],
      'esteli': [
        { attribute: 'Fragancia/Aroma', value: 7.5, fullMark: 10 },
        { attribute: 'Sabor', value: 8.0, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 7.5, fullMark: 10 },
        { attribute: 'Acidez', value: 6.5, fullMark: 10 },
        { attribute: 'Cuerpo', value: 7.5, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 8.0, fullMark: 10 },
        { attribute: 'Balance', value: 7.5, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.0, fullMark: 10 },
        { attribute: 'Uniformidad', value: 8.0, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 7.6, fullMark: 10 }
      ],
      'matagalpa': [
        { attribute: 'Fragancia/Aroma', value: 8.0, fullMark: 10 },
        { attribute: 'Sabor', value: 7.5, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 7.5, fullMark: 10 },
        { attribute: 'Acidez', value: 7.0, fullMark: 10 },
        { attribute: 'Cuerpo', value: 7.5, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 8.0, fullMark: 10 },
        { attribute: 'Balance', value: 8.0, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.0, fullMark: 10 },
        { attribute: 'Uniformidad', value: 8.0, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 7.7, fullMark: 10 }
      ],
      'rivas': [
        { attribute: 'Fragancia/Aroma', value: 8.5, fullMark: 10 },
        { attribute: 'Sabor', value: 8.0, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 8.0, fullMark: 10 },
        { attribute: 'Acidez', value: 7.5, fullMark: 10 },
        { attribute: 'Cuerpo', value: 7.5, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 8.5, fullMark: 10 },
        { attribute: 'Balance', value: 8.0, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.5, fullMark: 10 },
        { attribute: 'Uniformidad', value: 8.0, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 8.1, fullMark: 10 }
      ],
      'boaco': [
        { attribute: 'Fragancia/Aroma', value: 7.5, fullMark: 10 },
        { attribute: 'Sabor', value: 7.5, fullMark: 10 },
        { attribute: 'Sabor Residual', value: 7.0, fullMark: 10 },
        { attribute: 'Acidez', value: 7.0, fullMark: 10 },
        { attribute: 'Cuerpo', value: 7.5, fullMark: 10 },
        { attribute: 'Taza Limpia', value: 7.5, fullMark: 10 },
        { attribute: 'Balance', value: 7.5, fullMark: 10 },
        { attribute: 'Dulzor', value: 8.0, fullMark: 10 },
        { attribute: 'Uniformidad', value: 7.5, fullMark: 10 },
        { attribute: 'Puntaje Catador', value: 7.4, fullMark: 10 }
      ]
    };

    return profiles[regionId] || [];
  };

  const data = getCoffeeProfileData(regionId);

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-amber-200">
      <h4 className="text-xl font-bold text-amber-900 mb-4">Coffee Characteristics</h4>
      
      {/* Denomination of Origin - Only for regions that have it */}
      {(() => {
        const denominationInfo = {
          'nueva-segovia': {
            name: 'Café Dipilto',
            description: 'The first Designation of Origin of Nicaragua, characterized by its location and processes in the city of specialty coffees.'
          },
          'jinotega': {
            name: 'Café Cuspire',
            description: 'Surrounded by San Rafael del Norte, Jinotega, Santa María de Pantasma and San Sebastián de Yalí, an area of 424 km² with topography, soil and climatic conditions appropriate for coffee cultivation.'
          },
          'madriz': {
            name: 'Café Wiwilí',
            description: 'Has a geographical extension of 2,444.7 km² with the municipalities of Cuá, Bocay and Santa María de Pantasma, which belong to the great Kilambé Massif Natural Reserve.'
          },
          'rivas': {
            name: 'La Isla de Ometepe',
            description: 'Has a surface area of 276 km², divided into two municipalities, Moyogalpa and Altagracia. This land produces more than 265 quintals in 165 hectares of established organic coffee.'
          }
        };
        
        const info = denominationInfo[regionId as keyof typeof denominationInfo];
        
        return info ? (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Award className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold text-gray-700 text-sm">Designation of Origin</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
              <h5 className="font-bold text-blue-900 mb-2">{info.name}</h5>
              <p className="text-blue-800 text-sm leading-relaxed">{info.description}</p>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Award className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold text-gray-700 text-sm">Production Status</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-gray-400">
              <span className="text-gray-700 font-medium text-sm">Regional Coffee Production (No Designation of Origin)</span>
            </div>
          </div>
        );
      })()}
      
      {/* Region Characteristics */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Award className="w-4 h-4 text-gray-600 mr-2" />
          <span className="font-semibold text-gray-700 text-sm">Characteristics</span>
        </div>
        <div className="space-y-2">
          {/* Get characteristics from regionId data */}
          {(() => {
            const regions = {
              'nueva-segovia': ['Highland coffee', 'Complex aromatic profile', 'Balanced acidity', 'Medium-high body'],
              'jinotega': ['Largest coffee producer', 'Cool mountain climate', 'Rich volcanic soils', 'Centenary coffee tradition'],
              'madriz': ['Mountainous microclimate', 'Shade-grown coffee', 'Family production', 'Traditional varieties'],
              'esteli': ['Altitude diversity', 'Transition coffee', 'Active cooperatives', 'Wet processing'],
              'matagalpa': ['Historic coffee tradition', 'Special varieties', 'Advanced technology', 'Competition coffees'],
              'rivas': ['Volcanic island coffee', 'Unique microclimate', 'Boutique production', 'Distinctive profile'],
              'boaco': ['Productive diversification', 'Transition coffee', 'Agroforestry systems', 'Small producers']
            };
            const characteristics = regions[regionId as keyof typeof regions] || [];
            return characteristics.map((characteristic, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-amber-50 rounded-lg border-l-4 border-amber-400"
              >
                <span className="text-amber-800 font-medium text-sm">{characteristic}</span>
              </div>
            ));
          })()}
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid 
              stroke="#f59e0b" 
              strokeWidth={1}
              radialLines={true}
            />
            <PolarAngleAxis 
              dataKey="attribute" 
              tick={{ 
                fontSize: 11, 
                fill: '#92400e',
                fontWeight: 'bold'
              }}
              className="text-xs"
            />
            <PolarRadiusAxis
              angle={0}
              domain={[0, 10]}
              tick={{ fontSize: 10, fill: '#92400e' }}
              tickCount={6}
            />
            <Radar
              name={regionName}
              dataKey="value"
              stroke="#f59e0b"
              fill="#fbbf24"
              fillOpacity={0.3}
              strokeWidth={3}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-center">
        <p className="text-xs text-amber-800 italic">
          Scale 0-10 points | Coffee sensory profile of {regionName}
        </p>
      </div>
    </div>
  );
};