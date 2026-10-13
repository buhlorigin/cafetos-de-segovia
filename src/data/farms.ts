export type Farm = {
  name: string;
  hidden?: boolean;
  description: string;
  images: string[];
  details: { location: string; altitude: string; size: string; varieties: string; processing: string; harvest: string; difference: string };
};

export const farmNetwork = { total: '15+', altitude: '1,150–1,800 m', partnerCount: 8 };

export const farmRecords: Farm[] = [
  {
    "name": "Finca Agua Sarca",
    "description": "Agua Sarca has been in the Albir family for more than thirty years. It is our largest farm, set on sandy-loam soils with steady rainfall and cool highland air, and planted under an agroforestry canopy of native trees, fruit trees and bananas. Native forest reserves are kept across the estate to protect water sources and wildlife.",
    "images": [
      "/media/farm-agua-sarca-1.jpg"
    ],
    "details": {
      "location": "Las Manos, Dipilto, Nueva Segovia",
      "altitude": "1,150–1,400 m",
      "size": "67 ha, 56 ha under coffee",
      "varieties": "Red & Yellow Catuaí, Caturra, Maracaturra, Pacamara, Ovata, Marsellesa, Parainema, Geisha",
      "processing": "Washed, Natural, Anaerobic Natural",
      "harvest": "December to March",
      "difference": "Our widest collection of varieties, and a Cup of Excellence Nicaragua finalist repeatedly since 2017."
    }
  },
  {
    "name": "Finca La Picona",
    "description": "La Picona is the only coffee farm on Picona Mountain. Run by Martha Lucía Albir, it grows all its coffee under full shade of guaba, búcaro, cedar and banana trees, on sandy, mineral-rich volcanic soil. Cool breezes and wide swings between day and night temperatures slow down ripening, and organic certification is in progress.",
    "images": [
      "/media/farm-la-picona-1.jpg"
    ],
    "details": {
      "location": "Picona Mountain, Dipilto, Nueva Segovia",
      "altitude": "1,250–1,400 m",
      "size": "7 ha, including 2 ha of conserved native forest",
      "varieties": "Maracaturra, Parainema, Sidra, Java, Catuaí, young Geisha plants",
      "processing": "Natural, Honey, Experimental fermentations",
      "harvest": "December to March",
      "difference": "2nd place in the Cup of Excellence Nicaragua 2021 with a Maracaturra anaerobic honey."
    }
  },
  {
    "name": "Finca Mirjam",
    "description": "Mirjam carries the name of the family's legacy and is run by Martha Lucía Albir. Morning mist, a steady breeze and fertile volcanic-influenced soil shape its coffee, all grown under full shade. Organic certification is in progress, and a micro-lot program starts with the 2026 harvest.",
    "images": [
      "/media/farm-mirjam-1.jpg"
    ],
    "details": {
      "location": "Dipilto, Nueva Segovia",
      "altitude": "1,200–1,350 m",
      "size": "27 ha, including 3.5 ha of conserved native forest",
      "varieties": "Maracaturra, Red & Yellow Catuaí, Catimor",
      "processing": "Washed, Experimental fermentations",
      "harvest": "December to March",
      "difference": "One of the richest bird populations in the region, with toucans, hummingbirds and tanagers among the coffee. Recognized several times in the Cup of Excellence Nicaragua."
    }
  },
  {
    "name": "Finca El Ciprés",
    "description": "El Ciprés joined the family in 2013. About a third of the land is left as natural forest, protecting water sources, flora and wildlife, and the coffee grows within the Serranías de Dipilto-Jalapa Nature Reserve.",
    "images": [
      "/media/farm-el-cipres-1.jpg"
    ],
    "details": {
      "location": "Las Manos, Dipilto, Nueva Segovia",
      "altitude": "1,300–1,450 m",
      "size": "21 ha, about a third kept as natural forest",
      "varieties": "Parainema, Marsellesa, Ovata",
      "processing": "Natural, Anaerobic Natural, Washed",
      "harvest": "November to March",
      "difference": "Planted with newer, resilient varieties like Parainema, Marsellesa and Ovata, which we explore through natural and anaerobic processes."
    }
  },
  {
    "name": "Finca Bethania",
    "description": "Bethania has passed from generation to generation in the Albir family and has been run by Martha Lucía Albir since 1991. Coffee grows under forest, fruit and banana shade, with regular pruning and shade management to bring light into the plantation.",
    "images": [
      "/media/farm-bethania-1.jpg",
      "/media/farm-bethania-2.jpg",
      "/media/farm-bethania-3.jpg",
      "/media/farm-bethania-4.jpg",
      "/media/farm-bethania-5.jpg"
    ],
    "details": {
      "location": "El Suyatal, Macuelizo, Nueva Segovia",
      "altitude": "1,300–1,500 m",
      "size": "25 ha",
      "varieties": "Catimor, Red Catuaí, Java, Maracaturra, Pacamara",
      "processing": "Washed, Anaerobic Natural",
      "harvest": "January to April",
      "difference": "Home to Java and Pacamara, and to long anaerobic naturals fermented in sealed barrels while temperature and pH are monitored."
    }
  },
  {
    "name": "Finca Las Hortensias",
    "description": "A small farm run by Ana María Albir and kept in the family for more than fifty years. Coffee grows under forest, fruit and banana shade, picked only when fully ripe, then sorted and floated before processing.",
    "images": [
      "/media/farm-las-hortensias-1.jpg",
      "/media/farm-las-hortensias-2.jpg",
      "/media/farm-las-hortensias-3.jpg",
      "/media/farm-las-hortensias-4.jpg",
      "/media/farm-las-hortensias-5.jpg"
    ],
    "details": {
      "location": "Buenos Aires, Dipilto, Nueva Segovia",
      "altitude": "1,300–1,450 m",
      "size": "4 ha",
      "varieties": "Marsellesa, Maracaturra, Catimor",
      "processing": "Washed, Anaerobic Natural",
      "harvest": "November to March",
      "difference": "Its Marsellesa is processed both washed and as a 96-hour anaerobic natural, showing how much process can change the same variety."
    }
  },
  {
    "name": "Finca Los Milagros",
    "hidden": true,
    "description": "",
    "images": [
      "/media/farm-los-milagros-1.jpg"
    ],
    "details": {
      "location": "",
      "altitude": "",
      "size": "",
      "varieties": "",
      "processing": "",
      "harvest": "",
      "difference": ""
    }
  }
];

export const farms = farmRecords.filter((farm) => !farm.hidden);
