import { useState } from 'react';
import { Search, Beaker, Sun, CheckCircle, Factory, Package, Truck, Warehouse } from 'lucide-react';
import { Button } from './ui/button';

const processes = [
  { title: 'Selective picking', description: 'Only fully ripe cherries are hand-picked, then sorted and floated in clean water to remove defects.', icon: Search, image: '/media/process-selective-picking.png', position: 'center 20%' },
  { title: 'Fermentation', description: 'Washed coffees ferment 18 to 36 hours before washing in channels with clean water. Anaerobic lots rest in sealed barrels for 48 to 140 hours, with temperature and pH monitored throughout.', icon: Beaker, image: '/media/process-fermentation.png', position: 'center center' },
  { title: 'Drying', description: 'Slow drying on raised African beds, alternating sun and ventilated shade: about 12 days for washed coffees and 28 days for naturals, until the coffee reaches 12% moisture.', icon: Sun, image: '/media/beneficio-drying-beds.jpg', position: 'center 30%' },
  { title: 'Resting', description: 'Lots rest in our warehouse to stabilize before milling, each one identified by farm, variety and process.', icon: Warehouse, image: '/media/beneficio-lot-storage.jpg', position: 'center 30%' },
  { title: 'Quality control', description: 'Every lot is roasted, cupped and scored in our lab, and its moisture and physical quality are checked.', icon: CheckCircle, image: '/media/beneficio-cupping-lab.jpg', position: 'center 25%' },
  { title: 'Dry milling', description: 'Hulling, screen-size grading, density sorting, optical color sorting and a final hand-picking of defects.', icon: Factory, image: '/media/beneficio-color-sorter.jpg', position: 'center 15%' },
  { title: 'Packing', description: "Coffee is packed to each roaster's specification and labeled for full traceability.", icon: Package, image: '/media/process-packing.png', position: 'center 30%' },
  { title: 'Export', description: 'Documentation, customs clearance, freight booking and follow-up until the coffee arrives.', icon: Truck, image: '/media/beneficio-lot-storage.jpg', position: 'center 30%' },
];

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const selected = processes[activeStep];
  if (!selected) return null;

  return (
    <section className="py-20 md:py-24 bg-background text-coffee" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <header className="text-center mb-12">
          <span className="eyebrow">OUR PROCESS</span>
          <h2 id="process-heading" className="text-4xl md:text-5xl text-coffee">From cherry to container, step by step</h2>
        </header>
        <figure className="mb-14 grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-6 md:gap-12 items-center">
          <div className="aspect-[4/3] md:aspect-[3/2] w-full max-w-[720px] overflow-hidden rounded-lg">
            <img key={selected.image + activeStep} src={selected.image} alt={selected.title === 'Export' ? 'Coffee lots prepared at our dry mill for export' : selected.title} className="w-full h-full object-cover" style={{ objectPosition: selected.position }} />
          </div>
          <figcaption className="text-coffee">
            <span className="text-cherry font-medium">{String(activeStep + 1).padStart(2, '0')} / {String(processes.length).padStart(2, '0')}</span>
            <h3 className="font-serif text-3xl md:text-4xl text-coffee mt-3 mb-4">{selected.title}</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#5A4636' }}>{selected.description}</p>
          </figcaption>
        </figure>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <li key={process.title} className="relative flex gap-5 md:block">
                <div className="relative shrink-0 md:mb-5">
                  {index < processes.length - 1 && <span aria-hidden="true" className="absolute left-6 top-12 h-[calc(100%+2.5rem)] border-l border-stone-300 md:hidden" />}
                  {index !== 3 && index !== 7 && <span aria-hidden="true" className="hidden md:block absolute left-12 top-6 w-[calc(100%+2rem-3rem)] border-t border-stone-300" />}
                  <Button variant="outline" size="icon" onClick={() => setActiveStep(index)} aria-label={`View ${process.title} photo`} aria-pressed={index === activeStep} title={`View ${process.title} photo`} className={`relative h-12 w-12 rounded-full border-2 ${index === activeStep ? 'border-cherry bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'border-stone-300 bg-background text-coffee hover:border-cherry hover:text-cherry'}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
                <div className="min-w-0">
                  <span className="text-cherry text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl text-coffee mt-2 mb-4">{process.title}</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">{process.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="mt-12 pt-7 border-t border-stone-200 text-lg text-stone-600 leading-relaxed">Honey water from washing goes to treatment piles away from water sources, protecting the rivers of the Dipilto-Jalapa reserve.</p>
      </div>
    </section>
  );
};

export default ProcessFlow;
