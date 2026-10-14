import { useTranslation } from 'react-i18next';

export type FarmDetails = { location: string; altitude: string; size: string; varieties: string; processing: string; harvest: string; difference: string };
export type FarmRecord = { name: string; slug: string; type: 'own' | 'partner'; hidden?: boolean; images: string[] };
export type Farm = FarmRecord & { description: string; owner: string; details: FarmDetails };

export const farmNetwork = { partnerTotal: '40+', partnerCount: 40 };

// Farm names and photos live here; descriptions and facts per language live in src/locales/*.json under farmData.<slug>.
// A farm without a farmData entry renders no copy.
// Own farms (founders') first, then partner farm examples.
export const farmRecords: FarmRecord[] = [
  { name: "Finca Bethania", slug: 'bethania', type: 'own', images: ["/media/farm-bethania-1.jpg", "/media/farm-bethania-2.jpg", "/media/farm-bethania-3.jpg", "/media/farm-bethania-4.jpg", "/media/farm-bethania-5.jpg"] },
  { name: "Finca Las Hortensias", slug: 'las-hortensias', type: 'own', images: ["/media/farm-las-hortensias-1.jpg", "/media/farm-las-hortensias-2.jpg", "/media/farm-las-hortensias-3.jpg", "/media/farm-las-hortensias-4.jpg", "/media/farm-las-hortensias-5.jpg"] },
  { name: "Finca Agua Sarca", slug: 'agua-sarca', type: 'partner', images: ["/media/farm-agua-sarca-1.jpg"] },
  { name: "Finca Mirjam", slug: 'mirjam', type: 'partner', images: ["/media/farm-mirjam-1.jpg"] },
  { name: "Finca La Picona", slug: 'la-picona', type: 'partner', images: ["/media/farm-la-picona-1.jpg"] },
  { name: "Finca El Ciprés", slug: 'el-cipres', type: 'partner', images: ["/media/farm-el-cipres-1.jpg"] },
  { name: "Finca Los Milagros", slug: 'los-milagros', type: 'partner', hidden: true, images: ["/media/farm-los-milagros-1.jpg"] },
];

const visibleRecords = farmRecords.filter((farm) => !farm.hidden);

const empty: FarmDetails = { location: '', altitude: '', size: '', varieties: '', processing: '', harvest: '', difference: '' };

/** Visible farms with copy in the current language. */
export const useFarms = (): Farm[] => {
  const { t, i18n } = useTranslation();
  return visibleRecords.map((r) => {
    const data = i18n.exists(`farmData.${r.slug}`) ? (t(`farmData.${r.slug}`, { returnObjects: true }) as FarmDetails & { description: string; owner?: string }) : { ...empty, description: '' };
    const { description = '', owner = '', ...details } = data;
    return { ...r, description, owner, details: { ...empty, ...details } };
  });
};
