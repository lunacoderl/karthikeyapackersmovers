import React, { useState } from 'react'
import { Phone, MessageSquare, MapPin, Calendar, AlertCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { companyDetails } from '../../data/company'
import { buildWhatsAppQuoteUrl } from '../../utils/whatsapp'
import type { QuoteFormData } from '../../utils/whatsapp'

export const QuoteSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    moveType: 'Household Shifting (2-3 BHK)',
    preferredDate: '',
    vehicleSize: 'Standard Dedicated Moving Carrier',
    message: ''
  })

  const [validationError, setValidationError] = useState<string | null>(null)
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (validationError) setValidationError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.')
      return
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.')
      return
    }

    setValidationError(null)
    setSubmittedStatus(true)

    // Trigger Google Ads & Analytics Lead Conversion
    const win = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'conversion', {
        send_to: 'AW-18529521457',
        event_category: 'Lead',
        event_label: 'Quote Form Submission'
      })
      win.gtag('event', 'generate_lead', {
        currency: 'INR',
        value: 1.0
      })
    }

    // Construct WhatsApp message URL and launch
    const url = buildWhatsAppQuoteUrl(formData)
    window.open(url, '_blank')
  }

  return (
    <section id="quote" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Instant Move Estimate & Direct WhatsApp Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-4">
            Get an Accurate, Zero-Surprise Quote
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether shifting across town in Vizianagaram or moving interstate to Hyderabad, Bangalore, or Chennai, get prompt quotes directly on your WhatsApp.
          </p>
        </div>

        {/* Full Uncropped Widescreen Contact Visual */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
          <img
            src="/contact-bg.png"
            alt="Karthikeya Packers & Movers customer service and dispatch desk"
            className="w-full h-auto max-h-[550px] object-contain sm:object-cover mx-auto"
            loading="lazy"
          />
        </div>

        {/* Quote Form & Instant Call Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-2xl font-black text-[#0B192C]">
                  Move Estimate Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Pre-fills a verified quotation inquiry sent straight to our dispatch manager
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active 7 Days
              </span>
            </div>

            {validationError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {submittedStatus && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Your inquiry is formatted and opened in WhatsApp! Our dispatch supervisor will respond within 5–10 minutes.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Varma"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Mobile Number (WhatsApp Preferred) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 7337534525"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Moving From */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Pickup Location (From) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="movingFrom"
                      value={formData.movingFrom}
                      onChange={handleChange}
                      placeholder="e.g. VUDA Colony, Vizianagaram"
                      required
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Moving To */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Destination Location (To) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="movingTo"
                      value={formData.movingTo}
                      onChange={handleChange}
                      placeholder="e.g. Madhapur, Hyderabad / Vizag"
                      required
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Move Type */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Scope of Move
                  </label>
                  <select
                    name="moveType"
                    value={formData.moveType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all cursor-pointer shadow-xs"
                  >
                    <option value="Household Shifting (1 BHK)">1 BHK Household Shifting</option>
                    <option value="Household Shifting (2-3 BHK)">2 to 3 BHK Household Relocation</option>
                    <option value="Household Shifting (4+ BHK / Villa)">4+ BHK / Villa Complete Relocation</option>
                    <option value="Office Relocation">Corporate Office Relocation</option>
                    <option value="Two-Wheeler / Car Transport">Vehicle Transportation (Bike / Car)</option>
                    <option value="Local Shifting (Vizianagaram)">Local Shifting (Vizianagaram / Vizag)</option>
                    <option value="Interstate Relocation">Interstate Relocation (Pan-India)</option>
                    <option value="Packing & Unpacking Only">Specialized Packing & Unpacking Only</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Target Moving Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all cursor-pointer shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Inventory Details */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                  Inventory Items & Special Instructions (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Double-door fridge, washing machine, 2 beds, dining table, 15 carton boxes, 55-inch LED TV, 1 Royal Enfield bike..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all shadow-xs"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Quotation to WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Call & Hub Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-[#0B192C] to-[#1E3E62] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Immediate Assistance
              </span>
              <h4 className="text-2xl font-black mb-3 text-white">Prefer Calling Directly?</h4>
              <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                Our moving supervisors in Vizianagaram are on standby right now to discuss volume, dates, packing options, and provide upfront pricing.
              </p>

              <div className="space-y-3.5">
                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#0B192C] hover:bg-slate-100 font-extrabold text-base flex items-center justify-center gap-3 transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span>{companyDetails.phone1Display}</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base flex items-center justify-center gap-3 transition-colors shadow-md"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Hub info card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h5 className="text-base font-bold text-[#0B192C] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span>Headquarters & Operational Base</span>
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                <strong className="text-slate-900">{companyDetails.name}</strong>
                <br />
                {companyDetails.addressLine1}
                <br />
                {companyDetails.city}, {companyDetails.state} – {companyDetails.pinCode}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1.5 font-normal">
                <p>• Local shifts in Vizianagaram, VUDA Colony & Cantonment</p>
                <p>• Daily corridor shifts to Visakhapatnam & Srikakulam</p>
                <p>• Direct interstate routes to Hyderabad, Bangalore & Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
