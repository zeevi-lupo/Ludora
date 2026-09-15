# Ludora — Full Static Website

This package is a complete responsive multi-game landing site.

## Included
- Home page
- Full Games library with search + category filters
- Unique artwork and color system for every game
- Game detail page with per-game theme
- Intermediate partner-offer page
- FAQ
- About
- Terms of Service
- Privacy Policy
- Responsive mobile navigation
- `s1` member tracking
- automatic `s2` game tracking
- one configurable AdBlueMedia locker URL

## Configure your AdBlueMedia locker
Open `app.js` and find:

```js
const CONFIG = {
  lockerUrl: "https://YOUR-ADBLUEMEDIA-LOCKER-URL.example/offer",
  siteName: "Ludora",
  defaultMember: ""
};
```

Replace `lockerUrl` with your real AdBlueMedia content-locker URL.

## Tracking behavior
Member traffic:
`https://yourdomain.com/?s1=dani`

If the visitor chooses Monopoly GO, Ludora internally uses:
- `s1=dani`
- `s2=monopoly-go`

When the visitor continues to the configured locker, Ludora forwards:
`YOUR_LOCKER_URL?s1=dani&s2=monopoly-go`

Only these two tracking parameters are forwarded.

## Hosting
Upload all files and folders to the public web root on cPanel, Netlify, Vercel, Cloudflare Pages, GitHub Pages, or another static host.

Keep this folder structure:
- index.html
- styles.css
- app.js
- assets/
  - logo.svg
  - games/*.svg

## Important
The site intentionally does not claim to directly generate or inject in-game currency/items. It includes an independent-site disclosure and partner-offer wording to keep the landing experience transparent.

Before launch, replace:
- `hello@example.com` with your contact email
- AdBlueMedia locker URL
- any legal wording you need for your actual business and jurisdiction
