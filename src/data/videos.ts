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
    blurb: 'Clarifies the difference between action, duty and spiritual practice.',
    source: 'kuteer',
  },
  {
    id: '8zOCjwcv5KM',
    title: 'Dualism, Likes and Dislikes',
    blurb: 'Good and bad exist — their purpose, and how to overcome them.',
    source: 'kuteer',
  },
  {
    id: 'lmzaRAXoPUk',
    title: 'God Invoking — Active and Passive Presence',
    blurb: 'Invoking the Divine: the benefits, and how it is done.',
    source: 'kuteer',
  },
  {
    id: 'lWzjVEvPFjs',
    title: 'Vishnu and Shiva Aspects',
    blurb: 'Principle (Shiva), sustenance (Vishnu) and functioning power, explained.',
    source: 'kuteer',
  },
  {
    id: 'wozbibK37HU',
    title: 'Karma and Free Will',
    blurb: 'Sheds light on how little free will we have.',
    source: 'kuteer',
  },

  // Not in the revised running order supplied for the page; kept with their
  // earlier descriptions until there is a decision to retire them.
  {
    id: 'wJwrnmwhrWU',
    title: 'Spiritual Spheres',
    blurb: 'A sophisticated divine management system affecting the moods and states of Sadhaks.',
    source: 'kuteer',
  },
  {
    id: 'sdBtniTZpac',
    title: 'Self Effort, Meditation and Siddhis',
    blurb: 'What is worth pursuing in practice — and what is a distraction.',
    source: 'kuteer',
  },
  { id: 'ttMYBsq8nqg', title: 'Life is a Game', blurb: 'Playing it fully without being owned by the outcome.', source: 'kuteer' },
  { id: 'XKGVQtBclD0', title: 'Other Learnings', blurb: 'Shorter teachings gathered together.', source: 'kuteer' },
];

export const journeys: Video[] = [
  {
    id: 'au5pWxZ0Wo8',
    title: 'Shivangini’s journey to Jivan Mukthi',
    blurb: 'A synopsis of the Inner Experiences and Making of a Yogini books.',
    source: 'kuteer',
  },
  {
    id: '7JqGOSton5U',
    title: 'Spiritual Journey of Gyani Baile, Part 1',
    blurb: 'How the journey started, and how it progressed up to 2008.',
    source: 'kuteer',
  },
  {
    id: 'te-PKL3DINc',
    title: 'Spiritual Journey of Gyani Baile, Part 2',
    blurb: 'Who am I enquiry, bliss, Brahm-anubhuti and more.',
    source: 'kuteer',
  },
];

export const souljourns: Video[] = [
  {
    id: 'MMf55ouKKgw',
    title: 'Shivangini — an interview on Sai Baba',
    blurb: 'Ted Henry interviews her for the first time, in 2004. She left her form in 2005.',
    source: 'souljourns',
  },
  {
    id: 'dXzRL48Sx6c',
    title: 'Gyani Baile — Clarifying the Path to Bliss',
    blurb: 'A glimpse into Gyani’s spiritual state and understanding, as of April 2012.',
    source: 'souljourns',
  },
  {
    id: 'yA4sy6BCEQc',
    title: 'The Making of a Yogini, Part 1',
    blurb: 'August 2012. Gyani’s take on Shivangini’s journey, in conversation.',
    source: 'souljourns',
  },
  {
    id: 'n64wuWIA2Bw',
    title: 'The Making of a Yogini, Part 2',
    blurb: '14 August 2004. Shivangini shares the lessons of her journey, at Ted’s home.',
    source: 'souljourns',
  },
  {
    id: 'vLKW2cuCkpQ',
    title: 'The Making of a Yogini, Part 3',
    blurb:
      'August 2012. Gyani on desire, vasanas, bliss, Shivangini’s aches and pains, her cancer, and the lessons learned.',
    source: 'souljourns',
  },
  {
    id: '2eT4La7_5HU',
    title: 'The Making of a Yogini, Part 4',
    blurb: '15 August 2004. Shivangini shares hard truths, and lessons learned from Swami.',
    source: 'souljourns',
  },
  {
    id: 's082VZ2pwBM',
    title: 'The Making of a Yogini, Part 5',
    blurb:
      '17 August 2012. She is in the fourth stage of cancer. Swami said “I will save you in the nick of time”. Things started shifting to me.',
    source: 'souljourns',
  },
];

const thumbs = import.meta.glob<{ default: ImageMetadata }>('../assets/video/*.jpg', { eager: true });

export const thumbnailFor = (id: string): ImageMetadata | undefined =>
  thumbs[`../assets/video/${id}.jpg`]?.default;
