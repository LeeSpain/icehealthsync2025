"use client";

import React, { useState, useEffect } from 'react';
import {
  Activity, Heart, Bell, Phone, Battery, Thermometer,
  AlertTriangle, User, Shield, ChevronRight, Moon,
  Plus, CheckCircle2, XCircle, Info, ArrowUp, ArrowDown,
  Clock, Pill, MessageSquare, Users, Stethoscope, Star,
  Search, CircleDot, BarChart2, TrendingUp, PieChart,
  MapPin, Calendar, FileText, Settings
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

// Quick Stats Card with animation
const QuickStatsCard = ({ icon: Icon, label, value, trend, trendValue }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start justify-between">
      <div className="p-2 bg-[#008B8B]/10 rounded-lg">
        <Icon className="w-5 h-5 text-[#008B8B]" />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 ${
          trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span className="text-sm font-medium">{trendValue}%</span>
        </div>
      )}
    </div>
    <div className="mt-3">
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  </div>
);

// Main Dashboard Component
const DashboardContent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample data
  const revenueData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
    value: Math.floor(Math.random() * 50000) + 100000
  }));

  return (
    <main className="relative min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Actions Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008B8B]/50 w-64"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50">
              <Calendar className="w-4 h-4 inline-block mr-2" />
              Today
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-xl">
              <FileText className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-2xl p-8 text-white mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Patrick! 👋</h1>
              <p className="text-lg opacity-90 mb-6">Here's what's happening with your healthcare network today</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">Active Clients</span>
                  </div>
                  <p className="text-3xl font-bold">2,847</p>
                  <p className="text-sm opacity-80 mt-1">+156 this month</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5" />
                    <span className="font-medium">Network Status</span>
                  </div>
                  <p className="text-3xl font-bold">98.9%</p>
                  <p className="text-sm opacity-80 mt-1">Optimal Performance</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 rounded-xl"></div>
              <div className="relative p-4">
                <h3 className="font-medium mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-left transition-colors">
                    View System Status
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-left transition-colors">
                    Manage Staff
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-left transition-colors">
                    View Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <QuickStatsCard
            icon={Users}
            label="Total Patients"
            value="2,847"
            trend="up"
            trendValue="12.5"
          />
          <QuickStatsCard
            icon={Heart}
            label="Active Devices"
            value="5,842"
            trend="up"
            trendValue="8.2"
          />
          <QuickStatsCard
            icon={AlertTriangle}
            label="Critical Alerts"
            value="7"
            trend="down"
            trendValue="5.3"
          />
          <QuickStatsCard
            icon={Stethoscope}
            label="Active Nurses"
            value="124"
            trend="up"
            trendValue="3.8"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Revenue Chart */}
          <div className="col-span-8 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Revenue Overview</h2>
              <select className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                <option>Last 12 months</option>
                <option>Last 6 months</option>
                <option>Last 30 days</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#008B8B" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#008B8B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#008B8B"
                    fill="url(#revenue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="col-span-4 space-y-6">
            {/* Performance Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4">Network Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Device Uptime</span>
                    <span className="font-medium text-[#008B8B]">98.9%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-[98.9%] bg-[#008B8B] rounded-full"/>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Response Rate</span>
                    <span className="font-medium text-[#008B8B]">95.3%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-[95.3%] bg-[#008B8B] rounded-full"/>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Client Satisfaction</span>
                    <span className="font-medium text-[#008B8B]">96.7%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-[96.7%] bg-[#008B8B] rounded-full"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Issues */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4">Active Issues</h3>
              <div className="space-y-3">
                {[
                  { icon: AlertTriangle, text: "Critical System Alerts", value: "2" },
                  { icon: Clock, text: "Pending Responses", value: "8" },
                  { icon: Shield, text: "Security Warnings", value: "0" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-[#008B8B]" />
                      <span className="text-sm text-gray-600">{item.text}</span>
                    </div>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Staff Performance Section */}
        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-8 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Staff Performance</h2>
                <p className="text-sm text-gray-500">Overview of nursing staff activity</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm bg-[#008B8B]/10 text-[#008B8B] rounded-lg hover:bg-[#008B8B]/20">
                  View All Staff
                </button>
                <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                  Download Report
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-[#008B8B]/5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-sm text-gray-600">Total Staff</span>
                </div>
                <p className="text-2xl font-bold">124</p>
                <p className="text-sm text-[#008B8B]">+6 this month</p>
              </div>

              <div className="p-4 bg-[#008B8B]/5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-sm text-gray-600">On Duty</span>
                </div>
                <p className="text-2xl font-bold">98</p>
                <p className="text-sm text-[#008B8B]">Active now</p>
              </div>

              <div className="p-4 bg-[#008B8B]/5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-sm text-gray-600">Patient Load</span>
                </div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-[#008B8B]">Avg per nurse</p>
              </div>

              <div className="p-4 bg-[#008B8B]/5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-sm text-gray-600">Satisfaction</span>
                </div>
                <p className="text-2xl font-bold">96%</p>
                <p className="text-sm text-[#008B8B]">From surveys</p>
              </div>
            </div>

            {/* Staff Activity Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Team</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Active Nurses</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Patients</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Performance</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { team: 'Team A', nurses: 25, patients: 650, performance: 98, status: 'Excellent' },
                    { team: 'Team B', nurses: 22, patients: 580, performance: 95, status: 'Good' },
                    { team: 'Team C', nurses: 20, patients: 520, performance: 97, status: 'Excellent' },
                    { team: 'Team D', nurses: 28, patients: 597, performance: 94, status: 'Good' },
                    { team: 'Team E', nurses: 19, patients: 500, performance: 96, status: 'Excellent' }
                  ].map((team, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#008B8B]" />
                          </div>
                          <span className="font-medium">{team.team}</span>
                        </div>
                      </td>
                      <td className="py-3">{team.nurses}</td>
                      <td className="py-3">{team.patients}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full">
                            <div 
                              className="h-full bg-[#008B8B] rounded-full"
                              style={{ width: `${team.performance}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{team.performance}%</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          team.status === 'Excellent' 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {team.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-4 space-y-6">
            {/* Device Status Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4">Device Status</h3>
              <div className="space-y-4">
                {[
                  { name: 'Guardian Button', total: 1250, active: 1180 },
                  { name: 'Heart Monitor', total: 980, active: 920 },
                  { name: 'Bed Sensor', total: 890, active: 850 },
                  { name: 'Med Dispenser', total: 872, active: 820 }
                ].map((device, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{device.name}</span>
                      <span className="font-medium">
                        {device.active}/{device.total}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-[#008B8B] rounded-full"
                        style={{ width: `${(device.active/device.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4">Recent Alerts</h3>
              <div className="space-y-4">
                {[
                  { type: 'critical', message: 'Device battery critical - ID 4421', time: '5m ago' },
                  { type: 'warning', message: 'Missed check-in - Patient 2311', time: '23m ago' },
                  { type: 'info', message: 'New staff member added', time: '1h ago' },
                  { type: 'success', message: 'System maintenance completed', time: '2h ago' }
                ].map((alert, index) => (
                  <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${
                    alert.type === 'critical' ? 'bg-red-50' :
                    alert.type === 'warning' ? 'bg-yellow-50' :
                    alert.type === 'success' ? 'bg-green-50' :
                    'bg-blue-50'
                  }`}>
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.type === 'critical' ? 'text-red-500' :
                      alert.type === 'warning' ? 'text-yellow-500' :
                      alert.type === 'success' ? 'text-green-500' :
                      'text-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;