
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const WorldMap = () => {
  const marketData = [
    { country: "USA", volume: 85 },
    { country: "UK", volume: 62 },
    { country: "Europe", volume: 78 },
    { country: "China", volume: 45 },
    { country: "Southeast Asia", volume: 38 },
    { country: "Australia", volume: 52 }
  ];

  const chartConfig = {
    volume: {
      label: "Export Volume",
      color: "#b45309",
    },
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Global</span> Markets
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Cafetos de Segovia exports premium specialty coffee to discerning roasters and importers worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <BarChart data={marketData}>
                <XAxis 
                  dataKey="country" 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <ChartTooltip 
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar 
                  dataKey="volume" 
                  fill="var(--color-volume)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">USA</h3>
              <p className="text-stone-600 text-sm">Premium roasters</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">UK</h3>
              <p className="text-stone-600 text-sm">Specialty cafes</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">Europe</h3>
              <p className="text-stone-600 text-sm">Specialty importers</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">China</h3>
              <p className="text-stone-600 text-sm">Growing market</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">Southeast Asia</h3>
              <p className="text-stone-600 text-sm">Third wave coffee</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-stone-800">Australia</h3>
              <p className="text-stone-600 text-sm">Boutique roasters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
