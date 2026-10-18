import React from 'react'
import { FileText, ClipboardCheck, Package, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'

export const MovingProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Instant Quote & Planning',
      desc: 'Share your pickup, drop, and inventory via WhatsApp or phone. We provide an exact, itemized quote with zero hidden charges.',
      badge: '5-Minute Estimate',
      icon: FileText
    },
    {
      num: '02',
      title: 'Schedule & Preparation',
      desc: 'Lock in your preferred moving date. Our team assigns dedicated supervisors and prepares specialized packing materials.',
      badge: 'Dedicated Crew Assigned',
      icon: ClipboardCheck
    },
    {
      num: '03',
      title: 'Multi-Layer Packing',
      desc: 'Our uniformed crew arrives on time with bubble wrap, corrugated sheets, foam corners, and heavy-duty tape for fragile items.',
      badge: '100% Damage-Safe',
      icon: Package
    },
    {
      num: '04',
      title: 'Direct Protected Transit',
      desc: 'Careful loading, ratchet strap securing, and point-to-point transit by experienced highway drivers with live status updates.',
      badge: 'NH-16 Tracked',
      icon: ShieldCheck
    },
    {
      num: '05',
      title: 'Unloading & Placement',
      desc: 'Safe delivery at your new address, uncrating, room-by-room placement of beds, wardrobes, and appliances so you settle in comfortably.',
      badge: 'Hassle-Free Settle In',
      icon: CheckCircle2
    }
  ]

  return (
    <section id="process" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Discipline & Precision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            Our 5-Step Flawless Moving Flow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No last-minute delays, no surprise costs. We follow a strict operational protocol designed to protect your goods from pickup to final room placement.
          </p>
        </div>

        {/* Process Timeline with Modern Progress Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Step Identifier & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 text-orange-600 border border-orange-200/60 flex items-center justify-center font-bold shadow-xs group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#0B192C] group-hover:text-white transition-colors">
                      Step {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#0B192C] mb-2 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Micro Badge */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {step.badge}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
