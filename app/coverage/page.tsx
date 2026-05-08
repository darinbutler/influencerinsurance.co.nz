import Link from "next/link"
import { coverageTypes } from "../../data/coverage-types"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Influencer Insurance Coverage Types | NZ Creator Cover",
  description: "Explore all four specialist insurance covers for NZ content creators: public liability, equipment & gear, cyber & privacy, and professional indemnity.",
  alternates: { canonical: siteConfig.url + "/coverage/" },
}

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Creator Insurance Coverage</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Four specialist cover types designed for the real risks NZ content creators face every day.
          </p>
        </div>
      </section>

      {/* Coverage grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {coverageTypes.map((cover, index) => (
              <div
                key={cover.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{cover.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{cover.fromPrice}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{cover.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{cover.description}</p>

                  {/* Stat callout */}
                  <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-4 mb-6">
                    <div className="text-2xl font-extrabold text-gradient-brand">{cover.stats.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{cover.stats.label}</div>
                  </div>

                  <Link
                    href={`/coverage/${cover.slug}/`}
                    className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
                  >
                    Learn More About {cover.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className={`grid grid-cols-1 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Who needs it */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-purple-600">👤</span> Who needs this cover
                    </h3>
                    <ul className="space-y-2">
                      {cover.whoNeeds.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-500 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* What it covers */}
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-purple-600">🛡️</span> What&apos;s covered
                    </h3>
                    <ul className="space-y-2">
                      {cover.whatCovers.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-500 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Not Sure Which Cover You Need?</h2>
          <p className="text-purple-100 text-lg mb-8">
            Our licensed NZ advisers will assess your creator business and recommend the right combination of covers for your situation.
          </p>
          <Link
            href="/quote/"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-xl"
          >
            Get Expert Advice
          </Link>
        </div>
      </section>
    </>
  )
}
