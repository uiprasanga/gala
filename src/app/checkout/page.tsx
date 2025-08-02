"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States"
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      router.push('/confirmation');
    }, 3000);
  };

  const totalAmount = 1250; // This would come from the previous page

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-yellow-400 mb-4">Secure Checkout</h1>
          <p className="text-xl text-gray-300 mb-6">Complete your purchase for the Galatasaray Championship Gala Dinner</p>
          <Link href="/customize" className="inline-flex items-center bg-black border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">←</span>
            Back to Customize
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Payment Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
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
                      <label className="block text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Payment Details</h3>
                  <div>
                    <label className="block text-gray-300 mb-2">Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Card Type</label>
                      <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none">
                        <option>Visa</option>
                        <option>Mastercard</option>
                        <option>American Express</option>
                        <option>Discover</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Billing Address</h3>
                  <div>
                    <label className="block text-gray-300 mb-2">Street Address *</label>
                    <input
                      type="text"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
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
                      <label className="block text-gray-300 mb-2">State *</label>
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
                      <label className="block text-gray-300 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>Turkey</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Italy</option>
                      <option>Spain</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400"
                  />
                  <label className="text-gray-300 text-sm">
                    I agree to the <a href="#" className="text-yellow-400 hover:underline">Terms and Conditions</a> and <a href="#" className="text-yellow-400 hover:underline">Privacy Policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <span>Complete Purchase</span>
                      <span className="ml-2">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
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
                    <span className="text-yellow-400">${totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Security Badge */}
              <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-4 text-center">
                <div className="text-green-400 text-2xl mb-2">🔒</div>
                <div className="text-green-400 font-semibold mb-1">Secure Payment</div>
                <div className="text-gray-300 text-sm">Your payment information is encrypted and secure</div>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Event Details</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">📅</span>
                  <span>November 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">🕐</span>
                  <span>7:00 PM - 1:00 AM</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">📍</span>
                  <span>Marriott Marquis Grand Ballroom</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">🎫</span>
                  <span>Table 18, Seat 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 