import { notFound } from "next/navigation"
import Link from "next/link"
import QuoteForm from "../../../components/QuoteForm"
import { creatorTypes } from "../../../data/creator-types"
import { coverageTypes } from "../../../data/coverage-types"
import { blogPosts } from "../../../data/blog-posts"
import { siteConfig } from "../../../data/site-config"
import type { Metadata } from "next"

export function generateStaticParams() {
  return creatorTypes.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const creator = creatorTypes.find((c) => c.slug === params.slug)
  if (!creator) return {}
  return {
    title: `${creator.name} Insurance | Influencer Insurance`,
    description: creator.description.slice(0, 160),
    alternates: { canonical: `${siteConfig.url}/creators/${creator.slug}/` },
  }
}

// Hero image mapping — 6 images shared across 14 creator types
const heroImages: Record<string, string> = {
  "instagram-influencers":          "/images/creator-beauty.png",
  "youtube-creators":               "/images/creator-studio.png",
  "tiktok-creators":                "/images/creator-beauty.png",
  "podcasters":                     "/images/creator-desk.png",
  "travel-influencers":             "/images/creator-travel.png",
  "fitness-wellness-creators":      "/images/creator-event.png",
  "gaming-streamers":               "/images/creator-desk.png",
  "fashion-beauty-creators":        "/images/creator-beauty.png",
  "adult-content-creators":         "/images/creator-studio.png",
  "automotive-motorsport-creators": "/images/creator-auto.png",
  "food-recipe-creators":           "/images/creator-event.png",
  "financial-influencers":          "/images/creator-desk.png",
  "outdoor-adventure-creators":     "/images/creator-travel.png",
  "ugc-creators":                   "/images/creator-studio.png",
}

// Map creator slugs to related blog post slugs for internal linking
const relatedBlogMap: Record<string, string[]> = {
  "instagram-influencers":        ["nz-influencer-fair-trading-act-guide", "professional-indemnity-influencers-nz", "nz-influencer-brand-deal-contracts"],
  "youtube-creators":             ["equipment-insurance-content-creators-nz", "influencer-cyber-insurance-nz", "drone-insurance-content-creators-nz"],
  "tiktok-creators":              ["influencer-cyber-insurance-nz", "nz-influencer-fair-trading-act-guide", "micro-influencer-insurance-nz"],
  "podcasters":                   ["professional-indemnity-influencers-nz", "equipment-insurance-content-creators-nz", "nz-influencer-brand-deal-contracts"],
  "travel-influencers":           ["equipment-insurance-content-creators-nz", "drone-insurance-content-creators-nz", "public-liability-influencer-events-nz"],
  "fitness-wellness-creators":    ["public-liability-influencer-events-nz", "professional-indemnity-influencers-nz", "nz-influencer-fair-trading-act-guide"],
  "gaming-streamers":             ["influencer-cyber-insurance-nz", "equipment-insurance-content-creators-nz", "influencer-income-protection-nz"],
  "fashion-beauty-creators":      ["nz-influencer-fair-trading-act-guide", "professional-indemnity-influencers-nz", "gifted-product-fta-obligations-nz"],
  "adult-content-creators":       ["onlyfans-creator-insurance-nz", "influencer-cyber-insurance-nz", "starting-creator-business-nz-checklist"],
  "automotive-motorsport-creators": ["automotive-motorsport-creator-insurance-nz", "equipment-insurance-content-creators-nz", "drone-insurance-content-creators-nz"],
  "food-recipe-creators":         ["food-recipe-creator-insurance-nz", "nz-influencer-fair-trading-act-guide", "gifted-product-fta-obligations-nz"],
  "financial-influencers":        ["finfluencer-insurance-nz", "professional-indemnity-influencers-nz", "nz-influencer-fair-trading-act-guide"],
  "outdoor-adventure-creators":   ["adventure-outdoor-creator-insurance-nz", "equipment-insurance-content-creators-nz", "drone-insurance-content-creators-nz"],
  "ugc-creators":                 ["ugc-creator-insurance-nz", "professional-indemnity-influencers-nz", "nz-influencer-brand-deal-contracts"],
}

export default function CreatorSlugPage({ params }: { params: { slug: string } }) {
  const creator = creatorTypes.find((c) => c.slug === params.slug)
  if (!creator) notFound()

  const others = creatorTypes.filter((c) => c.slug !== creator.slug).slice(0, 4)
  const relatedSlugs = relatedBlogMap[creator.slug] || []
  const relatedPosts = blogPosts.filter((p) => relatedSlugs.includes(p.slug))
  const heroImg = heroImages[creator.slug] || "/images/creator-studio.png"

  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt={creator.name} className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-800/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 w-full">
          <div className="flex items-center gap-2 mb-5">
            <Link href="/creators/" className="text-white/60 hover:text-white text-sm transition-colors">Creators</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/80 text-sm">{creator.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl">
              {creator.icon}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{creator.name} Insurance</h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-6">{creator.description.slice(0, 150)}...</p>
          <a
            href="#get-quote"
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-7 py-3.5 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-xl text-sm"
          >
            Get a Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg">{creator.description}</p>

              {/* Key facts */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Facts for {creator.name}s</h2>
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
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
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

              {/* Related blog posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Guides for {creator.name}s</h2>
                  <div className="space-y-3">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}/`}
                        className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-purple-200 hover:shadow-sm transition-all group"
                      >
                        <div className="flex-1">
                          <div className="text-xs text-purple-600 font-semibold mb-1">{post.category} · {post.readTime}</div>
                          <div className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors text-sm">{post.title}</div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{post.excerpt}</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-500 flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Other creator types */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Other Creator Types</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {others.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/creators/${other.slug}/`}
                      className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-purple-300 hover:shadow-sm transition-all group"
                    >
                      <div className="text-2xl mb-2">{other.icon}</div>
                      <div className="text-xs font-semibold text-gray-700 group-hover:text-purple-700 transition-colors leading-tight">{other.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-violet-400 rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{creator.name} Insurance Quote</h3>
                  <p className="text-gray-500 text-sm mb-5">Connect with a licensed broker who specialises in creator cover.</p>
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
