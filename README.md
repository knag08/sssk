# Sri Sathya Sai Kuteer — website

The website for Sri Sathya Sai Kuteer, Puttaparthi: a public charitable trust and spiritual centre.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It compiles to plain
static HTML, so it is fast, cheap to host, and has no database or server to maintain.

---

## Running it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321. The site reloads as you edit.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local preview server |
| `npm run build` | Build the finished site into `dist/` |
| `npm run preview` | Serve the built site exactly as it will be published |

---

## Publishing to GitHub Pages

Deployment is automatic. Every push to the `main` branch runs
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it.

One-time setup on GitHub:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Under **Custom domain**, enter `srisathyasaikuteer.org` and tick **Enforce HTTPS**.
4. At your domain registrar, point the domain at GitHub Pages:
   - four `A` records for `srisathyasaikuteer.org` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - one `CNAME` record for `www` → `<your-github-username>.github.io`

The file [`public/CNAME`](public/CNAME) holds the custom domain and must stay in the repository — a deploy
would otherwise wipe the setting. If you ever move to a different domain, edit that file *and* the
`site:` value in [`astro.config.mjs`](astro.config.mjs) (it is used for canonical URLs and the sitemap).

You can also trigger a rebuild by hand from the **Actions** tab → *Deploy to GitHub Pages* → **Run workflow**.

---

## Editing the site

Most day-to-day changes need no HTML at all.

### Contact details, menus and headline figures

Everything site-wide lives in one file: [`src/data/site.ts`](src/data/site.ts).

- **Address, email, telephone** — edit the `contact` object. Leaving `phone` as an empty string
  (`''`) hides it; fill it in and it appears in the footer and on the Contact page automatically.
- **The four headline numbers** (meals, patients, litres, children) — edit the `stats` array.
  They are used on the home page and the Impact page from that one place.
- **The navigation menu** — edit the `nav` array.
- **Report year** — edit `reportYear`.

### The service pages

Each service is one Markdown file in [`src/content/seva/`](src/content/seva/). The block at the top
between the `---` lines controls the structured parts of the page; the text below it is the story.

```markdown
---
title: Narayana Seva
subtitle: Serving the Divine in every person who is hungry
summary: A short line used on the cards.
order: 1                 # position across the whole site; lower comes first
icon: bowl               # bowl · stethoscope · book · droplet · paw · basket
cadence: Daily, and on the 23rd
place: Puttaparthi town and the surrounding villages
cover: ../../assets/photos/narayana-seva-delivery-01.jpg
coverAlt: A description of the photograph, for screen readers
accent: kumkum           # gold · sky · kumkum · ink
facts:                   # the row of big numbers
  - value: '~55'
    label: 'People served lunch every day'
steps: []                # optional numbered "How it works" section
gallery:                 # photographs at the foot of the page
  - src: ../../assets/photos/kitchen-cooking-01.jpg
    alt: A description of the photograph
---

The story goes here, in ordinary Markdown.
```

Adding a new file to that folder creates a new service page, adds it to the Seva index and to the
home page automatically. Nothing else needs changing.

> **One YAML rule to remember:** if a line of the block at the top contains a colon followed by a
> space, wrap the whole value in single quotes — otherwise the build will fail with a confusing error.

### Books

Put the PDF in [`public/books/`](public/books/), then add an entry to
[`src/data/books.ts`](src/data/books.ts) giving its title, language and group. The file size shown on
the card is read from disk when the site is built, so replacing a PDF never leaves a stale figure
behind. To start a new grouping (a new work rather than another volume), add it to `bookGroups` first.

### Talks and videos

Talks live in [`src/data/videos.ts`](src/data/videos.ts), split into *teachings*, *journeys* and the
*Souljourns* interviews. To add one:

1. Save its thumbnail as `src/assets/video/<video id>.jpg` — the id is the part of the YouTube URL
   after `v=`. `https://i.ytimg.com/vi/<id>/maxresdefault.jpg` is the usual source.
2. Add `{ id, title, blurb, source }` to the right list.

Thumbnails are stored in the repository on purpose: **nothing at all is requested from YouTube until
a visitor presses play**, and the player that then opens is the no-cookie one. The channel handle and
the link to the Shorts are also in that file, so they only need changing in one place.

### The gallery

Drop a photograph into [`src/assets/photos/`](src/assets/photos/) and it appears in the gallery on
its own. Name it with one of these prefixes so it lands in the right filter:

| Prefix | Filter it appears under |
| --- | --- |
| `narayana-seva-`, `monthly-narayana-seva-`, `kitchen-`, `grocery-` | Narayana Seva |
| `eye-camp-`, `medical-camp-` | Medical camps |
| `education-` | Education |
| `water-seva-`, `ro-water-` | Drinking water |
| `vanara-` | Vanara Seva |
| anything else | At the Kuteer |

Then add a line to the `captions` list in [`src/data/photos.ts`](src/data/photos.ts) describing what
is in the picture. That description is read aloud by screen readers and shown beneath the enlarged
photograph, so please write a real sentence rather than a filename.

Photographs are automatically resized, converted to WebP and served at the right size for each
device — you can drop in a large file straight from a phone or camera.

### Ordinary page text

The remaining pages are in [`src/pages/`](src/pages/). Each is an `.astro` file — HTML with a small
block of settings at the top. Editing the words between the tags is safe; the layout comes from the
shared components in [`src/components/`](src/components/).

---

## Things worth knowing

- **Donation details are not published yet.** The *Contribute* section of
  [`src/pages/get-involved.astro`](src/pages/get-involved.astro) currently asks people to write to the
  trustees. When bank or UPI details are ready, replace the panel marked
  `Placeholder panel — replace with bank / UPI details when ready`.
- **Design tokens** — colours, fonts and the shared shapes live at the top of
  [`src/styles/global.css`](src/styles/global.css). The palette is taken from the Kuteer emblem: navy
  ink, the gold ring, the sky-blue lotus petals, and the red heart used sparingly for buttons.
- **Fonts** are bundled with the site (Fraunces for headings, Inter for text). Nothing is loaded from
  Google or any other third party, so the site works behind restrictive networks and leaks no visitor
  data.
- **Accessibility** — every photograph carries a description, the site works with the keyboard alone,
  and the reveal animation switches itself off for anyone who has asked their device to reduce motion.
- **Figures that need confirming.** Where the old site and the 2025–26 activity report disagreed, the
  report was treated as current: the monthly Narayana Seva is given as ~1,200 people (the old site said
  800–1,000), and the medical camps as the 23rd (the old site described a 20th–24th window, which is now
  shown for naturopathy and Sujok therapy only). The village tuition numbers from the old site —
  100 children at Narsimpalli and 20 at Narsimpalli Thanda — are presented as additional to the ~40
  taught at the Kuteer. Please check these against your own records.
- **Repository size.** The thirteen book PDFs come to about 57 MB, and the activity report in
  [`_source/`](_source/) is another 30 MB. That is well inside GitHub's limits but makes for a slow first
  clone. If you would rather not carry the deck in git history, add
  `_source/*.pptx` to [`.gitignore`](.gitignore) before the first commit.
- The original source material used to build the site is kept in [`_source/`](_source/) for reference.
