# kalmanodds.com

Astro blog/portfolio site. Uses content collections for blog posts and projects, Tailwind for styling, React for interactive components (search).

## Tech Stack

- Astro 3 (upgrading to 5)
- Tailwind CSS 3 (upgrading to 4)
- React 18 (upgrading to 19)
- TypeScript
- Satori + @resvg/resvg-js for OG image generation
- Marked for rendering project README markdown

## Key Architecture

- Content collections: `blog` and `portfolio` in `src/content/`
- Custom slug system via `src/utils/slugify.ts` — uses `postSlug`/`projectSlug` frontmatter fields with title fallback (does NOT use Astro's built-in `.slug`)
- OG images: `src/pages/[ogTitle].svg.ts` + `src/utils/generateOgImage.tsx`
- Color system: CSS variables with RGB triplets (`--color-fill: 33, 39, 42`) consumed via `withOpacity()` helper in `tailwind.config.cjs`

## Upgrade Progress

1. **Astro 3 → 4** — `npm install astro@^4 @astrojs/check@latest @astrojs/rss@latest && npm install -D @astrojs/react@latest @astrojs/sitemap@latest @astrojs/tailwind@latest`. Remove `extendDefaultPlugins: true` from `astro.config.mjs`. The `export const get` endpoints in `rss.xml.ts` and `[ogTitle].svg.ts` must be renamed to `GET`.

2. **React 18 → 19** — `npm install -D react@latest react-dom@latest @types/react@latest`

3. **Astro 4 → 5** (content collections migration) — `npm install astro@latest @astrojs/check@latest`. Migrate `src/content/config.ts` to use `glob()` loader and `type: 'content_layer'`. Since this project uses custom slug functions (not Astro's `.slug`), migration should be smooth. The `[ogTitle].svg.ts` endpoint API also changes.

4. **Tailwind 3 → 4** (most complex) — Remove `@astrojs/tailwind`, add `@tailwindcss/vite`. Replace `tailwind.config.cjs` with CSS-first config in `base.css`. The `withOpacity()` helper and RGB-triplet CSS variable pattern needs conversion. Delete `tailwind.config.cjs`.

5.  **Cleanup** — Update fuse.js to v7, update remark-toc/remark-collapse. Change `site` URL in `astro.config.mjs` from `https://astro-paper.pages.dev/` to actual domain. Evaluate `@divriots/jampack`.

### Known Issues

- `@astrojs/sitemap@3` has a pre-existing build error with Astro 3 (`Cannot read properties of undefined (reading 'reduce')`). Fixed by updating in step 6.
- Build warns about lowercase endpoint names (`get` → `GET`) — fix in step 6.
