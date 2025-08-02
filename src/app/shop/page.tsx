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
  quantity: number;
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<{[key: string]: string}>({});
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    
    const quantityKey = `${type}-${jersey.id}`;
    const quantity = quantities[quantityKey] || 1;
    
    const cartItem: CartItem = {
      id: `${jersey.id}-${type}`,
      jersey: jersey,
      type: type,
      size: size,
      price: type === 'official' ? jersey.officialPrice : jersey.signedPrice,
      quantity: quantity
    };
    
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

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
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30 shadow-lg">
                <Image
                  src="/logo.jpg"
                  alt="Galatasaray Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="logo-text text-xl">GALATASARAY</span>
                <div className="text-red-400 text-sm font-medium font-display">USA</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors font-display font-medium">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-display font-medium">About</Link>
              <Link href="/packages" className="text-gray-300 hover:text-white transition-colors font-display font-medium">Events</Link>
              <Link href="/membership" className="text-gray-300 hover:text-white transition-colors font-display font-medium">Membership</Link>
              <Link href="/sponsorship" className="text-gray-300 hover:text-white transition-colors font-display font-medium">Sponsorship</Link>
              <Link href="/shop" className="text-yellow-400 font-display font-medium">Shop</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-display font-medium">Contact</Link>
              <div className="relative text-yellow-400 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </div>
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg transition-all duration-300 font-display font-semibold">
                Sign Up
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <div className="relative text-yellow-400 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:text-yellow-400 transition-colors"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src="/logo.jpg"
                    alt="Galatasaray Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="logo-text text-lg">GALATASARAY</span>
                  <div className="text-red-400 text-xs font-medium font-display">USA</div>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Menu Navigation */}
            <nav className="flex-1 px-4 py-6">
              <div className="space-y-4">
                <Link       
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  About
                </Link>
                <Link 
                  href="/packages" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  Events
                </Link>
                <Link 
                  href="/membership" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  Membership
                </Link>
                <Link 
                  href="/sponsorship" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  Sponsorship
                </Link>
                <Link 
                  href="/shop" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-yellow-400 font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  Shop
                </Link>
                <Link 
                  href="#cart" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  <span>Cart</span>
                  <span className="bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-yellow-400 transition-colors font-display font-medium text-lg py-3 border-b border-gray-800"
                >
                  Contact
                </Link>
              </div>
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-800">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-display font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-display text-yellow-400 mb-4 sm:mb-6">Championship Jerseys</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-elegant px-4">Own a piece of history with official jerseys from our championship heroes</p>
          <Link href="/" className="inline-flex items-center bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 rounded-xl font-display font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black">
            <span className="mr-2">🏠</span>
            Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Product Listings */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {jerseys.map((jersey) => (
                                  <div key={jersey.id} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-4 sm:p-6">
                  {/* Jersey Image */}
                  <div className="relative mb-6">
                    <div className="w-full h-48 sm:h-64 bg-white  from-white-600 to-white-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={jersey.image}
                        alt={`${jersey.name} Jersey`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
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
                      <div className="absolute bottom-2 left-2 text-4xl sm:text-6xl font-black text-white opacity-20">{jersey.number}</div>
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-display text-white mb-1">{jersey.name}</h3>
                    <p className="text-gray-300 mb-2 font-elegant">{jersey.position}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 font-body">{jersey.description}</p>
                    
                    {/* Career Highlights */}
                    <div className="mb-4">
                      <h4 className="text-yellow-400 font-display font-semibold mb-2">Career Highlights:</h4>
                      <ul className="space-y-1">
                        {jersey.highlights.map((highlight, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center font-body">
                            <span className="text-yellow-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Official Jersey */}
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-xl">
                    <h4 className="text-lg font-display font-semibold text-white mb-3">Official Jersey</h4>
                    <div className="text-xl sm:text-2xl font-display font-black text-yellow-400 mb-3">${jersey.officialPrice}</div>
                                          <div className="space-y-3 mb-3">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
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
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-white text-sm font-medium">Quantity:</span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => {
                                  const key = `official-${jersey.id}`;
                                  const currentQty = quantities[key] || 1;
                                  if (currentQty > 1) {
                                    setQuantities({
                                      ...quantities,
                                      [key]: currentQty - 1
                                    });
                                  }
                                }}
                                className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg text-white hover:bg-gray-600 transition-colors flex items-center justify-center"
                              >
                                -
                              </button>
                              <span className="text-white font-semibold min-w-[2rem] text-center">
                                {quantities[`official-${jersey.id}`] || 1}
                              </span>
                              <button
                                onClick={() => {
                                  const key = `official-${jersey.id}`;
                                  const currentQty = quantities[key] || 1;
                                  setQuantities({
                                    ...quantities,
                                    [key]: currentQty + 1
                                  });
                                }}
                                className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg text-white hover:bg-gray-600 transition-colors flex items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => addToCart(jersey, 'official', selectedSizes[`official-${jersey.id}`])}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                  </div>

                  {/* Signed Jersey */}
                  <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 border border-yellow-400/30 rounded-xl">
                    <h4 className="text-lg font-display font-semibold text-white mb-3">Signed Jersey</h4>
                    <div className="text-xl sm:text-2xl font-display font-black text-yellow-400 mb-3">${jersey.signedPrice}</div>
                    <div className="text-yellow-400 text-sm mb-3 font-elegant">Limited Edition - Only {jersey.signedStock} available</div>
                                          <div className="space-y-3 mb-3">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
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
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-white text-sm font-medium">Quantity:</span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => {
                                  const key = `signed-${jersey.id}`;
                                  const currentQty = quantities[key] || 1;
                                  if (currentQty > 1) {
                                    setQuantities({
                                      ...quantities,
                                      [key]: currentQty - 1
                                    });
                                  }
                                }}
                                className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg text-white hover:bg-gray-600 transition-colors flex items-center justify-center"
                              >
                                -
                              </button>
                              <span className="text-white font-semibold min-w-[2rem] text-center">
                                {quantities[`signed-${jersey.id}`] || 1}
                              </span>
                              <button
                                onClick={() => {
                                  const key = `signed-${jersey.id}`;
                                  const currentQty = quantities[key] || 1;
                                  setQuantities({
                                    ...quantities,
                                    [key]: currentQty + 1
                                  });
                                }}
                                className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg text-white hover:bg-gray-600 transition-colors flex items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => addToCart(jersey, 'signed', selectedSizes[`signed-${jersey.id}`])}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    <div className="text-gray-300 text-sm font-body">Includes Certificate of Authenticity</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="sticky top-24">
              {/* Shopping Cart */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-display font-bold text-white mb-4">Shopping Cart ({cart.length})</h3>
                
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
                                                    <div className="text-white font-display font-semibold">{item.jersey.name}</div>
                        <div className="text-gray-300 text-sm font-body">{item.type} - Size {item.size} (Qty: {item.quantity})</div>
                        <div className="text-yellow-400 font-display font-semibold">${item.price * item.quantity}</div>
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
                                          <div className="flex justify-between text-white font-display font-semibold">
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
                <h3 className="text-xl font-display font-bold text-white mb-4">Shipping & Returns</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm font-body">Free shipping on orders over $200</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm font-body">30-day return policy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm font-body">Signed jerseys come with COA</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-gray-300 text-sm font-body">Express delivery available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <Link href="/" className="bg-gray-800 border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-display font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black text-center">
            Back to Home
          </Link>
          <Link href="/packages" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-display font-semibold transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-center">
            Book Gala Dinner
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}  