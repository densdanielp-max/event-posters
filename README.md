# Event posters

Static registration landing page and poster gallery for NALICO and NAFICO.

## Visitor flow

The QR code points to `https://densdanielp-max.github.io/event-posters/`.
`index.html` embeds Microsoft Forms and provides a direct form link as a fallback.
The form requires full name, email address (email format validation) and phone number.
After submission, its thank-you message links to `posters.html`.

Responses are stored in the form owner's Microsoft account, not in GitHub. Retrieve them in Microsoft Forms > NALICO & NAFICO — Event Poster Registration > Responses > Insights and actions > Open results in Excel. The adjacent dropdown offers Download a copy. Never upload response workbooks or attendee information to this public repository.

This is a registration step in the normal visitor flow, not access control: the static gallery and image URLs remain publicly accessible. Microsoft Forms does not provide this page with a verified submission signal, so the site does not use an unverified unlock button or pretend to authenticate visitors.

## Gallery

`posters.html` displays the supplied property insurance poster with a full-size viewer, original PNG download and contact links taken from the poster. Two additional poster slots are marked coming soon. The event name and remaining two posters have not yet been supplied.

Add the remaining approved poster files and update `posters.html` with their real titles, previews and view/download links. Update the available count and replace the two coming-soon slots.

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
