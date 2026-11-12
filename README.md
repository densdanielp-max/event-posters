# Event posters

Stable QR destination and poster gallery for NALICO and NAFICO.

## Visitor flow

The QR code points to `https://densdanielp-max.github.io/event-posters/`.
`index.html` automatically redirects to `https://www.facebook.com/naficonalico/` using JavaScript and a meta refresh, with a visible link as a fallback. The existing printed QR code does not change.

The Facebook destination is the Nafico/nalico page (page ID 102976425633482). Publicly indexed posts dated October 2026 distinguished it from the older Nalico Nafico page. The QR flow no longer collects contact details through Microsoft Forms.

Responses are stored in the form owner's Microsoft account, not in GitHub. Retrieve them in Microsoft Forms > NALICO & NAFICO > Responses > Insights and actions > Open results in Excel. The adjacent dropdown offers Download a copy. Never upload response workbooks or attendee information to this public repository.

The Microsoft Form and previously collected responses remain in the owner's Microsoft account. The gallery and image URLs remain publicly accessible at their existing addresses.

## Gallery

`posters.html` displays all three materials:

1. Updated property insurance artwork, subtle blue rings (2160 x 2700 PNG).
2. Health & Life Solutions (one-page original PDF plus image preview).
3. Motor insurance brochure (two-page original PDF plus both page previews).

The PDFs came from the non-inline attachments in the user's "Fw: Flyers for printing" email dated 1 October 2026. Preview PNGs were rendered from every PDF page without editing the artwork. The property PNG was copied from the user's supplied updated file.

Property & Casualty contact links are from the property poster. The main Motor Division contact is 189 Charlotte Street, Lacytown, Georgetown, +592 231 9731 / +592 231 9732, taken from the brochure. Group Department (Group Health/Life): Ashley Etwaru, aetwaru@naficonalico.com. These contacts were supplied by the user. No branch list is reproduced on the website.

## Deployment

Repository: `densdanielp-max/event-posters`. GitHub Pages publishes `main` from `/ (root)` with HTTPS. Keep the repository name and landing URL stable so the existing QR remains usable.

## Files

- `index.html`: Facebook redirect and fallback link.
- `registration.css`: retained layout for the former registration page; not loaded by the redirect.
- `posters.html`: poster gallery.
- `property-insurance.png`: original 2160 x 2700 poster, copied without editing.
- `logo.png`, `fonts.css`: matching assets from the poster source folder.
- `style.css`: shared responsive styles.
- `app.js`: accessible native dialog viewer; direct image links work without JavaScript.

Only public event materials belong in this repository.

The gallery uses three compact cards and expandable contacts. `posters.css` contains the compact gallery layout. The previous registration page remains available in Git history if it needs to be restored.
