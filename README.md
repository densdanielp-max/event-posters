# Event posters

Static registration landing page and poster gallery for NALICO and NAFICO.

## Visitor flow

The QR code points to `https://densdanielp-max.github.io/event-posters/`.
`index.html` embeds Microsoft Forms and provides a direct form link as a fallback.
The form requires full name, email address (email format validation), phone number and insurance interest (multiple selections allowed).
After submission, its thank-you message links to `posters.html`.

Responses are stored in the form owner's Microsoft account, not in GitHub. Retrieve them in Microsoft Forms > NALICO & NAFICO > Responses > Insights and actions > Open results in Excel. The adjacent dropdown offers Download a copy. Never upload response workbooks or attendee information to this public repository.

This is a registration step in the normal visitor flow, not access control: the static gallery and image URLs remain publicly accessible. Microsoft Forms does not provide this page with a verified submission signal, so the site does not use an unverified unlock button or pretend to authenticate visitors.

## Gallery

`posters.html` displays all three materials:

1. Updated property insurance artwork, subtle blue rings (2160 x 2700 PNG).
2. Health & Life Solutions (one-page original PDF plus image preview).
3. Motor insurance brochure (two-page original PDF plus both page previews).

The PDFs came from the non-inline attachments in the user's "Fw: Flyers for printing" email dated 1 October 2026. Preview PNGs were rendered from every PDF page without editing the artwork. The property PNG was copied from the user's supplied updated file.

Property & Casualty contact links are from the property poster. The main Motor Division contact is 189 Charlotte Street, Lacytown, Georgetown, +592 231 9731 / +592 231 9732, taken from the brochure. Group Department (Group Health/Life): Ashley Etwaru, aetwaru@naficonalico.com. Customer Service: Leanne Evelyn, levelyn@naficonalico.com. These contacts were supplied by the user. No branch list is reproduced on the website.

## Deployment

Repository: `densdanielp-max/event-posters`. GitHub Pages publishes `main` from `/ (root)` with HTTPS. Keep the repository name and landing URL stable so the existing QR remains usable.

## Files

- `index.html`, `registration.css`: registration landing page and responsive form layout.
- `posters.html`: poster gallery.
- `property-insurance.png`: original 2160 x 2700 poster, copied without editing.
- `logo.png`, `fonts.css`: matching assets from the poster source folder.
- `style.css`: shared responsive styles.
- `app.js`: accessible native dialog viewer; direct image links work without JavaScript.

Only public event materials belong in this repository.

The follow-up page is intentionally minimal: branding and the four required Microsoft Forms fields. Submission is the end of the requested customer task; the confirmation message offers the gallery as optional reading. The gallery uses three compact cards and expandable contacts. `posters.css` contains the compact gallery layout. Microsoft Forms retains its native confirmation-link step.
