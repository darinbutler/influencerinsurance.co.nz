import QuoteForm from "../../components/QuoteForm"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get an Influencer Insurance Quote | NZ Creator Cover",
  description: "Get a free influencer insurance quote from a licensed NZ broker. Public liability, equipment, cyber and professional indemnity cover for NZ content creators.",
  alternates: { canonical: siteConfig.url + "/quote/" },
}

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get Your Creator Insurance Quote</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Tell us about your creator business and we will connect you with a licensed NZ broker who specialises in influencer cover.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Tell Us About Your Creator Business</h2>
            <p className="text-gray-500 text-sm mb-6">Your enquiry goes directly to a licensed NZ insurance adviser. No spam. No obligation.</p>
            <QuoteForm variant="full" />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🏅", title: "Licensed advisers only", desc: "Every broker holds a current FAP licence under the FMCA" },
              { icon: "⚡", title: "Fast response", desc: "Hear back within 1 business day" },
              { icon: "🔒", title: "Secure and confidential", desc: "Your information is never shared without consent" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                <div className="text-gray-500 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
