"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
              <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Sponsorship</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Shop</Link>
              <Link href="/contact" className="text-yellow-400 font-medium">Contact</Link>
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
          <h1 className="text-6xl font-black text-yellow-400 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 mb-8">Get in touch with the Galatasaray USA team</p>
            <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        {/* Main Content Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
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
                <label className="block text-gray-300 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="events">Events</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Office Locations</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">New York Office</h3>
                  <p className="text-gray-300 mb-2">123 Galatasaray Plaza</p>
                  <p className="text-gray-300 mb-2">New York, NY 10001</p>
                  <p className="text-gray-300">United States</p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Los Angeles Office</h3>
                  <p className="text-gray-300 mb-2">456 Championship Blvd</p>
                  <p className="text-gray-300 mb-2">Los Angeles, CA 90210</p>
                  <p className="text-gray-300">United States</p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Toronto Office</h3>
                  <p className="text-gray-300 mb-2">789 Red Gold Street</p>
                  <p className="text-gray-300 mb-2">Toronto, ON M5V 2H1</p>
                  <p className="text-gray-300">Canada</p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-4 text-2xl">📧</span>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">info@galatasarayusa.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-4 text-2xl">📞</span>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-4 text-2xl">💬</span>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-4 text-2xl">🌐</span>
                  <div>
                    <div className="text-white font-semibold">Website</div>
                    <div className="text-gray-300">www.galatasarayusa.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Office Hours</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-semibold">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-400 text-sm">
                  <strong>Note:</strong> For urgent matters outside office hours, please email us and we ill respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Follow Us</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 border border-yellow-400/30 rounded-xl p-6 text-center transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📘</div>
              <div className="text-white font-semibold mb-1">Facebook</div>
              <div className="text-gray-300 text-sm">@GalatasarayUSA</div>
            </a>
            
            <a href="#" className="bg-gray-800 hover:bg-gray-700 border border-yellow-400/30 rounded-xl p-6 text-center transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📷</div>
              <div className="text-white font-semibold mb-1">Instagram</div>
              <div className="text-gray-300 text-sm">@GalatasarayUSA</div>
            </a>
            
            <a href="#" className="bg-gray-800 hover:bg-gray-700 border border-yellow-400/30 rounded-xl p-6 text-center transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🐦</div>
              <div className="text-white font-semibold mb-1">Twitter</div>
              <div className="text-gray-300 text-sm">@GalatasarayUSA</div>
            </a>
            
            <a href="#" className="bg-gray-800 hover:bg-gray-700 border border-yellow-400/30 rounded-xl p-6 text-center transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📺</div>
              <div className="text-white font-semibold mb-1">YouTube</div>
              <div className="text-gray-300 text-sm">Galatasaray USA</div>
            </a>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <Link href="/about" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
} 