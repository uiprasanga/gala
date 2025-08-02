"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Seat {
  id: string;
  number: number;
  isAvailable: boolean;
  isSelected: boolean;
}

interface Table {
  id: string;
  number: number;
  row: number;
  price: number;
  seats: Seat[];
}

export default function PackagesPage() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [tables, setTables] = useState<Table[]>(() => {
    const tablesData: Table[] = [];
    let tableId = 1;
    
    // Premium Rows 1-2 ($350)
    for (let row = 1; row <= 2; row++) {
      for (let table = 1; table <= 5; table++) {
        const seats: Seat[] = [];
        for (let seat = 1; seat <= 10; seat++) {
          seats.push({
            id: `${tableId}-${seat}`,
            number: seat,
            isAvailable: Math.random() > 0.3, // 70% available
            isSelected: false
          });
        }
        tablesData.push({
          id: tableId.toString(),
          number: tableId,
          row,
          price: 350,
          seats
        });
        tableId++;
      }
    }
    
    // Standard Rows 3-10 ($250)
    for (let row = 3; row <= 10; row++) {
      for (let table = 1; table <= 5; table++) {
        const seats: Seat[] = [];
        for (let seat = 1; seat <= 10; seat++) {
          seats.push({
            id: `${tableId}-${seat}`,
            number: seat,
            isAvailable: Math.random() > 0.2, // 80% available
            isSelected: false
          });
        }
        tablesData.push({
          id: tableId.toString(),
          number: tableId,
          row,
          price: 250,
          seats
        });
        tableId++;
      }
    }
    
    return tablesData;
  });

  const handleSeatClick = (tableId: string, seatId: string) => {
    setTables(prevTables => {
      return prevTables.map(table => {
        if (table.id === tableId) {
          return {
            ...table,
            seats: table.seats.map(seat => {
              if (seat.id === seatId && seat.isAvailable) {
                return {
                  ...seat,
                  isSelected: !seat.isSelected
                };
              }
              return seat;
            })
          };
        }
        return table;
      });
    });

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const getAvailableSeats = (table: Table) => {
    return table.seats.filter(seat => seat.isAvailable).length;
  };

 
  const getTotalPrice = () => {
    let total = 0;
    selectedSeats.forEach(seatId => {
      const [tableId] = seatId.split('-');
      const table = tables.find(t => t.id === tableId);
      if (table) {
        total += table.price;
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
              <Link href="/packages" className="text-yellow-400 font-medium">Events</Link>
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
          <h1 className="text-5xl font-black text-yellow-400 mb-4">Select Your Seats</h1>
          <p className="text-xl text-gray-300 mb-6">Choose your preferred seats for the Galatasaray Championship Gala Dinner</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            Back to Home
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Seat Selection */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              {/* Venue Header */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2">📍</span>
                  <h2 className="text-2xl font-bold text-white">Marriott Marquis Grand Ballroom</h2>
                </div>
                <p className="text-gray-300">Click individual seats to select them</p>
              </div>

              {/* Stage */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 mb-8 text-center relative">
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-white font-semibold">Featuring Ceyhun Yılmaz & Kenan Doğulu with Live Orchestra</div>
              </div>

              {/* Seating Arrangement */}
              <div className="space-y-6">
                {Array.from({ length: 10 }, (_, rowIndex) => {
                  const rowNumber = rowIndex + 1;
                  const rowTables = tables.filter(table => table.row === rowNumber);
                  const isPremium = rowNumber <= 2;
                  
                  return (
                    <div key={rowNumber} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-bold ${isPremium ? 'text-yellow-400' : 'text-white'}`}>
                          Row {rowNumber} {isPremium ? '- Premium' : ''}
                        </h3>
                        <span className="text-yellow-400 font-semibold">${isPremium ? '350' : '250'} per seat</span>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-4">
                        {rowTables.map(table => (
                          <div key={table.id} className="text-center">
                            <div className="relative mb-2">
                              {/* Table Circle */}
                              <div className="w-20 h-20 mx-auto border-2 border-yellow-400 rounded-full flex items-center justify-center relative">
                                <div className="text-yellow-400 font-bold text-sm">{table.number}</div>
                                
                                {/* Seat Numbers Around Circle */}
                                {table.seats.map((seat, seatIndex) => {
                                  const angle = (seatIndex * 36) * (Math.PI / 180);
                                  const radius = 32;
                                  const x = Math.cos(angle) * radius;
                                  const y = Math.sin(angle) * radius;
                                  
                                  return (
                                    <button
                                      key={seat.id}
                                      onClick={() => handleSeatClick(table.id, seat.id)}
                                      disabled={!seat.isAvailable}
                                      className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                                        !seat.isAvailable
                                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                          : seat.isSelected
                                          ? 'bg-red-500 text-white border-2 border-red-300'
                                          : 'bg-black text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black'
                                      }`}
                                      style={{
                                        left: `calc(50% + ${x}px - 12px)`,
                                        top: `calc(50% + ${y}px - 12px)`
                                      }}
                                    >
                                      {seat.number}
                                    </button>
                                  );
                                })}
                              </div>
                              
                              {/* Available Seats Counter */}
                              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black border border-yellow-400 rounded-full px-2 py-1">
                                <span className="text-yellow-400 text-xs font-bold">
                                  {getAvailableSeats(table)}/10
                                </span>
                              </div>
                            </div>
                            
                            {/* Table Number */}
                            <div className="text-yellow-400 font-bold text-lg mb-1">{table.number}</div>
                            
                            {/* Price */}
                            <div className="text-white font-semibold">${table.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel - Event Details & Selection */}
          <div className="space-y-6">
            {/* Event Details */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Event Details</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <div className="font-semibold text-white">November 15, 2025</div>
                  <div>7:00 PM - 1:00 AM</div>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">📍</span>
                  <span>Marriott Marquis Grand Ballroom</span>
                </div>
                <div>
                  <div className="font-semibold text-white">1,000 Guests</div>
                  <div>100 Tables • 10 Seats Each</div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Premium Rows 1-2</span>
                  <span className="text-yellow-400 font-bold">$350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Standard Rows 3-10</span>
                  <span className="text-yellow-400 font-bold">$250</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="text-sm text-gray-300 space-y-1">
                    <div>• 5-course championship dinner</div>
                    <div>• Premium open bar</div>
                    <div>• Live entertainment</div>
                    <div>• Championship ceremony</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Selection */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Your Selection</h3>
              {selectedSeats.length === 0 ? (
                <div className="text-gray-300 mb-4">No seats selected yet</div>
              ) : (
                <div className="space-y-3 mb-4">
                  <div className="text-white font-semibold">Selected Seats: {selectedSeats.length}</div>
                  <div className="text-yellow-400 font-bold text-xl">Total: ${getTotalPrice()}</div>
                  <div className="text-sm text-gray-300">
                    {selectedSeats.map(seatId => {
                      const [tableId, seatNumber] = seatId.split('-');
                      const table = tables.find(t => t.id === tableId);
                      return (
                        <div key={seatId}>
                          Table {tableId}, Seat {seatNumber} - ${table?.price}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="space-y-3">
                <a href="/customize" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-xl font-semibold transition-all duration-300 text-center">
                  Customize Your Package
                </a>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                  {selectedSeats.length === 0 ? 'Back to Event Info' : 'Proceed to Checkout'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seating Legend */}
        <div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Seating Legend</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-black border-2 border-yellow-400 rounded-full"></div>
              <span className="text-gray-300">Available Seat</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 border-2 border-red-300 rounded-full"></div>
              <span className="text-gray-300">Selected Seat</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <span className="text-gray-300">Unavailable</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
              <span className="text-gray-300">Round Table (10 seats)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 