"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

// Logo Component
const Logo: React.FC = () => (
  <div className="flex items-center gap-2 group">
    <div className="w-12 h-12 bg-gradient-to-br from-[#008B8B] via-[#008B8B] to-[#20B2AA] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
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
            <a href="/" className="flex items-center">
              <Logo />
            </a>
            
            <div className="hidden md:flex items-center ml-10 gap-6">
              <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-[#008B8B] transition-colors">Login</button>
            <button className="bg-[#008B8B] text-white px-5 py-2 rounded-xl hover:bg-[#20B2AA] transition-colors">
              Get Started
              <ChevronRight className="inline-block ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Page = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="bg-[#008B8B] h-[560px]">
        {/* Empty green banner section */}
      </section>
    </main>
  );
};

export default Page;