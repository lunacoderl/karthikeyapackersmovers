import React from 'react'
import { Star, Video, MapPin, ShieldCheck } from 'lucide-react'
import { companyDetails } from '../../data/company'

export const TrustRow: React.FC = () => {
  return (
    <div className="bg-white border-b border-slate-200/90 py-5 sm:py-6 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 1. Rating */}
          <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Star className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black text-slate-900">{companyDetails.googleRating}★</span>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Google</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">{companyDetails.reviewCount} Verified Reviews</p>
            </div>
          </div>

          {/* 2. Real Video Proof */}
          <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-orange-50/60 border border-orange-200/60">
            <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Real Video Proof</p>
              <p className="text-xs text-slate-600 font-medium">Watch Genuine Work Below</p>
            </div>
          </div>

          {/* 3. Base & Coverage */}
          <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60">
            <div className="w-11 h-11 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Vizianagaram Hub</p>
              <p className="text-xs text-slate-600 font-medium">VUDA Colony & Pan-India</p>
            </div>
          </div>

          {/* 4. Certified Handling */}
          <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
            <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Zero Damage Policy</p>
              <p className="text-xs text-slate-600 font-medium">Multi-Layer Bubble Wrap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
