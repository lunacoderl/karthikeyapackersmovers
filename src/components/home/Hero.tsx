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
    <section className="relative bg-gradient-to-br from-[#0B2545] via-[#0F2C59] to-[#08182B] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Brand Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live operational badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>#1 Trusted Relocation Specialists in Vizianagaram & North Coastal AP</span>
            </div>

            {/* Impactful Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Safe, Smooth &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Stress-Free Moving
              </span>{' '}
              Across India
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Operating from <strong>VUDA Colony, Phase-4, Vizianagaram</strong>, Karthikeya Packers & Movers provides certified 5-layer protective packing, disciplined in-house teams, vehicle transport, and authentic video proof of every relocation.
            </p>

            {/* Core differentiators list */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
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
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('quote')}
                className="px-7 py-3.5 sm:py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-orange-600/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Free Survey / Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyDetails.phone1}`}
                className="px-6 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base rounded-2xl backdrop-blur-md transition-all duration-200 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{companyDetails.phone1Display}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/20 transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-4 flex items-center gap-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GST Compliant Invoicing</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Same-Day Local Moving</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>VUDA Colony, Vizianagaram</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Move Estimator Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100 relative">
              {/* Badge */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-black text-[#0B2545]">
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

              <form onSubmit={handleQuickEstimate} className="space-y-4 text-xs sm:text-sm">
                {/* Move Type Selector */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    What are you relocating?
                  </label>
                  <select
                    value={moveType}
                    onChange={(e) => setMoveType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-slate-50"
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
                  <label className="block font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>Moving From (Pickup City / Area)</span>
                  </label>
                  <input
                    type="text"
                    value={movingFrom}
                    onChange={(e) => setMovingFrom(e.target.value)}
                    placeholder="e.g. Vizianagaram, VUDA Colony"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-slate-50"
                  />
                </div>

                {/* Destination Location */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Moving To (Destination City / Town)</span>
                  </label>
                  <input
                    type="text"
                    value={movingTo}
                    onChange={(e) => setMovingTo(e.target.value)}
                    placeholder="e.g. Visakhapatnam, Hyderabad, Bangalore"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-slate-50"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Approximate Moving Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-800 font-medium bg-slate-50"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Quote on WhatsApp Now</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  🔒 We respect your privacy. No spam. Direct response in minutes.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Full Uncropped Widescreen Hero Visual Showcase */}
        <div className="mt-12 sm:mt-16 rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 backdrop-blur-xs">
          <img
            src="/hero-bg.png"
            alt="Karthikeya Packers & Movers professional household relocation operations"
            className="w-full h-auto max-h-[480px] object-cover mx-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
