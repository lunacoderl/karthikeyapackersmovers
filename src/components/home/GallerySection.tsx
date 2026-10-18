import React, { useState } from 'react'
import { Play, Maximize2, Video, ShieldCheck, Film } from 'lucide-react'
import { galleryData } from '../../data/gallery'
import { Lightbox } from '../ui/Lightbox'

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'videos', label: '🎥 Real Videos (Proof)' },
    { id: 'packing', label: 'Multi-Layer Packing' },
    { id: 'loading', label: 'Truck Loading & Securing' },
    { id: 'household', label: 'Household Moves' },
    { id: 'commercial', label: 'Commercial & Office' },
    { id: 'transit', label: 'Safe Highway Transit' }
  ]

  const filteredItems =
    activeCategory === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Videos subset for special top showcase
  const operationalVideos = galleryData.filter((item) => item.mediaType === 'video')

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Film className="w-4 h-4 text-orange-600" />
            <span>Real Operational Proof & Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            See Our Teams in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We believe in complete transparency. Watch our authentic work videos and browse field photos of real household and office relocations across Vizianagaram, Visakhapatnam, and national corridors.
          </p>
        </div>

        {/* Featured Video Row (Top Highlight for Undeniable Trust) */}
        <div className="mb-14 bg-gradient-to-br from-[#0B192C] via-[#10243E] to-[#1E3E62] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> 100% Genuine Client Videos
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Live On-Site Relocation Footage
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Click any video below to watch our trained in-house staff packing fragile items, wrapping furniture, and securing cargo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {operationalVideos.map((vid, idx) => {
              const fullIndex = galleryData.findIndex((g) => g.id === vid.id)
              return (
                <div
                  key={vid.id}
                  onClick={() => openLightbox(fullIndex >= 0 ? fullIndex : idx)}
                  className="group relative bg-white/5 hover:bg-white/10 rounded-2xl overflow-hidden border border-white/15 p-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative aspect-video rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center">
                    <video
                      src={vid.src}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    {/* Glowing Play Icon Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                    {/* Video Duration / Type Badge */}
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white flex items-center gap-1">
                      <Video className="w-3 h-3 text-orange-400" /> Video
                    </span>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                      {vid.title}
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? galleryData.length
                : galleryData.filter((g) => g.category === cat.id).length
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs ${
                  isActive
                    ? 'bg-[#0B192C] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Uncropped Gallery Grid (Columns masonry-style) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => {
            const isVideo = item.mediaType === 'video'
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid bg-white rounded-2xl p-2.5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
              >
                {/* Media Container */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center min-h-[140px]">
                  {isVideo ? (
                    <div className="relative w-full aspect-video bg-slate-900 flex items-center justify-center">
                      <video
                        src={item.src}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 ml-0.5 fill-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  )}

                  {/* Subtle hover overlay with view button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5 text-[#0B192C]" />
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-2.5">
                  <p className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </p>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                    {item.category === 'transit' ? 'Safe Highway Transit' : item.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lightbox Modal with Video and Image support */}
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
          }
          onNext={() =>
            setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
          }
        />
      </div>
    </section>
  )
}
