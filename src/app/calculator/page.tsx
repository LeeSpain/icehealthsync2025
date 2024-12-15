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
interface OneTimePurchase {
  price: number;
  profitMargin: number;
  totalSales: number;
  totalProfit: number;
}

interface Product {
  name: string;
  price: number;
  downloads: number;
  monthlyActive: number;
  conversionRate: number;
  oneTimePurchase?: OneTimePurchase;
}

interface Totals {
  totalDownloads: number;
  totalMonthlyActive: number;
  subscriptionRevenue: number;
  oneTimeRevenue: number;
  oneTimeProfit: number;
  totalCombinedRevenue: number;
  annualProjectedRevenue: number;
}

interface RevenueBreakdown {
  monthly: {
    subscription: number;
    oneTime: number;
    total: number;
  };
  annual: {
    subscription: number;
    oneTime: number;
    total: number;
  };
  metrics: {
    averageRevenuePerUser: number;
    subscriptionConversionRate: number;
    hardwareConversionRate: number;
  };
}

interface ProjectionPoint {
  month: number;
  subscriptionRevenue: number;
  hardwareRevenue: number;
  totalRevenue: number;
  activeUsers: number;
  hardwareUsers: number;
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
    { 
      name: 'Free Plan', 
      price: 0, 
      downloads: 0, 
      monthlyActive: 0,
      conversionRate: 0 
    },
    { 
      name: 'Basic Plan (€4.99)', 
      price: 4.99, 
      downloads: 0, 
      monthlyActive: 0,
      conversionRate: 25 
    },
    { 
      name: 'Starter Plan (€1.99)', 
      price: 1.99, 
      downloads: 0, 
      monthlyActive: 0,
      conversionRate: 25
    },
    { 
      name: 'Glucose Monitor (€19.99)', 
      price: 19.99, 
      downloads: 0, 
      monthlyActive: 0,
      conversionRate: 25,
      oneTimePurchase: {
        price: 150,
        profitMargin: 0.25,
        totalSales: 0,
        totalProfit: 0
      }
    },
    { 
      name: 'Med Dispenser (€19.99)', 
      price: 19.99, 
      downloads: 0, 
      monthlyActive: 0,
      conversionRate: 25,
      oneTimePurchase: {
        price: 150,
        profitMargin: 0.25,
        totalSales: 0,
        totalProfit: 0
      }
    },
    { 
      name: 'SOS Guardian (€19.99)', 
      price: 19.99, 
      downloads: 0, 
      monthlyActive: 0,
      conversionRate: 25,
      oneTimePurchase: {
        price: 99.99,
        profitMargin: 0.25,
        totalSales: 0,
        totalProfit: 0
      }
    }
  ]);

  const [totals, setTotals] = useState<Totals>({
    totalDownloads: 0,
    totalMonthlyActive: 0,
    subscriptionRevenue: 0,
    oneTimeRevenue: 0,
    oneTimeProfit: 0,
    totalCombinedRevenue: 0,
    annualProjectedRevenue: 0
  });

  const [revenueBreakdown, setRevenueBreakdown] = useState<RevenueBreakdown>({
    monthly: {
      subscription: 0,
      oneTime: 0,
      total: 0
    },
    annual: {
      subscription: 0,
      oneTime: 0,
      total: 0
    },
    metrics: {
      averageRevenuePerUser: 0,
      subscriptionConversionRate: 0,
      hardwareConversionRate: 0
    }
  });

  const [projections, setProjections] = useState<ProjectionPoint[]>([]);

  // Handle base downloads change
  const handleBaseDownloadsChange = (value: number) => {
    const newProducts = [...products];
    
    // Free plan (base input)
    newProducts[0].downloads = value;
    
    // Basic plan (4.99€) - 25% of free downloads
    newProducts[1].downloads = Math.round(value * 0.25);
    newProducts[1].monthlyActive = Math.round(newProducts[1].downloads * (newProducts[1].conversionRate / 100));
    
    // Starter plan (1.99€) - 50% of basic plan downloads
    newProducts[2].downloads = Math.round(newProducts[1].downloads * 0.5);
    newProducts[2].monthlyActive = Math.round(newProducts[2].downloads * (newProducts[2].conversionRate / 100));
    
    // Premium products (19.99€) - 25% of basic plan downloads
    for (let i = 3; i < 6; i++) {
      newProducts[i].downloads = Math.round(newProducts[1].downloads * 0.25);
      newProducts[i].monthlyActive = Math.round(newProducts[i].downloads * (newProducts[i].conversionRate / 100));
      if (newProducts[i].oneTimePurchase) {
        newProducts[i].oneTimePurchase.totalSales = newProducts[i].downloads;
        newProducts[i].oneTimePurchase.totalProfit = newProducts[i].downloads * newProducts[i].oneTimePurchase.price * newProducts[i].oneTimePurchase.profitMargin;
      }
    }
    
    setProducts(newProducts);
  };

  // Calculate totals
  useEffect(() => {
    const newTotals = products.reduce((acc, product) => {
      const monthlyRevenue = product.monthlyActive * product.price;
      const oneTimeRevenue = product.oneTimePurchase 
        ? product.downloads * product.oneTimePurchase.price * product.oneTimePurchase.profitMargin
        : 0;

      return {
        totalDownloads: acc.totalDownloads + product.downloads,
        totalMonthlyActive: acc.totalMonthlyActive + product.monthlyActive,
        subscriptionRevenue: acc.subscriptionRevenue + monthlyRevenue,
        oneTimeRevenue: acc.oneTimeRevenue + oneTimeRevenue,
        oneTimeProfit: acc.oneTimeProfit + (product.oneTimePurchase ? product.oneTimePurchase.totalProfit : 0),
        totalCombinedRevenue: acc.totalCombinedRevenue + monthlyRevenue + oneTimeRevenue,
        annualProjectedRevenue: acc.annualProjectedRevenue + (monthlyRevenue + oneTimeRevenue) * 12
      };
    }, {
      totalDownloads: 0,
      totalMonthlyActive: 0,
      subscriptionRevenue: 0,
      oneTimeRevenue: 0,
      oneTimeProfit: 0,
      totalCombinedRevenue: 0,
      annualProjectedRevenue: 0
    });

    setTotals(newTotals);
    setRevenueBreakdown(calculateMetrics(products));
    setProjections(calculateProjections(calculateMetrics(products)));
  }, [products]);

  // Revenue Breakdown Panel Component
  const RevenueBreakdownPanel: React.FC<{ breakdown: RevenueBreakdown }> = ({ breakdown }) => {
    return (
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Breakdown</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Monthly Revenue */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Monthly Revenue</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subscriptions</span>
                <span className="font-medium">€{breakdown.monthly.subscription.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hardware Sales</span>
                <span className="font-medium">€{breakdown.monthly.oneTime.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-medium text-gray-800">Total</span>
                <span className="font-bold text-[#008B8B]">€{breakdown.monthly.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>

          {/* Annual Projections */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Annual Projections</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subscription Revenue</span>
                <span className="font-medium">€{breakdown.annual.subscription.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hardware Revenue</span>
                <span className="font-medium">€{breakdown.annual.oneTime.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-medium text-gray-800">Total</span>
                <span className="font-bold text-[#FF7F50]">€{breakdown.annual.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Key Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Avg. Revenue Per User</span>
                <span className="font-medium">€{breakdown.metrics.averageRevenuePerUser.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subscription Rate</span>
                <span className="font-medium">{breakdown.metrics.subscriptionConversionRate.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hardware Conversion</span>
                <span className="font-medium">{breakdown.metrics.hardwareConversionRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Projection Graph Component
  const ProjectionGraph: React.FC<{ projections: ProjectionPoint[] }> = ({ projections }) => {
    return (
      <div className="h-[400px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={projections}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="month" 
              label={{ value: 'Month', position: 'bottom' }} 
            />
            <YAxis 
              label={{ 
                value: 'Revenue (€)', 
                angle: -90, 
                position: 'left' 
              }}
              tickFormatter={(value) => `€${(value/1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value: number) => 
                `€${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
              }
            />
            <Legend />
            <Line 
              type="monotone"
              name="Subscription Revenue"
              dataKey="subscriptionRevenue" 
              stroke="#008B8B" 
              strokeWidth={2}
            />
            <Line 
              type="monotone"
              name="Hardware Revenue"
              dataKey="hardwareRevenue" 
              stroke="#FF7F50" 
              strokeWidth={2}
            />
            <Line 
              type="monotone"
              name="Total Revenue"
              dataKey="totalRevenue" 
              stroke="#20B2AA" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  // Generate Detailed Report Function
  const generateDetailedReport = () => {
    const metrics = calculateMetrics(products);
    const projections = calculateProjections(metrics);

    const report = {
      timestamp: new Date().toISOString(),
      currentState: {
        products: products.map(p => ({
          ...p,
          revenue: p.monthlyActive * p.price,
          hardwareRevenue: p.oneTimePurchase ? 
            p.downloads * p.oneTimePurchase.price * p.oneTimePurchase.profitMargin : 0
        })),
        metrics,
      },
      projections,
      summary: {
        monthlyRecurringRevenue: metrics.monthly.subscription,
        annualRecurringRevenue: metrics.annual.subscription,
        totalFirstYearRevenue: metrics.annual.total,
        keyMetrics: metrics.metrics
      }
    };

    // Create downloadable JSON
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `revenue-projections-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
              onClick={generateDetailedReport}
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
                      <div className="text-gray-600">
                        €{product.price.toFixed(2)}
                        {product.oneTimePurchase && (
                          <div className="text-xs text-gray-500">
                            +€{product.oneTimePurchase.price.toFixed(2)} one-time
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {index === 0 ? (
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
                        {product.oneTimePurchase && (
                          <div className="text-xs text-gray-500">
                            +€{(product.downloads * product.oneTimePurchase.price * product.oneTimePurchase.profitMargin)
                              .toLocaleString(undefined, { minimumFractionDigits: 2 })} profit
                          </div>
                        )}
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

          {/* Revenue Breakdown Panel */}
          <RevenueBreakdownPanel breakdown={revenueBreakdown} />

          {/* Projection Graph */}
          <ProjectionGraph projections={projections} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;