'use client';

import React, { useState, useEffect } from 'react';
import { 
  Activity, Users, Smartphone, Heart,
  AlertTriangle, DollarSign, TrendingUp, Battery, 
  Settings, Bell, Shield, Globe, BarChart2,
  Calendar, Pill, Clock, ShieldCheck, Wifi,
  Phone, Stethoscope, Lock, Database, Server,
  UserPlus, ChevronUp, LayoutGrid, LineChart as ChartIcon,
  Filter, Download, RefreshCw, MoreVertical
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Add more comprehensive data
const systemMetrics = {
  totalUsers: 7841,
  activeDevices: 12547,
  monthlyRevenue: 583680,
  growth: 23.5,
  deviceTypes: {
    glucoseMonitors: {
      total: 2547,
      active: 2432,
      percentage: 95.5,
      alerts: 5,
      growth: 15.3,
      dailyReadings: 7641
    },
    medDispensers: {
      total: 2845,
      active: 2781,
      percentage: 97.8,
      alerts: 8,
      growth: 18.7,
      dailyDispenses: 8534
    },
    sosGuardians: {
      total: 2249,
      active: 2198,
      percentage: 97.7,
      alerts: 3,
      growth: 21.2,
      monthlyActivations: 45
    }
  },
  systemHealth: {
    uptime: 99.99,
    responseTime: 45,
    cpuUsage: 42,
    memoryUsage: 38,
    storageUsage: 45,
    networkLatency: 18
  },
  analytics: {
    revenueGrowth: [
      { month: 'Jul', value: 450000 },
      { month: 'Aug', value: 480000 },
      { month: 'Sep', value: 520000 },
      { month: 'Oct', value: 540000 },
      { month: 'Nov', value: 580000 },
      { month: 'Dec', value: 583680 }
    ],
    userGrowth: [
      { month: 'Jul', value: 5840 },
      { month: 'Aug', value: 6240 },
      { month: 'Sep', value: 6580 },
      { month: 'Oct', value: 7120 },
      { month: 'Nov', value: 7520 },
      { month: 'Dec', value: 7841 }
    ],
    deviceDistribution: [
      { name: 'Glucose Monitors', value: 2547 },
      { name: 'Med Dispensers', value: 2845 },
      { name: 'SOS Guardians', value: 2249 }
    ]
  },
  userAnalytics: {
    newUsersToday: 156,
    activeNow: 2432,
    locations: [
      { country: 'Ireland', users: 3245 },
      { country: 'UK', users: 2156 },
      { country: 'France', users: 1845 }
    ],
    engagementRate: 86.5
  },
  deviceAnalytics: {
    dailyUsage: {
      morning: 2547,
      afternoon: 3156,
      evening: 2845,
      night: 1547
    },
    reliability: {
      glucoseMonitors: 99.2,
      medDispensers: 99.5,
      sosGuardians: 99.9
    }
  }
};

// Custom hooks for data fetching
const useSystemStatus = () => {
  const [status, setStatus] = useState({
    cpuUsage: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  useEffect(() => {
    const updateStatus = () => {
      // Simulate real-time updates
      setStatus({
        cpuUsage: Math.floor(Math.random() * 30) + 30,
        memoryUsage: Math.floor(Math.random() * 20) + 40,
        networkLatency: Math.floor(Math.random() * 10) + 15
      });
    };

    const interval = setInterval(updateStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return status;
};

// Interactive components
const ActionButton = ({ icon: Icon, label, onClick, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
      ${variant === 'primary' ? 'bg-[#009688] text-white hover:bg-[#00897b]' : 
      variant === 'secondary' ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' :
      'bg-red-50 text-red-600 hover:bg-red-100'}`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </button>
);

const MetricCard = ({ title, value, change, icon: Icon }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#009688] transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#009688]/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#009688]" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
      </div>
      {change && (
        <div className={`flex items-center gap-1 text-sm ${
          change > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          <ChevronUp className={`w-4 h-4 ${change < 0 ? 'rotate-180' : ''}`} />
          {Math.abs(change)}%
        </div>
      )}
    </div>
  </div>
);

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [showFilters, setShowFilters] = useState(false);
  const systemStatus = useSystemStatus();

  // State for interactive features
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Action handlers
  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
    setShowDetails(true);
  };

  const handleExportData = () => {
    // Implement export functionality
    console.log('Exporting data...');
  };

  const handleRefreshData = () => {
    // Implement refresh functionality
    console.log('Refreshing data...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation & Actions Bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {['overview', 'devices', 'users', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                    ${activeTab === tab ? 
                      'bg-[#009688]/10 text-[#009688]' : 
                      'text-gray-600 hover:text-[#009688]'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ActionButton
                icon={Filter}
                label="Filters"
                onClick={() => setShowFilters(!showFilters)}
                variant="secondary"
              />
              <ActionButton
                icon={Download}
                label="Export"
                onClick={handleExportData}
                variant="secondary"
              />
              <ActionButton
                icon={RefreshCw}
                label="Refresh"
                onClick={handleRefreshData}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <>
            {/* Header Panel */}
            <div className="bg-[#009688] text-white rounded-xl p-8 mb-8">
              <div className="mb-4">
                <h2 className="text-4xl font-bold">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    minute: '2-digit',
                    hour12: true 
                  })}
                </h2>
                <p className="text-teal-100">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>

              <h1 className="text-2xl font-bold mb-2">Admin Control Panel</h1>
              <p className="text-teal-100 mb-8">Global System Overview</p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-teal-100" />
                    <span className="text-teal-100">Total Users</span>
                  </div>
                  <p className="text-3xl font-bold">{systemMetrics.totalUsers.toLocaleString()}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-teal-100" />
                    <span className="text-teal-100">Active Devices</span>
                  </div>
                  <p className="text-3xl font-bold">{systemMetrics.activeDevices.toLocaleString()}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-teal-100" />
                    <span className="text-teal-100">Revenue</span>
                  </div>
                  <p className="text-3xl font-bold">€{systemMetrics.monthlyRevenue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* System Health */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Server className="w-5 h-5 text-[#009688]" />
                    System Performance
                  </h3>
                  <select 
                    className="text-sm border border-gray-200 rounded-lg px-3 py-2"
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                  >
                    <option value="day">Last 24 Hours</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">CPU Usage</span>
                      <span className="font-medium">{systemStatus.cpuUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-[#009688] h-2 rounded-full" 
                        style={{ width: `${systemStatus.cpuUsage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Memory Usage</span>
                      <span className="font-medium">{systemStatus.memoryUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-[#009688] h-2 rounded-full" 
                        style={{ width: `${systemStatus.memoryUsage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Storage Usage</span>
                      <span className="font-medium">{systemMetrics.systemHealth.storageUsage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-[#009688] h-2 rounded-full" 
                        style={{ width: `${systemMetrics.systemHealth.storageUsage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#009688]" />
                    Network Status
                  </h3>
                  <span className="px-2 py-1 text-sm bg-green-50 text-green-600 rounded-full">
                    All Systems Operational
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Response Time</div>
                    <div className="text-2xl font-bold text-gray-900">{systemMetrics.systemHealth.responseTime}ms</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Uptime</div>
                    <div className="text-2xl font-bold text-gray-900">{systemMetrics.systemHealth.uptime}%</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Network Latency</div>
                    <div className="text-2xl font-bold text-gray-900">{systemStatus.networkLatency}ms</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Active Connections</div>
                    <div className="text-2xl font-bold text-gray-900">{systemMetrics.totalUsers}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Management */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Glucose Monitors */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Glucose Monitors</h3>
                      <p className="text-sm text-gray-500">{systemMetrics.deviceTypes.glucoseMonitors.total.toLocaleString()} Deployed</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Manage
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Active</div>
                    <div className="text-2xl font-bold">{systemMetrics.deviceTypes.glucoseMonitors.percentage}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Alerts</div>
                    <div className="text-2xl font-bold">{systemMetrics.deviceTypes.glucoseMonitors.alerts}</div>
                  </div>
                </div>
              </div>

              {/* Med Dispensers */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Pill className="w-6 h-6 text-purple-600" />
                    <div>
                      <h3 className="font-semibold">Med Dispensers</h3>
                      <p className="text-sm text-gray-500">{systemMetrics.deviceTypes.medDispensers.total.toLocaleString()} Deployed</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Manage
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Active</div>
                    <div className="text-2xl font-bold">{systemMetrics.deviceTypes.medDispensers.percentage}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Alerts</div>
                    <div className="text-2xl font-bold">{systemMetrics.deviceTypes.medDispensers.alerts}</div>
                  </div>
                </div>
              </div>

              {/* SOS Guardians */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold">SOS Guardians</h3>
                      <p className="text-sm text-gray-500">{systemMetrics.deviceTypes.sosGuardians.total.toLocaleString()} Deployed</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Manage
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Active</div>
                    <div className="text-2xl font-bold">{systemMetrics.deviceTypes.sosGuardians.percentage}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Alerts</div>
                    <div className="text-2xl font-bold">{systemMetrics.deviceTypes.sosGuardians.alerts}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Revenue Analytics */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#009688]" />
                    Revenue Analytics
                  </h3>
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                    <option>Last 6 Months</option>
                    <option>Last 12 Months</option>
                    <option>Year to Date</option>
                  </select>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={systemMetrics.analytics.revenueGrowth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#009688" 
                        fill="#009688" 
                        fillOpacity={0.1} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* User Growth */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#009688]" />
                    User Growth
                  </h3>
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                    <option>Last 6 Months</option>
                    <option>Last 12 Months</option>
                    <option>Year to Date</option>
                  </select>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={systemMetrics.analytics.userGrowth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#009688" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Devices Section */}
        {activeTab === 'devices' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Device Management</h2>
              {/* Add device management content */}
            </div>
          </div>
        )}

        {/* Users Section */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">User Management</h2>
              {/* Add user management content */}
            </div>
          </div>
        )}

        {/* Analytics Section */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Advanced Analytics</h2>
              {/* Add analytics content */}
            </div>
          </div>
        )}
      </div>

      {/* Modals and Overlays */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          {/* Add filter modal content */}
        </div>
      )}

      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          {/* Add device details modal content */}
        </div>
      )}
    </div>
  );
}