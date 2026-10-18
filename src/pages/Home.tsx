import React from 'react'
import { SeoHead } from '../components/common/SeoHead'
import { siteSeo } from '../siteSeo'
import { Hero } from '../components/home/Hero'
import { TrustRow } from '../components/home/TrustRow'
import { AboutSection } from '../components/home/AboutSection'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { MovingProcess } from '../components/home/MovingProcess'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { GallerySection } from '../components/home/GallerySection'
import { ServiceAreasSection } from '../components/home/ServiceAreasSection'
import { FAQSection } from '../components/home/FAQSection'
import { QuoteSection } from '../components/home/QuoteSection'

export const Home: React.FC = () => {
  const homeSeo = siteSeo.routes[0]

  return (
    <main className="bg-slate-50 min-h-screen">
      <SeoHead
        title={homeSeo.title}
        description={homeSeo.description}
        canonicalPath="/"
      />
      {/* 1. Hero with interactive quick move estimator */}
      <Hero />

      {/* 2. Trust Metrics & Real Video Proof Row */}
      <TrustRow />

      {/* 3. Comprehensive Indian Relocation Services (6 Cards with authentic Indian imagery) */}
      <ServicesGrid />

      {/* 4. About Karthikeya Packers & Movers (VUDA Colony HQ & Certified Team) */}
      <AboutSection />

      {/* 5. Why Choose Us (Bento-style High-Trust Advantages) */}
      <WhyChooseUs />

      {/* 6. Moving Process (Sleek 5-Step Flow) */}
      <MovingProcess />

      {/* 7. Real Work Gallery & Video Proof (Featuring 4 live packing/relocation videos) */}
      <GallerySection />

      {/* 8. Verified Customer Testimonials */}
      <TestimonialsSection />

      {/* 9. Key Service Routes & Corridors (Vizianagaram, Vizag, Srikakulam, Pan-India) */}
      <ServiceAreasSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Instant Quote Calculator & Direct WhatsApp Dispatch */}
      <QuoteSection />
    </main>
  )
}
