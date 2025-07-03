import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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
  );
};