'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CalculatorIcon, Download, TrendingUp, Settings, 
  ChevronRight, PieChart, Share, Save, ArrowUp, 
  ArrowDown, Trash2, Copy
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Types
interface Scenario {
  id: string;
  name: string;
  percentages: {
    basicActive: number;
    starterDownload: number;
    starterActive: number;
    premiumDownload: number;
    premiumActive: number;
  };
  projectionSettings: {
    months: number;
    churnRate: number;
    growthRate: number;
  };
}

interface Product {
  name: string;
  price: number;
  downloads: number;
  monthlyActive: number;
}

interface Totals {
  totalDownloads: number;
  totalMonthlyActive: number;
  totalRevenue: number;
  monthlyRevenue: number;
}

interface ProjectionData {
  month: number;
  revenue: number;
  customers: number;
  churnedCustomers: number;
  newCustomers: number;
}

// Logo Component
const Logo = () => {
  return (
    <div className="flex items-center gap-2 group">
      <div className="w-12 h-12 bg-gradient-to-br from-[#008B8B] via-[#008B8B] to-[#20B2AA] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
        <span className="text-white font-bold text-xl">ICE</span>
      </div>
      <span className="text-2xl font-bold text-gray-900">HealthSync</span>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
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
            <Link href="/login" className="text-gray-600 hover:text-[#008B8B] transition-colors">
              Login
            </Link>
            <Link 
              href="/get-started"
              className="bg-[#008B8B] text-white px-5 py-2 rounded-xl hover:bg-[#20B2AA] transition-colors flex items-center gap-2"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main Calculator Component
function Calculator() {
  // State
  const [showSettings, setShowSettings] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    { name: 'Free Plan', price: 0, downloads: 0, monthlyActive: 0 },
    { name: 'Basic Plan (€4.99)', price: 4.99, downloads: 0, monthlyActive: 0 },
    { name: 'Starter Plan (€1.99)', price: 1.99, downloads: 0, monthlyActive: 0 },
    { name: 'Glucose Monitor (€19.99)', price: 19.99, downloads: 0, monthlyActive: 0 },
    { name: 'Med Dispenser (€19.99)', price: 19.99, downloads: 0, monthlyActive: 0 },
    { name: 'SOS Guardian (€19.99)', price: 19.99, downloads: 0, monthlyActive: 0 }
  ]);

  const [totals, setTotals] = useState<Totals>({
    totalDownloads: 0,
    totalMonthlyActive: 0,
    totalRevenue: 0,
    monthlyRevenue: 0
  });

  const [projectionData, setProjectionData] = useState<ProjectionData[]>([]);

  // Handle base downloads change
  const handleBaseDownloadsChange = (value: number) => {
    const newProducts = [...products];
    
    // Base plan (4.99€)
    newProducts[1].downloads = value;
    newProducts[1].monthlyActive = Math.round(value * 0.25); // 25% active rate
    
    // Starter plan (1.99€)
    newProducts[2].downloads = Math.round(value * 0.5); // 50% of base downloads
    newProducts[2].monthlyActive = Math.round(newProducts[2].downloads * 0.25); // 25% active rate
    
    // Premium products (19.99€)
    for (let i = 3; i < 6; i++) {
      newProducts[i].downloads = Math.round(value * 0.25); // 25% of base downloads
      newProducts[i].monthlyActive = Math.round(newProducts[i].downloads * 0.25); // 25% active rate
    }
    
    setProducts(newProducts);
  };

  // Calculate totals
  useEffect(() => {
    const newTotals = products.reduce((acc, product) => ({
      totalDownloads: acc.totalDownloads + product.downloads,
      totalMonthlyActive: acc.totalMonthlyActive + product.monthlyActive,
      totalRevenue: acc.totalRevenue + (product.downloads * product.price),
      monthlyRevenue: acc.monthlyRevenue + (product.monthlyActive * product.price)
    }), {
      totalDownloads: 0,
      totalMonthlyActive: 0,
      totalRevenue: 0,
      monthlyRevenue: 0
    });

    setTotals(newTotals);
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative bg-[#008B8B] pt-24 pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}/>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revenue Calculator
              <span className="block text-[#FF7F50] mt-4">
                Annual Projections
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Calculate your potential revenue with different scenarios and subscription models
            </p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117.3,1056,138.7,1152,138.7C1248,138.7,1344,117.3,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="#f9fafb"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-24">
        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Controls */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span>{showSettings ? 'Hide' : 'Show'} Settings</span>
            </button>
            <button
              onClick={() => {
                // Implement export functionality
                console.log('Exporting data...');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#008B8B] text-white rounded-lg hover:bg-[#20B2AA] transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>

          {/* Calculator Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-600">Product</th>
                  <th className="text-left py-4 px-4 text-gray-600">Price (€)</th>
                  <th className="text-left py-4 px-4 text-gray-600">Downloads</th>
                  <th className="text-left py-4 px-4 text-gray-600">Monthly Active</th>
                  <th className="text-right py-4 px-4 text-gray-600">Monthly Revenue</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-800">{product.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-600">€{product.price.toFixed(2)}</div>
                    </td>
                    <td className="py-4 px-4">
                      {index === 1 ? (
                        <input
                          type="number"
                          value={product.downloads || ''}
                          onChange={(e) => handleBaseDownloadsChange(Number(e.target.value))}
                          className="w-32 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#008B8B]"
                          min="0"
                        />
                      ) : (
                        <div className="text-gray-800">{product.downloads.toLocaleString()}</div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-800">{product.monthlyActive.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">
                        {product.downloads > 0 ? 
                          `${((product.monthlyActive / product.downloads) * 100).toFixed(1)}% conversion` 
                          : '0% conversion'}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="font-medium text-gray-800">
                        €{(product.monthlyActive * product.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-xs text-gray-500">/month</div>
                    </td>
                  </tr>
                ))}
                {/* Summary Row */}
                <tr className="bg-gray-50 font-semibold">
                  <td className="py-4 px-4 text-gray-800">Total</td>
                  <td className="py-4 px-4">-</td>
                  <td className="py-4 px-4 text-gray-800">
                    {totals.totalDownloads.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-gray-800">
                    {totals.totalMonthlyActive.toLocaleString()}
                    <div className="text-xs text-gray-500">
                      {totals.totalDownloads > 0 ? 
                        `${((totals.totalMonthlyActive / totals.totalDownloads) * 100).toFixed(1)}% overall conversion` 
                        : '0% conversion'}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-800">
                    €{totals.monthlyRevenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    <div className="text-xs text-gray-500">/month</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Annual Summary */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Annual Summary</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#008B8B]/10 to-[#20B2AA]/10 rounded-xl p-6">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Annual Revenue</h4>
                <div className="text-2xl font-bold text-[#008B8B]">
                  €{(totals.monthlyRevenue * 12).toLocaleString(undefined, {minimumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-gray-500 mt-1">Based on current monthly</div>
              </div>

              <div className="bg-gradient-to-br from-[#FF7F50]/10 to-[#FF6347]/10 rounded-xl p-6">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Active Users</h4>
                <div className="text-2xl font-bold text-[#FF7F50]">
                  {totals.totalMonthlyActive.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mt-1">Monthly active users</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Revenue Per User</h4>
                <div className="text-2xl font-bold text-indigo-600">
                  €{totals.totalMonthlyActive > 0 
                    ? (totals.monthlyRevenue / totals.totalMonthlyActive).toFixed(2) 
                    : '0.00'}
                </div>
                <div className="text-sm text-gray-500 mt-1">Average monthly ARPU</div>
              </div>
            </div>

            {/* Subscription Stats */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="font-medium text-gray-900 mb-4">Subscription Breakdown</h4>
              <div className="space-y-4">
                {products.filter(p => p.monthlyActive > 0).map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#008B8B] opacity-75"></div>
                      <span className="text-gray-600">{product.name}</span>
                    </div>
                    <div className="text-gray-900 font-medium">
                      {((product.monthlyActive / totals.totalMonthlyActive) * 100).toFixed(1)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Notes */}
            <div className="mt-8 text-sm text-gray-500">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#008B8B]/10 flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></div>
                </div>
                <div>
                  All calculations are based on current monthly active users and subscription rates.
                  Actual results may vary based on market conditions and user behavior.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;