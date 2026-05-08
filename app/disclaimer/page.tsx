import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | Influencer Insurance NZ",
  description: "Important disclaimer about the nature of influencerinsurance.co.nz as an insurance referral service.",
  alternates: { canonical: siteConfig.url + "/disclaimer/" },
}

export default function DisclaimerPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: May 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <p className="font-semibold text-amber-800">Important: This website is an insurance referral service, not an insurer or financial adviser.</p>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Referral Service Only</h2>
          <p>Influencerinsurance.co.nz is operated as an insurance referral service. We connect consumers with licensed New Zealand insurance advisers and brokers. We are not an insurer, underwriter, or Financial Advice Provider (FAP) and we do not provide regulated financial advice.</p>
          <h2 className="text-xl font-bold text-gray-900">Licensed Advisers</h2>
          <p>The insurance advisers and brokers we refer you to are independently licensed Financial Advice Providers (FAPs) under the Financial Markets Conduct Act 2013. They are regulated by the Financial Markets Authority (FMA). Before providing insurance advice, they will give you a disclosure statement as required by law.</p>
          <h2 className="text-xl font-bold text-gray-900">General Information</h2>
          <p>All content on this website — including coverage descriptions, pricing guides, blog articles and FAQs — is provided as general information only. It does not constitute financial advice and should not be relied upon as such. Coverage terms, conditions, exclusions and pricing vary by insurer, policy and individual circumstances.</p>
          <h2 className="text-xl font-bold text-gray-900">Pricing</h2>
          <p>Any pricing information on this website (such as &quot;from $25/month&quot;) represents indicative entry-level pricing only, based on publicly available market information. Actual premiums will depend on your specific circumstances and will be provided by your licensed adviser following a proper needs assessment.</p>
          <h2 className="text-xl font-bold text-gray-900">No Guarantee of Cover</h2>
          <p>Connecting with an adviser through our service does not guarantee that insurance cover will be offered or arranged. Cover is subject to insurers&apos; underwriting criteria and acceptance.</p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For questions about this disclaimer, contact: {siteConfig.email}</p>
        </div>
      </div>
    </section>
  )
}
