import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer — 7 columns on lg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="relative inline-flex items-center pt-4 mb-4">
              <div className="absolute left-1/2 -translate-x-1/2 -top-[14px] z-10">
                <div className="w-[26px] h-[19px] bg-violet-500 rounded-[4px] flex items-center justify-center">
                  <svg className="w-[13px] h-[13px] text-white translate-x-px" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="font-bold text-white text-base tracking-tight leading-none">Influencer</span>
              <span className="font-bold text-violet-400 text-base tracking-tight leading-none">Insurance</span>
              <span className="text-gray-500 text-xs font-medium leading-none">.co.nz</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Connecting NZ content creators with specialist insurance advisers for professional protection that fits the creator economy.
            </p>
            <Link
              href="/quote/"
              className="inline-block bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-500 transition-colors"
            >
              Get a Quote →
            </Link>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Coverage</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/coverage/" className="hover:text-purple-400 transition-colors">All Coverage Types</Link></li>
              <li><Link href="/coverage/public-liability/" className="hover:text-purple-400 transition-colors">Public Liability</Link></li>
              <li><Link href="/coverage/equipment-gear/" className="hover:text-purple-400 transition-colors">Equipment &amp; Gear</Link></li>
              <li><Link href="/coverage/cyber-privacy/" className="hover:text-purple-400 transition-colors">Cyber &amp; Privacy</Link></li>
              <li><Link href="/coverage/professional-indemnity/" className="hover:text-purple-400 transition-colors">Professional Indemnity</Link></li>
            </ul>
          </div>

          {/* Creator Types — Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Platform Creators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/creators/instagram-influencers/" className="hover:text-purple-400 transition-colors">Instagram</Link></li>
              <li><Link href="/creators/youtube-creators/" className="hover:text-purple-400 transition-colors">YouTube</Link></li>
              <li><Link href="/creators/tiktok-creators/" className="hover:text-purple-400 transition-colors">TikTok</Link></li>
              <li><Link href="/creators/podcasters/" className="hover:text-purple-400 transition-colors">Podcasters</Link></li>
              <li><Link href="/creators/gaming-streamers/" className="hover:text-purple-400 transition-colors">Gaming Streamers</Link></li>
              <li><Link href="/creators/ugc-creators/" className="hover:text-purple-400 transition-colors">UGC Creators</Link></li>
              <li><Link href="/creators/adult-content-creators/" className="hover:text-purple-400 transition-colors">Adult Content</Link></li>
            </ul>
          </div>

          {/* Creator Types — Niche */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Niche Creators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/creators/travel-influencers/" className="hover:text-purple-400 transition-colors">Travel</Link></li>
              <li><Link href="/creators/fitness-wellness-creators/" className="hover:text-purple-400 transition-colors">Fitness &amp; Wellness</Link></li>
              <li><Link href="/creators/fashion-beauty-creators/" className="hover:text-purple-400 transition-colors">Fashion &amp; Beauty</Link></li>
              <li><Link href="/creators/food-recipe-creators/" className="hover:text-purple-400 transition-colors">Food &amp; Recipe</Link></li>
              <li><Link href="/creators/automotive-motorsport-creators/" className="hover:text-purple-400 transition-colors">Automotive</Link></li>
              <li><Link href="/creators/financial-influencers/" className="hover:text-purple-400 transition-colors">Finfluencers</Link></li>
              <li><Link href="/creators/outdoor-adventure-creators/" className="hover:text-purple-400 transition-colors">Outdoor &amp; Adventure</Link></li>
            </ul>
          </div>

          {/* Guides / Blog */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/" className="hover:text-purple-400 transition-colors">All Articles</Link></li>
              <li><Link href="/blog/complete-guide-influencer-insurance-nz/" className="hover:text-purple-400 transition-colors">Complete Guide</Link></li>
              <li><Link href="/blog/nz-influencer-fair-trading-act-guide/" className="hover:text-purple-400 transition-colors">FTA Compliance</Link></li>
              <li><Link href="/blog/influencer-cyber-insurance-nz/" className="hover:text-purple-400 transition-colors">Cyber Risk Guide</Link></li>
              <li><Link href="/blog/drone-insurance-content-creators-nz/" className="hover:text-purple-400 transition-colors">Drone Insurance</Link></li>
              <li><Link href="/blog/finfluencer-insurance-nz/" className="hover:text-purple-400 transition-colors">Finfluencer Guide</Link></li>
              <li><Link href="/blog/onlyfans-creator-insurance-nz/" className="hover:text-purple-400 transition-colors">OnlyFans Insurance</Link></li>
              <li><Link href="/blog/micro-influencer-insurance-nz/" className="hover:text-purple-400 transition-colors">Micro-Influencers</Link></li>
              <li><Link href="/faqs/" className="hover:text-purple-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations/" className="hover:text-purple-400 transition-colors">All Locations</Link></li>
              <li><Link href="/locations/#auckland" className="hover:text-purple-400 transition-colors">Auckland</Link></li>
              <li><Link href="/locations/#wellington" className="hover:text-purple-400 transition-colors">Wellington</Link></li>
              <li><Link href="/locations/#christchurch" className="hover:text-purple-400 transition-colors">Christchurch</Link></li>
              <li><Link href="/locations/#queenstown" className="hover:text-purple-400 transition-colors">Queenstown</Link></li>
              <li><Link href="/locations/#hamilton" className="hover:text-purple-400 transition-colors">Hamilton</Link></li>
              <li><Link href="/locations/#tauranga" className="hover:text-purple-400 transition-colors">Tauranga</Link></li>
              <li><Link href="/locations/#dunedin" className="hover:text-purple-400 transition-colors">Dunedin</Link></li>
              <li><Link href="/locations/#nelson" className="hover:text-purple-400 transition-colors">Nelson</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong className="text-gray-400">Important Disclaimer:</strong> Influencerinsurance.co.nz is a referral service that connects consumers with licensed New Zealand insurance advisers and brokers. We are not an insurer, underwriter or regulated financial adviser. The insurance advisers and brokers we refer you to are licensed Financial Advice Providers (FAPs) under the Financial Markets Conduct Act 2013. All insurance advice, quotes and policy arrangements are provided by those licensed advisers. You will receive a full Financial Advice Provider disclosure statement before any insurance advice is given. Coverage terms, conditions and pricing vary by insurer and individual circumstances. This website provides general information only and does not constitute financial advice.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Influencer Insurance. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy/" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Use</Link>
              <Link href="/disclaimer/" className="text-gray-500 hover:text-purple-400 transition-colors">Disclaimer</Link>
              <Link href="/about/" className="text-gray-500 hover:text-purple-400 transition-colors">About</Link>
              <Link href="/contact/" className="text-gray-500 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
