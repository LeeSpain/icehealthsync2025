'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Logo Component - Keeping consistent with your design
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
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            
            <div className="hidden md:flex items-center ml-10 gap-6">
              <Link href="/features" className="text-gray-600 hover:text-[#008B8B] transition-colors">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#008B8B] transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-[#008B8B] transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#008B8B] transition-colors">Contact</Link>
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

// Page Header Component
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="relative bg-[#008B8B] pt-24 pb-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7F50]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#008B8B]/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
            {subtitle && (
              <span className="block text-[#FF7F50] mt-4">
                {subtitle}
              </span>
            )}
          </h1>
          
          {description && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}
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
  );
};

// Main Template Component
const PageTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader 
        title="Page Title"
        subtitle="Optional Subtitle"
        description="Optional description text that provides more context about this page."
      />
      
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {children}
      </main>
    </div>
  );
};

// Usage Example
const ExamplePage = () => {
  return (
    <PageTemplate>
      <div className="prose max-w-none">
        <h2>Content Section</h2>
        <p>Your page content goes here...</p>
      </div>
    </PageTemplate>
  );
};

export default ExamplePage;