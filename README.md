# Coolblue Banner (300×600)

Professional HTML/CSS/JS banner assignment for a 300×600 display. The banner features layered screens, smooth text and category animations, a subtle visual crop, and timed screen transitions. Assets and fonts are bundled locally for consistent rendering.

## Preview

Open [banner.html](banner.html) in a browser. Refresh after edits to see changes.

## Features

- 300×600 banner layout
- Layered screens with timed transitions
- Staggered animations for category and headline
- Subtle image crop and optional slow zoom on the first visual
- Local font loading (Dobra Slab, Open Sans, Avenir fallback)

## Structure

```
.
├── banner.html
├── styles.css
├── script.js
└── assets
    ├── fonts
    └── images
```

## Development Notes

- **Screens:** Each `.screen` is layered and animated through opacity.
- **Timing:** Screen transitions are controlled in [script.js](script.js).
- **Typography:** Dobra Slab uses local OTF files in `assets/fonts`.
- **CTA:** Arrow icon is loaded from `assets/images/arrow.svg`.

## Running Locally

1. Open [banner.html](banner.html) in your browser.
2. Edit [styles.css](styles.css) or [script.js](script.js).
3. Refresh the browser to see updates.

## Author

Assignment implementation by Mehr Beniss.
