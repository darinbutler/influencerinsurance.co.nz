import { notFound } from "next/navigation"
import Link from "next/link"
import QuoteForm from "../../../components/QuoteForm"
import { coverageTypes } from "../../../data/coverage-types"
import { siteConfig } from "../../../data/site-config"
import type { Metadata } from "next"

export function generateStaticParams() {
  return coverageTypes.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cover = coverageTypes.find((c) => c.slug === params.slug)
  if (!cover) return {}
  return {
    title: `${cover.name} for Creators | Influencer Insurance`,
    description: cover.shortDesc,
    alternates: { canonical: `${siteConfig.url}/coverage/${cover.slug}/` },
  }
}

// Distinct young-creator images per coverage type
const heroImages: Record<string, string> = {
  "public-liability":        "/images/creator-event.png",
  "equipment-gear":          "/images/creator-travel.png",
  "cyber-privacy":           "/images/creator-desk.png",
  "professional-indemnity":  "/images/creator-beauty.png",
}

const heroOverlays: Record<string, string> = {
  "public-liability":        "from-violet-950/65 via-purple-900/50 to-indigo-900/35",
  "equipment-gear":          "from-indigo-950/65 via-indigo-900/50 to-purple-900/35",
  "cyber-privacy":           "from-purple-950/65 via-fuchsia-900/50 to-purple-800/35",
  "professional-indemnity":  "from-slate-950/65 via-indigo-900/50 to-slate-800/35",
}

export default function CoverageSlugPage({ params }: { params: { slug: string } }) {
  const cover = coverageTypes.find((c) => c.slug === params.slug)
  if (!cover) notFound()

  const others = coverageTypes.filter((c) => c.slug !== cover.slug)
  const heroImg = heroImages[cover.slug] || heroImages["public-liability"]
  const overlay = heroOverlays[cover.slug] || heroOverlays["public-liability"]

  return (
    <>
      {/* Tall hero with creator image */}
      <section className="relative text-white overflow-hidden min-h-[580px] flex flex-col justify-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={cover.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${overlay}`} />
        {/* Bottom fade for readability */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/coverage/" className="text-white/60 hover:text-white text-sm transition-colors">Coverage</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/80 text-sm">{cover.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              {/* Icon + price */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl">
                  {cover.icon}
                </div>
                <span className="bg-white/20 backdrop-blur-sm border border-white/25 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                  {cover.fromPrice}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                {cover.name}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mb-8">
                {cover.shortDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-xl"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="#coverage-detail"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  See what&apos;s covered
                </a>
              </div>
            </div>

            {/* Stat card floating on hero */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-xs ml-auto">
                <div className="text-5xl font-extrabold text-white mb-2">{cover.stats.value}</div>
                <div className="text-white/70 text-sm leading-relaxed">{cover.stats.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section id="coverage-detail" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: detail content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {cover.name}?</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{cover.description}</p>
              </div>

              {/* Stat — mobile only (shown on hero on desktop) */}
              <div className="lg:hidden bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-4xl font-extrabold text-gradient-brand mb-2">{cover.stats.value}</div>
                <div className="text-gray-700">{cover.stats.label}</div>
              </div>

              {/* Who needs it */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-base">👤</span>
                  Who Needs {cover.name}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cover.whoNeeds.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-gray-100">
                      <span className="text-purple-500 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What it covers */}
              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center text-base">🛡️</span>
                  What&apos;s Covered
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cover.whatCovers.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-purple-100">
                      <span className="text-purple-500 font-bold mt-0.5">🛡️</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other covers */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Explore Other Covers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {others.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/coverage/${other.slug}/`}
                      className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-purple-300 hover:shadow-md transition-all group"
                    >
                      <div className="text-3xl mb-3">{other.icon}</div>
                      <div className="font-bold text-gray-900 group-hover:text-purple-700 text-sm transition-colors mb-1">{other.name}</div>
                      <div className="text-xs text-purple-600 font-semibold">{other.fromPrice}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sticky quote form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div id="get-quote" className="bg-white border-2 border-violet-400 rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{cover.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">Get a Quote</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-5">A licensed adviser will contact you with options for {cover.name.toLowerCase()} tailored to your creator business.</p>
                  <QuoteForm variant="compact" />
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-gray-800 text-sm mb-1">🔒 How referrals work</p>
                  <p className="text-xs text-gray-600 leading-relaxed">Your enquiry is forwarded to a licensed Financial Advice Provider. They contact you directly, provide a full disclosure statement, and give personalised advice. No obligation to proceed.</p>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: "⚡", label: "1 business day response" },
                    { icon: "🏅", label: "Licensed advisers" },
                    { icon: "🔒", label: "Confidential" },
                    { icon: "💬", label: "Real person, not a bot" },
                  ].map((t) => (
                    <div key={t.label} className="bg-white border border-gray-100 rounded-xl p-3 text-center">
                      <div className="text-lg mb-1">{t.icon}</div>
                      <div className="text-xs text-gray-600 font-medium leading-tight">{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
