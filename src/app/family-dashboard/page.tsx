'use client';

import React, { useState } from 'react';
import { 
  Heart, MessageSquare, Bell, User, 
  CircleDot, Shield, AlertTriangle,
  Activity, Pill, Calendar, Clock,
  Phone, Video, Send, Search,
  Paperclip, Reply, Trash, Archive,
  CheckCircle, Battery, Thermometer,
  Settings, Info
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FamilyDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Mom's device readings
  const deviceReadings = [
    {
      id: 1,
      name: "Blood Glucose",
      currentReading: "105 mg/dL",
      status: "normal",
      lastUpdated: "2 mins ago",
      trend: "stable",
      battery: 85,
      targetRange: "80-130 mg/dL",
      icon: Activity
    },
    {
      id: 2,
      name: "Blood Pressure",
      currentReading: "128/82",
      status: "elevated",
      lastUpdated: "15 mins ago",
      trend: "increasing",
      battery: 90,
      targetRange: "120/80",
      icon: Heart
    },
    {
      id: 3,
      name: "Heart Rate",
      currentReading: "72 bpm",
      status: "normal",
      lastUpdated: "1 min ago",
      trend: "stable",
      battery: 95,
      targetRange: "60-100 bpm",
      icon: Activity
    },
    {
      id: 4,
      name: "Temperature",
      currentReading: "98.6°F",
      status: "normal",
      lastUpdated: "5 mins ago",
      trend: "stable",
      battery: 75,
      targetRange: "97-99°F",
      icon: Thermometer
    }
  ];

  // Notifications
  const notifications = [
    {
      id: 1,
      type: 'device',
      title: 'Blood Pressure Alert',
      message: 'Reading above normal range',
      time: '15 mins ago',
      priority: 'high',
      actionNeeded: true
    },
    {
      id: 2,
      type: 'medication',
      title: 'Medication Reminder',
      message: 'Evening medication due in 30 minutes',
      time: '2 mins ago',
      priority: 'medium',
      actionNeeded: false
    },
    {
      id: 3,
      type: 'device',
      title: 'Glucose Monitor',
      message: 'Battery low (15%)',
      time: '1 hour ago',
      priority: 'medium',
      actionNeeded: true
    }
  ];

  // Care team messages
  const messages = [
    {
      id: 1,
      sender: "Dr. Johnson",
      role: "Primary Physician",
      subject: "Blood Pressure Update",
      content: "I've reviewed your mother's blood pressure readings from today. While slightly elevated, it's not concerning yet. Let's monitor it closely over the next 24 hours.",
      timestamp: "2:30 PM",
      unread: true
    },
    {
      id: 2,
      sender: "Nurse Sarah",
      role: "Care Coordinator",
      subject: "Weekly Check-in",
      content: "Your mother completed all her scheduled activities today. Her mobility is improving with the new exercise routine.",
      timestamp: "11:45 AM",
      unread: false
    }
  ];

  // Today's schedule
  const schedule = [
    {
      time: "8:00 AM",
      activity: "Morning Medication",
      status: "completed"
    },
    {
      time: "10:00 AM",
      activity: "Blood Pressure Check",
      status: "completed"
    },
    {
      time: "2:00 PM",
      activity: "Physical Therapy",
      status: "completed"
    },
    {
      time: "6:00 PM",
      activity: "Evening Medication",
      status: "upcoming"
    },
    {
      time: "8:00 PM",
      activity: "Blood Sugar Check",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="h-16 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-teal-600" />
              <h1 className="text-xl font-semibold text-gray-900">HealthGuard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-5 h-5 text-gray-600" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                <AlertTriangle className="w-4 h-4" />
                <span>Emergency SOS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold mb-1">Martha's Health Dashboard</h2>
              <p className="text-teal-100">Monitored by Martijn (Son)</p>
            </div>
            <div className="text-right">
              <div className="text-teal-100">Last check-in</div>
              <div className="text-lg font-semibold">5 mins ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="col-span-2 space-y-6">
            {/* Device Readings */}
            <div className="grid grid-cols-2 gap-4">
              {deviceReadings.map((device) => (
                <Card key={device.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <device.icon className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{device.name}</h3>
                          <p className="text-sm text-gray-500">Last updated {device.lastUpdated}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Battery className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{device.battery}%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-2xl font-semibold">{device.currentReading}</div>
                        <div className="text-sm text-gray-500">Target: {device.targetRange}</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        device.status === 'normal' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {device.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-gray-500">{item.time}</div>
                      <div className={`flex-1 p-3 rounded-lg ${
                        item.status === 'completed' ? 'bg-green-50' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center gap-2">
                          {item.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Clock className="w-4 h-4 text-gray-400" />
                          )}
                          <span className="font-medium">{item.activity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors flex flex-col items-center">
                    <Video className="w-5 h-5 text-teal-600 mb-2" />
                    <span className="text-sm font-medium">Video Call</span>
                  </button>
                  <button className="p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors flex flex-col items-center">
                    <MessageSquare className="w-5 h-5 text-teal-600 mb-2" />
                    <span className="text-sm font-medium">Message</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle>Care Team Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`p-4 rounded-lg ${message.unread ? 'bg-teal-50' : 'bg-gray-50'}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="font-medium">{message.sender}</span>
                          <p className="text-xs text-gray-500">{message.role}</p>
                        </div>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-1">{message.content}</p>
                    </div>
                  ))}
                  <button className="w-full text-sm text-teal-600 hover:underline">
                    View All Messages
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="absolute right-0 top-16 w-96 bg-white border rounded-lg shadow-lg mt-2 z-50">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 border-b hover:bg-gray-50 ${
                  notification.priority === 'high' ? 'bg-red-50' :
                  notification.priority === 'medium' ? 'bg-yellow-50' : 'bg-white'
                }`}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{notification.title}</span>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                {notification.actionNeeded && (
                  <button className="text-sm text-teal-600 hover:underline">
                    Take Action
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}