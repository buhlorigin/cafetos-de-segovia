import React, { useState } from 'react';

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

interface NicaraguaMapProps {
  onRegionSelect: (region: Region | null) => void;
  selectedRegion: Region | null;
}

const regions: Region[] = [
  {
    id: 'nueva-segovia',
    name: 'Nueva Segovia',
    color: '#8B5A3C',
    coffeeInfo: {
      denomination: 'Denominación de Origen',
      area: '3,491 km²',
      municipalities: ['Jalapa', 'Ocotal', 'Ciudad Antigua', 'Dipilto', 'El Jícaro', 'Macuelizo', 'Mozonte', 'Murra', 'Quilalí', 'San Fernando', 'Santa María', 'Wiwilí'],
      characteristics: ['Café de altura', 'Perfil aromático complejo', 'Acidez balanceada', 'Cuerpo medio-alto'],
      altitude: '800-1,400 msnm',
      production: 'Café arábica de especialidad'
    }
  },
  {
    id: 'jinotega',
    name: 'Jinotega',
    color: '#2D5016',
    coffeeInfo: {
      denomination: 'Región Cafetalera',
      area: '9,755 km²',
      municipalities: ['Jinotega', 'La Concordia', 'San Rafael del Norte', 'San Sebastián de Yalí', 'Santa María de Pantasma', 'Wiwilí de Jinotega'],
      characteristics: ['Mayor productor de café', 'Clima fresco de montaña', 'Suelos volcánicos ricos', 'Tradición cafetalera centenaria'],
      altitude: '1,000-1,500 msnm',
      production: 'Café arábica premium'
    }
  },
  {
    id: 'madriz',
    name: 'Madriz',
    color: '#B8860B',
    coffeeInfo: {
      denomination: 'Zona Cafetalera',
      area: '1,708 km²',
      municipalities: ['Somoto', 'Cusmapa', 'Las Sabanas', 'Palacagüina', 'San José de Cusmapa', 'San Juan de Río Coco', 'San Lucas', 'Telpaneca', 'Totogalpa', 'Yalagüina'],
      characteristics: ['Microclima montañoso', 'Café de sombra', 'Producción familiar', 'Variedades tradicionales'],
      altitude: '600-1,200 msnm',
      production: 'Café arábica tradicional'
    }
  },
  {
    id: 'esteli',
    name: 'Estelí',
    color: '#CD853F',
    coffeeInfo: {
      denomination: 'Región Productora',
      area: '2,230 km²',
      municipalities: ['Estelí', 'Condega', 'La Trinidad', 'Pueblo Nuevo', 'San Juan de Limay'],
      characteristics: ['Diversidad de alturas', 'Café de transición', 'Cooperativas activas', 'Procesamiento húmedo'],
      altitude: '400-1,100 msnm',
      production: 'Café arábica comercial'
    }
  },
  {
    id: 'matagalpa',
    name: 'Matagalpa',
    color: '#228B22',
    coffeeInfo: {
      denomination: 'Capital del Café',
      area: '6,804 km²',
      municipalities: ['Matagalpa', 'Ciudad Darío', 'Esquipulas', 'Matigúas', 'Muy Muy', 'Rancho Grande', 'Río Blanco', 'San Dionisio', 'San Isidro', 'San Ramón', 'Sébaco', 'Terrabona', 'Tuma-La Dalia'],
      characteristics: ['Tradición cafetalera histórica', 'Variedades especiales', 'Tecnificación avanzada', 'Cafés de competencia'],
      altitude: '800-1,300 msnm',
      production: 'Café arábica gourmet'
    }
  },
  {
    id: 'rivas',
    name: 'Rivas',
    color: '#4682B4',
    coffeeInfo: {
      denomination: 'Zona Emergente',
      area: '2,162 km²',
      municipalities: ['Rivas', 'Altagracia', 'Belén', 'Buenos Aires', 'Cárdenas', 'Moyogalpa', 'Potosí', 'San Jorge', 'San Juan del Sur', 'Tola'],
      characteristics: ['Café de isla volcánica', 'Microclima único', 'Producción boutique', 'Perfil distintivo'],
      altitude: '200-800 msnm',
      production: 'Café arábica especial'
    }
  },
  {
    id: 'boaco',
    name: 'Boaco',
    color: '#A0522D',
    coffeeInfo: {
      denomination: 'Región Ganadera-Cafetalera',
      area: '4,177 km²',
      municipalities: ['Boaco', 'Camoapa', 'San José de los Remates', 'San Lorenzo', 'Santa Lucía', 'Teustepe'],
      characteristics: ['Diversificación productiva', 'Café de transición', 'Sistemas agroforestales', 'Pequeños productores'],
      altitude: '400-900 msnm',
      production: 'Café arábica diversificado'
    }
  }
];

export const NicaraguaMap: React.FC<NicaraguaMapProps> = ({ onRegionSelect, selectedRegion }) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = (region: Region) => {
    if (selectedRegion?.id === region.id) {
      onRegionSelect(null);
    } else {
      onRegionSelect(region);
    }
  };

  const getRegionStyle = (region: Region) => {
    const isSelected = selectedRegion?.id === region.id;
    const isHovered = hoveredRegion === region.id;
    
    return {
      fill: region.color,
      stroke: isSelected ? '#000' : '#666',
      strokeWidth: isSelected ? 3 : 1,
      opacity: isHovered || isSelected ? 1 : 0.8,
      cursor: 'pointer'
    };
  };

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{ maxHeight: '600px' }}
      >
        {/* Nueva Segovia */}
        <path
          d="M200 80 L350 80 L350 150 L200 150 Z"
          style={getRegionStyle(regions[0])}
          onMouseEnter={() => setHoveredRegion('nueva-segovia')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[0])}
        />
        
        {/* Madriz */}
        <path
          d="M100 150 L200 150 L200 220 L100 220 Z"
          style={getRegionStyle(regions[2])}
          onMouseEnter={() => setHoveredRegion('madriz')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[2])}
        />
        
        {/* Estelí */}
        <path
          d="M200 150 L300 150 L300 220 L200 220 Z"
          style={getRegionStyle(regions[3])}
          onMouseEnter={() => setHoveredRegion('esteli')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[3])}
        />
        
        {/* Jinotega */}
        <path
          d="M300 150 L450 150 L450 250 L300 250 Z"
          style={getRegionStyle(regions[1])}
          onMouseEnter={() => setHoveredRegion('jinotega')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[1])}
        />
        
        {/* Matagalpa */}
        <path
          d="M200 220 L400 220 L400 320 L200 320 Z"
          style={getRegionStyle(regions[4])}
          onMouseEnter={() => setHoveredRegion('matagalpa')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[4])}
        />
        
        {/* Boaco */}
        <path
          d="M250 320 L400 320 L400 420 L250 420 Z"
          style={getRegionStyle(regions[6])}
          onMouseEnter={() => setHoveredRegion('boaco')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[6])}
        />
        
        {/* Rivas */}
        <path
          d="M150 450 L300 450 L300 520 L150 520 Z"
          style={getRegionStyle(regions[5])}
          onMouseEnter={() => setHoveredRegion('rivas')}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick(regions[5])}
        />
        
        {/* Region Labels */}
        {regions.map((region) => {
          const positions: { [key: string]: { x: number; y: number } } = {
            'nueva-segovia': { x: 275, y: 115 },
            'madriz': { x: 150, y: 185 },
            'esteli': { x: 250, y: 185 },
            'jinotega': { x: 375, y: 200 },
            'matagalpa': { x: 300, y: 270 },
            'boaco': { x: 325, y: 370 },
            'rivas': { x: 225, y: 485 }
          };
          
          const pos = positions[region.id];
          if (!pos) return null;
          
          return (
            <text
              key={region.id}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="white"
              style={{ pointerEvents: 'none' }}
            >
              {region.name}
            </text>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
        <h4 className="text-sm font-bold text-gray-800 mb-2">Regiones Cafeteras</h4>
        <div className="space-y-1">
          {regions.map((region) => (
            <div key={region.id} className="flex items-center text-xs">
              <div
                className="w-3 h-3 rounded mr-2"
                style={{ backgroundColor: region.color }}
              ></div>
              <span className="text-gray-700">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};