"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background with gradient overlay - Half page */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 relative">
          <Image
            src="/header-img.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>
        <div className="h-1/2 bg-black"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Galatasaray Logo"
                  width={48}
                  height={48}
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
              <Link href="/about" className="text-yellow-400 font-medium">About</Link>
              <Link href="/packages" className="text-gray-300 hover:text-white transition-colors font-medium">Events</Link>
              <Link href="/membership" className="text-gray-300 hover:text-white transition-colors font-medium">Membership</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Sponsorship</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Shop</Link>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16 relative">
          {/* Background Icons */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-4xl">⚽</div>
            <div className="absolute top-20 right-20 text-3xl">🏆</div>
            <div className="absolute bottom-10 left-1/4 text-3xl">⭐</div>
            <div className="absolute bottom-20 right-1/4 text-4xl">🦁</div>
            <div className="absolute top-1/2 left-10 text-3xl">🏆</div>
            <div className="absolute top-1/3 right-10 text-4xl">🦁</div>
          </div>
          
          <h1 className="text-6xl font-black text-yellow-400 mb-6 relative z-10">About Galatasaray USA</h1>
          <p className="text-xl text-gray-300 mb-8 relative z-10">Uniting North American fans in championship spirit since 2004</p>
            <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black relative z-10">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        {/* Main Content Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Our Mission */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">Our Mission</h2>
              <p className="text-gray-300 text-lg">Building champions together</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Established in 2004, Galatasaray USA serves as the official bridge connecting all North American Galatasaray fans to our beloved team and each other. We are more than just supporters – we are a family united by passion, tradition, and unwavering loyalty.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-3">•</span>
                Uniting fans across North America
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-3">•</span>
                Building a strong community bond
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-400 mr-3">•</span>
                Supporting our team is global journey
              </li>
            </ul>
          </div>

          {/* Our Community */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">Our Community</h2>
              <p className="text-gray-300 text-lg">Strength in unity</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              From coast to coast, our association brings together thousands of passionate fans who share the red and gold spirit. Through watch parties, community events, and celebrations like this championship gala, we create lasting bonds that transcend borders.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-yellow-400/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-yellow-400 mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Strong</div>
              </div>
              <div className="bg-gray-800/50 border border-yellow-400/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-yellow-400 mb-1">50+</div>
                <div className="text-gray-300 text-sm">Cities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Passion */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Passion</h3>
            <p className="text-gray-300 leading-relaxed">
              Our unwavering love for Galatasaray drives everything we do, from organizing community events to celebrating every victory together.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              Just like our team on the field, we strive for excellence in everything we do, creating world-class experiences for our community.
            </p>
          </div>

          {/* Tradition */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tradition</h3>
            <p className="text-gray-300 leading-relaxed">
              Honoring the rich heritage of Galatasaray while building new traditions for future generations of fans in North America.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-16 relative">
          <div className="text-6xl text-yellow-400 absolute top-4 left-6"></div>
          <div className="pl-16">
            <blockquote className="text-2xl font-bold text-yellow-400 leading-relaxed mb-4">
              This championship victory belongs to every fan who has supported Galatasaray with unwavering loyalty. Tonight, we celebrate not just our team is success, but our community is strength.
            </blockquote>
            <cite className="text-gray-300 text-lg italic text-right block">
              – Galatasaray USA Association
            </cite>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            Our Community
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
} 