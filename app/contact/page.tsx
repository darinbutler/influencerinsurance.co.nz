import QuoteForm from "../../components/QuoteForm"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Influencer Insurance NZ",
  description: "Get in touch with Influencer Insurance NZ. Connect with a licensed NZ broker for specialist influencer and content creator insurance advice.",
  alternates: { canonical: siteConfig.url + "/contact/" },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Reach out and a licensed NZ insurance adviser will contact you directly within one business day.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Can Help</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "🛡️",
                    title: "Insurance quotes and advice",
                    desc: "Tell us about your creator business and we will match you with a licensed NZ broker who can provide personalised quotes.",
                  },
                  {
                    icon: "❓",
                    title: "Coverage questions",
                    desc: "Not sure which type of cover you need? Our advisers will explain your options clearly and help you make an informed decision.",
                  },
                  {
                    icon: "📋",
                    title: "Policy reviews",
                    desc: "Already have cover but want to check you are adequately protected? Ask for a policy review through our quote form.",
                  },
                  {
                    icon: "🤝",
                    title: "Business partnerships",
                    desc: "If you represent an insurance company, broker firm or creator agency and want to discuss working with us, use the contact form.",
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
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Send an Enquiry</h3>
                <p className="text-gray-500 text-sm mb-5">Your enquiry goes directly to a licensed NZ adviser. Response within 1 business day.</p>
                <QuoteForm variant="full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
