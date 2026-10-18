import type { FAQItem } from '../types'
import { companyDetails } from './company'

export const faqsData: FAQItem[] = [
  {
    q: 'What areas do you serve in Vizianagaram and beyond?',
    a: 'We serve all localities across Vizianagaram (including VUDA Colony, Cantonment, Collectorate road, Kothavalasa, Gajapathinagaram, Bobbili, Nellimarla, Rajam), the Visakhapatnam and Srikakulam coastal region, and operate direct long-distance interstate routes to Hyderabad, Bangalore, Chennai, Vijayawada, Pune, Mumbai, Delhi, and pan-India.'
  },
  {
    q: 'How do I know which vehicle size I need for my move?',
    a: 'Our vehicle fleet offers 3 specialized sizes: Medium for 1 BHK or compact city loads; Large (our official Karthikeya branded carrier) for complete 2-3 BHK households and mid-size offices; and Extra Large Heavy Cargo Carriers for 3+ BHK luxury homes, commercial consignments, and bulk nationwide freight. Share your item list with us on WhatsApp and we will recommend the ideal size with a transparent quote.'
  },
  {
    q: 'Do you provide complete packing materials?',
    a: 'Yes! We bring 100% of all required packing materials including high-density bubble wrap rolls, 5-ply heavy cartons, moisture-proof stretch film, corrugated sheets, foam sheets, and sealing tapes. You do not need to purchase any packaging.'
  },
  {
    q: 'Can you move two-wheelers, cars, and commercial goods?',
    a: 'Yes, absolutely. We provide specialized bike and car transportation with secure tie-downs and scratch-proof padding. We also handle commercial goods, IT workstations, and B2B consignments with proper GST invoices and LR (Lorry Receipt) documentation.'
  },
  {
    q: 'Do you handle long-distance domestic relocation across India?',
    a: 'Yes. Long-distance relocations are supported by our heavy cargo carriers with weather-sealed coverings, dedicated highway drivers, and live coordination for interstate moves to Hyderabad, Bangalore, Chennai, Pune, Mumbai, Delhi, Kolkata, and beyond.'
  },
  {
    q: 'How can I request a free quote?',
    a: `You can request a free quote in seconds! Either fill out our online quote form to generate a structured message on WhatsApp (${companyDetails.phone1Display}) or tap to call us directly at ${companyDetails.phone1Display} / ${companyDetails.phone2Display}.`
  },
  {
    q: 'Are your quotes transparent with no hidden costs?',
    a: 'Yes. Our quotes include loading, transport, unloading, labor, and packaging materials as agreed upon. There are no sudden surprise costs on moving day.'
  },
  {
    q: 'Do you disassemble and reassemble cots and wardrobes?',
    a: 'Yes, our team brings tools to disassemble double beds, wardrobes, dining sets, and reassemble them at your new location.'
  }
]
