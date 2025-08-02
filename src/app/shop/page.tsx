"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// TypeScript interfaces
interface Jersey {
  id: number;
  name: string;
  position: string;
  flag: string;
  number: string;
  description: string;
  highlights: string[];
  officialPrice: number;
  signedPrice: number;
  signedStock: number;
  image: string;
}

interface CartItem {
  id: string;
  jersey: Jersey;
  type: 'official' | 'signed';
  size: string;
  price: number;
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<{[key: string]: string}>({});

  const jerseys: Jersey[] = [
    {
      id: 1,
      name: "Victor Osimhen",
      position: "Forward",
      flag: "🇳🇬",
      number: "9",
      description: "The star striker who led Galatasaray to championship glory with his incredible goal-scoring prowess.",
      highlights: ["Golden Boot Winner", "Champions League Top Scorer", "African Player of the Year"],
      officialPrice: 120,
      signedPrice: 450,
      signedStock: 25,
      image: "/jersey/02.08.2025_11.59.59_REC.png"
    },
    {
      id: 2,
      name: "Mauro Icardi",
      position: "Forward",
      flag: "🇦🇷",
      number: "10",
      description: "The clinical finisher whose experience and leadership helped secure the championship title.",
      highlights: ["Serie A Top Scorer", "Championship Winner", "UEFA Cup Winner"],
      officialPrice: 115,
      signedPrice: 420,
      signedStock: 30,
      image: "/jersey/02.08.2025_12.00.43_REC.png"
    },
    {
      id: 3,
      name: "Leroy Sané",
      position: "Winger",
      flag: "🇩🇪",
      number: "11",
      description: "The lightning-fast winger whose pace and skill terrorized defenses throughout the championship season.",
      highlights: ["World Cup Winner", "Champions League Winner", "Bundesliga Champion"],
      officialPrice: 125,
      signedPrice: 480,
      signedStock: 20,
      image: "/jersey/02.08.2025_12.01.08_REC.png"
    },
    {
      id: 4,
      name: "Lucas Torreira",
      position: "Midfielder",
      flag: "🇺🇾",
      number: "8",
      description: "The midfield maestro whose tireless work rate and tactical intelligence anchored our championship run.",
      highlights: ["Copa America Winner", "Premier League Player", "Championship Midfielder"],
      officialPrice: 110,
      signedPrice: 390,
      signedStock: 35,
      image: "/jersey/02.08.2025_12.01.27_REC.png"
    }
  ];

  const addToCart = (jersey: Jersey, type: 'official' | 'signed', size: string) => {
    if (!size) {
      alert('Please select a size');
      return;
    }
    
    const cartItem: CartItem = {
      id: `${jersey.id}-${type}`,
      jersey: jersey,
      type: type,
      size: size,
      price: type === 'official' ? jersey.officialPrice : jersey.signedPrice
    };
    
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
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
              <Link href="/sponsorship" className="text-gray-300 hover:text-white transition-colors font-medium">Sponsorship</Link>
              <Link href="/shop" className="text-yellow-400 font-medium">Shop</Link>
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
          <h1 className="text-6xl font-black text-yellow-400 mb-6">Championship Jerseys</h1>
          <p className="text-xl text-gray-300 mb-8">Own a piece of history with official jerseys from our championship heroes</p>
          <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Product Listings */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {jerseys.map((jersey) => (
                <div key={jersey.id} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
                  {/* Jersey Image */}
                  <div className="relative mb-6">
                    <div className="w-full h-64 bg-gradient-to-br from-white-600 to-white-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={jersey.image}
                        alt={`${jersey.name} Jersey`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-center">
                          <div className="text-4xl mb-2">⚽</div>
                          <div className="text-white font-bold text-lg">{jersey.name}</div>
                          <div className="text-white text-sm">#{jersey.number}</div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 text-2xl">{jersey.flag}</div>
                      <div className="absolute bottom-2 left-2 text-6xl font-black text-white opacity-20">{jersey.number}</div>
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{jersey.name}</h3>
                    <p className="text-gray-300 mb-2">{jersey.position}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{jersey.description}</p>
                    
                    {/* Career Highlights */}
                    <div className="mb-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Career Highlights:</h4>
                      <ul className="space-y-1">
                        {jersey.highlights.map((highlight, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <span className="text-yellow-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Official Jersey */}
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-3">Official Jersey</h4>
                    <div className="text-2xl font-black text-yellow-400 mb-3">${jersey.officialPrice}</div>
                    <div className="flex items-center space-x-3 mb-3">
                      <select
                        value={selectedSizes[`official-${jersey.id}`] || ''}
                        onChange={(e) => setSelectedSizes({
                          ...selectedSizes,
                          [`official-${jersey.id}`]: e.target.value
                        })}
                        className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      >
                        <option value="">Select Size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">X-Large</option>
                        <option value="XXL">XX-Large</option>
                      </select>
                      <button
                        onClick={() => addToCart(jersey, 'official', selectedSizes[`official-${jersey.id}`])}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Signed Jersey */}
                  <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 border border-yellow-400/30 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-3">Signed Jersey</h4>
                    <div className="text-2xl font-black text-yellow-400 mb-3">${jersey.signedPrice}</div>
                    <div className="text-yellow-400 text-sm mb-3">Limited Edition - Only {jersey.signedStock} available</div>
                    <div className="flex items-center space-x-3 mb-3">
                      <select
                        value={selectedSizes[`signed-${jersey.id}`] || ''}
                        onChange={(e) => setSelectedSizes({
                          ...selectedSizes,
                          [`signed-${jersey.id}`]: e.target.value
                        })}
                        className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      >
                        <option value="">Select Size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">X-Large</option>
                        <option value="XXL">XX-Large</option>
                      </select>
                      <button
                        onClick={() => addToCart(jersey, 'signed', selectedSizes[`signed-${jersey.id}`])}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="text-gray-300 text-sm">Includes Certificate of Authenticity</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Shopping Cart */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Shopping Cart ({cart.length})</h3>
                
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-4">Your cart is empty</div>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                          <div className="flex-1">
                            <div className="text-white font-semibold">{item.jersey.name}</div>
                            <div className="text-gray-300 text-sm">{item.type} - Size {item.size}</div>
                            <div className="text-yellow-400 font-semibold">${item.price}</div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 ml-2"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-600 pt-4 mb-4">
                      <div className="flex justify-between text-white font-semibold">
                        <span>Total:</span>
                        <span className="text-yellow-400">${getTotalPrice()}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-xl font-semibold transition-all duration-300">
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Shipping & Returns</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm">Free shipping on orders over $200</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm">30-day return policy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm">Signed jerseys come with COA</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm">Express delivery available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <Link href="/packages" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            Book Gala Dinner
          </Link>
        </div>
      </div>
    </div>
  );
} 