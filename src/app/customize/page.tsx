"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HotelOption {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface JerseyOption {
  id: string;
  playerName: string;
  playerInfo: string;
  officialPrice: number;
  signedPrice: number;
  image: string;
}

export default function CustomizePage() {
  const [selectedHotel, setSelectedHotel] = useState<string>("");
  const [checkInDate, setCheckInDate] = useState("2024-11-25");
  const [checkOutDate, setCheckOutDate] = useState("2024-11-28");
  const [selectedJerseys, setSelectedJerseys] = useState<{[key: string]: {type: string, size: string, quantity: number}}>({});

  const hotelOptions: HotelOption[] = [
    {
      id: "standard",
      name: "Marriott Marquis Standard Room",
      price: 280,
      features: ["Free WiFi", "Room Service", "Fitness Center", "Business Center"]
    },
    {
      id: "executive",
      name: "Marriott Marquis Executive Suite",
      price: 450,
      features: ["Free WiFi", "Room Service", "Executive Lounge Access", "Premium Views", "Separate Living Area"]
    },
    {
      id: "presidential",
      name: "Marriott Marquis Presidential Suite",
      price: 850,
      features: ["Free WiFi", "Butler Service", "Executive Lounge Access", "Panoramic Views", "Dining Area", "Premium Bar"]
    }
  ];

  const jerseyOptions: JerseyOption[] = [
    {
      id: "osimhen",
      playerName: "Victor Osimhen",
      playerInfo: "#9 Nigeria",
      officialPrice: 120,
      signedPrice: 450,
      image: "/jersey/02.08.2025_11.59.59_REC.png"
    },
    {
      id: "icardi",
      playerName: "Victor Osimhen",
      playerInfo: "#10 Argentina",
      officialPrice: 115,
      signedPrice: 420,
      image: "/jersey/02.08.2025_12.00.43_REC.png"
    },
    {
      id: "sane",
      playerName: "Leroy Sané",
      playerInfo: "#11 Germany",
      officialPrice: 125,
      signedPrice: 480,
      image: "/jersey/02.08.2025_12.01.08_REC.png"
    },
    {
      id: "torreira",
      playerName: "Lucas Torreira",
      playerInfo: "#8 Uruguay",
      officialPrice: 110,
      signedPrice: 390,
      image: "/jersey/02.08.2025_12.01.27_REC.png"
    }
  ];

  const handleJerseyAdd = (jerseyId: string, type: string, size: string, quantity: number) => {
    setSelectedJerseys(prev => ({
      ...prev,
      [jerseyId]: { type, size, quantity }
    }));
  };

  const calculateTotal = () => {
    let total = 350; // Base gala dinner price
    
    // Add hotel cost
    if (selectedHotel) {
      const hotel = hotelOptions.find(h => h.id === selectedHotel);
      if (hotel) {
        const nights = Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24));
        total += hotel.price * nights;
      }
    }
    
    // Add jersey costs
    Object.entries(selectedJerseys).forEach(([jerseyId, jersey]) => {
      const jerseyOption = jerseyOptions.find(j => j.id === jerseyId);
      if (jerseyOption) {
        const price = jersey.type === 'signed' ? jerseyOption.signedPrice : jerseyOption.officialPrice;
        total += price * jersey.quantity;
      }
    });
    
    return total;
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
          <h1 className="text-5xl font-black text-yellow-400 mb-4">Customize Your Package</h1>
          <p className="text-xl text-gray-300 mb-6">Add optional hotel accommodation and exclusive jerseys to complete your experience</p>
          <Link  href="/" className="inline-flex items-center bg-black border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Customization Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hotel Accommodation */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🛏️</span>
                <h2 className="text-2xl font-bold text-yellow-400">Hotel Accommodation (Optional)</h2>
              </div>
              <p className="text-gray-300 mb-6">Stay at the prestigious Marriott Marquis where the gala dinner is held.</p>
              
              {/* Date Selection */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2">Check-in Date</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400">📅</span>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Check-out Date</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400">📅</span>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Hotel Options */}
              <div className="space-y-4">
                {hotelOptions.map((hotel) => (
                  <div key={hotel.id} className="border border-gray-700 rounded-xl p-4 hover:border-yellow-400 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hotel"
                          id={hotel.id}
                          checked={selectedHotel === hotel.id}
                          onChange={() => setSelectedHotel(hotel.id)}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-400"
                        />
                        <label htmlFor={hotel.id} className="ml-3 text-white font-semibold">{hotel.name}</label>
                      </div>
                      <div className="text-yellow-400 font-bold text-lg">${hotel.price} per night</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {hotel.features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-transparent border border-yellow-400 text-yellow-400 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                      <span className="mr-2">ℹ️</span>
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Championship Jerseys */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🛒</span>
                <h2 className="text-2xl font-bold text-yellow-400">Championship Jerseys (Optional)</h2>
              </div>
              <p className="text-gray-300 mb-6">Add exclusive jerseys from our championship heroes to your package.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {jerseyOptions.map((jersey) => (
                  <div key={jersey.id} className="border border-gray-700 rounded-xl p-4 hover:border-yellow-400 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-16 h-16 bg-red-600 rounded-lg mr-3 flex items-center justify-center">
                        <Image
                          src={jersey.image}
                          alt={jersey.playerName}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{jersey.playerName}</div>
                        <div className="text-gray-300 text-sm">{jersey.playerInfo}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Official Jersey */}
                      <div className="border border-gray-600 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">Official</span>
                          <span className="text-yellow-400 font-bold">${jersey.officialPrice}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <select className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:border-yellow-400 focus:outline-none">
                              <option>Size</option>
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                            </select>
                            <select className="w-20 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:border-yellow-400 focus:outline-none">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <button 
                            onClick={() => handleJerseyAdd(jersey.id, 'official', 'M', 1)}
                            className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors text-sm"
                          >
                            Add to Package
                          </button>
                        </div>
                      </div>
                      
                      {/* Signed Jersey */}
                      <div className="border border-gray-600 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">Signed</span>
                          <span className="text-yellow-400 font-bold">${jersey.signedPrice}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <select className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:border-yellow-400 focus:outline-none">
                              <option>Size</option>
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                            </select>
                            <select className="w-20 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white text-sm focus:border-yellow-400 focus:outline-none">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <button 
                            onClick={() => handleJerseyAdd(jersey.id, 'signed', 'M', 1)}
                            className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors text-sm"
                          >
                            Add to Package
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Package Summary */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Package Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Gala Dinner Seats:</span>
                  <span className="text-white">Table 18, Seat 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Price:</span>
                  <span className="text-yellow-400 font-bold">$350</span>
                </div>
                
                {selectedHotel && (
                  <>
                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Hotel:</span>
                        <span className="text-white">{hotelOptions.find(h => h.id === selectedHotel)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-yellow-400 font-bold">
                          ${hotelOptions.find(h => h.id === selectedHotel)?.price} × {Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24))} nights
                        </span>
                      </div>
                    </div>
                  </>
                )}
                
                {Object.keys(selectedJerseys).length > 0 && (
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <div className="text-gray-300 mb-2">Jerseys:</div>
                    {Object.entries(selectedJerseys).map(([jerseyId, jersey]) => {
                      const jerseyOption = jerseyOptions.find(j => j.id === jerseyId);
                      const price = jersey.type === 'signed' ? jerseyOption?.signedPrice : jerseyOption?.officialPrice;
                      const totalPrice = (price || 0) * jersey.quantity;
                      return (
                        <div key={jerseyId} className="flex justify-between text-sm">
                          <span className="text-gray-300">{jerseyOption?.playerName} ({jersey.type}) × {jersey.quantity}</span>
                          <span className="text-yellow-400 font-bold">${totalPrice}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total:</span>
                    <span className="text-yellow-400">${calculateTotal()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <a href="/checkout" className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
                  <span>Proceed to Checkout</span>
                  <span className="ml-2">→</span>
                </a>
                <a href="/packages" className="block w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 text-center">
                  Back to Seat Selection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 