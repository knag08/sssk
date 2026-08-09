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
    id: 'yogi',
    title: 'Making of a Yogi',
    blurb:
      'Gyaneshwar (Gyani) Rao Baile’s own meditation diary, kept year after year — the visions as they came, the words heard in them, and what they were later understood to mean. Second edition.',
  },
  {
    id: 'yogini',
    title: 'The Making of a Yogini',
    blurb: 'Shivangini’s spiritual journey.',
  },
  {
    id: 'saadhana',
    title: 'Saadhana — My Spiritual Journey',
    blurb: 'Day to day spiritual practice that children of various ages can follow.',
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

  { group: 'yogi', title: 'Making of a Yogi', note: 'Second edition', language: 'English', file: 'making-of-a-yogi-second-edition.pdf' },

  { group: 'yogini', title: 'Making of a Yogini', language: 'English', file: 'making-of-a-yogini-english.pdf' },
  { group: 'yogini', title: 'Sai Shivangini', note: 'Making of a Yogini, in Telugu', language: 'Telugu', file: 'sai-shivangini-telugu.pdf' },

  { group: 'saadhana', title: 'Saadhana — My Spiritual Journey', language: 'English', file: 'saadhana-my-spiritual-journey-english.pdf' },
];

/**
 * Counts used in prose across the site. Deriving them here means adding a book
 * above updates every page that mentions how many there are.
 */
const WORDS = [
  'no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
  'nineteen', 'twenty',
];

/** Spelled-out number for use in a sentence; falls back to digits past twenty. */
export const inWords = (n: number) => WORDS[n] ?? String(n);

export const bookCount = books.length;
export const bookCountWord = inWords(bookCount);

/** How many titles are not part of the Anjaneya's Command set. */
export const otherBookCountWord = inWords(bookCount - books.filter((b) => b.group === 'anjaneya').length);
