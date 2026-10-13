import { Link } from 'react-router-dom';
import { Button } from './ui/button';

type Action = { label: string; to: string };

const ClosingBand = ({ heading, text, primary, secondary }: { heading: string; text: string; primary: Action; secondary?: Action }) => (
  <section className="py-16 md:py-20" style={{ backgroundColor: '#EDE4D6' }}>
    <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
      <h2 className="text-4xl md:text-5xl text-coffee mb-6">{heading}</h2>
      <p className="text-xl mb-8" style={{ color: '#5A4636' }}>{text}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal"><Link to={primary.to}>{primary.label}</Link></Button>
        {secondary && <Button asChild size="lg" variant="outline" className="h-auto min-h-12 whitespace-normal text-coffee border-cherry bg-transparent"><Link to={secondary.to}>{secondary.label}</Link></Button>}
      </div>
    </div>
  </section>
);

export default ClosingBand;
