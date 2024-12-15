'use client';

import React, { useState, useEffect } from 'react';
import {
  Heart, Activity, AlertTriangle, Phone,
  MapPin, Battery, CloudSun, Wifi,
  Check, Bell, User, Shield, 
  Thermometer, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const SOSMonitoringDashboard = () => {
  const [heartRate, setHeartRate] = useState(72);
  const [heartRateData, setHeartRateData] = useState([]);
  const [deviceStatus, setDeviceStatus] = useState('online');
  const [batteryLevel, setBatteryLevel] = useState(85);

  // Simulate real-time heart rate updates
  useEffect(() => {
    const timer = setInterval(() => {
      const newRate = 72 + Math.random() * 5;
      setHeartRate(Math.round(newRate));
      setHeartRateData(prev => [...prev.slice(-20), { value: newRate }]);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const StatusIndicator = ({ status }) => (
    <div className={`absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full ${
      status === 'online' 
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700'
    }`}>
      <div className={`w-2 h-2 rounded-full ${
        status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
      }`} />
      <span className="font-medium capitalize">{status}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <StatusIndicator status={deviceStatus} />
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
              <User className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-500">ID: #123456 • Age: 75 • Room 204</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="mt-12">
          {/* Emergency Controls */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <button className="bg-red-500 text-white rounded-xl p-8 hover:bg-red-600 transition-colors shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="w-10 h-10" />
                  <div>
                    <h2 className="text-2xl font-bold">Emergency SOS</h2>
                    <p className="text-red-100">Press to activate emergency response</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-8 h-8" />
                </div>
              </div>
            </button>

            <button className="bg-teal-500 text-white rounded-xl p-8 hover:bg-teal-600 transition-colors shadow-lg group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Phone className="w-10 h-10" />
                  <div>
                    <h2 className="text-2xl font-bold">Call Nurse</h2>
                    <p className="text-teal-100">Direct line to nursing station</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
              </div>
            </button>
          </div>

          {/* Vital Signs */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Heart Rate */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-semibold">Heart Rate</h3>
                </div>
                <span className="text-2xl font-bold">{heartRate} <span className="text-sm text-gray-500">BPM</span></span>
              </div>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={heartRateData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Blood Pressure */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold">Blood Pressure</h3>
                </div>
                <span className="text-2xl font-bold">120/80</span>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Last Check</span>
                  <span className="text-gray-900">10 minutes ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Next Check</span>
                  <span className="text-gray-900">In 50 minutes</span>
                </div>
              </div>
            </div>

            {/* Room Environment */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <CloudSun className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-lg font-semibold">Room Environment</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Temperature</span>
                  <span className="text-gray-900">72°F</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Humidity</span>
                  <span className="text-gray-900">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Air Quality</span>
                  <span className="text-green-500 font-medium">Good</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Guardian Button</span>
                  <Battery className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-lg font-medium text-green-500">85%</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Connection</span>
                  <Wifi className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-lg font-medium text-green-500">Strong</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Last Movement</span>
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-lg font-medium">2 mins ago</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500">Location</span>
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-lg font-medium">Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSMonitoringDashboard;