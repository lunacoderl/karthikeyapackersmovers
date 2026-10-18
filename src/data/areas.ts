import type { ServiceArea } from '../types'

export const serviceAreasData: ServiceArea[] = [
  {
    id: 'vizianagaram',
    title: 'Vizianagaram & District',
    subtitle: 'Local Express Shifting',
    badge: 'Same-Day Local Service',
    description: 'Rapid door-to-door local shifting across all Vizianagaram residential colonies, apartments, and commercial zones with punctual teams.',
    coverage: [
      'VUDA Colony (Phases 1-4) & Cantonment Area',
      'Kothavalasa, Nellimarla & Gajapathinagaram',
      'Bobbili, Salur, Parvathipuram & Rajam Routes',
      'Full Packing, Heavy Loading & Unpacking Crews'
    ]
  },
  {
    id: 'coastal-ap',
    title: 'Visakhapatnam & Srikakulam',
    subtitle: 'North Coastal AP Corridor',
    badge: 'Direct Daily Corridors',
    description: 'Frequent daily routes connecting Vizianagaram with Visakhapatnam, Srikakulam, and key commercial hubs across Andhra Pradesh.',
    coverage: [
      'Visakhapatnam, Madhurawada, Gajuwaka & Vizag Port',
      'Srikakulam, Amadalavalasa & Palasa Corridors',
      'Vijayawada, Guntur & Rajahmundry State Corridors',
      'Dedicated Point-to-Point Fleet Dispatch'
    ]
  },
  {
    id: 'pan-india',
    title: 'All India Interstate',
    subtitle: 'Long-Distance Relocation',
    badge: 'Nationwide Network',
    description: 'Interstate household shifting and commercial freight haulage to every major metro and industrial corridor across India with all-weather vehicles.',
    coverage: [
      'Hyderabad & Telangana Daily Direct Routes',
      'Bangalore & Karnataka Tech Hub Transport',
      'Chennai & Tamil Nadu Industrial Corridor',
      'Mumbai, Pune, Delhi, Kolkata & Beyond'
    ]
  }
]
