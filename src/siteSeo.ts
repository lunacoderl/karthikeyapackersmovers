export interface SeoRoute {
  path: string
  title: string
  description: string
  h1: string
  priority: number
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export const siteSeo = {
  baseUrl: 'https://www.karthikeyapackersandmovers.online',
  businessName: 'Karthikeya Packers & Movers',
  legalName: 'Karthikeya Packers and Movers Vizianagaram',
  telephone: '+91 98662 66199',
  telephoneAlt: '+91 94945 43838',
  email: 'contact@karthikeyapackersmovers.com',
  address: {
    streetAddress: 'D. No. 123, VUDA Colony, Phase-4, 40 Ward',
    addressLocality: 'Vizianagaram',
    addressRegion: 'Andhra Pradesh',
    postalCode: '535003',
    addressCountry: 'IN'
  },
  geo: {
    latitude: '18.1124',
    longitude: '83.4070'
  },
  routes: [
    {
      path: '/',
      title: 'Karthikeya Packers & Movers | Best Movers in Vizianagaram & Pan-India',
      description: 'Karthikeya Packers & Movers provides safe, reliable packing, moving, and transportation services in Vizianagaram, Visakhapatnam, and pan-India. Multiple vehicle sizes for any move.',
      h1: 'Karthikeya Packers & Movers Vizianagaram',
      priority: 1.0,
      changefreq: 'weekly'
    },
    {
      path: '/services/household-shifting',
      title: 'Household Shifting Services in Vizianagaram | Karthikeya Packers & Movers',
      description: 'Safe & hassle-free household shifting in Vizianagaram, Visakhapatnam, and across India. Multi-layer packaging, expert furniture assembly, and zero-damage transit.',
      h1: 'Household Shifting Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/office-relocation',
      title: 'Office Relocation & Shifting in Vizianagaram | Karthikeya Packers & Movers',
      description: 'Minimal-downtime commercial and corporate office moves in Vizianagaram and Andhra Pradesh. Server crates, modular workstation de-rigging, and weekend shifting.',
      h1: 'Office Relocation Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/packing-unpacking',
      title: 'Professional Packing & Unpacking Services Vizianagaram | Karthikeya Packers',
      description: 'Certified 5-layer packing with bubble wrap, corrugated sheets, moisture-resistant stretch film, and safe unpacking services at your destination.',
      h1: 'Packing & Unpacking Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/local-shifting',
      title: 'Local Shifting Services in Vizianagaram | Same-Day Moving Specialists',
      description: 'Rapid same-day home and commercial shifting across VUDA Colony, Cantonment, Kothavalasa, Gajapathinagaram, Bobbili, and all Vizianagaram areas.',
      h1: 'Local Shifting in Vizianagaram',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/domestic-relocation',
      title: 'Domestic & Interstate Relocation from Vizianagaram | Karthikeya Movers',
      description: 'Interstate household relocation from Vizianagaram to Hyderabad, Bangalore, Chennai, Mumbai, Delhi, and pan-India destinations with transit insurance.',
      h1: 'Domestic Relocation Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/commercial-goods-transportation',
      title: 'Commercial Goods & Vehicle Transportation Vizianagaram | Karthikeya Logistics',
      description: 'B2B freight, industrial consignments, car & bike vehicle transportation across Andhra Pradesh and pan-India with verified GST billing.',
      h1: 'Commercial Goods & Vehicle Transportation',
      priority: 0.9,
      changefreq: 'monthly'
    }
  ] as SeoRoute[]
}
