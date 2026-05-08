import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-sm">II</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm">Influencer Insurance</span>
                <span className="text-purple-400 text-xs font-medium">New Zealand</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting NZ content creators with specialist insurance advisers for professional protection that fits the creator economy.
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Coverage Types</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/coverage/public-liability/" className="hover:text-purple-400 transition-colors">Public Liability</Link></li>
              <li><Link href="/coverage/equipment-gear/" className="hover:text-purple-400 transition-colors">Equipment &amp; Gear</Link></li>
              <li><Link href="/coverage/cyber-privacy/" className="hover:text-purple-400 transition-colors">Cyber &amp; Privacy</Link></li>
              <li><Link href="/coverage/professional-indemnity/" className="hover:text-purple-400 transition-colors">Professional Indemnity</Link></li>
            </ul>
          </div>

          {/* Creators */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Creator Types</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/creators/instagram-influencers/" className="hover:text-purple-400 transition-colors">Instagram Influencers</Link></li>
              <li><Link href="/creators/youtube-creators/" className="hover:text-purple-400 transition-colors">YouTube Creators</Link></li>
              <li><Link href="/creators/tiktok-creators/" className="hover:text-purple-400 transition-colors">TikTok Creators</Link></li>
              <li><Link href="/creators/podcasters/" className="hover:text-purple-400 transition-colors">Podcasters</Link></li>
              <li><Link href="/creators/travel-influencers/" className="hover:text-purple-400 transition-colors">Travel Influencers</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quote/" className="hover:text-purple-400 transition-colors">Get a Quote</Link></li>
              <li><Link href="/blog/" className="hover:text-purple-400 transition-colors">Resources</Link></li>
              <li><Link href="/faqs/" className="hover:text-purple-400 transition-colors">FAQs</Link></li>
              <li><Link href="/locations/" className="hover:text-purple-400 transition-colors">Locations</Link></li>
              <li><Link href="/about/" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-purple-400 transition-colors">Contact</Link></li>
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
              &copy; {currentYear} Influencer Insurance NZ. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy/" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Use</Link>
              <Link href="/disclaimer/" className="text-gray-500 hover:text-purple-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
