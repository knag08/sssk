import type { ImageMetadata } from 'astro';

/**
 * The gallery builds itself from whatever sits in src/assets/photos/.
 *
 * To add a photograph: drop the file into that folder, naming it with one of
 * the category prefixes below (e.g. `medical-camp-…`, `education-…`). Then add
 * a line to `captions` so it gets a proper description for screen readers and
 * for the caption under the enlarged image. Without a caption it still appears,
 * with a description generated from the filename.
 */

export const categories = [
  { id: 'all', label: 'All photographs' },
  { id: 'narayana-seva', label: 'Narayana Seva' },
  { id: 'medical', label: 'Medical camps' },
  { id: 'education', label: 'Education' },
  { id: 'water', label: 'Drinking water' },
  { id: 'vanara', label: 'Vanara Seva' },
  { id: 'worship', label: 'Worship' },
  { id: 'kuteer', label: 'At the Kuteer' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

/** Filename prefix → category. First match wins, so order matters. */
const rules: Array<[string, CategoryId]> = [
  ['narayana-seva', 'narayana-seva'],
  ['monthly-narayana-seva', 'narayana-seva'],
  ['kitchen', 'narayana-seva'],
  ['grocery', 'narayana-seva'],
  ['eye-camp', 'medical'],
  ['medical-camp', 'medical'],
  ['education', 'education'],
  ['water-seva', 'water'],
  ['ro-water', 'water'],
  ['vanara', 'vanara'],
  ['havan', 'worship'],
  ['mandir', 'worship'],
  ['anjaneya', 'worship'],
  ['bhajans', 'worship'],
  ['name-chanting', 'worship'],
];

const captions: Record<string, string> = {
  'narayana-seva-home-visit-01': 'A volunteer sitting with an elderly woman during a Narayana Seva home visit',
  'narayana-seva-elderly-01': 'A freshly cooked meal offered to an elderly woman outside her home',
  'narayana-seva-elderly-02': 'A meal being handed to an elderly woman seated on the ground',
  'narayana-seva-delivery-01': 'A meal carrier handed over at the gate during the daily round',
  'narayana-seva-serving-01': 'Volunteers serving lunch from steel vessels at the Kuteer',
  'narayana-seva-serving-children-01': 'Children being served from a large vessel at the Kuteer',
  'narayana-seva-village-01': 'A volunteer visiting an elderly resident in a village near Puttaparthi',
  'monthly-narayana-seva-dining-01': 'Guests seated in rows for lunch during the monthly Narayana Seva',
  'monthly-narayana-seva-hall-01': 'The Kuteer hall filled with guests on the 23rd of the month',
  'kitchen-cooking-01': 'A volunteer stirring a large vessel of curry in the Kuteer kitchen',
  'kitchen-packing-meals-01': 'Meals being ladled into steel carriers for the daily delivery round',
  'kitchen-preparation-01': 'Vegetables being prepared in the Kuteer kitchen before dawn',
  'kitchen-serving-plates-01': 'Plates and vessels laid out ahead of the monthly Narayana Seva',
  'grocery-distribution-01': 'A volunteer handing a kit of provisions to a family',
  'grocery-distribution-02': 'Grocery kits being distributed to households in need',
  'eye-camp-screening-01': "A doctor examining a patient's eyes at the free monthly eye camp",
  'eye-camp-equipment-01': 'An eye examination carried out with equipment brought to the Kuteer',
  'eye-camp-gathering-01': 'Patients gathered and waiting at the monthly free eye camp',
  'eye-camp-waiting-01': 'The Kuteer hall during an eye camp, patients waiting to be seen',
  'medical-camp-registration-01': 'Volunteers registering patients before the camp begins',
  'medical-camp-registration-02': 'A patient being registered at the medical camp desk',
  'medical-camp-desk-01': 'The registration desk at the monthly medical camp',
  'medical-camp-doctors-01': 'Doctors consulting patients at the free allopathy camp',
  'medical-camp-doctors-02': 'Physicians seeing patients at the Kuteer premises',
  'medical-camp-consultation-01': 'A doctor in consultation with a patient',
  'medical-camp-consultation-02': 'A physician listening to an elderly patient',
  'medical-camp-bp-check-01': "A nurse taking an elderly patient's blood pressure",
  'medical-camp-checkup-01': 'A health check being carried out at the monthly camp',
  'medical-camp-nurse-01': 'A nurse attending to an elderly woman at the camp',
  'medical-camp-screening-01': 'A general health screening in progress',
  'medical-camp-outdoor-01': 'A health check conducted outdoors at the Kuteer',
  'medical-camp-busy-01': 'The camp hall busy with patients, volunteers and medical staff',
  'education-tuition-class-01': 'Children at their evening tuition in the Kuteer hall',
  'education-tuition-class-02': 'Students working through their books during evening tuition',
  'education-classroom-01': 'A tutor teaching a group of children at the Kuteer',
  'education-classroom-02': 'A lesson underway at the blackboard',
  'education-student-writing-01': 'A student concentrating on her writing',
  'education-computer-class-01': 'A child at a computer during the weekly computer awareness class',
  'education-computer-class-02': 'A student working on a laptop in the computer class',
  'education-excursion-group-01': 'The Kuteer children photographed together during their Bangalore excursion',
  'education-excursion-group-02': 'Students and volunteers on the Bangalore excursion',
  'education-planetarium-01': 'Children looking through a telescope at the Jawaharlal Nehru Planetarium',
  'education-museum-01': 'Students exploring the Visvesvaraya Industrial and Technological Museum',
  'water-seva-handover-01': 'A filled water can handed to an elderly woman at the Kuteer gate',
  'water-seva-handover-02': 'Drinking water being handed over at the collection point',
  'water-seva-distribution-01': 'Families collecting free RO-purified drinking water',
  'water-seva-distribution-02': 'A resident loading a filled water can onto a scooter',
  'water-seva-cans-01': 'Rows of water cans waiting to be collected',
  'ro-water-plant-01': 'The reverse-osmosis purification plant and storage tanks at the Kuteer',
  'vanara-seva-feeding-01': 'A monkey taking food offered by hand during Vanara Seva',
  'vanara-seva-feeding-02': 'A monkey eating groundnuts and grain left out during Vanara Seva',
  'vanara-seva-feeding-03': 'A volunteer offering food to a monkey during the weekly round',
  'vanara-seva-shelter-01': 'A monkey troop gathered at a feeding point near a village',
  'havan-geetha-homam-01': 'The Geetha Homam — the daily offering to the fire on the Kuteer premises',
  'bhajans-mandir-01': 'Bhajans sung together in the Kuteer mandir',
  'name-chanting-01': 'The morning name chanting, before the shrine',
  'name-chanting-02': 'Devotees gathered for the daily name chanting',
  'narayana-seva-village-02': 'Meals served from the vehicle on the village Narayana Seva round',
  'narayana-seva-village-03': 'Villagers gathering with their vessels as the Narayana Seva arrives',
  'narayana-seva-breakfast-01': 'Breakfast carried out at eight in the morning to an elderly woman near the Kuteer',
  'narayana-seva-breakfast-02': 'An elderly man on his way home with the morning meal',
  'narayana-seva-breakfast-03': 'A woman receiving the morning breakfast on her doorstep',
  'narayana-seva-street-01': 'A volunteer kneeling in the street to sit with an elderly man during the daily round',
  'narayana-seva-mobile-camp-01': 'Volunteers portioning rice for the mobile medical camp lunch',
  'narayana-seva-mobile-camp-02': 'Packed meals crated and ready to travel to the mobile camp',
  'narayana-seva-food-01': 'The day’s rice and sambar, prepared in the Kuteer kitchen',
  'monthly-narayana-seva-hall-02': 'The Kuteer hall at lunch on the 23rd, seated to the walls',
  'medical-camp-sankara-bus-01': 'Patients and volunteers beside the Sankara Eye Hospital bus',
  'eye-camp-outdoor-01': 'Patients waiting under the canopy at the monthly eye camp',
  'eye-camp-village-screening-01': 'Eye screening carried out in a village, to reach those who cannot travel',
  'water-seva-signboard-01': 'Collecting free drinking water beneath the Kuteer’s signboard',
  'education-school-meal-01': 'Children served a hot meal, seated in a row with their plates',
  'mandir-altar-01': 'The altar in the Kuteer mandir, dressed for the day',
  'anjaneya-shrine-01': 'The shrine of Lord Panchamukhi Anjaneya Swamy at the Kuteer, garlanded for his celebration',
  'anjaneya-abhishekam-01': 'Abhishekam performed for Lord Panchamukhi Anjaneya Swamy, guardian deity of the Kuteer',
  'kuteer-signboard-water-01': 'The Sri Sathya Sai Kuteer signboard in Telugu and English',
  'kuteer-visit-01': 'A home visit to a family supported by the Kuteer',
};

/** Photographs that lead each category — used to order the grid pleasantly. */
const featured = [
  'anjaneya-shrine-01',
  'havan-geetha-homam-01',
  'bhajans-mandir-01',
  'monthly-narayana-seva-hall-01',
  'eye-camp-screening-01',
  'education-tuition-class-01',
  'water-seva-handover-01',
  'vanara-seva-feeding-01',
  'kitchen-cooking-01',
];

const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png}', {
  eager: true,
});

const humanise = (name: string) => name.replace(/-\d+$/, '').replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

export interface GalleryPhoto {
  id: string;
  src: ImageMetadata;
  alt: string;
  category: CategoryId;
}

export const photos: GalleryPhoto[] = Object.entries(modules)
  .map(([path, mod]) => {
    const id = path.split('/').pop()!.replace(/\.\w+$/, '');
    const rule = rules.find(([prefix]) => id.startsWith(prefix));
    return {
      id,
      src: mod.default,
      alt: captions[id] ?? `${humanise(id)} at Sri Sathya Sai Kuteer`,
      category: rule ? rule[1] : ('kuteer' as CategoryId),
    };
  })
  .sort((a, b) => {
    const ai = featured.indexOf(a.id);
    const bi = featured.indexOf(b.id);
    if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    return a.id.localeCompare(b.id);
  });

export const countFor = (id: CategoryId) =>
  id === 'all' ? photos.length : photos.filter((p) => p.category === id).length;
