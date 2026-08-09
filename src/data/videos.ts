import type { ImageMetadata } from 'astro';

/**
 * Talks published on the Kuteer's YouTube channel, plus the Souljourns
 * interviews recorded with Ted Henry.
 *
 * Thumbnails are stored in src/assets/video/<id>.jpg so that nothing is
 * requested from YouTube until a visitor actually presses play. To add a talk:
 * save its thumbnail as `<video id>.jpg` in that folder and add an entry here.
 */

export const channel = {
  handle: '@SriSathyaSaiKuteer',
  url: 'https://www.youtube.com/@SriSathyaSaiKuteer',
  shortsUrl: 'https://www.youtube.com/@SriSathyaSaiKuteer/shorts',
} as const;

export const satsangArchive =
  'https://drive.google.com/drive/folders/1gYsotUWRTaCeRUVFFn4ndyHkfWCjnqlZ?usp=sharing';

export interface Video {
  id: string;
  title: string;
  blurb?: string;
  /** Whose channel the recording lives on. */
  source: 'kuteer' | 'souljourns';
}

export const teachings: Video[] = [
  {
    id: 'q3NRgTuxIB4',
    title: 'Karma, Dharma and Sadhana',
    blurb: 'How action, duty and practice hold one another up.',
    source: 'kuteer',
  },
  {
    id: '8zOCjwcv5KM',
    title: 'Dualism, Likes and Dislikes',
    blurb: 'Why preference is the root the seeker keeps tripping over.',
    source: 'kuteer',
  },
  {
    id: 'lmzaRAXoPUk',
    title: 'God Invoking — Active and Passive Presence',
    blurb: 'Divine is present in both ways, and how it can be felt.',
    source: 'kuteer',
  },
  {
    id: 'lWzjVEvPFjs',
    title: 'Vishnu and Shiva Aspects',
    blurb: 'Sustaining and dissolving, and what they mean in a life.',
    source: 'kuteer',
  },
  { id: 'wJwrnmwhrWU', title: 'Spiritual Spheres', blurb: ' A sophisticated divine management system affecting the moods and states of Sadhaks.', source: 'kuteer' },
  {
    id: 'sdBtniTZpac',
    title: 'Self Effort, Meditation and Siddhis',
    blurb: 'What is worth pursuing in practice — and what is a distraction.',
    source: 'kuteer',
  },
  { id: 'ttMYBsq8nqg', title: 'Life is a Game', blurb: 'Playing it fully without being owned by the outcome.', source: 'kuteer' },
  { id: 'wozbibK37HU', title: 'Karma and Free Will', blurb: 'Where the room to choose actually lies.', source: 'kuteer' },
  { id: 'XKGVQtBclD0', title: 'Other Learnings', blurb: 'Shorter teachings gathered together.', source: 'kuteer' },
];

export const journeys: Video[] = [
  {
    id: 'au5pWxZ0Wo8',
    title: 'Spiritual Journey of a Sadhak — Shivangini',
    blurb: 'Shivangini (Dolly Baile) on the road she travelled.',
    source: 'kuteer',
  },
  { id: '7JqGOSton5U', title: 'Spiritual Journey of a Sadhak, Part 1', blurb: 'Gyani Baile.', source: 'kuteer' },
  { id: 'te-PKL3DINc', title: 'Spiritual Journey of a Sadhak, Part 2', blurb: 'Gyani Baile.', source: 'kuteer' },
];

export const souljourns: Video[] = [
  {
    id: 'MMf55ouKKgw',
    title: 'Shivangini — an interview on Sai Baba',
    blurb: 'Recorded for Souljourns by Ted Henry.',
    source: 'souljourns',
  },
  {
    id: 'dXzRL48Sx6c',
    title: 'Gyani Baile — Clarifying the Path to Bliss',
    blurb: 'On self-realisation, for Souljourns.',
    source: 'souljourns',
  },
  { id: 'yA4sy6BCEQc', title: 'The Making of a Yogini, Part 1', source: 'souljourns' },
  { id: 'n64wuWIA2Bw', title: 'The Making of a Yogini, Part 2', source: 'souljourns' },
  { id: 'vLKW2cuCkpQ', title: 'The Making of a Yogini, Part 3', source: 'souljourns' },
  { id: '2eT4La7_5HU', title: 'The Making of a Yogini, Part 4', source: 'souljourns' },
  { id: 's082VZ2pwBM', title: 'The Making of a Yogini, Part 5', source: 'souljourns' },
];

const thumbs = import.meta.glob<{ default: ImageMetadata }>('../assets/video/*.jpg', { eager: true });

export const thumbnailFor = (id: string): ImageMetadata | undefined =>
  thumbs[`../assets/video/${id}.jpg`]?.default;
