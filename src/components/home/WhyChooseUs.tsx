import React from 'react'
import { ShieldCheck, MapPin, FileText, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react'

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      num: '01',
      title: '100% In-House Trained Staff',
      desc: 'No random daily-wage loaders. Our dedicated, background-verified crews are trained in proper lifting, multi-layer wrapping, and safe maneuvering.',
      icon: Users,
      accent: 'from-orange-500/10 to-amber-500/10 text-orange-600 border-orange-200'
    },
    {
      num: '02',
      title: 'Multi-Layer Impact Protection',
      desc: 'High-density air bubble wrap, thick corrugated sheets, corner guards, and water-resistant stretch wrap protect every delicate edge.',
      icon: ShieldCheck,
      accent: 'from-blue-500/10 to-cyan-500/10 text-blue-700 border-blue-200'
    },
    {
      num: '03',
      title: 'Local Vizianagaram & Pan-India',
      desc: 'From quick residential shifts in VUDA Colony and Cantonment to direct long-distance transit across AP, Telangana, Karnataka, and Tamil Nadu.',
      icon: MapPin,
      accent: 'from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200'
    },
    {
      num: '04',
      title: 'Upfront Fixed Pricing',
      desc: 'Zero surprise charges on moving day. All toll, labor, packing, and transit costs are transparently detailed upfront in your WhatsApp quote.',
      icon: FileText,
      accent: 'from-purple-500/10 to-pink-500/10 text-purple-700 border-purple-200'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>The Karthikeya Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            Why Discerning Clients Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Relocation doesn't have to be stressful. We combine local Vizianagaram accountability with national-grade packing and transit standards.
          </p>
        </div>

        {/* Asymmetric Bento Layout (Completely distinct from old 6-card linear grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Signature Deep Navy High-Trust Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B192C] via-[#112848] to-[#1E3E62] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-500/30">
                <Award className="w-3.5 h-3.5" />
                <span>Zero Compromise Standards</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-snug">
                Your Valuables Treated Like Our Own
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Unlike unorganized brokers who sub-contract jobs, Karthikeya Packers & Movers operates with our own permanent crews, branded packing materials, and verified logistics.
              </p>

              {/* Trust Checkmarks */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200">
                    4.8★ Google Rated with proven customer recommendations
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200">
                    Direct on-site supervisor on every shift
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200">
                    Genuine video proof of ongoing moves
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200">
                    Physical office at VUDA Colony Phase-4, Vizianagaram
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Metric Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-black text-amber-400">99.4%</p>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Damage-Free Record</p>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-400">3,500+</p>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Happy Relocations</p>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Clean Modern Feature Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border bg-gradient-to-br ${item.accent} shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-orange-400 transition-colors">
                        {item.num}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-[#0B192C] mb-2.5 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
