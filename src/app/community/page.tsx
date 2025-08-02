"use client";

import Image from "next/image";
import Link from "next/link";

export default function CommunityPage() {
  const communityLeaders = [
    {
      initials: "AK",
      name: "Ahmet Kocabaş",
      location: "Miami, FL",
      memberSince: "2007",
      role: "Regional Leader",
      description: "Leading the vibrant South Florida Galatasaray community with passion and dedication.",
      tags: ["17 Years Member", "Community Builder", "Event Organizer"]
    },
    {
      initials: "SA",
      name: "Sevim Arslan",
      location: "Toronto, ON",
      memberSince: "2010",
      role: "Canada Representative",
      description: "Building bridges between Turkish and Canadian cultures through football passion.",
      tags: ["14 Years Member", "Cultural Ambassador", "Youth Mentor"]
    },
    {
      initials: "MK",
      name: "Mehmet Kaya",
      location: "New York, NY",
      memberSince: "2005",
      role: "Tech Volunteer",
      description: "Keeping our digital community connected and engaged across all platforms.",
      tags: ["19 Years Member", "Tech Expert", "Social Media"]
    },
    {
      initials: "AY",
      name: "Ayşe Yılmaz",
      location: "Los Angeles, CA",
      memberSince: "2012",
      role: "Youth Coordinator",
      description: "Inspiring the next generation of Galatasaray fans in Southern California.",
      tags: ["12 Years Member", "Youth Programs", "Education"]
    },
    {
      initials: "HO",
      name: "Hasan Özkan",
      location: "Chicago, IL",
      memberSince: "2008",
      role: "Media Coordinator",
      description: "Capturing and sharing our community's most memorable moments.",
      tags: ["16 Years Member", "Photography", "Content Creator"]
    },
    {
      initials: "FG",
      name: "Fatma Güneş",
      location: "Vancouver, BC",
      memberSince: "2015",
      role: "Cultural Ambassador",
      description: "Promoting Turkish culture and Galatasaray values in Western Canada.",
      tags: ["9 Years Member", "Cultural Events", "Community Outreach"]
    }
  ];

  const cities = [
    { count: 156, city: "New York", state: "NY" },
    { count: 134, city: "Los Angeles", state: "CA" },
    { count: 98, city: "Toronto", state: "ON" },
    { count: 87, city: "Chicago", state: "IL" },
    { count: 76, city: "Miami", state: "FL" },
    { count: 65, city: "Vancouver", state: "BC" },
    { count: 54, city: "Houston", state: "TX" },
    { count: 43, city: "Montreal", state: "QC" }
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
              <Link href="/packages" className="text-gray-300 hover:text-white transition-colors font-medium">Events</Link>
              <Link href="/membership" className="text-gray-300 hover:text-white transition-colors font-medium">Membership</Link>
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
          <h1 className="text-6xl font-black text-white mb-6">Our Community</h1>
          <p className="text-xl text-gray-300 mb-8">Meet the passionate fans who make Galatasaray USA a thriving community across North America</p>
          <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        {/* Community Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">1,247</div>
            <div className="text-gray-300">Total Members</div>
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
              <span className="text-2xl">🗺️</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">31</div>
            <div className="text-gray-300">States/Provinces</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <div className="text-4xl font-black text-yellow-400 mb-2">3</div>
            <div className="text-gray-300">Countries</div>
          </div>
        </div>

        {/* Featured Community Leaders */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Community Leaders</h2>
          <p className="text-gray-300 text-center mb-12">Celebrating the dedicated members who strengthen our community every day</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityLeaders.map((leader, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{leader.initials}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{leader.name}</div>
                    <div className="text-gray-300 text-sm">{leader.location}</div>
                  </div>
                </div>
                
                <div className="text-yellow-400 text-sm mb-2">Member since {leader.memberSince}</div>
                <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-full px-3 py-1 text-yellow-400 text-sm font-medium mb-3 inline-block">
                  {leader.role}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{leader.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {leader.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800/50 border border-gray-600 rounded-full px-2 py-1 text-gray-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Where We Are */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Where We Are</h2>
          <p className="text-gray-300 text-center mb-12">Our strongest fan communities across North America</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-yellow-400 mb-1">{city.count}</div>
                <div className="text-white font-semibold">{city.city}</div>
                <div className="text-gray-300 text-sm">{city.state}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Community */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Join Our Community</h2>
          <p className="text-gray-300 text-center mb-8 leading-relaxed">
            Become part of the strongest Galatasaray fan network in North America. Connect with fellow supporters, attend exclusive events, and celebrate victories together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center">
              Become Member
            </a>
            <a href="#" className="bg-gray-800 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black text-center">
              Find Local Fans
            </a>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <Link href="#" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            Board of Directors
          </Link>
        </div>
      </div>
    </div>
  );
} 