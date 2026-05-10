import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import QuoteForm from "../../../components/QuoteForm"
import { blogPosts } from "../../../data/blog-posts"
import { siteConfig } from "../../../data/site-config"
import type { Metadata } from "next"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Influencer Insurance NZ`,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image,
    url: `${siteConfig.url}/blog/${post.slug}/`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.schema.organizationName,
      url: siteConfig.schema.organizationUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog/" className="text-purple-300 hover:text-white text-sm transition-colors">Resources</Link>
            <span className="text-purple-400">/</span>
            <span className="text-purple-200 text-sm">{post.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-purple-200 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <div className="lg:col-span-2">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="prose prose-gray max-w-none">
                {post.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                ))}
              </div>

              {/* CTA block */}
              <div className="mt-10 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to protect your creator business?</h3>
                <p className="text-gray-600 text-sm mb-4">Connect with a licensed insurance adviser for a personalised quote.</p>
                <Link href="/quote/" className="inline-block bg-gradient-brand text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm">
                  Get My Free Quote
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}/`} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-purple-200 hover:shadow-md transition-all">
                        <div className="relative h-36">
                          <Image src={r.image} alt={r.title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <p className="font-semibold text-gray-900 group-hover:text-purple-700 text-sm transition-colors line-clamp-2">{r.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Get a Quote</h3>
                  <p className="text-gray-500 text-sm mb-5">Speak with a licensed broker who specialises in creator cover.</p>
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
