"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import DashboardPreview from '@/components/DashboardPreview';

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#008B8B] rounded-2xl pt-32 pb-48 px-6">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 rounded-2xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-white/80 text-sm mb-6">
              Your Personal Health Guardian
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Intelligent Health
              <span className="text-[#FF7F50] block mt-2">
                Monitoring System
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Advanced AI-powered health tracking with emergency response system.
              Your life-saving companion, always by your side.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-black/80 transition-all">
                <Heart className="h-6 w-6" />
                App Store
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                <Heart className="h-6 w-6" />
                Google Play
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#20B2AA]/20 via-[#FF7F50]/10 to-[#20B2AA]/20 blur-3xl" />
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative -mt-24 pb-48">
        {/* Your existing features section */}
      </section>
    </main>
  );
}