"use client";

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Clock, 
  Package, 
  Users, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Battery,
  Activity,
  Calendar,
  Tool,
  Settings,
  Bell,
  Signal,
  ThermometerSun,
  FileText,
  Timer
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Extended regional data with more detailed breakdown
const regionalData = {
  nordics: {
    name: 'Nordics',
    details: {
      sweden: {
        name: 'Sweden',
        cities: {
          stockholm: { devices: 180, compliance: 98.8, alerts: 2 },
          gothenburg: { devices: 85, compliance: 98.2, alerts: 1 },
          malmo: { devices: 55, compliance: 98.4, alerts: 1 }
        },
        totalDevices: 320,
        compliance: 98.5,
        alerts: 4,
        deviceHealth: {
          battery: { optimal: 290, warning: 25, critical: 5 },
          connectivity: { strong: 300, weak: 15, offline: 5 },
          maintenance: { upToDate: 310, scheduled: 8, overdue: 2 }
        }
      },
      norway: {
        name: 'Norway',
        cities: {
          oslo: { devices: 150, compliance: 98.1, alerts: 2 },
          bergen: { devices: 80, compliance: 97.8, alerts: 2 },
          trondheim: { devices: 50, compliance: 98.0, alerts: 1 }
        },
        totalDevices: 280,
        compliance: 98.0,
        alerts: 5,
        deviceHealth: {
          battery: { optimal: 255, warning: 20, critical: 5 },
          connectivity: { strong: 265, weak: 10, offline: 5 },
          maintenance: { upToDate: 270, scheduled: 7, overdue: 3 }
        }
      },
      finland: {
        name: 'Finland',
        cities: {
          helsinki: { devices: 135, compliance: 97.9, alerts: 1 },
          tampere: { devices: 65, compliance: 97.6, alerts: 1 },
          turku: { devices: 45, compliance: 97.8, alerts: 1 }
        },
        totalDevices: 245,
        compliance: 97.8,
        alerts: 3,
        deviceHealth: {
          battery: { optimal: 225, warning: 15, critical: 5 },
          connectivity: { strong: 230, weak: 12, offline: 3 },
          maintenance: { upToDate: 235, scheduled: 8, overdue: 2 }
        }
      }
    },
    totalDevices: 845,
    activeUsers: 812,
    compliance: 98.2,
    alerts: 12,
    dispensingStats: {
      onTime: 98.2,
      late: 1.5,
      missed: 0.3
    }
  },
  central: {
    name: 'Central Europe',
    details: {
      germany: {
        name: 'Germany',
        cities: {
          berlin: { devices: 120, compliance: 98.1, alerts: 1 },
          hamburg: { devices: 90, compliance: 97.8, alerts: 1 },
          munich: { devices: 70, compliance: 97.7, alerts: 1 }
        },
        totalDevices: 280,
        compliance: 97.9,
        alerts: 3,
        deviceHealth: {
          battery: { optimal: 260, warning: 15, critical: 5 },
          connectivity: { strong: 265, weak: 10, offline: 5 },
          maintenance: { upToDate: 270, scheduled: 7, overdue: 3 }
        }
      },
      france: {
        name: 'France',
        cities: {
          paris: { devices: 110, compliance: 97.6, alerts: 1 },
          lyon: { devices: 75, compliance: 97.4, alerts: 1 },
          marseille: { devices: 55, compliance: 97.5, alerts: 1 }
        },
        totalDevices: 240,
        compliance: 97.5,
        alerts: 3,
        deviceHealth: {
          battery: { optimal: 220, warning: 15, critical: 5 },
          connectivity: { strong: 225, weak: 10, offline: 5 },
          maintenance: { upToDate: 230, scheduled: 7, overdue: 3 }
        }
      },
      benelux: {
        name: 'BeNeLux',
        cities: {
          amsterdam: { devices: 60, compliance: 98.2, alerts: 1 },
          brussels: { devices: 45, compliance: 98.0, alerts: 1 },
          luxembourg: { devices: 29, compliance: 98.1, alerts: 0 }
        },
        totalDevices: 134,
        compliance: 98.1,
        alerts: 2,
        deviceHealth: {
          battery: { optimal: 125, warning: 7, critical: 2 },
          connectivity: { strong: 128, weak: 4, offline: 2 },
          maintenance: { upToDate: 130, scheduled: 3, overdue: 1 }
        }
      }
    },
    totalDevices: 654,
    activeUsers: 623,
    compliance: 97.8,
    alerts: 8,
    dispensingStats: {
      onTime: 97.8,
      late: 1.8,
      missed: 0.4
    }
  },
  southern: {
    name: 'Southern Europe',
    details: {
      italy: {
        name: 'Italy',
        cities: {
          rome: { devices: 70, compliance: 96.9, alerts: 3 },
          milan: { devices: 55, compliance: 96.8, alerts: 2 },
          naples: { devices: 35, compliance: 96.7, alerts: 2 }
        },
        totalDevices: 160,
        compliance: 96.8,
        alerts: 7,
        deviceHealth: {
          battery: { optimal: 145, warning: 10, critical: 5 },
          connectivity: { strong: 150, weak: 7, offline: 3 },
          maintenance: { upToDate: 152, scheduled: 5, overdue: 3 }
        }
      },
      spain: {
        name: 'Spain',
        cities: {
          madrid: { devices: 50, compliance: 96.3, alerts: 2 },
          barcelona: { devices: 45, compliance: 96.2, alerts: 2 },
          valencia: { devices: 25, compliance: 96.1, alerts: 1 }
        },
        totalDevices: 120,
        compliance: 96.2,
        alerts: 5,
        deviceHealth: {
          battery: { optimal: 110, warning: 7, critical: 3 },
          connectivity: { strong: 112, weak: 5, offline: 3 },
          maintenance: { upToDate: 115, scheduled: 3, overdue: 2 }
        }
      },
      portugal: {
        name: 'Portugal',
        cities: {
          lisbon: { devices: 35, compliance: 96.6, alerts: 2 },
          porto: { devices: 20, compliance: 96.4, alerts: 1 },
          faro: { devices: 11, compliance: 96.5, alerts: 0 }
        },
        totalDevices: 66,
        compliance: 96.5,
        alerts: 3,
        deviceHealth: {
          battery: { optimal: 60, warning: 4, critical: 2 },
          connectivity: { strong: 62, weak: 3, offline: 1 },
          maintenance: { upToDate: 63, scheduled: 2, overdue: 1 }
        }
      }
    },
    totalDevices: 346,
    activeUsers: 328,
    compliance: 96.5,
    alerts: 15,
    dispensingStats: {
      onTime: 96.5,
      late: 2.5,
      missed: 1.0
    }
  }
};

// Previous regional data and imports remain the same...

const CityMetricCard = ({ name, data }) => (
  <div className="bg-white/50 rounded-lg p-3 border border-gray-100">
    <div className="flex justify-between items-center mb-2">
      <h5 className="font-medium text-sm">{name}</h5>
      <span className={`text-xs px-2 py-1 rounded-full ${
        data.alerts > 2 ? 'bg-red-100 text-red-700' : 
        data.alerts > 0 ? 'bg-yellow-100 text-yellow-700' : 
        'bg-green-100 text-green-700'
      }`}>
        {data.alerts} Alerts
      </span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div>
        <p className="text-xs text-gray-500">Devices</p>
        <p className="text-sm font-semibold">{data.devices}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Compliance</p>
        <p className="text-sm font-semibold">{data.compliance}%</p>
      </div>
    </div>
  </div>
);

const CountryCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">{data.name}</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 hover:text-indigo-800"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Total Devices</p>
          <p className="text-lg font-semibold">{data.totalDevices}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Compliance</p>
          <p className="text-lg font-semibold">{data.compliance}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Active Alerts</p>
          <p className={`text-lg font-semibold ${
            data.alerts > 5 ? 'text-red-600' : 'text-yellow-600'
          }`}>{data.alerts}</p>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="mb-4">
            <h4 className="font-medium text-sm text-gray-600 mb-2">Device Health</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Battery Status</p>
                <div className="space-y-1">
                  {Object.entries(data.deviceHealth.battery).map(([status, count]) => (
                    <div key={status} className="flex justify-between text-sm">
                      <span className="capitalize">{status}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Connectivity</p>
                <div className="space-y-1">
                  {Object.entries(data.deviceHealth.connectivity).map(([status, count]) => (
                    <div key={status} className="flex justify-between text-sm">
                      <span className="capitalize">{status}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Maintenance</p>
                <div className="space-y-1">
                  {Object.entries(data.deviceHealth.maintenance).map(([status, count]) => (
                    <div key={status} className="flex justify-between text-sm">
                      <span className="capitalize">{status.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-gray-600 mb-2">Cities</h4>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(data.cities).map(([city, cityData]) => (
                <CityMetricCard 
                  key={city} 
                  name={city.charAt(0).toUpperCase() + city.slice(1)} 
                  data={cityData} 
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const RegionCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-sm text-gray-600">{data.totalDevices} Total Devices</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Overall Compliance</p>
            <p className="text-lg font-semibold">{data.compliance}%</p>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
          >
            {isExpanded ? 'Show Less' : 'Show Details'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Active Users</p>
          <p className="text-xl font-semibold">{data.activeUsers}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Active Alerts</p>
          <p className="text-xl font-semibold text-yellow-600">{data.alerts}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">On-Time Dispensing</p>
          <p className="text-xl font-semibold text-green-600">{data.dispensingStats.onTime}%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Missed Doses</p>
          <p className="text-xl font-semibold text-red-600">{data.dispensingStats.missed}%</p>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {Object.values(data.details).map((country) => (
            <CountryCard key={country.name} data={country} />
          ))}
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">Dosell</span>
                  <span className="text-sm text-indigo-600">European Operations</span>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="all">All Regions</option>
                  {Object.entries(regionalData).map(([key, region]) => (
                    <option key={key} value={key}>{region.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-gray-600">
                <Clock className="inline-block w-5 h-5 mr-2" />
                <span>{currentTime}</span>
              </div>
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">European Operations</h1>
          <p className="text-gray-600">Detailed regional performance and device metrics</p>
        </div>

        <div className="space-y-6">
          {selectedRegion === 'all' ? (
            Object.values(regionalData).map((region) => (
              <RegionCard key={region.name} data={region} />
            ))
          ) : (
            <RegionCard data={regionalData[selectedRegion]} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;