"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a random order number
    const randomOrder = "GS" + Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderNumber(randomOrder);
  }, []);

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl">✓</span>
          </div>
          <h1 className="text-5xl font-black text-green-400 mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-300 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 inline-block">
            <div className="text-yellow-400 font-bold text-lg">Order #{orderNumber}</div>
          </div>
        </div>

        {/* Order Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Order Summary */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-3">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Gala Dinner Seats:</span>
                  <span className="text-white">Table 18, Seat 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Price:</span>
                  <span className="text-yellow-400 font-bold">$350</span>
                </div>
              </div>
              
              <div className="border-b border-gray-700 pb-3">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Hotel:</span>
                  <span className="text-white">Marriott Marquis Executive Suite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">3 nights:</span>
                  <span className="text-yellow-400 font-bold">$1,350</span>
                </div>
              </div>
              
              <div className="border-b border-gray-700 pb-3">
                <div className="text-gray-300 mb-2">Jerseys:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Victor Osimhen (Signed) × 1</span>
                    <span className="text-yellow-400">$450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Mauro Icardi (Official) × 2</span>
                    <span className="text-yellow-400">$230</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-yellow-400">$2,380</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Event Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-3 text-xl">📅</span>
                <div>
                  <div className="text-white font-semibold">November 15, 2025</div>
                  <div className="text-gray-300">7:00 PM - 1:00 AM</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-yellow-400 mr-3 text-xl">📍</span>
                <div>
                  <div className="text-white font-semibold">Marriott Marquis Grand Ballroom</div>
                  <div className="text-gray-300">New York City, NY</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-yellow-400 mr-3 text-xl">🎫</span>
                <div>
                  <div className="text-white font-semibold">Table 18, Seat 2</div>
                  <div className="text-gray-300">Premium Seating</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-yellow-400 mr-3 text-xl">🏨</span>
                <div>
                  <div className="text-white font-semibold">Check-in: November 25, 2024</div>
                  <div className="text-gray-300">Check-out: November 28, 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">What is Next?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-400 text-2xl">📧</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Confirmation Email</h3>
              <p className="text-gray-300 text-sm">You Wll receive a detailed confirmation email within 24 hours with all your booking information.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-400 text-2xl">🎫</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Digital Tickets</h3>
              <p className="text-gray-300 text-sm">Your digital tickets will be sent to your email 48 hours before the event.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-400 text-2xl">📞</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-300 text-sm">Need help? Contact our support team at support@galatasarayusa.com</p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-900/20 border border-blue-400/30 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Important Information</h2>
          
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>Please arrive at least 30 minutes before the event starts for check-in.</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>Dress code: Black tie or formal evening wear.</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>Hotel check-in is available from 3:00 PM on your arrival date.</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>Jerseys will be available for pickup at the event or shipped to your address.</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>All sales are final. No refunds or exchanges.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
            Return to Home
          </Link>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Download Receipt
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Print Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 