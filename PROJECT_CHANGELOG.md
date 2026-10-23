# Project Technical SEO & GSC Changelog

## Project: Sree Sampath Packers & Movers
- **Repository Path**: `c:\Users\user\Desktop\Projects\sree-sampath-packers-movers`
- **Approved Primary Domain**: `https://www.sreesampathpackersmovers.online`
- **Date**: October 15, 2026
- **Status**: Batch A - Certified Technical SEO & 404/Sitemap Fixes Implemented

---

### Files Created
1. `src/siteSeo.ts`
   - Single source of truth for SEO route manifests, canonical URLs, service routes, page titles, meta descriptions, and business structured data (schema).
2. `src/components/common/SeoHead.tsx`
   - Dynamic SEO manager updating `document.title`, `meta[name="description"]`, `meta[name="robots"]`, `link[rel="canonical"]`, `og:*` tags, and injecting JSON-LD `LocalBusiness` / `MovingCompany` schema per route.
3. `src/pages/NotFound.tsx`
   - Dedicated 404 error page with explicit `<meta name="robots" content="noindex, follow" />` to eliminate soft-404 indexing errors.
4. `public/robots.txt`
   - Production robots configuration allowing all user-agents and linking directly to `https://www.sreesampathpackersmovers.online/sitemap.xml`.
5. `public/sitemap.xml`
   - Valid UTF-8 XML sitemap specifying absolute canonical URLs for the homepage (`/`) and all 6 distinct, content-rich service detail routes (`/services/household-shifting`, `/services/office-relocation`, `/services/packing-unpacking`, `/services/local-shifting`, `/services/domestic-relocation`, `/services/commercial-goods-transportation`).
6. `PROJECT_CHANGELOG.md`
   - Record of all changes made to this repository per project standards.

---

### Files Modified
1. `index.html`
   - Added initial canonical `<link rel="canonical" href="https://www.sreesampathpackersmovers.online/" />` and `<meta property="og:url" content="https://www.sreesampathpackersmovers.online/" />` for immediate crawl recognition before JS hydration.
2. `src/pages/Home.tsx`
   - Added `<SeoHead />` binding to the home manifest entry (`/`).
3. `src/components/services/ServiceDetailPage.tsx`
   - Bound dynamic `<SeoHead />` updating route-specific self-canonical, titles, and descriptions. Added fallback `noIndex={true}` if an unrecognized service slug is accessed.
4. `src/App.tsx`
   - Replaced wildcard redirect `<Navigate to="/" replace />` with the dedicated `<NotFound />` component, preventing soft-404 homepage redirect loops.
5. `vercel.json`
   - Replaced open catch-all negative lookahead regex with an explicit whitelist rewrite rule (`/` and `/services/:slug` $\rightarrow$ `/index.html`), enabling native Vercel HTTP 404 responses for arbitrary non-existent URLs.

---

### Verification
- `npm run build`: Verified build succeeds with zero errors.
- Sitemap URL check: Sitemaps contain 7 valid absolute URLs, 0 relative paths, 0 hash fragments.

---

## Update: Google Analytics 4 (gtag.js) Integration
- **Measurement ID**: `G-WSZ493T87C`
- **Date**: October 22, 2026
- **Files Modified**:
  - `index.html`: Injected official Google Analytics tracking tag (`gtag.js`) with measurement ID `G-WSZ493T87C` into the `<head>` tag.
- **Verification**: `npm run build` completed cleanly with 0 TypeScript/Vite errors.

---

## Update: Google Tag Manager (GTM) Integration
- **Container ID**: `GTM-NQDB6TWM`
- **Date**: October 22, 2026
- **Files Modified**:
  - `index.html`: Injected official Google Tag Manager container loader script in `<head>` and `<noscript>` fallback iframe directly after `<body>`.
- **Verification**: `npm run build` completed cleanly with 0 TypeScript/Vite errors.

---

## Update: Google Ads (gtag.js) & Contact Conversion Tracking
- **Tag ID**: `AW-18529521457`
- **Date**: October 23, 2026
- **Files Modified**:
  - `index.html`: Integrated Google Ads tag (`AW-18529521457`) into `<head>` and added automated global click tracking on `tel:` and `wa.me` links for contact conversions.
  - `src/components/home/QuoteSection.tsx`: Injected `gtag('event', 'conversion', ...)` and `generate_lead` event on quote form submit.
- **Verification**: `npm run build` completed cleanly with 0 TypeScript/Vite errors.
