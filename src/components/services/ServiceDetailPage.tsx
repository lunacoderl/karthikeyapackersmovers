import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Navigation, PackageCheck } from 'lucide-react'
import { servicesData } from '../../data/services'
import { companyDetails } from '../../data/company'
import { SeoHead } from '../common/SeoHead'
import { siteSeo } from '../../siteSeo'

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const service = servicesData.find((s) => s.slug === slug)
  const matchedRoute = siteSeo.routes.find((r) => r.path === `/services/${slug}`)

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <SeoHead
          title="Service Not Found | Karthikeya Packers & Movers"
          description="The requested moving service could not be found. View our complete moving and packing services in Vizianagaram."
          canonicalPath={`/services/${slug || 'not-found'}`}
          noIndex={true}
        />
        <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#0B192C] mb-2">Service Not Found</h1>
        <p className="text-slate-600 mb-6 max-w-md">
          Looking for a specific moving or packing service? Head back to our services directory.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-md"
        >
          Return to Home
        </Link>
      </div>
    )
  }

  const pageTitle = matchedRoute?.title || `${service.title} in Vizianagaram | Karthikeya Packers & Movers`
  const pageDescription = matchedRoute?.description || `${service.shortDescription} Safe packing, dedicated moving staff, and direct pan-India transportation.`

  const scrollToQuote = () => {
    navigate('/#quote')
    setTimeout(() => {
      const elem = document.getElementById('quote')
      if (elem) elem.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath={`/services/${service.slug}`}
      />
      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500">
            <Link to="/" className="hover:text-orange-600 font-medium">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-orange-600 font-medium">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{service.title}</span>
          </div>
          <Link
            to="/#services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* Service Hero Banner */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Professional Relocation Service</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg font-bold text-orange-600">
                {service.tagline}
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={scrollToQuote}
                  className="px-7 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-orange-600/25 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Request Quote for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Karthikeya Packers & Movers, I would like to inquire about ${service.title} from Vizianagaram.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right: Natural Authentic Service Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-50 p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xl max-w-lg w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover rounded-2xl mx-auto shadow-sm"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions: "What We Help With" */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest block mb-1">
            Service Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">
            What We Help With
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-normal">
            Every item in your inventory is accounted for, protected, and carefully handled by our permanent team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.inclusions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Step-by-Step Process */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-[#0B192C] uppercase tracking-widest block mb-1">
              Workflow Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C]">
              Our Step-by-Step Execution
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Structured from first phone inquiry to final room-by-room arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-orange-600 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Transit & Protection Standards (Replaces vehicle fleet section) */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B192C] via-[#112848] to-[#1E3E62] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Karthikeya Safe Move Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Safe Transit & Zero-Damage Commitment for {service.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Every relocation handled by Karthikeya Packers & Movers follows our high-standard packing protocol. From delicate electronics and kitchenware to heavy solid-wood furniture, our materials and tie-downs are selected to withstand local potholes as well as long-distance highway vibrations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <PackageCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Multi-Layer Bubble & Foam Wrap</h4>
                  <p className="text-xs text-slate-300 mt-1">Specialized layers prevent scratches, dents, and surface chafing during handling.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Doorstep Transit</h4>
                  <p className="text-xs text-slate-300 mt-1">Point-to-point haulage with no intermediate unloading or risky hub transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#0B192C] mb-6 text-center">
            {service.title} FAQs
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-[#0B192C] mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ready to Move CTA Banner */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B192C] mb-3">
            Ready to Plan Your {service.title}?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm sm:text-base font-normal">
            Get an instant, transparent quote with zero hidden charges from our Vizianagaram dispatch team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToQuote}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base rounded-xl shadow-lg shadow-orange-600/25 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-7 py-4 bg-[#0B192C] hover:bg-slate-800 text-white font-bold text-base rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call {companyDetails.phone1Display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
