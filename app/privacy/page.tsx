import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Influencer Insurance NZ",
  description: "Privacy policy for Influencer Insurance NZ — how we collect, use and protect your personal information.",
  alternates: { canonical: siteConfig.url + "/privacy/" },
}

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: May 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>Influencer Insurance NZ (&quot;we&quot;, &quot;us&quot;) operates influencerinsurance.co.nz as an insurance referral service. This Privacy Policy explains how we collect, use, store and protect your personal information in accordance with the Privacy Act 2020 (NZ).</p>
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>We collect information you provide directly via our quote and contact forms: your name, email address, phone number, platform type, audience size and any additional information you choose to share. We also collect standard website analytics data (page views, referrer sources, device type) through privacy-respecting analytics tools.</p>
          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
          <p>We use your contact information solely to forward your enquiry to a licensed NZ insurance broker or adviser who can assist with your insurance requirements. We do not use your information for marketing purposes without your explicit consent, and we do not sell or share your information with third parties other than the licensed advisers we refer you to.</p>
          <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
          <p>We retain enquiry data for a limited period for the purposes of following up on referred enquiries. You may request deletion of your information at any time by contacting us at {siteConfig.email}.</p>
          <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
          <p>Under the Privacy Act 2020, you have the right to access personal information we hold about you, to request correction of that information, and to request deletion where appropriate. Contact us at {siteConfig.email} to exercise these rights.</p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>For privacy enquiries, contact: {siteConfig.email}</p>
        </div>
      </div>
    </section>
  )
}
