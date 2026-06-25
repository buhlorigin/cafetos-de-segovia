import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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

interface MapboxNicaraguaMapProps {
  onRegionSelect: (region: Region | null) => void;
  selectedRegion: Region | null;
}

const regions: Region[] = [
  {
    id: 'nueva-segovia',
    name: 'Nueva Segovia',
    color: '#8B5A3C',
    coordinates: [-86.2, 13.7],
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
    coordinates: [-86.0, 13.1],
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
    coordinates: [-86.5, 13.4],
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
    coordinates: [-86.4, 13.1],
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
    coordinates: [-85.9, 12.9],
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
    coordinates: [-85.8, 11.4],
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
    coordinates: [-85.7, 12.5],
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

export const MapboxNicaraguaMap: React.FC<MapboxNicaraguaMapProps> = ({ onRegionSelect, selectedRegion }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  
  // Use the provided Mapbox token
  const mapboxToken = 'pk.eyJ1IjoiYnVobG9yaWdpbiIsImEiOiJjbWNtNWhvaDAwYm03MmpzZGd3M2t3aDQ2In0.MtZWli9bG73mspo2-2ct8Q';

  const initializeMap = () => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 6.5,
        center: [-85.8, 12.6], // Center of Nicaragua
      });

      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      map.current.on('load', () => {
        if (!map.current) return;

        // Add source for department points
        map.current.addSource('departments', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: regions.map(region => ({
              type: 'Feature',
              properties: {
                id: region.id,
                name: region.name,
                color: region.color
              },
              geometry: {
                type: 'Point',
                coordinates: region.coordinates
              }
            }))
          }
        });

        // Add department circles
        map.current.addLayer({
          id: 'department-circles',
          type: 'circle',
          source: 'departments',
          paint: {
            'circle-radius': [
              'case',
              ['==', ['get', 'id'], selectedRegion?.id || ''], 20, 15
            ],
            'circle-color': ['get', 'color'],
            'circle-opacity': 0.8,
            'circle-stroke-width': [
              'case',
              ['==', ['get', 'id'], selectedRegion?.id || ''], 3, 1
            ],
            'circle-stroke-color': '#ffffff'
          }
        });

        // Add department labels
        map.current.addLayer({
          id: 'department-labels',
          type: 'symbol',
          source: 'departments',
          layout: {
            'text-field': ['get', 'name'],
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 12,
            'text-offset': [0, 2],
            'text-anchor': 'top'
          },
          paint: {
            'text-color': '#333333',
            'text-halo-color': '#ffffff',
            'text-halo-width': 2
          }
        });

        // Add click event
        map.current.on('click', 'department-circles', (e) => {
          if (!e.features || e.features.length === 0) return;
          
          const feature = e.features[0] as any;
          const regionId = feature.properties?.id;
          const region = regions.find(r => r.id === regionId);
          
          if (region) {
            if (selectedRegion?.id === region.id) {
              onRegionSelect(null);
            } else {
              onRegionSelect(region);
            }
          }
        });

        // Change cursor on hover
        map.current.on('mouseenter', 'department-circles', () => {
          if (map.current) {
            map.current.getCanvas().style.cursor = 'pointer';
          }
        });

        map.current.on('mouseleave', 'department-circles', () => {
          if (map.current) {
            map.current.getCanvas().style.cursor = '';
          }
        });

        setIsMapInitialized(true);
      });

    } catch (error) {
      console.error('Error initializing Mapbox map:', error);
    }
  };

  // Update circle styling when selectedRegion changes
  useEffect(() => {
    if (!map.current || !isMapInitialized) return;

    map.current.setPaintProperty('department-circles', 'circle-radius', [
      'case',
      ['==', ['get', 'id'], selectedRegion?.id || ''], 20, 15
    ]);

    map.current.setPaintProperty('department-circles', 'circle-stroke-width', [
      'case',
      ['==', ['get', 'id'], selectedRegion?.id || ''], 3, 1
    ]);
  }, [selectedRegion, isMapInitialized]);

  useEffect(() => {
    initializeMap();
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      
    </div>
  );
};