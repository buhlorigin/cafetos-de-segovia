import ClosingBand from '@/components/ClosingBand';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Factory, Coffee } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProcessFlow from '../components/ProcessFlow';
import { Button } from '../components/ui/button';

const producerItems = [
  ['Farm guidance', 'Practical advice on harvest, shade, pruning and fertilization, based on what works on our own farms.'],
  ['Processing protocols', 'Fermentation and drying methods we test on our farms first, then share.'],
  ['Cupping feedback', 'An evaluation of every lot, to understand its profile and how to improve it.'],
  ['Access to markets', 'Coffee presented to importers and roasters in Europe, the US, Asia, Australia and the Middle East.'],
];
const exportItems = [
  ['Lot selection', "Lots from our family farms and partner producers, matched to each roaster's profile."],
  ['Samples & cupping', 'Pre-shipment samples and a cupping report for every lot.'],
  ['Traceability & EUDR', 'Farm geolocation and a traceability sheet per lot, ready for the European market.'],
  ['Export logistics', 'Packing, documentation, customs and shipping, with farm visits on request.'],
];

const ServiceItems = ({ items }: { items: string[][] }) => (
  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mt-8">
    {items.map(([title, text]) => (
      <div key={title} className="border-t border-stone-200 pt-5">
        <dt className="text-lg font-semibold text-coffee mb-2">{title}</dt>
        <dd className="text-lg leading-relaxed text-stone-600">{text}</dd>
      </div>
    ))}
  </dl>
);

const Services = () => (
  <div className="min-h-screen bg-background text-coffee">
    <Navigation />
    <main>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="eyebrow">OUR SERVICES</span>
          <h1 className="text-5xl md:text-6xl text-coffee mb-8">From origin to destination</h1>
          <p className="max-w-[760px] mx-auto text-xl leading-relaxed text-stone-600">
            We are producers ourselves, and we have been exporting Nicaraguan coffee for more than fifteen years. That experience lets us work on both ends of the chain: growing alongside the producers of Nueva Segovia, and preparing their coffee for roasters around the world. Everything in between happens at our own dry mill, with our own team.
          </p>
          <ol aria-label="Coffee journey" className="relative grid grid-cols-3 max-w-4xl mx-auto mt-12 gap-3 sm:gap-8">
            <li aria-hidden="true" className="absolute left-[16.67%] right-[16.67%] top-6 border-t border-stone-300" />
            {[{ icon: Sprout, text: 'Origin · Farms of Nueva Segovia' }, { icon: Factory, text: 'Our dry mill' }, { icon: Coffee, text: 'Destination · Roasters worldwide' }].map(({ icon: Icon, text }, index) => (
              <li key={text} className={`relative ${index === 1 ? 'text-cherry' : 'text-coffee'}`}>
                <span className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-background"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <span className="text-sm sm:text-lg leading-relaxed font-medium">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">AT ORIGIN</span>
            <h2 className="text-4xl md:text-5xl text-coffee mb-6">Growing with producers</h2>
            <p className="text-lg leading-relaxed text-stone-600">We grow coffee on our own family farms, so we know what each season asks of a producer. We share that experience with our partner producers, from the field to the cupping table, so every harvest can show its full potential.</p>
            <ServiceItems items={producerItems} />
          </div>
          <img src="/media/services-producers.png" alt="Two women with a coffee seedling" className="w-full h-[420px] lg:h-[580px] object-cover rounded-md" />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <img src="/media/services-team.png" alt="The Cafetos de Segovia team" className="w-full h-[420px] lg:h-[580px] object-cover rounded-md" />
          <div>
            <span className="eyebrow">AT OUR DRY MILL</span>
            <h2 className="text-4xl md:text-5xl text-coffee mb-6">Export-ready coffee</h2>
            <p className="text-lg leading-relaxed text-stone-600">Every lot that leaves our mill is separated, cupped and documented. From microlots to full containers, specialty and commercial, we take care of selection, preparation and export, so the coffee arrives as it was cupped at origin.</p>
            <ServiceItems items={exportItems} />
          </div>
        </div>
      </section>
      <ProcessFlow />
      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Our <span className="text-amber-700">Certifications</span>
            </h2>
            <p className="text-xl text-stone-600">
              Committed to quality standards and export excellence
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-stone-50 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center ">
              <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-amber-700 text-2xl font-bold">HACCP</span>
              </div>
              <h3 className="font-bold text-stone-800 text-lg">HACCP</h3>
              <p className="text-stone-600 text-sm mt-2">Hazard Analysis Critical Control Points</p>
            </div>
            <div className="bg-stone-50 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center ">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-700 text-lg font-bold">ORGANIC</span>
              </div>
              <h3 className="font-bold text-stone-800 text-lg">Organic</h3>
              <p className="text-stone-600 text-sm mt-2">Certified Organic Standards</p>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand heading="Let's work together" text="Whether you grow coffee or roast it, we would love to hear from you." primary={{ label: 'Talk to us about your harvest', to: '/contact?subject=Talk%20to%20us%20about%20your%20harvest' }} secondary={{ label: 'Request samples & spec sheets', to: '/contact?subject=Request%20samples%20%26%20spec%20sheets' }} />
    </main>
    <Footer />
  </div>
);

export default Services;
