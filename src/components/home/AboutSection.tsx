import React from 'react'
import { ShieldCheck, Users, MapPin, Sparkles, Navigation } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Trusted Vizianagaram Relocation Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            Reliable Team. Authentic Care.{' '}
            <span className="text-orange-600 block sm:inline">Stress-Free Moves.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Based at VUDA Colony, Vizianagaram, Karthikeya Packers & Movers is built on one simple principle: treat every client's belongings with the same care and respect as our own. From local apartments to long-haul interstate freights across India, we deliver complete peace of mind.
          </p>
        </div>

        {/* Official Registered Company Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-950">
          <img
            src="/about-banner.jpg"
            alt="Karthikeya Packers & Movers official registered banner - AP-02-28-056-04509055 - Vizianagaram"
            className="w-full h-auto object-contain block mx-auto"
            loading="lazy"
          />
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#0B192C] text-white flex items-center justify-center mb-4 shadow-sm">
              <Navigation className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-black text-[#0B192C] mb-2">Verified Transit Assurance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct point-to-point transit with verified drivers, zero unnecessary transshipment, and prompt departure schedules.
            </p>
          </div>

          <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-black text-[#0B192C] mb-2">Multi-Tier Protective Packing</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Heavy bubble wrap, corrugated sheets, foam edge protectors, and moisture-barrier film safeguard electronics, glassware, and furniture.
            </p>
          </div>

          <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center mb-4 shadow-sm">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-black text-[#0B192C] mb-2">Uniformed In-House Crew</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our polite, experienced loaders and drivers are permanent team members trained in safe lifting, tight staircases, and room placement.
            </p>
          </div>

          <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-4 shadow-sm">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-black text-[#0B192C] mb-2">Vizianagaram Base & Corridors</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deep local roots across Vizianagaram and North Coastal AP paired with strong interstate highway corridors to Hyderabad, Chennai, and Bangalore.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
