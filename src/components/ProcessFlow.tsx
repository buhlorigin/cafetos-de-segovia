
import { useState, useEffect, useRef } from 'react';
import { Coffee, Search, Beaker, Sun, CheckCircle, Warehouse, Package } from 'lucide-react';

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processes = [
    {
      title: "CLASSIFICATION",
      description: "Floating, separating green leaves and stones. This initial step ensures only the highest quality cherries proceed to the next stage.",
      details: "Our classification process uses advanced floating techniques to separate coffee cherries by density. This removes impurities like stones, green leaves, and damaged cherries, ensuring only premium quality fruit moves forward in our process.",
      icon: Coffee
    },
    {
      title: "ELECTRONIC - HAND SORT",
      description: "Electronic and hand picking to separate non-optimal state of ripeness, greens, dried and unripe cherries.",
      details: "We combine cutting-edge electronic sorting technology with skilled hand-picking to achieve unparalleled precision. This dual approach ensures consistent ripeness levels and removes any remaining defects.",
      icon: Search
    },
    {
      title: "FERMENTATION",
      description: "If defined for the variety, anaerobic fermentation to standardize the profile.",
      details: "Our controlled fermentation process varies by coffee variety and desired flavor profile. Anaerobic fermentation in sealed tanks allows us to develop unique flavor characteristics while maintaining consistency across lots.",
      icon: Beaker
    },
    {
      title: "DRYING",
      description: "Mechanical or greenhouse drying in 3 stages for optimal moisture content.",
      details: "Our three-stage drying process combines greenhouse and mechanical methods to achieve the perfect moisture content of 10-12%. This careful approach preserves the coffee's inherent flavors while ensuring stability for storage.",
      icon: Sun
    },
    {
      title: "QUALITY CONTROL",
      description: "Every storage unit is cupped to ensure profile consistency and score quality.",
      details: "Our Q-graders cup every lot to ensure it meets our quality standards. Each batch is scored and profiled, with detailed notes on flavor, aroma, body, and overall quality maintained for traceability.",
      icon: CheckCircle
    },
    {
      title: "WAREHOUSING",
      description: "Coffee is stored at optimal conditions to preserve quality and characteristics.",
      details: "Our climate-controlled warehouses maintain ideal temperature and humidity levels. Coffee is stored in specialized containers that protect against moisture and contamination while preserving flavor integrity.",
      icon: Warehouse
    },
    {
      title: "MILLING & PACKING",
      description: "Coffee is milled in-house, then vacuum packed in 24kg boxes to facilitate stacking and preserve quality.",
      details: "Our final step involves precise milling to customer specifications followed by vacuum packing in 24kg boxes. This packaging method preserves freshness during transport while facilitating efficient stacking and handling.",
      icon: Package
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Our <span className="text-amber-700">Process</span>
          </h2>
          <p className="text-xl text-stone-600">
            From farm to export - every step is carefully controlled
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Detailed Information */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-full mr-4">
                  {(() => {
                    const IconComponent = processes[activeStep].icon;
                    return <IconComponent className="w-8 h-8 text-amber-700" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-800">
                    {processes[activeStep].title}
                  </h3>
                  <p className="text-amber-700 font-medium">Step {activeStep + 1} of {processes.length}</p>
                </div>
              </div>
              <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                {processes[activeStep].description}
              </p>
              <p className="text-stone-600 leading-relaxed">
                {processes[activeStep].details}
              </p>
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-300"></div>
            <div 
              className="absolute left-6 top-0 w-0.5 bg-amber-700 transition-all duration-500 ease-out"
              style={{
                height: `${((activeStep + 1) / processes.length) * 100}%`
              }}
            ></div>

            <div className="space-y-12">
              {processes.map((process, index) => (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="relative flex items-start group"
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-amber-700 text-white shadow-lg scale-110' 
                      : 'bg-white border-2 border-stone-300 text-stone-400'
                  }`}>
                    {(() => {
                      const IconComponent = process.icon;
                      return <IconComponent className="w-5 h-5" />;
                    })()}
                  </div>

                  {/* Content */}
                  <div className={`ml-6 p-6 rounded-2xl transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-white shadow-xl scale-105 border-2 border-amber-200' 
                      : index < activeStep 
                        ? 'bg-white shadow-md' 
                        : 'bg-stone-100 shadow-sm'
                  }`}>
                    <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      index <= activeStep ? 'text-stone-800' : 'text-stone-500'
                    }`}>
                      {process.title}
                    </h4>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      index <= activeStep ? 'text-stone-600' : 'text-stone-400'
                    }`}>
                      {process.description}
                    </p>
                    {index === activeStep && (
                      <div className="mt-3 px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full inline-block animate-fade-in">
                        Currently viewing
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
