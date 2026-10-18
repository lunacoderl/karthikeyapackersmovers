# UI Structure & Component Registry: Karthikeya Packers & Movers

## Route Map
- `/` - **Home Page**
  - `<Navbar />`: Brand logo, navigation anchors, quick call and WhatsApp actions.
  - `<Hero />`: Main headline, trust badge, primary and secondary call-to-actions.
  - `<TrustRow />`: 4-point trust banner (Google Rating, Fleet Sizes, Coverage, Careful Crew).
  - `<VehicleFleetSection />`: Interactive fleet size tabs (Medium, Large Branded Carrier, Extra Large Heavy Cargo).
  - `<AboutSection />`: Background, operations story, 4 core operational pillars, facilities preview.
  - `<WhyChooseUs />`: 6 core value cards highlighting customer benefits.
  - `<ServicesGrid />`: 6 interactive service cards with deep-links to `/services/:slug`.
  - `<MovingProcess />`: 5-step visual roadmap from quote to room placement.
  - `<TestimonialsSection />`: Verified customer ratings with visual proof.
  - `<GallerySection />`: Multi-category filtered photo gallery with interactive `<Lightbox />`.
  - `<ServiceAreasSection />`: Vizianagaram local, Visakhapatnam-Srikakulam coastal belt, and Pan-India corridors.
  - `<FAQSection />`: Interactive accordion with clear, transparent answers.
  - `<QuoteSection />`: Complete lead generation form with WhatsApp bridge.
  - `<Footer />`: Extended navigation, address, verified business credentials.
  - `<FloatingCTA />`: Sticky mobile bottom dock (Call Now, WhatsApp, Get Quote) and desktop speed dial.

- `/services/:slug` - **Service Detail Page**
  - Dedicated pages for:
    - `/services/household-shifting`
    - `/services/office-relocation`
    - `/services/packing-unpacking`
    - `/services/local-shifting`
    - `/services/domestic-relocation`
    - `/services/commercial-goods-transportation`
  - Components: Breadcrumbs, hero overview, "What We Help With" grid, 5-step workflow protocol, recommended vehicle match, service FAQs, and instant quote action.

- `*` - **Not Found Page (`/404`)**
  - Friendly error illustration, direct link back to home, `<meta name="robots" content="noindex, follow" />`.

## Design System Tokens
- **Navy Primary**: `#0F2C59`
- **Deep Navy Base**: `#0B1E3B`
- **Vibrant Accent Orange**: `#EA580C` / `#F97316`
- **Emerald WhatsApp Green**: `#059669` / `#10B981`
- **Background Light**: `#F8FAFC`
- **Card Surface**: `#FFFFFF`
- **Typography**: Plus Jakarta Sans, 400 through 900 weights.
