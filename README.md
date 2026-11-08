# Seun Odusanya website

Next.js (App Router, TypeScript). Pages are statically generated.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

- `src/app/*/page.tsx` : one folder per page (home, about, impact, speaking, recognition, press, contact). Page copy lives in these files.
- `src/components/` : Header, Footer, Cta, PageHero, HomeHero, Photo, ContactForm.
- `src/lib/site.ts` : email and social links. Set `NEXT_PUBLIC_SITE_URL` (for example `https://seunodusanya.com`) in production.
- `src/lib/images.ts` : image sizes. Add a line here when you add a photo to `public/images`.
- `src/app/globals.css` : all styling (colours and type are variables at the top).
- `_static-html/` : the earlier plain HTML version, kept as a backup. It is not part of the build.

## Adding a photo

1. Put the file in `public/images/`.
2. Add `"name": { ext: "jpg", w: 1200, h: 800 }` to `src/lib/images.ts`.
3. Use `<Photo name="name" alt="Describe the photo" />`.

## Deploying

Vercel is the simplest host: import the repository and deploy with the defaults. Any Node host also works with `npm run build` then `npm start`.
