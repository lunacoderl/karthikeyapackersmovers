import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, MessageSquare, Menu, X, ChevronRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react'
import { companyDetails } from '../../data/company'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const elem = document.getElementById(id)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#0B192C] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left badge */}
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[10px] sm:text-[11px] tracking-wide shrink-0">
              <ShieldCheck className="w-3 h-3" /> 4.8★ Rated
            </span>
            <span className="hidden sm:inline text-slate-300 truncate">
              <span className="text-orange-400 font-semibold">Karthikeya Packers & Movers</span> • VUDA Colony, Vizianagaram
            </span>
          </div>

          {/* Right Direct Contact CTAs */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-[11px] sm:text-xs font-semibold">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{companyDetails.phone1Display}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-200/80'
            : 'bg-white py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo with Uncropped Display */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src="/logo.png"
              alt="Karthikeya Packers & Movers"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Clean Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] xl:text-sm font-semibold text-slate-700">
            <Link
              to="/"
              className={`hover:text-orange-600 transition-colors py-1 ${
                location.pathname === '/' ? 'text-orange-600 font-bold' : ''
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              Areas
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-orange-600 transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="flex items-center gap-2 text-xs xl:text-sm font-bold text-slate-800 hover:text-orange-600 px-3 py-2 rounded-xl transition-colors bg-slate-100 hover:bg-slate-200"
            >
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </div>
              <span>{companyDetails.phone1Display}</span>
            </a>
            <button
              onClick={() => scrollToSection('quote')}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-xs xl:text-sm font-bold px-4 xl:px-5 py-2.5 rounded-xl shadow-md shadow-orange-600/20 hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="p-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-in fade-in duration-200">
          {/* Mobile Header Bar */}
          <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-white">
            <img
              src="/logo.png"
              alt="Karthikeya Packers & Movers"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            <div className="p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200/80 mb-2">
              <p className="text-[11px] font-bold text-orange-950 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> Vizianagaram & Pan-India
              </p>
              <p className="text-xs text-orange-900/90 leading-relaxed font-normal">
                VUDA Colony Phase-4. Safe household and corporate relocation.
              </p>
            </div>

            <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left"
              >
                <span>Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left text-orange-600 font-bold"
              >
                <span>Gallery</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left"
              >
                <span>Moving Process</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left"
              >
                <span>Reviews (4.8★)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left"
              >
                <span>Service Areas</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-slate-50 border-b border-slate-100 text-left"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </nav>

            {/* Mobile Bottom Action Buttons */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => scrollToSection('quote')}
                className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl font-bold text-sm shadow-md shadow-orange-600/20 text-center cursor-pointer"
              >
                Get Free Quote
              </button>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${companyDetails.phone1}`}
                className="w-full py-2.5 bg-[#0B192C] hover:bg-slate-800 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {companyDetails.phone1Display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
