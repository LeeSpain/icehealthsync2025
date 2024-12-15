'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertTriangle, Activity, Bell, Shield, Battery, 
  Wifi, Smartphone, MapPin, Radio, Clock, Heart,
  ArrowRight, ChevronRight, Phone, Settings, 
  UserCheck, Lock, Globe 
} from 'lucide-react';

// Logo Component
const Logo: React.FC = () => (
  <div className="flex items-center gap-2 group">
    <div className="w-12 h-12 bg-gradient-to-br from-[#FF7F50] via-[#FF7F50] to-[#FF6347] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
      <span className="text-white font-bold text-xl">ICE</span>
    </div>
    <span className="text-2xl font-bold text-gray-900">HealthSync</span>
  </div>
);

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            
            <div className="hidden md:flex items-center ml-10 gap-6">
              <Link href="/features" className="text-gray-600 hover:text-[#FF7F50] transition-colors">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#FF7F50] transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-[#FF7F50] transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#FF7F50] transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-[#FF7F50] transition-colors">Login</button>
            <button className="bg-[#FF7F50] text-white px-5 py-2 rounded-xl hover:bg-[#FF6347] transition-colors">
              Get Started
              <ChevronRight className="inline-block ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// SOS Guardian Page Component
export default function SOSGuardianPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#FF7F50] to-[#FF6347] pt-24 pb-36 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-sm font-medium">24/7 Emergency Response</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                ICEHealthSync
                <span className="block text-white mt-2">SOS Guardian</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Advanced personal emergency response system with real-time GPS tracking and two-way communication. Your guardian angel, always by your side.
              </p>

              {/* Rest of your hero content remains the same... */}
            </div>

            {/* Device Preview stays the same... */}
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,
              160,480,128,576,112C672,96,768,96,864,106.7C960,117.3,1056,
              138.7,1152,138.7C1248,138.7,1344,117.3,1392,106.7L1440,96L1440,
              320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,
              320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,
              320,48,320L0,320Z" 
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Rest of your sections remain the same but wrapped in max-w-7xl container... */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Key Features Section */}
        {/* Dashboard Integration */}
        {/* Your existing sections... */}
      </div>

      {/* Call to Action - Full width section */}
      <section className="py-24 bg-gradient-to-br from-[#FF7F50] to-[#FF6347] relative">
        {/* Your existing CTA content... */}
      </section>
    </div>
  );
}