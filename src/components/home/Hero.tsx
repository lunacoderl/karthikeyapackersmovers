import React, { useState } from 'react'
import { MessageSquare, ArrowRight, Phone, ShieldCheck, Clock, MapPin, Truck, Sparkles } from 'lucide-react'
import { companyDetails } from '../../data/company'
import { buildWhatsAppQuoteUrl } from '../../utils/whatsapp'

export const Hero: React.FC = () => {
  const [moveType, setMoveType] = useState('2-3 BHK Household')
  const [movingFrom, setMovingFrom] = useState('Vizianagaram (VUDA Colony)')
  const [movingTo, setMovingTo] = useState('Visakhapatnam')
  const [preferredDate, setPreferredDate] = useState('')

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault()
    const url = buildWhatsAppQuoteUrl({
      name: 'Customer Inquiry',
      phone: '',
      movingFrom,
      movingTo,
      moveType,
      preferredDate,
      message: `Quick Quote Request for ${moveType} from ${movingFrom} to ${movingTo}.`
    })
    window.open(url, '_blank')
  }

  const scrollToQuotation = () => {
    const elem = document.getElementById('hero-quotation')
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      {/* 1. Hero Image Section with Crystal Clear Background & Semi-Transparent Blurred Text */}
      <section className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Crystal-Clear Background Image (No Color Overlay, Full Sharpness for Mobile & Desktop) */}
        <img
          src="/hero-bg.png"
          alt="Karthikeya Packers and Movers relocation operations background"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
          loading="eager"
        />

        {/* Minimalist, Transparent Blurred Text Box so the Hero Image is Clearly Visible */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-xl bg-black/35 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/25 shadow-2xl text-white space-y-3 sm:space-y-4">
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>4.8★ Google Rated • Vizianagaram & Pan-India</span>
            </div>

            {/* Prominent Company Name & Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white drop-shadow-md">
              Karthikeya Packers and Movers
              <span className="block text-lg sm:text-2xl lg:text-3xl mt-1.5 font-bold text-amber-300">
                Safe, Reliable & Affordable Relocation
              </span>
            </h1>

            {/* Less Text on Hero Image so the visual is not obstructed */}
            <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed font-normal drop-shadow">
              Trusted household shifting, office relocation, and bike/car transport with multi-layer protective packing.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                onClick={scrollToQuotation}
                className="px-5 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-600/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Get Quotation Below</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyDetails.phone1}`}
                className="px-4 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold text-xs sm:text-sm rounded-xl backdrop-blur-xs transition-all duration-200 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>{companyDetails.phone1Display}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-200 flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quotation Section Placed Cleanly Below the Hero Image */}
      <section id="hero-quotation" className="relative z-20 py-8 px-4 sm:px-6 lg:px-8 bg-slate-100/90 border-y border-slate-200">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Instant Move Calculator</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B192C]">
                Get Your Instant Move Estimate on WhatsApp
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Select your requirements below to receive upfront pricing directly from our Vizianagaram dispatch team.
            </p>
          </div>

          <form onSubmit={handleQuickEstimate} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Move Scope */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Moving Scope
              </label>
              <select
                value={moveType}
                onChange={(e) => setMoveType(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-xs sm:text-sm text-slate-800 font-medium bg-slate-50"
              >
                <option value="1 BHK Household">1 BHK Household Shifting</option>
                <option value="2-3 BHK Household">2 - 3 BHK Complete Home</option>
                <option value="3+ BHK Villa / Luxury">3+ BHK Villa / Multi-Story</option>
                <option value="Corporate / Office Relocation">Corporate Office Relocation</option>
                <option value="Vehicle Transportation (Car / Bike)">Bike / Car Transportation</option>
                <option value="Only Packing & Unpacking">Only Packing & Unpacking</option>
              </select>
            </div>

            {/* Pickup */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>From (Pickup)</span>
              </label>
              <input
                type="text"
                value={movingFrom}
                onChange={(e) => setMovingFrom(e.target.value)}
                placeholder="e.g. VUDA Colony, Vizianagaram"
                required
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-xs sm:text-sm text-slate-800 font-medium bg-slate-50"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>To (Destination)</span>
              </label>
              <input
                type="text"
                value={movingTo}
                onChange={(e) => setMovingTo(e.target.value)}
                placeholder="e.g. Visakhapatnam / Hyderabad"
                required
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-xs sm:text-sm text-slate-800 font-medium bg-slate-50"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Move Date</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-xs sm:text-sm text-slate-800 font-medium bg-slate-50"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp Quote</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
