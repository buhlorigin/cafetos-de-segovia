export type Farm = {
  name: string;
  description: string;
  images: string[];
  details: { location: string; altitude: string; varieties: string; processing: string; difference: string };
};

const placeholderText = "Placeholder text: a family-run farm in the highlands of Nueva Segovia, dedicated to specialty coffee with careful harvesting and processing. Full story coming soon.";
const placeholderDiff = "Placeholder: what makes this farm unique will be added soon.";

export const farms: Farm[] = [
  {
    name: "Finca Bethania",
    description: "Nestled in the high-altitude mountains of Dipilto, Finca Bethania represents three generations of coffee excellence. This family-managed farm spans 25 hectares of pristine mountainous terrain, where traditional farming methods meet innovative processing techniques. The farm's unique microclimate creates perfect conditions for slow cherry maturation, resulting in complex flavor profiles. Bethania consistently produces Cup of Excellence level quality coffees, with several lots scoring above 85 points.",
    images: [
      "/lovable-uploads/c583d705-3f60-4df4-8cfa-ac3538d6d036.png",
      "/lovable-uploads/61079dbc-cb5a-4ea7-ba8c-a3386a5c6671.png",
      "/lovable-uploads/ad277da2-06aa-4822-8f6b-4cf494471a2e.png",
      "/lovable-uploads/52010541-91f5-494c-909b-02fc63d9e224.png",
      "/lovable-uploads/2fb707ad-4139-4528-9715-3a9f2960ad90.png"
    ],
    details: {
      location: "Dipilto, Nueva Segovia",
      altitude: "1,350-1,500m",
      varieties: "Red & Yellow Catuai, Maracaturra, Java, Caturra, Bourbon",
      processing: "Natural, Washed, Experimental",
      difference: ""
    }
  },
  {
    name: "Finca Las Hortensias",
    description: "Located in Buenos Aires, Dipilto, at 1,250–1,450 m with constant breezes and morning mist. A small 10-hectare farm passed through generations, known for its floral surroundings and expressive lots. It's a finalist of the Nicaragua Cup of Excellence multiple times. Here, tradition inspires innovation: they use careful fermentation, natural shade and biodiversity, creating lots that reflect both patience and purpose.",
    images: [
      "/lovable-uploads/2b6cfe6f-9101-406b-9e51-7a0c2a273fff.png",
      "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png",
      "/lovable-uploads/376c0056-37ee-48ff-aa28-93b13e5bf4f2.png",
      "/lovable-uploads/ed78fb31-f8e1-405d-8294-7a05021c5bd0.png",
      "/lovable-uploads/7c02df0f-01a0-4c8f-a12c-dcbc5c934000.png"
    ],
    details: {
      location: "Buenos Aires, Dipilto",
      altitude: "1,250-1,450m",
      varieties: "Geisha, Red & Yellow Catuai, Maracaturra, Bourbon",
      processing: "Natural, Washed, Honey, Experimental",
      difference: ""
    }
  },
  ...[
    { name: "Finca Los Milagros", image: "/lovable-uploads/61079dbc-cb5a-4ea7-ba8c-a3386a5c6671.png", altitude: "To be confirmed" },
    { name: "Finca Agua Sarca", image: "/lovable-uploads/4f4c2833-b318-4108-8165-924ad5cfb8c3.png", altitude: "1,150-1,400m" },
    { name: "Finca El Ciprés", image: "/lovable-uploads/ad277da2-06aa-4822-8f6b-4cf494471a2e.png", altitude: "To be confirmed" },
    { name: "Finca Mirjam", image: "/lovable-uploads/376c0056-37ee-48ff-aa28-93b13e5bf4f2.png", altitude: "1,200-1,350m" },
    { name: "Finca La Picona", image: "/lovable-uploads/52010541-91f5-494c-909b-02fc63d9e224.png", altitude: "1,250-1,400m" },
  ].map((f) => ({
    name: f.name,
    description: placeholderText,
    images: [f.image],
    details: {
      location: "Nueva Segovia (to be confirmed)",
      altitude: f.altitude,
      varieties: "To be confirmed",
      processing: "To be confirmed",
      difference: placeholderDiff,
    },
  })),
];

