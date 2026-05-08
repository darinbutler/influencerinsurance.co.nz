"use client"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center pt-4">
              {/* YouTube-style play icon floating above the word join */}
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/coverage/" className="text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors">Coverage</Link>
            <Link href="/blog/" className="text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors">Resources</Link>
            <Link href="/faqs/" className="text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors">FAQs</Link>
            <Link href="/locations/" className="text-gray-600 hover:text-purple-700 text-sm font-medium transition-colors">Locations</Link>
            <Link
              href="/quote/"
              className="bg-gradient-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
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
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col gap-3">
              <Link href="/coverage/" className="text-gray-700 hover:text-purple-700 font-medium py-1" onClick={() => setMenuOpen(false)}>Coverage</Link>
              <Link href="/blog/" className="text-gray-700 hover:text-purple-700 font-medium py-1" onClick={() => setMenuOpen(false)}>Resources</Link>
              <Link href="/faqs/" className="text-gray-700 hover:text-purple-700 font-medium py-1" onClick={() => setMenuOpen(false)}>FAQs</Link>
              <Link href="/locations/" className="text-gray-700 hover:text-purple-700 font-medium py-1" onClick={() => setMenuOpen(false)}>Locations</Link>
              <Link
                href="/quote/"
                className="bg-gradient-brand text-white px-4 py-2 rounded-lg font-semibold text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
