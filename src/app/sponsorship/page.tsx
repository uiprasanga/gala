"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SponsorshipPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    companySize: "",
    companyDescription: "",
    fullName: "",
    title: "",
    email: "",
    phone: "",
    sponsorshipTier: "",
    budgetRange: "",
    goals: "",
    specialRequests: "",
    termsAgreed: false,
    marketingUpdates: false,
    areasOfInterest: {
      eventBranding: false,
      digitalMarketing: false,
      entertainment: false,
      vipExperience: false,
      communityProgram: false,
      yearRound: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };

  const handleAreaOfInterestChange = (area: string) => {
    setFormData({
      ...formData,
      areasOfInterest: {
        ...formData.areasOfInterest,
        [area]: !formData.areasOfInterest[area as keyof typeof formData.areasOfInterest]
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sponsorship application submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Galatasaray Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-wide">GALATASARAY</span>
                <div className="text-red-400 text-sm font-medium">USA</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">About</Link>
              <Link href="/packages" className="text-gray-300 hover:text-white transition-colors font-medium">Events</Link>
              <Link href="/membership" className="text-gray-300 hover:text-white transition-colors font-medium">Membership</Link>
              <Link href="/sponsorship" className="text-yellow-400 font-medium">Sponsorship</Link>
              <Link href="/shop" className="text-gray-300 hover:text-white transition-colors font-medium">Shop</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</Link>
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold">
                Sign Up
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-yellow-400 mb-6">Sponsorship Application</h1>
          <p className="text-xl text-gray-300 mb-8">Join elite partners in celebrating Galatasaray is championship and supporting our vibrant community</p>
          <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        {/* Partnership Levels */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">Partnership Levels</h2>
          <p className="text-gray-300 text-center mb-12">Choose the sponsorship level that aligns with your goals</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Platinum Sponsor */}
            <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Platinum Sponsor</h3>
                <div className="text-3xl font-black text-white mb-4">$25,000+</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Premium logo placement on all event materials
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  VIP table for 10 guests at the gala dinner
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Speaking opportunity during the event
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Dedicated social media feature campaign
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Year-round brand partnership opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Exclusive meet & greet with special guests
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Custom branded photo opportunities
                </li>
              </ul>
            </div>

            {/* Gold Sponsor */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥇</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Gold Sponsor</h3>
                <div className="text-3xl font-black text-white mb-4">$10,000+</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Prominent logo placement on event materials
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Reserved table for 8 guests
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Full page advertisement in event program
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Social media mentions and features
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Networking opportunities with community leaders
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Logo display during live entertainment
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  Recognition during championship ceremony
                </li>
              </ul>
            </div>

            {/* Silver Sponsor */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-300 mb-2">Silver Sponsor</h3>
                <div className="text-3xl font-black text-white mb-4">$5,000+</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Logo placement on select event materials
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Reserved table for 6 guests
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Half page listing in event program
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Event recognition and appreciation
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Community networking opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Social media acknowledgment
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  Certificate of community partnership
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">Sponsorship Application Form</h2>
          <p className="text-gray-300 text-center mb-8">Complete the form below to begin your partnership with Galatasaray USA</p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Company Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="e.g., Technology, Finance, Retail"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Company Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://www.yourcompany.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-300 mb-2">Company Description</label>
                <textarea
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Brief description of your company and its mission..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none"
                ></textarea>
              </div>
            </div>

            {/* Primary Contact */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Primary Contact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Contact Person Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Title/Position *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Marketing Director"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="contact@company.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Sponsorship Preferences */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Sponsorship Preferences</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Preferred Sponsorship Tier *</label>
                  <select
                    name="sponsorshipTier"
                    value={formData.sponsorshipTier}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select sponsorship level</option>
                    <option value="platinum">Platinum Sponsor ($25,000+)</option>
                    <option value="gold">Gold Sponsor ($10,000+)</option>
                    <option value="silver">Silver Sponsor ($5,000+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Estimated Budget Range</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-300 mb-2">Sponsorship Goals & Objectives</label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="What do you hope to achieve through this partnership? (e.g., brand awareness, community engagement, customer acquisition)"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none"
                ></textarea>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Areas of Interest (Select all that apply)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: 'eventBranding', label: 'Event Branding & Signage' },
                  { key: 'digitalMarketing', label: 'Digital Marketing Partnership' },
                  { key: 'entertainment', label: 'Entertainment Sponsorship' },
                  { key: 'vipExperience', label: 'VIP Experience Package' },
                  { key: 'communityProgram', label: 'Community Program Support' },
                  { key: 'yearRound', label: 'Year-round Partnership' }
                ].map((area) => (
                  <label key={area.key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.areasOfInterest[area.key as keyof typeof formData.areasOfInterest]}
                      onChange={() => handleAreaOfInterestChange(area.key)}
                      className="w-5 h-5 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                    />
                    <span className="text-gray-300">{area.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-gray-300 mb-2">Special Requests or Comments</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                placeholder="Any specific requirements, questions, or additional information you'd like to share..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Consent */}
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleCheckboxChange}
                  required
                  className="w-5 h-5 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                />
                <span className="text-gray-300">I agree to the terms and conditions and privacy policy *</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="marketingUpdates"
                  checked={formData.marketingUpdates}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                />
                <span className="text-gray-300">I would like to receive marketing updates about future Galatasaray USA events</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Submit Application
            </button>
            
            <p className="text-gray-300 text-center">We Will review your application and contact you within 3-5 business days</p>
          </form>
        </div>

        {/* Questions Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Questions About Sponsorship?</h2>
          <p className="text-gray-300 text-center mb-8">Our partnership team is here to help you find the perfect sponsorship package</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-4">📧</div>
              <div className="text-white font-semibold mb-2">Email</div>
              <div className="text-gray-300">sponsorship@galatasarayusa.org</div>
            </div>
            <div>
              <div className="text-3xl mb-4">📞</div>
              <div className="text-white font-semibold mb-2">Phone</div>
              <div className="text-gray-300">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-3xl mb-4">🕒</div>
              <div className="text-white font-semibold mb-2">Hours</div>
              <div className="text-gray-300">Monday-Friday 9AM-6PM EST</div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <a href="#" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            Download Sponsorship Deck
          </a>
        </div>
      </div>
    </div>
  );
} 