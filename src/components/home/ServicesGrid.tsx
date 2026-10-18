import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react'
import { servicesData } from '../../data/services'
import { companyDetails } from '../../data/company'

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Professional Relocation Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            Safe, Transparent & Reliable Moving
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every move is executed with certified in-house teams, high-grade bubble and corrugated packing, and dedicated transport from Vizianagaram to any destination.
          </p>
        </div>

        {/* 6 Services Grid with Authentic Natural Visuals & Action Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const badges = [
              'Zero Scratch Guarantee',
              'IT & Server Safe Crates',
              'Multi-Layer Bubble Wrap',
              'Same-Day Local Delivery',
              'NH-16 Tracked Corridor',
              'Specialized Wheel Lock Straps'
            ]
            const badgeText = badges[index] || 'Verified Safe Handling'

            const whatsappUrl = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
              `Hello Karthikeya Packers & Movers! I am interested in booking your "${service.title}" service from Vizianagaram. Please share details and pricing.`
            )}`

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col overflow-hidden group"
              >
                {/* Natural Image Container with Badge */}
                <div className="relative bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B192C]/90 backdrop-blur-md text-amber-300 font-bold text-xs tracking-wide shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      {badgeText}
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0B192C] mb-1.5 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
                      {service.shortDescription}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                      {service.inclusions.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons: WhatsApp & Details */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
