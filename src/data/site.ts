/**
 * Single source of truth for site-wide facts.
 * Trustees: this is the file to edit for contact details, statistics and menus.
 */

export const site = {
  name: 'Sri Sathya Sai Kuteer',
  shortName: 'Sai Kuteer',
  tagline: 'A spiritual centre and public charitable trust in Puttaparthi',
  description:
    'Sri Sathya Sai Kuteer is a public charitable trust in Puttaparthi where daily worship and selfless service go hand in hand — Narayana Seva, free medical camps, free tuitions, round-the-clock drinking water and Vanara Seva.',
  url: 'https://srisathyasaikuteer.org',
  established: 'Inaugurated 24 December 2017',
} as const;

export const contact = {
  addressLines: [
    'Sri Sathya Sai Kuteer',
    'D. No. 5/193/7, Kovelaguttapalli Road',
    'Puttaparthi, Sri Sathya Sai District',
    'Andhra Pradesh 515134, India',
  ],
  email: 'srisathyasaikuteer@gmail.com',
  /** Add a public phone number here and it appears automatically on the Contact page and in the footer. */
  phone: '' as string,
  mapsUrl: 'https://maps.google.com/?q=Sri+Sathya+Sai+Kuteer+Kovelaguttapalli+Road+Puttaparthi+515134',
  mapsEmbed:
    'https://www.google.com/maps?q=Sri+Sathya+Sai+Kuteer,+Kovelaguttapalli+Road,+Puttaparthi,+Andhra+Pradesh+515134&output=embed',
} as const;

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Anjaneya’s Command', href: '/anjaneya-command/' },
  { label: 'Sadhana', href: '/sadhana/' },
  { label: 'Seva', href: '/seva/' },
  { label: 'Impact', href: '/impact/' },
  { label: 'Books', href: '/books/' },
  { label: 'Media', href: '/media/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Headline figures for the financial year 2025–2026. */
export const stats = [
  {
    value: '1,31,700+',
    label: 'Meals served',
    note: 'Through daily and monthly Narayana Seva',
  },
  {
    value: '2,640+',
    label: 'People treated',
    note: 'At free eye, allopathy and naturopathy camps',
  },
  {
    value: '84,60,000+',
    label: 'Litres of water',
    note: 'RO-purified drinking water, free to all, 24×7',
  },
  {
    value: '80+',
    label: 'Children supported',
    note: 'Daily tuitions, computer classes and yoga',
  },
] as const;

export const reportYear = '2025–2026';
