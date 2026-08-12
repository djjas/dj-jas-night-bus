# DJ JAS — The Night Bus

A one-way ride through Bollywood. Built with React, Vite, Tailwind CSS and Lucide icons. No backend, no paid APIs.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. To build for production:

```bash
npm run build
npm run preview
```

## Add a song

Open `src/data/tracks.js` and add a new object to the `tracks` array:

```js
{
  id: "unique-slug",              // must be unique
  title: "Song Title",
  artist: "Artist Name",
  album: "Movie or Album",
  year: 2024,
  youtubeId: "dQw4w9WgXcQ",        // the part after "v=" in the YouTube URL
  tags: ["bollywood", "house"],    // reuse existing tags from FILTERS, or add a new one
  languages: ["hindi"],            // english | hindi | punjabi
}
```

That's it — the track will automatically appear in the playlist, in the right filters, and under the right language.

## Where things live

- `src/data/tracks.js` — the playlist and filter/language definitions. This is the file you'll touch most.
- `src/components/` — one component per section (Hero, Playlist, TrackRow, NowPlaying, Driver, Footer, etc).
- `src/lib/youtube.js` — small helpers that turn a YouTube ID into a thumbnail, watch link, or embed link.
- `tailwind.config.js` — the design tokens (colors, fonts, animation keyframes).

## Before you launch

- Replace the Instagram and YouTube links in `src/components/Driver.jsx` and `src/components/Footer.jsx` with your real profile URLs.
- Update `og:url` / `canonical` in `index.html` once you have a real domain.
- `public/og-image.svg` is a placeholder social-share card built from the same design system. Most platforms (iMessage, Slack, Discord) render SVG previews fine, but for maximum compatibility (older WhatsApp/Facebook crawlers) export it as a 1200×630 JPG or PNG and swap the `og:image` / `twitter:image` paths in `index.html`.
- The favicon (`public/favicon.svg`) is a simple route-dot mark — swap it for real brand artwork whenever you have it.

## Notes on the design

- Playlist thumbnails are pulled live from YouTube (`img.youtube.com`), so there's nothing to upload or maintain per track.
- The bottom "Now Playing" console uses the real YouTube IFrame Player API — play/pause, seek, mute, and next/previous track are fully functional, with a live scrubber and timestamps. It's not a fake progress bar.
- Keyboard shortcuts work while a track is loaded: `Space` play/pause, `←`/`→` seek 5s, `N`/`P` next/previous track, `M` mute, `T` copies the share link ("ticket").
- Filters are OR'd together (selecting "punjabi" + "house" shows tracks matching either), and always combined with the language toggle.
- The hero illustration (`src/components/NightHighway.jsx`) is original SVG artwork built from code — no external images to swap in, and no licensing concerns.
- Animations respect `prefers-reduced-motion`.
