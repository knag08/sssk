/**
 * The Kuteer's books, all free to download.
 *
 * To add one: put the PDF in `public/books/`, then add an entry here. The file
 * size shown on the page is read from disk at build time, so nothing needs
 * updating by hand when a PDF is replaced.
 */

export interface Book {
  title: string;
  /** Shown under the title when the book is a translation or a companion volume. */
  note?: string;
  language: 'English' | 'Telugu';
  file: string;
  /** Volumes of the same work are grouped together on the page. */
  group: string;
}

export const bookGroups = [
  {
    id: 'anjaneya',
    title: 'Anjaneya’s Command',
    blurb:
      'The commands of Lord Panchamukhi Anjaneya Swamy, recorded as they were given. Three volumes, in the original Telugu and in English translation.',
  },
  {
    id: 'nithya',
    title: 'Nithya Sathya Bodha',
    blurb: 'Daily teaching on truth — a companion for regular practice.',
  },
  {
    id: 'experiences',
    title: 'Inner Experiences',
    blurb: 'Shivangani’s account of what is met on the inward path, and what it asks of a seeker.',
  },
  {
    id: 'yogini',
    title: 'The Making of a Yogini',
    blurb: 'The life that grew into Swamini Mata Vishwatmananda Giri, told plainly.',
  },
  {
    id: 'saadhana',
    title: 'Saadhana — My Spiritual Journey',
    blurb: 'One sadhak’s road, set down for the use of those walking behind.',
  },
] as const;

export const books: Book[] = [
  { group: 'anjaneya', title: 'Aanjaneyuni Aanathi, Volume 1', language: 'Telugu', file: 'aanjaneyuni-aanathi-vol-1-telugu.pdf' },
  { group: 'anjaneya', title: 'Aanjaneyuni Aanathi, Volume 2', language: 'Telugu', file: 'aanjaneyuni-aanathi-vol-2-telugu.pdf' },
  { group: 'anjaneya', title: 'Aanjaneyuni Aanathi, Volume 3', language: 'Telugu', file: 'aanjaneyuni-aanathi-vol-3-telugu.pdf' },
  { group: 'anjaneya', title: 'Anjaneya’s Command, Volume 1', note: 'English translation', language: 'English', file: 'anjaneyas-command-vol-1-english.pdf' },
  { group: 'anjaneya', title: 'Anjaneya’s Command, Volume 2', note: 'English translation', language: 'English', file: 'anjaneyas-command-vol-2-english.pdf' },
  { group: 'anjaneya', title: 'Anjaneya’s Command, Volume 3', note: 'English translation', language: 'English', file: 'anjaneyas-command-vol-3-english.pdf' },

  { group: 'nithya', title: 'Nithya Sathya Bodha', language: 'Telugu', file: 'nithya-sathya-bodha-telugu.pdf' },
  { group: 'nithya', title: 'Nithya Sathya Bodha', note: 'English translation', language: 'English', file: 'nithya-sathya-bodha-english.pdf' },

  { group: 'experiences', title: 'Inner Experiences', language: 'English', file: 'inner-experiences-english.pdf' },
  { group: 'experiences', title: 'Anthargatha Anubhavulu', note: 'Inner Experiences, in Telugu', language: 'Telugu', file: 'anthargatha-anubhavulu-telugu.pdf' },

  { group: 'yogini', title: 'Making of a Yogini', language: 'English', file: 'making-of-a-yogini-english.pdf' },
  { group: 'yogini', title: 'Sai Shivangini', note: 'Making of a Yogini, in Telugu', language: 'Telugu', file: 'sai-shivangini-telugu.pdf' },

  { group: 'saadhana', title: 'Saadhana — My Spiritual Journey', language: 'English', file: 'saadhana-my-spiritual-journey-english.pdf' },
];
