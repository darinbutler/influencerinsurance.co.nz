"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const coverageLinks = [
  { href: "/coverage/public-liability/", label: "Public Liability", desc: "Events, activations & filming" },
  { href: "/coverage/equipment-gear/", label: "Equipment & Gear", desc: "Cameras, drones & creator kit" },
  { href: "/coverage/cyber-privacy/", label: "Cyber & Privacy", desc: "Account hacks & data breaches" },
  { href: "/coverage/professional-indemnity/", label: "Professional Indemnity", desc: "Brand deal & content disputes" },
]

const platformLinks = [
  { href: "/creators/instagram-influencers/", label: "Instagram", icon: "📸" },
  { href: "/creators/youtube-creators/", label: "YouTube", icon: "▶️" },
  { href: "/creators/tiktok-creators/", label: "TikTok", icon: "🎵" },
  { href: "/creators/podcasters/", label: "Podcasters", icon: "🎙️" },
  { href: "/creators/travel-influencers/", label: "Travel", icon: "✈️" },
  { href: "/creators/fitness-wellness-creators/", label: "Fitness & Wellness", icon: "💪" },
  { href: "/creators/gaming-streamers/", label: "Gaming & Streaming", icon: "🎮" },
  { href: "/creators/fashion-beauty-creators/", label: "Fashion & Beauty", icon: "💄" },
]

const nicheLinks = [
  { href: "/creators/adult-content-creators/", label: "Adult Content", icon: "🔐" },
  { href: "/creators/automotive-motorsport-creators/", label: "Automotive", icon: "🏎️" },
  { href: "/creators/food-recipe-creators/", label: "Food & Recipe", icon: "🍳" },
  { href: "/creators/financial-influencers/", label: "Finfluencers", icon: "💹" },
  { href: "/creators/outdoor-adventure-creators/", label: "Outdoor & Adventure", icon: "🏔️" },
  { href: "/creators/ugc-creators/", label: "UGC Creators", icon: "📲" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false)
      if (openDropdown) setOpenDropdown(null)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen, openDropdown])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggle = (name: string) => setOpenDropdown(openDropdown === name ? null : name)

  return (
    <header ref={headerRef} className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative flex items-center pt-4">
              <div className="absolute left-1/2 -translate-x-1/2 -top-[14px] z-10">
                <div className="w-[26px] h-[19px] bg-violet-600 rounded-[4px] flex items-center justify-center shadow-sm">
                  <svg className="w-[13px] h-[13px] text-white translate-x-px" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="font-bold text-gray-800 text-base tracking-tight leading-none">Influencer</span>
              <span className="font-bold text-violet-600 text-base tracking-tight leading-none">Insurance</span>
              <span className="text-gray-400 text-xs font-medium leading-none">.co.nz</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">

            {/* Coverage dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle('coverage')}
                className="flex items-center gap-1 text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-purple-50"
              >
                Coverage
                <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'coverage' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'coverage' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-purple-100 py-2 z-50">
                  {coverageLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setOpenDropdown(null)}
                      className="flex flex-col px-4 py-2.5 hover:bg-purple-50 transition-colors">
                      <span className="text-sm font-semibold text-gray-800">{l.label}</span>
                      <span className="text-xs text-gray-500">{l.desc}</span>
                    </Link>
                  ))}
                  <div className="border-t border-purple-100 mt-1 pt-1">
                    <Link href="/coverage/" onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-violet-600 hover:text-violet-700">
                      View all coverage →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Platforms dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle('platforms')}
                className="flex items-center gap-1 text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-purple-50"
              >
                Platforms
                <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'platforms' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'platforms' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-purple-100 py-2 z-50">
                  {platformLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors">
                      <span className="text-base">{l.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{l.label}</span>
                    </Link>
                  ))}
                  <div className="border-t border-purple-100 mt-1 pt-1">
                    <Link href="/creators/" onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-violet-600 hover:text-violet-700">
                      View all platforms →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Niche dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle('niche')}
                className="flex items-center gap-1 text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-purple-50"
              >
                Niche
                <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'niche' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'niche' && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-purple-100 py-2 z-50">
                  {nicheLinks.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 transition-colors">
                      <span className="text-base">{l.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog/" className="text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-purple-50">Resources</Link>
            <Link href="/faqs/" className="text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-purple-50">FAQs</Link>

            <Link
              href="/quote/"
              className="ml-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-2 pb-1">Coverage</p>
              {coverageLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-700 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 text-sm">{l.label}</Link>
              ))}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-3 pb-1">Platforms</p>
              {platformLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-700 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 text-sm">
                  <span>{l.icon}</span>{l.label}
                </Link>
              ))}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-3 pb-1">Niche</p>
              {nicheLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-700 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 text-sm">
                  <span>{l.icon}</span>{l.label}
                </Link>
              ))}
              <div className="border-t border-purple-100 mt-2 pt-2">
                <Link href="/blog/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-700 font-medium py-2 px-3 block text-sm rounded-lg hover:bg-purple-50">Resources</Link>
                <Link href="/faqs/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-700 font-medium py-2 px-3 block text-sm rounded-lg hover:bg-purple-50">FAQs</Link>
                <Link href="/quote/" onClick={() => setMenuOpen(false)}
                  className="block mt-2 py-2.5 px-3 bg-violet-600 text-white font-bold rounded-lg text-center hover:bg-violet-700 transition text-sm">
                  Get a Quote →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
