import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageSquare, MapPin, ShieldCheck, CheckCircle2, Star, ArrowUpRight, Sparkles } from 'lucide-react'
import { companyDetails } from '../../data/company'
import { servicesData } from '../../data/services'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#071322] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Ratings */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <img
                src="/logo.png"
                alt="Karthikeya Packers & Movers"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              <strong className="text-white">Authentic Care. Disciplined Moving.</strong> Dedicated residential household shifting, corporate office relocation, and bike/car transport based at VUDA Colony, Vizianagaram.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white tracking-wide">
                4.8 / 5.0 (90+ Google Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-orange-400 transition-colors flex items-center justify-between group text-slate-300 hover:translate-x-0.5"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Guarantees & Popular Routes */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Service Guarantees</span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-xs">Zero Surprise Charges</span>
                  <span className="text-[11px] text-slate-400">Fixed upfront quotes with all taxes & tolls</span>
                </div>
              </li>
              <li className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-xs">Multi-Layer Protective Wrap</span>
                  <span className="text-[11px] text-slate-400">High-grade bubble, foam & corrugated packing</span>
                </div>
              </li>
              <li className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-xs">Verified Highway Routes</span>
                  <span className="text-[11px] text-slate-400">Vizianagaram to Hyderabad, Bangalore, Chennai</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <span className="font-semibold text-white block">{companyDetails.addressLine1}</span>
                  <span>{companyDetails.city}, {companyDetails.state} – {companyDetails.pinCode}</span>
                  <span className="block text-xs text-amber-300 mt-1 font-medium">
                    HQ: VUDA Colony Phase-4 • 40 Ward
                  </span>
                </span>
              </div>
              <a
                href={`tel:${companyDetails.phone1}`}
                className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                <span>{companyDetails.phone1Display}</span>
              </a>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>WhatsApp Instant Dispatch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Vizianagaram • Visakhapatnam • Srikakulam • Pan-India</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors cursor-pointer font-bold"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
