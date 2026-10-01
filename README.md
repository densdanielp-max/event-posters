# Event posters

Static event poster landing page for NALICO and NAFICO.

## Current status

The landing page displays the supplied property insurance poster, with a full-size viewer, original PNG download, and contact links taken from the poster. Two additional poster slots are marked coming soon. The event name and remaining two posters have not yet been supplied.

## GitHub Pages setup

Repository: `densdanielp-max/event-posters`.

1. Publish this folder's files to the repository's `main` branch.
2. In repository Settings > Pages, select Deploy from a branch, `main`, and `/ (root)`.
3. Verify the public URL provided by GitHub before generating the final QR code.

Live project URL: `https://densdanielp-max.github.io/event-posters/`. The existing QR code points directly to this URL.

## Add the posters

Add the remaining approved poster files and update `index.html` with their real titles, previews, and view/download links. Update the available count and replace the two coming-soon slots. Keep the repository name and public page URL stable so the printed QR remains usable after content updates.

## Files and verification

- `property-insurance.png`: original 2160 x 2700 poster, copied without editing.
- `logo.png` and `fonts.css`: matching assets from the supplied poster's source folder.
- `style.css`: responsive page styles.
- `app.js`: accessible native dialog viewer; direct image links remain usable without JavaScript.

Verified at desktop, 390 px, and 320 px viewport widths; checked poster enlargement, Escape to close, focus restoration, and original download integrity. Contact links use the phone numbers, email, and WhatsApp number shown on the supplied poster; no messages or calls were sent.

Only public event materials belong in this repository.
