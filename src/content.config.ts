import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Each seva programme is one Markdown file in src/content/seva/.
 * Frontmatter drives the structured parts of the page (facts, figures, steps,
 * gallery); the Markdown body below it is the narrative.
 */
const seva = defineCollection({
  loader: glob({ base: './src/content/seva', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      /** One-line summary used on cards and in search results. */
      summary: z.string(),
      /** Controls ordering across the site. Lower numbers come first. */
      order: z.number(),
      /** Key from src/components/SevaIcon.astro */
      icon: z.enum(['bowl', 'stethoscope', 'book', 'droplet', 'paw', 'basket']),
      cadence: z.string(),
      place: z.string(),
      cover: image(),
      coverAlt: z.string(),
      facts: z
        .array(
          z.object({
            value: z.string(),
            label: z.string(),
          }),
        )
        .default([]),
      steps: z
        .array(
          z.object({
            title: z.string(),
            text: z.string(),
          }),
        )
        .default([]),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .default([]),
      accent: z.enum(['gold', 'sky', 'kumkum', 'ink']).default('gold'),
    }),
});

export const collections = { seva };
