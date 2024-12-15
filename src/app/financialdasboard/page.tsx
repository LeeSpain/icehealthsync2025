'use client';

import React, { useState, useEffect } from 'react';
import {
  TrendingUp, CircleDollarSign, Users, Package,
  ArrowUpRight, ArrowDownRight, BellDot, Calendar,
  Download, FileText, PieChart, Activity, Plus,
  CreditCard, ShoppingBag, UserPlus, Filter, Shield,
  ChevronRight, Search, Settings, User, AlertTriangle,
  CheckCircle2, XCircle, Info, Clock, BarChart2,
  TrendingDown, MapPin, Star, Bell, Inbox, Expand,
  Wallet, Mail, BarChart, Share2
} from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, BarChart as ReBarChart, 
  Bar, PieChart as RePieChart, Pie, Cell, ResponsiveContainer, 
  XAxis, YAxis, Tooltip, Legend 
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('This Month');
  
  // Sample data
  const revenueData = [
    { month: 'Jan', revenue: 125000, profit: 37500 },
    { month: 'Feb', revenue: 132000, profit: 39600 },
    { month: 'Mar', revenue: 141000, profit: 42300 },
    { month: 'Apr', revenue: 138000, profit: 41400 },
    { month: 'May', revenue: 143500, profit: 43050 },
    { month: 'Jun', revenue: 139000, profit: 41700 },
    { month: 'Jul', revenue: 147000, profit: 44100 },
    { month: 'Aug', revenue: 151000, profit: 45300 },
    { month: 'Sep', revenue: 155000, profit: 46500 },
    { month: 'Oct', revenue: 143927, profit: 43178 }
  ];

  const productData = [
    { name: 'Guardian Button', sales: 245, revenue: 14697.55, profit: 2939.51 },
    { name: 'Heart Monitor', sales: 198, revenue: 17820.02, profit: 3564.00 },
    { name: 'Bed Sensor', sales: 276, revenue: 16560.00, profit: 3312.00 },
    { name: 'Med Dispenser', sales: 239, revenue: 35850.00, profit: 7170.00 }
  ];

  // Stats card component
  const StatsCard = ({ title, value, change, icon: Icon }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          {change && (
            <p className={`text-sm mt-2 flex items-center ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
              {Math.abs(change)}%
            </p>
          )}
        </div>
        <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-teal-600" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ICE</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">HealthSync</span>
                  <span className="text-xs text-gray-500">Financial Dashboard</span>
                </div>
              </div>
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Overview</a>
                <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Reports</a>
                <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Analytics</a>
              </div>
            </div>
            {/* Right side controls */}
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-500" />
              </button>
              <div className="flex items-center gap-2 pl-4 border-l">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-teal-600" />
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-xl p-8 text-white mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-lg opacity-90 mb-6">Here's your financial overview for October 2024</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CircleDollarSign className="w-5 h-5" />
                    <span>Monthly Revenue</span>
                  </div>
                  <p className="text-3xl font-bold">€143,927.15</p>
                  <p className="text-sm mt-1 opacity-80">+15.3% from last month</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Total Profit</span>
                  </div>
                  <p className="text-3xl font-bold">€74,156.82</p>
                  <p className="text-sm mt-1 opacity-80">12.8% above target</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-medium mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg p-2 text-left transition-colors">
                  Download Report
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg p-2 text-left transition-colors">
                  View Analytics
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg p-2 text-left transition-colors">
                  Share Results
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatsCard 
            title="Total Revenue" 
            value="€143,927.15" 
            change={15.3} 
            icon={CircleDollarSign}
          />
          <StatsCard 
            title="Total Products" 
            value="958" 
            change={12.8} 
            icon={Package}
          />
          <StatsCard 
            title="Active Subscribers" 
            value="22,727" 
            change={9.4} 
            icon={Users}
          />
          <StatsCard 
            title="Average Order" 
            value="€149.99" 
            change={5.2} 
            icon={ShoppingBag}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-7 gap-6 mb-8">
          <div className="col-span-4 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Revenue Overview</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#008B8B" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#008B8B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#008B8B" 
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-span-3 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Product Performance</h3>
            <div className="space-y-4">
              {productData.map((product, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{product.sales} units sold</p>
                    </div>
                    <span className="text-[#008B8B] font-semibold">
                      €{product.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#008B8B] rounded-full"
                      style={{ width: `${(product.revenue / 35850) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;