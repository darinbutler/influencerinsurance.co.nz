import Link from "next/link"
import Image from "next/image"
import QuoteForm from "../components/QuoteForm"
import { coverageTypes } from "../data/coverage-types"
import { siteConfig } from "../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Influencer Insurance NZ | Specialist Cover for Content Creators",
  description: "NZ's specialist insurance referral service for content creators and influencers. Public liability, equipment, cyber and professional indemnity — get quotes from licensed NZ brokers.",
  alternates: { canonical: siteConfig.url + "/" },
}

const stats = [
  { value: "$30B", label: "Global influencer market by 2026" },
  { value: "$200k", label: "Max FTA fine per offence" },
  { value: "3x", label: "Higher cyber targeting vs average businesses" },
  { value: "From $25/mo", label: "Entry-level creator cover" },
]

const steps = [
  {
    step: "1",
    title: "Tell us about your creator business",
    desc: "Use our simple quote form to share your platform, audience size and the cover you need.",
  },
  {
    step: "2",
    title: "We match you with a specialist adviser",
    desc: "Your enquiry goes directly to a licensed NZ insurance broker who specialises in creator and professional cover.",
  },
  {
    step: "3",
    title: "Compare quotes and get covered",
    desc: "Your adviser compares options from NZ's leading insurers and helps you select the right policy at the right price.",
  },
]

const trustBadges = [
  { icon: "✅", text: "Licensed NZ brokers only" },
  { icon: "🔒", text: "Secure enquiry handling" },
  { icon: "📞", text: "Personal adviser contact" },
  { icon: "⚡", text: "Response within 1 business day" },
]

const creatorTypes = [
  {
    icon: "📸", label: "Instagram", href: "/creators/instagram-influencers/",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "▶️", label: "YouTube", href: "/creators/youtube-creators/",
    img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "🎵", label: "TikTok", href: "/creators/tiktok-creators/",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "🎙️", label: "Podcasters", href: "/creators/podcasters/",
    img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "✈️", label: "Travel", href: "/creators/travel-influencers/",
    img: "/images/creator-travel.png",
  },
  {
    icon: "💪", label: "Fitness", href: "/creators/fitness-wellness-creators/",
    img: "/images/creator-event.png",
  },
  {
    icon: "🎮", label: "Gaming", href: "/creators/gaming-streamers/",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "💄", label: "Fashion", href: "/creators/fashion-beauty-creators/",
    img: "/images/creator-beauty.png",
  },
  {
    icon: "🔐", label: "Adult Content", href: "/creators/adult-content-creators/",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "🏎️", label: "Automotive", href: "/creators/automotive-motorsport-creators/",
    img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "🍳", label: "Food & Recipe", href: "/creators/food-recipe-creators/",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "💹", label: "Finfluencers", href: "/creators/financial-influencers/",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "🏔️", label: "Outdoor & Adventure", href: "/creators/outdoor-adventure-creators/",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: "📲", label: "UGC Creators", href: "/creators/ugc-creators/",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[640px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/creator-studio.png"
            alt="Content creator filming"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-purple-900/65 to-indigo-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-200 text-sm font-medium">🇳🇿 Creator Insurance Specialists</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Insurance Built for
                <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Content Creators
                </span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Your content is your business. Protect your brand, gear, income and reputation with specialist influencer insurance — and get connected with licensed NZ brokers who understand the creator economy.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span className="text-sm">{badge.icon}</span>
                    <span className="text-sm text-purple-100">{badge.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote/"
                  className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-xl text-center"
                >
                  Get My Free Quote
                </Link>
                <Link
                  href="/coverage/"
                  className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Explore Coverage
                </Link>
              </div>
            </div>

            {/* Quote form card */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-violet-400 p-6 lg:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Get a Quote Today</h2>
              <p className="text-gray-500 text-sm mb-6">Connect with a licensed broker — no obligation, no spam.</p>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-violet-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage types */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Cover for Every Creator Risk
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four specialist covers designed for the specific risks content creators face — from gear theft to brand deal disputes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageTypes.map((cover) => (
              <Link
                key={cover.slug}
                href={`/coverage/${cover.slug}/`}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-purple-200 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cover.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{cover.name}</h3>
                      <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{cover.fromPrice}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{cover.shortDesc}</p>
                    <div className="mt-3 flex items-center text-purple-600 text-sm font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — with background image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/creator-desk.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/92" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Getting covered takes minutes — here&apos;s the process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-sm">
                <div className="w-14 h-14 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator types — with actual images */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Cover for Every Type of Creator</h2>
            <p className="text-lg text-gray-400">Whether you&apos;re on Instagram, YouTube, TikTok, OnlyFans, or creating automotive and adventure content — we have specialist cover for your platform.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {creatorTypes.map((creator) => (
              <Link
                key={creator.label}
                href={creator.href}
                className="relative rounded-xl overflow-hidden group h-36 block"
              >
                <img
                  src={creator.img}
                  alt={creator.label}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/25 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <div className="text-xl mb-0.5 drop-shadow">{creator.icon}</div>
                  <div className="text-xs font-semibold text-white drop-shadow leading-tight">{creator.label}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/creators/" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              View all 14 creator types
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/creator-auto.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/94" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Why Creators Choose Us
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "🎯",
                    title: "Creator-focused specialists",
                    desc: "We connect you with brokers who understand the creator economy — not generalists who have never heard of brand deals or account hijacking.",
                  },
                  {
                    icon: "🏅",
                    title: "Licensed advisers only",
                    desc: "Every broker we refer you to holds a current Financial Advice Provider (FAP) licence under the Financial Markets Conduct Act. You are in safe hands.",
                  },
                  {
                    icon: "⚡",
                    title: "Fast, personal service",
                    desc: "Your enquiry goes to a real person who will contact you directly. No chatbots, no call centres — just expert advice tailored to your situation.",
                  },
                  {
                    icon: "💰",
                    title: "Competitive pricing",
                    desc: "Our brokers compare options from multiple insurers to find you the most competitive premium for the cover you need.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-violet-400 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ready to protect your creator business?</h3>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* NZ Regulation callout */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">⚖️</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            The Fair Trading Act Applies to You
          </h2>
          <p className="text-purple-200 leading-relaxed mb-6 max-w-2xl mx-auto">
            The Commerce Commission actively monitors influencer content for compliance. Undisclosed sponsored posts, misleading product claims and unlabelled affiliate content can attract fines up to $200,000 per offence under the Fair Trading Act 1986. Professional indemnity insurance is your financial backstop.
          </p>
          <Link
            href="/coverage/professional-indemnity/"
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-lg"
          >
            Learn About Professional Indemnity
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Start Protecting Your Creator Business</h2>
          <p className="text-purple-100 text-lg mb-8">
            Connect with a licensed adviser today. Your enquiry is handled confidentially and you will receive a personalised response within one business day.
          </p>
          <Link
            href="/quote/"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-xl text-lg"
          >
            Get My Quote Now
          </Link>
        </div>
      </section>
    </>
  )
}
