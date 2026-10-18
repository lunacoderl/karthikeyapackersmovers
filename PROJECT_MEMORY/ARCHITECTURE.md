# System Architecture: Karthikeya Packers & Movers

## Technical Stack
- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`tsc -b`)
- **Bundler & Build Tool**: Vite (`vite` v8.3.0)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React (`lucide-react`)
- **Animation**: Framer Motion (`framer-motion`)
- **Routing**: React Router DOM (`react-router-dom` v7)

## Directory Structure
```
src/
├── components/
│   ├── common/
│   │   ├── ScrollToTop.tsx      # Restores window scroll on route change
│   │   └── SeoHead.tsx          # Dynamic head tags & JSON-LD injection
│   ├── home/
│   │   ├── AboutSection.tsx     # Company story & operational core pillars
│   │   ├── FAQSection.tsx       # Interactive accordion with FAQs
│   │   ├── GallerySection.tsx   # Categorized real field operations & lightbox
│   │   ├── Hero.tsx             # High-conversion hero banner with CTA
│   │   ├── MovingProcess.tsx    # 5-step transparent relocation workflow
│   │   ├── QuoteSection.tsx     # Interactive quote form & direct WhatsApp dispatch
│   │   ├── ServiceAreasSection.tsx # Vizianagaram, Vizag, Srikakulam, Pan-India
│   │   ├── ServicesGrid.tsx     # 6 core services cards linking to detail pages
│   │   ├── TestimonialsSection.tsx # Google verified customer reviews
│   │   ├── TrustRow.tsx         # Quick 4-column trust indicators
│   │   ├── VehicleFleetSection.tsx # Interactive fleet capacity selector
│   │   └── WhyChooseUs.tsx      # 6 core differentiators
│   ├── layout/
│   │   ├── FloatingCTA.tsx      # Mobile sticky bottom bar + desktop speed dial
│   │   ├── Footer.tsx           # Comprehensive footer with links, address, trust
│   │   └── Navbar.tsx           # Responsive sticky navigation with mobile drawer
│   ├── services/
│   │   └── ServiceDetailPage.tsx # Reusable rich detail template for each service
│   └── ui/
│       └── Lightbox.tsx         # Fullscreen modal image viewer
├── data/
│   ├── areas.ts                 # Service areas & coverage data
│   ├── company.ts               # Single source of truth for company identity
│   ├── faqs.ts                  # Customer FAQs
│   ├── gallery.ts               # Operation photos & categories
│   ├── services.ts              # Detailed service descriptions & processes
│   ├── testimonials.ts          # Customer reviews & feedback
│   └── vehicles.ts              # Vehicle fleet specifications & images
├── pages/
│   ├── Home.tsx                 # Main landing page assembling sections
│   └── NotFound.tsx             # 404 error page with noindex meta tag
├── types/
│   └── index.ts                 # TypeScript interfaces and models
├── utils/
│   └── whatsapp.ts              # WhatsApp URL builder for formatted quotes
├── siteSeo.ts                   # Manifest of SEO routes and business structured data
├── App.tsx                      # Root application with router setup
└── main.tsx                     # Entry point mounting to DOM
```

## Data Flow & Integration Patterns
1. **Single Source of Truth**: `src/data/company.ts` provides business name, phone numbers, WhatsApp lines, address, and ratings to all components.
2. **SEO & Indexing**: `src/siteSeo.ts` defines all canonical routes and JSON-LD schema parameters. `SeoHead.tsx` dynamically populates document title, meta descriptions, and robots directives.
3. **Lead Conversion**: Forms validate input client-side and trigger WhatsApp API (`https://wa.me/...`) with formatted markdown text containing the customer's moving requirements.
