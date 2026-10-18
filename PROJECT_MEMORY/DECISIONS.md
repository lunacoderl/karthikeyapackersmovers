# Architectural & Technical Decisions: Karthikeya Packers & Movers

## Decision Log

### 1. Brand Identity & Physical Signboard Alignment
- **Date**: 2026-10-18
- **Context**: The client provided a signboard identifying the business as "Karthikeya Packers and Movers" based in Vizianagaram with address "D. No. 123, VUDA Colony, Phase-4, 40 Ward, Vizianagaram District, Mandal – 535003".
- **Decision**: Update all brand copy, legal names, and metadata from "Sree Sampath" to "Karthikeya Packers & Movers". Update geographic targeting from Visakhapatnam-centric to Vizianagaram operational HQ, highlighting Vizianagaram, Visakhapatnam, Srikakulam, and nationwide highway corridors.
- **Rationale**: Reflects authentic client business location while preserving broad customer reach across the north coastal Andhra Pradesh belt and interstate destinations.

### 2. High-Resolution SVG/Vector Logo Implementation
- **Date**: 2026-10-18
- **Context**: The existing logo image referenced Sree Sampath.
- **Decision**: Provide an official high-resolution, branded SVG graphic for "Karthikeya Packers & Movers" featuring a moving truck icon, checkmark trust symbol, and bold typographic lettering in navy and orange.
- **Rationale**: Crisp rendering across all display densities (retina screens, mobile devices, desktops) without pixellation or distortion.

### 3. SEO Localization for Vizianagaram & North Coastal AP
- **Date**: 2026-10-18
- **Context**: Vizianagaram is the primary operational hub, but relocation inquiries also heavily originate from and travel to Visakhapatnam and Srikakulam.
- **Decision**: Set schema latitude/longitude to Vizianagaram (18.1124, 83.4070) with address locality "Vizianagaram" and postal code "535003". Structure SEO descriptions and keywords to rank for "packers and movers in vizianagaram", "movers in vuda colony", "vizianagaram to vizag shifting", and pan-India domestic relocations.

### 4. WhatsApp & Direct Phone Conversion Architecture
- **Date**: 2026-10-18
- **Context**: For small and medium moving businesses in India, WhatsApp and immediate phone calls generate over 90% of qualified moving leads.
- **Decision**: Maintain a multi-point conversion engine with sticky mobile CTA buttons, instant WhatsApp pre-filled messaging, and a structured quote form that opens WhatsApp with formatted details.
