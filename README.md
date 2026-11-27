# Value Textiles website

Marketing and enquiry site for Value Textiles, a knitwear manufacturer in Tiruppur, India. Built with Next.js, React and Tailwind. Enquiries are saved to Firebase Cloud Firestore.

```bash
npm run dev     # local development, http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Pages | `app/` (home, garments, capabilities, quality, how-to-order, about, who-we-work-with, contact, thank-you, privacy, terms, blog) |
| Navigation, footer, contact details | `config/siteContent.ts` |
| Garment categories | `config/garmentsData.ts` |
| Quality tests and certificates | `config/qualityData.ts` |
| Facts only the owner can supply | `config/ownerFacts.ts` |
| Quote form (homepage and Contact) | `components/forms/QuoteForm.tsx` |
| Photo placeholders | `components/ui/ImageSlot.tsx` |
| Blog articles | `config/blogPosts.ts` (add an object to `BLOG_POSTS`; the page, sitemap and search pick it up) |
| Site search | `config/searchIndex.ts` |
| Firebase and Firestore access | `lib/firebase.ts`, rules in `firestore.rules` |

## Owner facts

Minimum order, lead times, payment terms, certificate dates and similar facts start empty in `config/ownerFacts.ts`. While a fact is empty the site shows safe wording and publishes nothing invented. In development a small "To confirm" tag marks each spot. When the owner confirms a fact, put the text in that fact's `value`. The checklist to take to the owner is `docs/owner-requirements.md`.

## Before launch

- Deploy `firestore.rules`. The live database refused a read-only test query, so its current rules are not the ones in this repo. After deploying, send one test enquiry and confirm it saves. The blog no longer uses the database.
- Replace generated homepage photos with real ones. Each photo is a slot in `app/page.tsx`, `components/home/ProcessSection.tsx` or `components/home/WaysToWorkSection.tsx`.
- Set the final domain in `config/siteContent.ts` (`url`). It drives canonical links, the sitemap and the social image.
- Add the new logo in `components/ui/Logo.tsx` and swap the share image in `lib/og.tsx`.
- Confirm brand-logo permissions for the homepage strip (`components/home/TrustStatsAndLogosSection.tsx`).
- If analytics or advertising cookies are added later, update `app/privacy/page.tsx` first.
- Have the Privacy and Terms pages read by the owner or a legal adviser.
