"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/1.jpg",
      title: "GALATASARAY",
      subtitle: "USA CHAMPIONSHIP GALA", 
    },
    {
      image: "/2.jpg", 
      title: "CHAMPIONSHIP",
      subtitle: "GALA DINNER",
       
    },
    {
      image: "/3.jpg",
      title: "LEGENDARY",
      subtitle: "CELEBRATION",
      
    },
    {
      image: "/4.jpg",
      title: "UNITED",
      subtitle: "IN VICTORY",   
    },
    {
      image: "/5.jpg",
      title: "EXCELLENCE",
      subtitle: "REDEFINED", 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
              <a href="/packages" className="text-gray-300 hover:text-white transition-colors font-medium">Events</a>
              <a href="/membership" className="text-gray-300 hover:text-white transition-colors font-medium">Membership</a>
              <a href="/sponsorship" className="text-gray-300 hover:text-white transition-colors font-medium">Sponsorship</a>
              <a href="/shop" className="text-gray-300 hover:text-white transition-colors font-medium">Shop</a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
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

      {/* Hero Section with Image Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              {/* Multi-layer Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50"></div>
              
              {/* Radial Gradient for Focus */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80"></div>
              
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-yellow-900/20 animate-pulse"></div>
              
              {/* Edge Gradients for Text Enhancement */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black/60 to-transparent"></div>
              <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black/60 to-transparent"></div>
              
              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 40%, rgba(220, 38, 38, 0.1) 50%, transparent 60%),
                    linear-gradient(-45deg, transparent 40%, rgba(234, 179, 8, 0.1) 50%, transparent 60%),
                    radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)
                  `,
                  backgroundSize: '100px 100px, 100px 100px, 200px 200px, 200px 200px'
                }}></div>
              </div>
              
              {/* Hexagonal Pattern */}
              <div className="absolute inset-0   opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    repeating-linear-gradient(60deg, transparent, transparent 35px, rgba(220, 38, 38, 0.1) 35px, rgba(220, 38, 38, 0.1) 70px),
                    repeating-linear-gradient(-60deg, transparent, transparent 35px, rgba(234, 179, 8, 0.1) 35px, rgba(234, 179, 8, 0.1) 70px)
                  `,
                  backgroundSize: '70px 70px'
                }}></div>
              </div>
              
              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 animate-pulse" style={{
                  backgroundImage: `
                    linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px'
                }}></div>
              </div>
              
              {/* Floating Geometric Shapes */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/20 rotate-45 animate-spin-slow"></div>
              <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-yellow-400/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-red-500/10 to-yellow-400/10 transform rotate-12 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-yellow-400/15 transform -rotate-45 animate-ping"></div>
              
              {/* Diagonal Stripes Pattern */}
              <div className="absolute inset-0 opacity-8">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(220, 38, 38, 0.05) 10px, rgba(220, 38, 38, 0.05) 20px),
                    repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.05) 10px, rgba(234, 179, 8, 0.05) 20px)
                  `,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              {/* Corner Accent Patterns */}
              <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-red-500/30"></div>
              <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-yellow-400/30"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-yellow-400/30"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-red-500/30"></div>
              
              {/* Animated Wave Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 animate-pulse" style={{
                  backgroundImage: `
                    radial-gradient(ellipse at center, rgba(220, 38, 38, 0.1) 0%, transparent 70%),
                    radial-gradient(ellipse at center, rgba(234, 179, 8, 0.1) 0%, transparent 70%)
                  `,
                  backgroundSize: '300px 300px, 400px 400px',
                  backgroundPosition: '0% 0%, 100% 100%'
                }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Content Overlay with Enhanced Gradients and Patterns */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Background Pattern Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-red-500/10 rounded-full animate-spin-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-yellow-400/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-red-500/5 to-yellow-400/5 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-40 h-40 border-2 border-yellow-400/10 transform rotate-45 animate-geometric-float"></div>
          </div>
          {/* Derby Announcement Badge with Pattern Background */}
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-8 py-4 rounded-full mb-8 animate-pulse shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-full"></div>
            <div className="absolute inset-0 opacity-30 pattern-stripes animate-pattern-shift"></div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400/30 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-400/30 rounded-full animate-pulse-slow"></div>
            <span className="text-yellow-400 mr-3 text-xl relative z-10">⚽</span>
            <span className="font-bold text-lg relative z-10">DERBY ANNOUNCEMENT</span>
            <span className="text-yellow-400 ml-3 text-xl relative z-10">⚽</span>
          </div>
          
          {/* Dynamic Title with Enhanced Styling */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 blur-3xl"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 tracking-tight transition-all duration-1000 relative z-10 drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          {/* Dynamic Subtitle with Gradient Text */}
          <div className="mb-8 relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-300 transition-all duration-1000 relative z-10 drop-shadow-xl">
              {slides[currentSlide].subtitle}
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-transparent to-red-400/20 blur-2xl"></div>
          </div>
          
          {/* Dynamic Subtitle with Enhanced Background */}
          <div className="mb-12 relative">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6 transition-all duration-1000 relative z-10">
              Championship Gala Dinner
            </h3>
          </div>
          
          {/* Main CTA Buttons with Enhanced Gradients */}
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a href="/packages" className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl w-44 inline-block text-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-xl"></div>
                      <span className="relative z-10 whitespace-nowrap">Purchase Tickets</span>
                    </a>
                    <a href="/packages" className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl w-44 inline-block text-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-xl"></div>
                      <span className="relative z-10 whitespace-nowrap">Reserve Your Table</span>
                    </a>
                    <a href="/packages" className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl w-44 inline-block text-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-xl"></div>
                      <span className="relative z-10 whitespace-nowrap">View Details</span>
                    </a>
                  </div>
          
          {/* Secondary Buttons with Gradient Borders */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="relative border-2 border-transparent bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-[2px] hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105">
              <div className="bg-black rounded-xl px-8 py-3">
                <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent font-semibold">Secure Your Legacy</span>
              </div>
            </button>
            <button className="relative border-2 border-transparent bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-[2px] hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-black rounded-xl px-8 py-3">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent font-semibold">Explore Our History</span>
              </div>
            </button>
          </div>
          
          {/* Stats Cards with Yellow Borders and Arrows */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="relative bg-black/70 backdrop-blur-sm border-2 border-yellow-400 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-red-400/10 rounded-xl"></div>
              <div className="absolute inset-0 opacity-20 pattern-hexagon animate-pattern-shift"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400/50 rounded-full animate-pulse"></div>
              <div className="text-3xl font-black text-yellow-400 mb-2 relative z-10">26th</div>
              <div className="text-sm text-white font-medium uppercase tracking-wide relative z-10">Championship</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
              </div>
            </div>
            <div className="relative bg-black/70 backdrop-blur-sm border-2 border-yellow-400 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-red-400/10 rounded-xl"></div>
              <div className="absolute inset-0 opacity-20 pattern-grid animate-pattern-shift" style={{animationDirection: 'reverse'}}></div>
              <div className="absolute top-2 left-2 w-2 h-2 bg-red-400/50 rounded-full animate-pulse-slow"></div>
              <div className="text-3xl font-black text-yellow-400 mb-2 relative z-10">1905</div>
              <div className="text-sm text-white font-medium uppercase tracking-wide relative z-10">Foundation</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
              </div>
            </div>
            <div className="relative bg-black/70 backdrop-blur-sm border-2 border-yellow-400 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-red-400/10 rounded-xl"></div>
              <div className="absolute inset-0 opacity-20 pattern-waves animate-pulse"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-yellow-400/50 rounded-full animate-ping"></div>
              <div className="text-3xl font-black text-yellow-400 mb-2 relative z-10">90</div>
              <div className="text-sm text-white font-medium uppercase tracking-wide relative z-10">Years</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
        
       
        
                        {/* Evening Timeline Ticker */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
                  <div className="bg-black/70 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-4 overflow-hidden">
                    <div className="flex items-center justify-center space-x-8 animate-pulse">
                      {[
                        { time: "7:00 PM", event: "Cocktail Reception" },
                        { time: "8:00 PM", event: "Dinner Service Begins" },
                        { time: "9:00 PM", event: "Championship Celebration" },
                        { time: "9:30 PM", event: "Entertainment & Awards" },
                        { time: "10:30 PM", event: "After-Party & Networking" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 text-center min-w-max">
                          <div className="text-lg font-black text-yellow-400">{item.time}</div>
                          <div className="text-sm text-white font-medium">{item.event}</div>
                          {index < 4 && (
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                
 

                {/* Scroll Indicator with Gradient */}
                <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-transparent rounded-full"></div>
                    <div className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
      </section>
 

      {/* Quote Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-yellow-400 p-12 rounded-2xl text-center bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
            <blockquote className="text-2xl md:text-3xl text-white mb-6 italic font-light leading-relaxed">
              This championship victory belongs to every fan who has supported Galatasaray with unwavering loyalty. Tonight, we celebrate not just our team success, but our community  strength.
            </blockquote>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 underline font-semibold text-lg transition-colors">
              Read More About Our Community
            </a>
          </div>
        </div>
      </section>

      {/* Exclusive Packages */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-yellow-400 mb-6">
              Exclusive Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully curated packages designed to provide you with the ultimate Galatasaray experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gala Dinner */}
            <div className="border-2 border-yellow-400 p-8 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="/3.jpg"
                  alt="Gala Dinner"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Gala Dinner</h3>
              <div className="text-4xl font-black text-yellow-400 mb-6">$250</div>
              <ul className="text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Personalized Seating
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Gourmet Dinner
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Championship Celebration
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Event Photography
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Gala + Hotel */}
            <div className="border-2 border-yellow-400 p-8 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm relative hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="/4.jpg"
                  alt="Gala + Hotel"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Gala + Hotel</h3>
              <div className="text-4xl font-black text-yellow-400 mb-6">$450</div>
              <ul className="text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Deluxe Hotel Stay
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Meet & Greet
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Signed Memorabilia
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  VIP Access
                </li>
              </ul>
              <a href="/packages" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center">
                Select Now
              </a>
            </div>

            {/* Ultimate Champion */}
            <div className="border-2 border-yellow-400 p-8 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="/5.jpg"
                  alt="Ultimate Champion"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ultimate Champion</h3>
              <div className="text-4xl font-black text-yellow-400 mb-6">$599</div>
              <ul className="text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Exclusive VIP Access
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Private Dinner with Players
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Signed Championship Jersey
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Premium Seating
                </li>
              </ul>
              <a href="/packages" className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* World-Class Entertainment */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-yellow-400 mb-6">
              World-Class Entertainment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience captivating music and unforgettable performances throughout the evening.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-2 border-yellow-400 p-10 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 rounded-xl mb-8 flex items-center justify-center overflow-hidden relative">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-40 h-40 bg-black rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl mb-4 relative">
                    <Image
                      src="/comody-2.jpg"
                      alt="Comedy Night"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-red-400/20 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-yellow-400 font-bold text-xl mb-1">Presented by Turkey is most beloved comedian</h4>
                    <h5 className="text-yellow-400 font-bold text-2xl mb-1">Ceyhun Yılmaz</h5>
                    <p className="text-red-400 text-sm font-medium">Stand-up Comedy Legend</p>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-yellow-400 text-center mb-6">Comedy Night</h3>
              
              <div className="border border-yellow-400 rounded-xl p-4 mb-6">
                <p className="text-white text-center leading-relaxed">
                  Get ready for an evening of non-stop laughter as Turkey is most celebrated comedian brings his championship-themed comedy special to life
                </p>
              </div>
              
              <ul className="text-white text-center space-y-3">
                <li className="flex items-center justify-center">
                  <span className="text-red-400 mr-3 text-lg">•</span>
                  Exclusive championship material
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-400 mr-3 text-lg">•</span>
                  Interactive audience segments
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-400 mr-3 text-lg">•</span>
                  Special guest appearances
                </li>
              </ul>
            </div>

            <div className="border-2 border-yellow-400 p-10 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 rounded-xl mb-8 flex items-center justify-center overflow-hidden relative">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-40 h-40 bg-black rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl mb-4 relative">
                    <Image
                      src="/ochestra.jpg"
                      alt="Live Orchestra"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-yellow-400/20 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-yellow-400 font-bold text-xl mb-1">Musical excellence meets championship celebration</h4>
                    <h5 className="text-white font-bold text-yellow-400  text-2xl mb-1">Kenan Doğulu</h5>
                    <p className="text-red-400 text-sm font-medium">with Full Symphony Orchestra</p>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-yellow-400 text-center mb-6">Live Orchestra</h3>
              
              <div className="border border-yellow-400 rounded-xl p-4 mb-6">
                <p className="text-white text-center leading-relaxed">
                  Experience the magic of live music as one of Turkey is most acclaimed artists performs with a full orchestra in this exclusive concert
                </p>
              </div>
              
              <ul className="text-white text-center space-y-3">
                <li className="flex items-center justify-center">
                  <span className="text-red-400 mr-3 text-lg">•</span>
                  Greatest hits medley
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-400 mr-3 text-lg">•</span>
                  Championship victory anthem
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-red-400 mr-3 text-lg">•</span>
                  Galatasaray tribute performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Championship Jerseys */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-yellow-400 mb-6">
              Championship Jerseys
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Official signed and unsigned versions of our championship jerseys.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Mauro Icardi", number: "9", image: "/jersey/02.08.2025_11.59.59_REC.png" },
              { name: "Wilfried Zaha", number: "14", image: "/jersey/02.08.2025_12.00.43_REC.png" },
              { name: "Dries Mertens", number: "10", image: "/jersey/02.08.2025_12.01.08_REC.png" },
              { name: "Kerem Aktürkoğlu", number: "7", image: "/jersey/02.08.2025_12.01.27_REC.png" }
            ].map((player, index) => (
              <div key={index} className="border-2 border-yellow-400 p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-full h-56 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={player.image}
                    alt={`${player.name} Jersey`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{player.name}</h3>
                <p className="text-yellow-400 mb-3 font-semibold">Signed Jersey</p>
                <div className="text-3xl font-black text-yellow-400 mb-6">$125</div>
                
                <select className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none">
                  <option>Size</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                
                <select className="w-full mb-6 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none">
                  <option>Quantity</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-xl font-bold transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 border-2 border-yellow-400 p-10 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Complete Championship Collection</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                             <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                 View Full Collection
               </button>
               <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                 Shop Now
               </button>
            </div>
            <div className="text-gray-300 text-lg">
              Free Delivery • Limited Edition • Authentic Signatures
            </div>
          </div>
        </div>
      </section>

      {/* Our Champions Sponsorship */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-yellow-400 mb-6">
              Our Champions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Support Galatasaray is initiatives and become part of our championship legacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {[
              { name: "Platinum Partner", price: "$25,000+", benefit: "Prominent Logo Placement" },
              { name: "Diamond Partner", price: "$10,000+", benefit: "Logo on Event Materials" },
              { name: "Gold Partner", price: "$5,000+", benefit: "Website Listing" },
              { name: "Silver Partner", price: "$2,500+", benefit: "Name Recognition" },
              { name: "Bronze Partner", price: "$1,000+", benefit: "Website Listing" },
              { name: "Fan Supporter", price: "$500+", benefit: "Name on Wall of Fame" }
            ].map((sponsor, index) => (
              <div key={index} className="border-2 border-yellow-400 p-6 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">👑</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{sponsor.name}</h3>
                <div className="text-yellow-400 font-black mb-3 text-xl">{sponsor.price}</div>
                <p className="text-gray-300 text-sm mb-6">{sponsor.benefit}</p>
                                 <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                   View Profile
                 </button>
              </div>
            ))}
          </div>
          
          <div className="border-2 border-red-600 p-12 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/5.jpg"
                alt="Championship Legacy"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-white text-3xl">👑</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Join the Championship Legacy</h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Partner with Galatasaray USA and be part of our continued success story.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                               <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                 Apply for Partnership
               </button>
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Celebration */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-yellow-400 mb-6">
              Join the Celebration
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mb-8 overflow-hidden">
                <Image
                  src="/1.jpg"
                  alt="Event Venue"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-8">Event Details</h3>
              <div className="space-y-6">
                {[
                  { icon: "📍", text: "New York City" },
                  { icon: "📅", text: "November 15, 2024" },
                  { icon: "⏰", text: "7:00 PM - 11:00 PM" },
                  { icon: "👔", text: "Black Tie Optional" },
                  { icon: "📧", text: "info@galatasarayusa.com" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800">
                    <span className="text-2xl text-yellow-400">{item.icon}</span>
                    <span className="text-white text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Reservations & Contact</h3>
              <div className="border-2 border-yellow-400 p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm mb-8">
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">Early Bird Special</h4>
                <p className="text-gray-300 mb-6 text-lg">Save 15% on all packages when you book before October 1st</p>
                                 <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-xl font-bold text-lg transition-all duration-300 mb-4">
                   Reserve Now - Save 15%
                 </button>
                 <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300">
                   Purchase Tickets
                 </button>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="flex items-center">
                  <span className="text-yellow-400 mr-3">📞</span>
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <span className="text-yellow-400 mr-3">📧</span>
                  reservations@galatasarayusa.com
                </p>
                <p className="flex items-center">
                  <span className="text-yellow-400 mr-3">📍</span>
                  123 Championship Ave, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">GALATASARAY USA</h3>
            <div className="flex justify-center space-x-8">
              <button className="text-gray-300 hover:text-white transition-colors font-medium">About Us</button>
              <button className="text-gray-300 hover:text-white transition-colors font-medium">Contact Us</button>
              <button className="text-gray-300 hover:text-white transition-colors font-medium">Support Us</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Galatasaray USA</h4>
              <p className="text-gray-300 leading-relaxed">
                Bringing the passion and excellence of Galatasaray to the United States, fostering community and celebrating our rich heritage.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Events & News</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gala Dinner</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Championship</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">info@galatasarayusa.com</li>
                <li className="text-gray-300">(555) 123-4567</li>
                <li className="text-gray-300">123 Championship Ave</li>
                <li className="text-gray-300">New York, NY 10001</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-red-600 hover:text-red-500 text-3xl transition-colors">📘</a>
              <a href="#" className="text-red-600 hover:text-red-500 text-3xl transition-colors">📷</a>
              <a href="#" className="text-red-600 hover:text-red-500 text-3xl transition-colors">🐦</a>
              <a href="#" className="text-red-600 hover:text-red-500 text-3xl transition-colors">📺</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:outline-none focus:border-yellow-400 text-lg"
              />
                             <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300">
                 Subscribe
               </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Galatasaray USA. All rights reserved. | 
              <a href="#" className="text-gray-400 hover:text-white ml-2">Privacy Policy</a> | 
              <a href="#" className="text-gray-400 hover:text-white ml-2">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
