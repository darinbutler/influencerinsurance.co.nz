import { notFound } from "next/navigation"
import Link from "next/link"
import QuoteForm from "../../../components/QuoteForm"
import { creatorTypes } from "../../../data/creator-types"
import { coverageTypes } from "../../../data/coverage-types"
import { siteConfig } from "../../../data/site-config"
import type { Metadata } from "next"

export function generateStaticParams() {
  return creatorTypes.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const creator = creatorTypes.find((c) => c.slug === params.slug)
  if (!creator) return {}
  return {
    title: `${creator.name} Insurance NZ | Influencer Insurance NZ`,
    description: creator.description.slice(0, 160),
    alternates: { canonical: `${siteConfig.url}/creators/${creator.slug}/` },
  }
}

export default function CreatorSlugPage({ params }: { params: { slug: string } }) {
  const creator = creatorTypes.find((c) => c.slug === params.slug)
  if (!creator) notFound()

  return (
    <>
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/creators/" className="text-purple-300 hover:text-white text-sm transition-colors">Creators</Link>
            <span className="text-purple-400">/</span>
            <span className="text-purple-200 text-sm">{creator.name}</span>
          </div>
          <div className="text-5xl mb-4">{creator.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{creator.name} Insurance NZ</h1>
          <p className="text-xl text-purple-200 max-w-2xl">{creator.description.slice(0, 150)}...</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg">{creator.description}</p>

              {/* Key facts */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Facts for {creator.name}s in NZ</h2>
                <ul className="space-y-3">
                  {creator.keyFacts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3">
                      <span className="text-purple-500 mt-0.5">📌</span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverage recommendation */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Cover</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{creator.coverageNotes}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coverageTypes.map((cover) => (
                    <Link
                      key={cover.slug}
                      href={`/coverage/${cover.slug}/`}
                      className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:border-purple-300 hover:shadow-sm transition-all"
                    >
                      <span className="text-xl">{cover.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{cover.name}</div>
                        <div className="text-xs text-purple-600">{cover.fromPrice}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{creator.name} Insurance Quote</h3>
                  <p className="text-gray-500 text-sm mb-5">Connect with a licensed NZ broker who specialises in creator cover.</p>
                  <QuoteForm variant="compact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
