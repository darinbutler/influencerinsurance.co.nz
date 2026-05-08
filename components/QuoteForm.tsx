"use client"
import { useState } from "react"
import { siteConfig } from "../data/site-config"

interface QuoteFormProps {
  variant?: "compact" | "full"
}

export default function QuoteForm({ variant = "full" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    creatorType: "",
    coverNeeded: "",
    followersRange: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const payload = {
        creatorType: formData.creatorType,
        coverNeeded: formData.coverNeeded,
        followersRange: formData.followersRange,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: "Influencer Insurance Enquiry — InfluencerInsurance.co.nz",
      }

      const response = await fetch(siteConfig.workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ creatorType: "", coverNeeded: "", followersRange: "", name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
  const labelClass = "block text-sm font-medium text-gray-700 mb-1"

  if (status === "success") {
    return (
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry Received!</h3>
        <p className="text-gray-600">
          Thanks for reaching out. A licensed NZ insurance adviser will be in touch within 1 business day to discuss your cover options.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {variant === "full" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="creatorType" className={labelClass}>Creator Type</label>
            <select id="creatorType" name="creatorType" value={formData.creatorType} onChange={handleChange} className={inputClass} required>
              <option value="">Select your platform...</option>
              <option value="Instagram Influencer">Instagram Influencer</option>
              <option value="YouTube Creator">YouTube Creator</option>
              <option value="TikTok Creator">TikTok Creator</option>
              <option value="Podcaster">Podcaster</option>
              <option value="Travel Influencer">Travel Influencer</option>
              <option value="Fitness / Wellness Creator">Fitness / Wellness Creator</option>
              <option value="Gaming Streamer">Gaming Streamer</option>
              <option value="Fashion / Beauty Creator">Fashion / Beauty Creator</option>
              <option value="Multi-platform Creator">Multi-platform Creator</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="followersRange" className={labelClass}>Audience Size</label>
            <select id="followersRange" name="followersRange" value={formData.followersRange} onChange={handleChange} className={inputClass}>
              <option value="">Select range...</option>
              <option value="Under 10k">Under 10k followers</option>
              <option value="10k - 50k">10k – 50k followers</option>
              <option value="50k - 200k">50k – 200k followers</option>
              <option value="200k - 1M">200k – 1M followers</option>
              <option value="1M+">1M+ followers</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="coverNeeded" className={labelClass}>Cover Needed</label>
        <select id="coverNeeded" name="coverNeeded" value={formData.coverNeeded} onChange={handleChange} className={inputClass} required>
          <option value="">Select cover type...</option>
          <option value="Public Liability">Public Liability</option>
          <option value="Equipment & Gear">Equipment &amp; Gear Insurance</option>
          <option value="Cyber & Privacy">Cyber &amp; Privacy Insurance</option>
          <option value="Professional Indemnity">Professional Indemnity</option>
          <option value="Full Package">Full Creator Package (all covers)</option>
          <option value="Not Sure">Not sure — need advice</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your NZ phone number"
          className={inputClass}
        />
      </div>

      {variant === "full" && (
        <div>
          <label htmlFor="message" className={labelClass}>Anything else? (optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your creator business or any specific cover requirements..."
            rows={3}
            className={inputClass}
          />
        </div>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gradient-brand text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg text-sm"
      >
        {status === "sending" ? "Sending..." : "Get My Free Quote"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your enquiry is forwarded to a licensed NZ insurance adviser. No spam, no obligation.
      </p>
    </form>
  )
}
