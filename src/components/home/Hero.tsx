import React, { useState } from 'react'
import { MessageSquare, ArrowRight, Phone, ShieldCheck, CheckCircle2, Clock, MapPin, Truck } from 'lucide-react'
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
      message: `Quick Quote Request from Website Hero for ${moveType} from ${movingFrom} to ${movingTo}.`
    })
    window.open(url, '_blank')
  }

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id)
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 100% Crystal-Clear Background Image (No Color Overlay, Natural Raw Colors for Mobile & Desktop) */}
      <img
        src="/hero-bg.png"
        alt="Karthikeya Packers & Movers relocation operations background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
        loading="eager"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & Brand Story (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B192C]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/20 shadow-2xl text-white space-y-5">
            {/* Live operational badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/30 to-amber-500/30 border border-orange-400/40 text-amber-300 text-xs sm:text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>#1 Trusted Relocation Specialists in Vizianagaram</span>
            </div>

            {/* Impactful Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Safe, Smooth &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Stress-Free Moving
              </span>{' '}
              Across India
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Operating from <strong>VUDA Colony, Phase-4, Vizianagaram</strong>, Karthikeya Packers & Movers provides certified 5-layer protective packing, disciplined in-house teams, vehicle transport, and authentic video proof of every relocation.
            </p>

            {/* Core differentiators list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5-Layer Bubble & Foam Packing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Fees Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Car & Bike Vehicle Transport</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Video & WhatsApp Updates</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('quote')}
                className="px-6 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-orange-600/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Survey / Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyDetails.phone1}`}
                className="px-5 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/25 font-bold text-sm rounded-xl backdrop-blur-xs transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{companyDetails.phone1Display}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-4 border-t border-white/15 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GST Compliant Invoicing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Same-Day Local Moving</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>VUDA Colony, Vizianagaram</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Move Estimator Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 text-slate-900 shadow-2xl border border-white/50 relative">
              {/* Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-black text-[#0B192C]">
                    Fast Relocation Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct instant estimate sent to our WhatsApp dispatch
                  </p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 font-extrabold text-xs rounded-full">
                  FREE
                </span>
              </div>

              <form onSubmit={handleQuickEstimate} className="space-y-3.5 text-xs sm:text-sm">
                {/* Move Type Selector */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    What are you relocating?
                  </label>
                  <select
                    value={moveType}
                    onChange={(e) => setMoveType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-white"
                  >
                    <option value="1 BHK Household">1 BHK Household Shifting</option>
                    <option value="2-3 BHK Household">2 - 3 BHK Complete Home</option>
                    <option value="3+ BHK Villa / Luxury">3+ BHK Villa / Multi-Story</option>
                    <option value="Corporate / Office Relocation">Office / Commercial Move</option>
                    <option value="Vehicle Transportation (Car / Bike)">Bike / Car Transportation</option>
                    <option value="Only Packing & Unpacking">Only Packing & Unpacking</option>
                  </select>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>Moving From (Pickup City / Area)</span>
                  </label>
                  <input
                    type="text"
                    value={movingFrom}
                    onChange={(e) => setMovingFrom(e.target.value)}
                    placeholder="e.g. Vizianagaram, VUDA Colony"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-white"
                  />
                </div>

                {/* Destination Location */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Moving To (Destination City / Town)</span>
                  </label>
                  <input
                    type="text"
                    value={movingTo}
                    onChange={(e) => setMovingTo(e.target.value)}
                    placeholder="e.g. Visakhapatnam, Hyderabad, Bangalore"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-white"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Approximate Moving Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-white"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Quote on WhatsApp Now</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 We respect your privacy. No spam. Direct response in minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
