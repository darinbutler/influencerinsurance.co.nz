import Image from "next/image"
import QuoteForm from "../../components/QuoteForm"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get a Creator Insurance Quote | Influencer Insurance",
  description: "Get a free influencer insurance quote from a licensed broker. Public liability, equipment, cyber and professional indemnity cover for content creators.",
  alternates: { canonical: siteConfig.url + "/quote/" },
}

const steps = [
  {
    num: "1",
    title: "Submit your details",
    desc: "Tell us your platform, audience size and the cover you need. Takes under 2 minutes.",
  },
  {
    num: "2",
    title: "Adviser reviews your needs",
    desc: "A licensed insurance adviser personally reviews your enquiry and identifies the right options for your creator business.",
  },
  {
    num: "3",
    title: "You receive tailored options",
    desc: "Within 1 business day you'll hear back with personalised cover options and pricing — no pressure, no obligation.",
  },
]

const trustCards = [
  { icon: "🏅", title: "Licensed advisers only", desc: "Every adviser holds a current FAP licence" },
  { icon: "🔒", title: "Confidential", desc: "Your details are never shared without consent" },
  { icon: "💬", title: "Real people", desc: "Personalised advice — no bots or automated quotes" },
  { icon: "📋", title: "Full disclosure", desc: "Adviser disclosure statement provided upfront" },
]

const covers = [
  { icon: "🛡️", label: "Public Liability", desc: "Events, activations & film locations" },
  { icon: "📷", label: "Equipment & Gear", desc: "Cameras, drones, lighting & creator kit" },
  { icon: "🔐", label: "Cyber & Privacy", desc: "Account hacks, data breaches & cyber extortion" },
  { icon: "📄", label: "Professional Indemnity", desc: "Brand deal disputes & content claims" },
]

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[360px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image src="/images/creator-desk.png" alt="Content creator" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["⚡ Response within 1 business day", "🏅 Licensed advisers only", "🔒 No obligation"].map((pill) => (
              <span key={pill} className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-purple-200">
                {pill}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get Your Creator Insurance Quote</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Tell us about your creator business and we'll connect you with a licensed broker who specialises in influencer cover.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: trust + process */}
            <div className="lg:col-span-2 space-y-10">

              {/* What happens next */}
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">What happens after you submit</h2>
                <div className="space-y-5">
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {step.num}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm mb-0.5">{step.title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Covers we arrange */}
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Covers we arrange</h2>
                <div className="space-y-3">
                  {covers.map((c) => (
                    <div key={c.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <span className="text-2xl flex-shrink-0">{c.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{c.label}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust cards */}
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Why creators trust us</h2>
                <div className="grid grid-cols-2 gap-3">
                  {trustCards.map((card) => (
                    <div key={card.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                      <div className="text-2xl mb-2">{card.icon}</div>
                      <div className="font-semibold text-gray-900 text-xs mb-1">{card.title}</div>
                      <div className="text-gray-500 text-xs">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-violet-400 overflow-hidden">
                {/* Form header band */}
                <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-8 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-extrabold text-white">Get Your Free Quote</h2>
                      <p className="text-purple-200 text-sm mt-0.5">No obligation · No spam · Just expert advice</p>
                    </div>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-white text-xs font-bold border border-white/30">
                      FREE
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <QuoteForm variant="full" />
                </div>
              </div>

              {/* Reassurance strip below form */}
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Licensed Financial Advice Providers</span>
                <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Never sold to third parties</span>
                <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Reply within 1 business day</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4", label: "Specialist covers" },
              { value: "1 day", label: "Typical response time" },
              { value: "100%", label: "Licensed advisers" },
              { value: "Free", label: "No-obligation quote" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-violet-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
