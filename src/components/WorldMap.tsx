
import React from 'react';

const WorldMap = () => {
  const markets = [
    { name: "USA", color: "#d97706", description: "North American specialty coffee market" },
    { name: "UK", color: "#ea580c", description: "British Isles premium coffee segment" },
    { name: "Europe", color: "#dc2626", description: "Continental European markets" },
    { name: "Middle East", color: "#b91c1c", description: "Growing Middle Eastern coffee culture" },
    { name: "China", color: "#991b1b", description: "Expanding Chinese specialty coffee market" },
    { name: "Southeast Asia", color: "#7c2d12", description: "Emerging Southeast Asian markets" },
    { name: "Australia", color: "#a16207", description: "Australian coffee connoisseurs" }
  ];

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

        {/* World Map Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="relative w-full max-w-5xl mx-auto">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
              style={{ maxHeight: '500px' }}
            >
              {/* Background */}
              <rect width="1000" height="500" fill="#1e293b" rx="10" />
              
              {/* Simplified world map regions */}
              
              {/* North America (USA) */}
              <path
                d="M50 80 L280 80 L280 200 L50 200 Z"
                fill="#d97706"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="165" y="145" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">USA</text>
              
              {/* Europe */}
              <path
                d="M400 70 L580 70 L580 180 L400 180 Z"
                fill="#dc2626"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="490" y="130" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">EUROPE</text>
              
              {/* UK */}
              <path
                d="M360 60 L420 60 L420 120 L360 120 Z"
                fill="#ea580c"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="390" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">UK</text>
              
              {/* Middle East */}
              <path
                d="M500 200 L650 200 L650 280 L500 280 Z"
                fill="#b91c1c"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="575" y="245" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">MIDDLE EAST</text>
              
              {/* China */}
              <path
                d="M650 100 L800 100 L800 220 L650 220 Z"
                fill="#991b1b"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="725" y="165" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CHINA</text>
              
              {/* Southeast Asia */}
              <path
                d="M700 240 L850 240 L850 320 L700 320 Z"
                fill="#7c2d12"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="775" y="285" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">SE ASIA</text>
              
              {/* Australia */}
              <path
                d="M750 350 L900 350 L900 420 L750 420 Z"
                fill="#a16207"
                stroke="#ffffff"
                strokeWidth="2"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              <text x="825" y="390" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AUSTRALIA</text>
              
              {/* Nicaragua (origin point) */}
              <circle
                cx="150"
                cy="250"
                r="8"
                fill="#fbbf24"
                stroke="#ffffff"
                strokeWidth="3"
                className="animate-pulse"
              />
              <text x="150" y="275" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">NICARAGUA</text>
            </svg>
          </div>
        </div>

        {/* Market Information Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {markets.map((market, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div 
                className="w-6 h-6 rounded-full mx-auto mb-3"
                style={{ backgroundColor: market.color }}
              ></div>
              <h3 className="text-white font-semibold text-sm mb-2">{market.name}</h3>
              <p className="text-stone-300 text-xs">{market.description}</p>
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

export default WorldMap;
