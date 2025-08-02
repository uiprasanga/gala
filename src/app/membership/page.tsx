"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    membershipTier: "",
    howDidYouHear: "",
    interests: {
      events: false,
      merchandise: false,
      community: false,
      volunteering: false,
      socialMedia: false,
      newsletter: false
    },
    termsAgreed: false,
    marketingConsent: false
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

  const handleInterestChange = (interest: string) => {
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [interest]: !formData.interests[interest as keyof typeof formData.interests]
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Membership application submitted:", formData);
  };

  const membershipTiers = [
    {
      name: "Basic Member",
      price: "Free",
      description: "Join our community and stay connected",
      features: [
        "Access to member directory",
        "Monthly newsletter",
        "Event notifications",
        "Social media access",
        "Community forum access"
      ],
      color: "border-gray-600",
      bgColor: "bg-gray-800/50",
      textColor: "text-gray-300"
    },
    {
      name: "Premium Member",
      price: "$25/year",
      description: "Enhanced benefits and exclusive access",
      features: [
        "All Basic Member benefits",
        "Priority event registration",
        "Exclusive merchandise discounts",
        "Member-only events",
        "Quarterly meetups",
        "Digital membership card",
        "Early access to ticket sales"
      ],
      color: "border-yellow-400/50",
      bgColor: "bg-gray-900/50",
      textColor: "text-yellow-400"
    },
    {
      name: "VIP Member",
      price: "$100/year",
      description: "Ultimate Galatasaray USA experience",
      features: [
        "All Premium Member benefits",
        "VIP seating at events",
        "Meet & greet opportunities",
        "Personalized merchandise",
        "Annual gala dinner invitation",
        "Board meeting participation",
        "Exclusive travel packages",
        "Dedicated member support"
      ],
      color: "border-yellow-400",
      bgColor: "bg-gray-900/50",
      textColor: "text-yellow-400"
    }
  ];

  const benefits = [
    {
      icon: "🏆",
      title: "Championship Access",
      description: "Exclusive access to championship celebrations and events"
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Connect with Galatasaray fans across North America"
    },
    {
      icon: "🎫",
      title: "Event Priority",
      description: "Priority registration for all community events"
    },
    {
      icon: "🛍️",
      title: "Member Discounts",
      description: "Special discounts on merchandise and events"
    },
    {
      icon: "📱",
      title: "Digital Community",
      description: "Access to exclusive online community platforms"
    },
    {
      icon: "🎉",
      title: "Exclusive Events",
      description: "Member-only events and celebrations"
    }
  ];

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
              <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Events</Link>
              <Link href="/membership" className="text-yellow-400 font-medium">Membership</Link>
              <Link href="/sponsorship" className="text-gray-300 hover:text-white transition-colors font-medium">Sponsorship</Link>
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
          <h1 className="text-6xl font-black text-white mb-6">Join Our Membership</h1>
          <p className="text-xl text-gray-300 mb-8">Become part of the strongest Galatasaray fan network in North America</p>
          <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        {/* Membership Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">1,247</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏙️</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">52</div>
            <div className="text-gray-300">Cities</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">24</div>
            <div className="text-gray-300">Events/Year</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">98%</div>
            <div className="text-gray-300">Satisfaction</div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">Choose Your Membership</h2>
          <p className="text-gray-300 text-center mb-12">Select the membership level that best fits your passion for Galatasaray</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`${tier.bgColor} backdrop-blur-sm border-2 ${tier.color} rounded-2xl p-8 relative`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${tier.textColor} mb-2`}>{tier.name}</h3>
                  <div className="text-3xl font-black text-white mb-2">{tier.price}</div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === 1 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  {index === 0 ? 'Join Free' : 'Join Now'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">Member Benefits</h2>
          <p className="text-gray-300 text-center mb-12">Discover what makes Galatasaray USA membership special</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">Join Our Community</h2>
          <p className="text-gray-300 text-center mb-8">Complete the form below to start your Galatasaray USA journey</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Location</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">State/Province *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Membership Preferences */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Membership Preferences</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Preferred Membership Tier *</label>
                  <select
                    name="membershipTier"
                    value={formData.membershipTier}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select membership tier</option>
                    <option value="basic">Basic Member (Free)</option>
                    <option value="premium">Premium Member ($25/year)</option>
                    <option value="vip">VIP Member ($100/year)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">How did you hear about us?</label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select option</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend">Friend/Family</option>
                    <option value="event">Event</option>
                    <option value="website">Website</option>
                    <option value="search">Search Engine</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Areas of Interest (Select all that apply)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: 'events', label: 'Community Events' },
                  { key: 'merchandise', label: 'Merchandise & Shopping' },
                  { key: 'community', label: 'Community Building' },
                  { key: 'volunteering', label: 'Volunteering Opportunities' },
                  { key: 'socialMedia', label: 'Social Media Engagement' },
                  { key: 'newsletter', label: 'Newsletter & Updates' }
                ].map((interest) => (
                  <label key={interest.key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests[interest.key as keyof typeof formData.interests]}
                      onChange={() => handleInterestChange(interest.key)}
                      className="w-5 h-5 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                    />
                    <span className="text-gray-300">{interest.label}</span>
                  </label>
                ))}
              </div>
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
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                />
                <span className="text-gray-300">I would like to receive updates about events and community news</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Submit Membership Application
            </button>
            
            <p className="text-gray-300 text-center">We wll review your application and welcome you to our community within 24 hours</p>
          </form>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <Link href="/community" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            Meet Our Community
          </Link>
        </div>
      </div>
    </div>
  );
} 