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
    title: `${cover.name} for NZ Creators | Influencer Insurance NZ`,
    description: cover.shortDesc,
    alternates: { canonical: `${siteConfig.url}/coverage/${cover.slug}/` },
  }
}

export default function CoverageSlugPage({ params }: { params: { slug: string } }) {
  const cover = coverageTypes.find((c) => c.slug === params.slug)
  if (!cover) notFound()

  const others = coverageTypes.filter((c) => c.slug !== cover.slug)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/coverage/" className="text-purple-300 hover:text-white text-sm transition-colors">Coverage</Link>
              <span className="text-purple-400">/</span>
              <span className="text-purple-200 text-sm">{cover.name}</span>
            </div>
            <div className="text-5xl mb-4">{cover.icon}</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{cover.name}</h1>
            <p className="text-xl text-purple-200">{cover.shortDesc}</p>
            <div className="mt-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">{cover.fromPrice}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {cover.name}?</h2>
                <p className="text-gray-700 leading-relaxed">{cover.description}</p>
              </div>

              {/* Stat */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-4xl font-extrabold text-gradient-brand mb-2">{cover.stats.value}</div>
                <div className="text-gray-700">{cover.stats.label}</div>
              </div>

              {/* Who needs it */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Who Needs {cover.name}?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cover.whoNeeds.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What it covers */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What Does {cover.name} Cover?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cover.whatCovers.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold mt-0.5">🛡️</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other covers */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Other Creator Covers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {others.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/coverage/${other.slug}/`}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition-all group"
                    >
                      <div className="text-2xl mb-2">{other.icon}</div>
                      <div className="font-semibold text-gray-900 group-hover:text-purple-700 text-sm transition-colors">{other.name}</div>
                      <div className="text-xs text-purple-600 mt-1">{other.fromPrice}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quote form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Get a Quote for {cover.name}</h3>
                  <p className="text-gray-500 text-sm mb-5">Speak with a licensed NZ broker who specialises in creator cover.</p>
                  <QuoteForm variant="compact" />
                </div>
                <div className="mt-4 bg-purple-50 rounded-xl p-4 text-sm text-gray-600">
                  <p className="font-semibold text-gray-800 mb-1">🔒 How referrals work</p>
                  <p>Your enquiry is forwarded to a licensed NZ Financial Advice Provider (FAP). They will contact you directly to discuss your options and provide a formal quote. You are under no obligation to proceed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
