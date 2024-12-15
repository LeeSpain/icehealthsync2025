'use client';

import React from 'react';
import NavHeader from '@/components/ui/NavHeader'; // Update the import path

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          {/* Add your pricing content here */}
        </div>
      </main>
    </div>
  );
};

export default PricingPage;