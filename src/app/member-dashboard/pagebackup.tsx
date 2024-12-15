"use client";

import React, { useState, useEffect } from 'react';
import {
  Activity, Heart, Bell, Phone, Battery, Thermometer,
  AlertTriangle, User, Shield, Sun, Moon, Calendar,
  Plus, CheckCircle2, XCircle, Info, ArrowUp, ArrowDown,
  Clock, Pill, MessageSquare, Send, MapPin, CloudSun,
  CircleDot, Search, Users, Stethoscope, HelpCircle, Wifi,
  Video, PhoneCall
} from 'lucide-react';

// Component Types
interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: { type: 'warning' | 'danger' | 'default'; text: string };
  onClick?: () => void;
  danger?: boolean;
}

interface MessageThreadProps {
  name: string;
  role: string;
  message: string;
  time: string;
  unread?: boolean;
}

interface MessageCategoryProps {
  title: string;
  count?: number;
}

interface ProductMetricProps {
  icon: React.ElementType;
  name: string;
  status: 'online' | 'offline' | 'standby';
  lastReading?: string;
  nextReading?: string;
  batteryLevel?: number;
  additionalInfo?: { label: string; value: string };
  liveData?: boolean;
  pulseColor?: boolean;
  activity?: boolean;
  customContent?: React.ReactNode;
}

// Helper Components
const SidebarItem = ({ icon: Icon, label, active, badge, onClick, danger }: SidebarItemProps): JSX.Element => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
      active 
        ? danger 
          ? 'bg-red-500/20 text-white'
          : 'bg-white/20 text-white' 
        : danger
          ? 'text-white/80 hover:bg-red-500/20 hover:text-white'
          : 'text-white/80 hover:bg-white/20 hover:text-white'
    }`}
  >
    <Icon className={`w-5 h-5 mr-3 ${active ? 'text-white' : 'text-white/70'}`} />
    <span className="font-medium">{label}</span>
    {badge && (
      <span className={`ml-auto px-2 py-1 rounded-full text-xs font-medium ${
        badge.type === 'warning' ? 'bg-yellow-400 text-yellow-900' :
        badge.type === 'danger' ? 'bg-red-500 text-white animate-pulse' :
        'bg-white/30 text-white'
      }`}>
        {badge.text}
      </span>
    )}
  </button>
);

const MessageThread = ({ name, role, message, time, unread }: MessageThreadProps): JSX.Element => (
  <div className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${unread ? 'bg-teal-50' : ''}`}>
    <div className="flex justify-between items-start mb-1">
      <div>
        <span className="font-medium text-gray-900">{name}</span>
        <span className="text-sm text-gray-500 ml-2">{role}</span>
      </div>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
    <p className="text-sm text-gray-600 line-clamp-2">{message}</p>
  </div>
);

const MessageCategory = ({ title, count }: MessageCategoryProps): JSX.Element => (
  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center">
    <span className="text-gray-700">{title}</span>
    {count && (
      <span className="bg-teal-100 text-teal-600 text-xs px-2 py-1 rounded-full">
        {count}
      </span>
    )}
  </button>
);

const ProductMetric = ({
  icon: Icon,
  name,
  status,
  lastReading,
  nextReading,
  batteryLevel,
  additionalInfo,
  liveData = false,
  pulseColor = false,
  activity = false,
  customContent
}: ProductMetricProps): JSX.Element => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-md 
                   hover:shadow-lg transition-all duration-300 relative
                   ${pulseColor ? 'animate-pulse' : ''}`}>
    <div className={`absolute top-0 left-0 w-full h-1 
      ${status === 'online' 
        ? 'bg-gradient-to-r from-green-500 to-green-400' 
        : status === 'offline' 
          ? 'bg-gradient-to-r from-red-500 to-red-400' 
          : 'bg-gradient-to-r from-yellow-500 to-yellow-400'
      }
      ${activity ? 'animate-pulse' : ''}`} 
    />
    
    <div className="p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${
            status === 'online' 
              ? 'bg-green-50 text-green-600' 
              : status === 'offline' 
                ? 'bg-red-50 text-red-600' 
                : 'bg-yellow-50 text-yellow-600'
          } relative`}>
            <Icon className={`w-6 h-6 ${liveData ? 'animate-pulse' : ''}`} />
            {liveData && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              </span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <CircleDot className={`w-3 h-3 ${
                status === 'online' 
                  ? 'text-green-500' 
                  : status === 'offline' 
                    ? 'text-red-500' 
                    : 'text-yellow-500'
              } ${status === 'online' ? 'animate-pulse' : ''}`} />
              <span className="text-sm text-gray-500 capitalize">{status}</span>
            </div>
          </div>
        </div>
        {batteryLevel && (
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg
            ${batteryLevel <= 20 ? 'bg-red-50 animate-pulse' : 'bg-gray-50'}`}>
            <Battery className={`w-4 h-4 ${
              batteryLevel > 50 ? 'text-green-500' :
              batteryLevel > 20 ? 'text-yellow-500' :
              'text-red-500'
            }`} />
            <span className={`text-sm font-medium ${
              batteryLevel <= 20 ? 'text-red-600' : 'text-gray-600'
            }`}>
              {batteryLevel}%
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-3 mt-4">
        {lastReading && (
          <div className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">Last Reading</span>
            <span className="text-sm font-medium text-gray-900">{lastReading}</span>
          </div>
        )}
        {nextReading && (
          <div className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">Next Reading</span>
            <span className="text-sm font-medium text-gray-900">{nextReading}</span>
          </div>
        )}
        {additionalInfo && (
          <div className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">{additionalInfo.label}</span>
            <span className="text-sm font-medium text-gray-900">{additionalInfo.value}</span>
          </div>
        )}
        {customContent}
      </div>
    </div>
  </div>
);

// LiveHeartRate Component
function LiveHeartRate(): JSX.Element {
  const [heartRate, setHeartRate] = useState(72);
  const [history, setHistory] = useState<number[]>([...Array(20)].map(() => 72));

  useEffect(() => {
    const updateHeartRate = () => {
      const newRate = 70 + Math.floor(Math.random() * 10);
      setHeartRate(newRate);
      setHistory(prev => [...prev.slice(-19), newRate]);
    };

    const interval = setInterval(updateHeartRate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-50 rounded-xl">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Live Heart Rate</h3>
            <p className="text-sm text-gray-500">Real-time monitoring</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CircleDot className="w-3 h-3 text-green-500 animate-pulse" />
          <span className="text-sm text-gray-500">Device Connected</span>
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            {heartRate}
            <span className="text-base font-normal text-gray-500">BPM</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Min: 70</span>
            <span>Avg: 75</span>
            <span>Max: 80</span>
          </div>
        </div>
      </div>

      <div className="h-24 mt-4">
        <div className="flex items-end h-full gap-1 justify-center">
          {history.map((rate, index) => (
            <div
              key={index}
              className="w-3 bg-red-400 rounded-t transition-all duration-300 ease-in-out"
              style={{ height: `${((rate - 65) / 20) * 100}%`, opacity: (index + 5) / history.length }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// NurseInfo Component
function NurseInfo(): JSX.Element {
  const nurseData = {
    name: "Sarah Wilson, RN",
    available: true,
    nextCall: "Today, 3:00 PM",
    experience: "8 years",
    speciality: "Cardiac Care",
    languages: ["English", "Spanish"],
    photo: "/api/placeholder/150/150"
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 rounded-xl">
            <Stethoscope className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Your Personal Nurse</h3>
            <p className="text-sm text-gray-500">Available 24/7</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden relative">
            <img
              src={nurseData.photo}
              alt={nurseData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 right-1">
              <CircleDot className={`w-4 h-4 ${nurseData.available ? 'text-green-500' : 'text-gray-400'}`} />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{nurseData.name}</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Next Video Call: {nurseData.nextCall}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Activity className="w-4 h-4" />
              <span>Experience: {nurseData.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Info className="w-4 h-4" />
              <span>Speciality: {nurseData.speciality}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              <Video className="w-4 h-4" />
              <span>Start Video Call</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
              <PhoneCall className="w-4 h-4" />
              <span>Request Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Page Component
export default function Page(): JSX.Element {
  const [activePage, setActivePage] = useState<'dashboard' | 'messages' | 'family' | string>('dashboard');
  const [sosActive, setSosActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [messageInput, setMessageInput] = useState('');

  // Products configuration
  const products = [
    { id: 'guardian', label: 'Guardian Button', icon: AlertTriangle },
    { id: 'heart-monitor', label: 'Heart Rate Monitor', icon: Heart },
    { id: 'glucose-monitor', label: 'Glucose Monitor', icon: Activity },
    { id: 'bed-sensor', label: 'Smart Bed Sensor', icon: Moon },
    { id: 'scale', label: 'Smart Scale', icon: Activity },
    { id: 'thermometer', label: 'Smart Thermometer', icon: Thermometer },
    { id: 'med-dispenser', label: 'Med Dispenser', icon: Pill }
  ];

  // Sample messages data
  const messages = {
    'customer-support': [
      { name: 'Support Team', role: 'Customer Support', message: 'Your device setup request has been received', time: '10:30 AM', unread: true },
      { name: 'Technical Support', role: 'Customer Support', message: 'Battery replacement guide attached', time: 'Yesterday', unread: false }
    ],
    'nurse': [
      { name: 'Sarah Wilson', role: 'Personal Nurse', message: 'Your latest readings look good. Keep up the good work!', time: '11:45 AM', unread: true },
      { name: 'Sarah Wilson', role: 'Personal Nurse', message: 'Reminder about your medication schedule', time: 'Yesterday', unread: false }
    ],
    'family': [
      { name: 'Mary Johnson', role: 'Family Member', message: 'Just checking in on your readings', time: '2:15 PM', unread: true },
      { name: 'Robert Smith', role: 'Emergency Contact', message: 'Thanks for sharing your health update', time: 'Yesterday', unread: false }
    ]
  };

  // Device metrics data
  const metrics = [
    {
      icon: AlertTriangle,
      name: "Guardian Button",
      status: "online" as const,
      batteryLevel: 85,
      lastReading: "Active",
      additionalInfo: { label: "Last Test", value: "2 days ago" },
      liveData: true
    },
    {
      icon: Heart,
      name: "Heart Rate Monitor",
      status: "online" as const,
      batteryLevel: 92,
      lastReading: "72 bpm",
      nextReading: "Continuous",
      pulseColor: true,
      liveData: true,
      activity: true
    },
    {
      icon: Activity,
      name: "Glucose Monitor",
      status: "online" as const,
      batteryLevel: 78,
      lastReading: "95 mg/dL",
      nextReading: "In 2 hours",
      liveData: true
    },
    {
      icon: Moon,
      name: "Smart Bed Sensor",
      status: "online" as const,
      lastReading: "Active",
      nextReading: "Always On",
      additionalInfo: { label: "Sleep Score", value: "85%" },
      liveData: true
    }
  ];

  // Family members data
  const familyMembers = [
    { name: "Mary (Wife)", status: "online", lastActive: "Now" },
    { name: "Dr. Smith", status: "online", lastActive: "2m ago" },
    { name: "Sarah (Nurse)", status: "online", lastActive: "Now" },
    { name: "Robert (Son)", status: "offline", lastActive: "1h ago" }
  ];

  // Time update effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const renderMessageContent = () => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="grid grid-cols-4 h-[calc(100vh-10rem)]">
        {/* Categories Sidebar */}
        <div className="col-span-1 border-r">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-4 py-2 border rounded-lg pl-10"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
            <MessageCategory title="All Messages" count={4} />
            <MessageCategory title="Customer Support" count={1} />
            <MessageCategory title="Personal Nurse" count={1} />
            <MessageCategory title="Friends & Family" count={2} />
          </div>
        </div>

        {/* Message List */}
        <div className="col-span-3 flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {Object.values(messages).flat().map((msg, idx) => (
              <MessageThread key={idx} {...msg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-teal-600 to-teal-700 overflow-y-auto">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Shield className="w-8 h-8 text-white" />
          <span className="ml-3 font-semibold text-lg text-white">HealthGuard</span>
        </div>  

        {/* Navigation */}
        <div className="px-3 py-4">
          {/* Emergency SOS */}
          <div className="mb-8">
            <SidebarItem
              icon={AlertTriangle}
              label="Emergency SOS"
              active={activePage === 'emergency'}
              onClick={() => {
                setActivePage('emergency');
                setSosActive(!sosActive);
              }}
              danger={true}
              badge={{ type: 'danger', text: sosActive ? 'ACTIVE' : 'SOS' }}
            />
          </div>

          {/* Dashboard */}
          <div className="mb-8">
            <SidebarItem
              icon={Heart}
              label="Dashboard"
              active={activePage === 'dashboard'}
              onClick={() => setActivePage('dashboard')}
            />
          </div>

          {/* Messages */}
          <div className="mb-8">
            <SidebarItem
              icon={MessageSquare}
              label="Messages"
              active={activePage === 'messages'}
              onClick={() => setActivePage('messages')}
              badge={{ type: 'default', text: '4' }}
            />
          </div>

          {/* Friends & Family */}
          <div className="mb-8">
            <SidebarItem
              icon={Users}
              label="Friends & Family"
              active={activePage === 'family'}
              onClick={() => setActivePage('family')}
            />
          </div>

          {/* My Products */}
          <div className="mb-8">
            <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
              My Products
            </h3>
            <div className="space-y-1">
              {products.map((product) => (
                <SidebarItem
                  key={product.id}
                  icon={product.icon}
                  label={product.label}
                  active={activePage === product.id}
                  onClick={() => setActivePage(product.id)}
                />
              ))}
            </div>
          </div>

          {/* Professional Services */}
          <div className="mb-8">
            <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
              Professional Services
            </h3>
            <div className="space-y-1">
              <SidebarItem
                icon={Stethoscope}
                label="Personal Nurse"
                active={activePage === 'nurse'}
                onClick={() => setActivePage('nurse')}
              />
              <SidebarItem
                icon={Phone}
                label="SOS Call Centre"
                active={activePage === 'sos-call'}
                onClick={() => setActivePage('sos-call')}
              />
            </div>
          </div>

          {/* Support */}
          <div className="mb-8">
            <h3 className="px-4 text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
              Support
            </h3>
            <div className="space-y-1">
              <SidebarItem
                icon={HelpCircle}
                label="Help & Support"
                active={activePage === 'help'}
                onClick={() => setActivePage('help')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-gray-900">
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-50">
              <Bell className="w-5 h-5 text-gray-500" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <User className="w-4 h-4 text-teal-600" />
              </div>
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {activePage === 'messages' ? (
            renderMessageContent()
          ) : activePage === 'dashboard' && (
            <div className="space-y-8">
              {/* Welcome Section */}
              <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-xl border border-gray-200 shadow-lg p-6 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/20 rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-50/30 rounded-full -ml-20 -mb-20" />
                
                {/* Welcome content */}
                <div className="relative">
                  {/* Welcome header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{getGreeting()}, John</h1>
                      <p className="text-gray-600 text-lg">{formatDate(currentTime)}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2">
                        <CloudSun className="w-6 h-6 text-yellow-500" />
                        <span className="text-lg font-medium">72°F</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        Dublin
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-50 rounded-lg">
                          <Activity className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Health Score</div>
                          <div className="text-lg font-semibold text-teal-600">92%</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <Wifi className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Active Devices</div>
                          <div className="text-lg font-semibold text-blue-600">7/8</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <Battery className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Battery Alerts</div>
                          <div className="text-lg font-semibold text-red-600">1</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <Users className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Family Online</div>
                          <div className="text-lg font-semibold text-green-600">3/4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <ProductMetric key={index} {...metric} />
                ))}
                
                <ProductMetric
                  icon={Activity}
                  name="Smart Scale"
                  status="standby"
                  lastReading="Yesterday, 8:00 AM"
                  nextReading="Tomorrow Morning"
                  additionalInfo={{ label: "Last Weight", value: "165 lbs" }}
                />
                
                <ProductMetric
                  icon={Thermometer}
                  name="Smart Thermometer"
                  status="online"
                  batteryLevel={15}
                  lastReading="98.6°F"
                  nextReading="When needed"
                  pulseColor={true}
                />
                
                <ProductMetric
                  icon={Pill}
                  name="Med Dispenser"
                  status="online"
                  batteryLevel={90}
                  lastReading="2 hours ago"
                  nextReading="12:00 PM"
                  additionalInfo={{ label: "Pills Left", value: "45" }}
                  liveData={true}
                />

                <ProductMetric
                  icon={Users}
                  name="Family Dashboard"
                  status="online"
                  additionalInfo={{ label: "Active Members", value: "3/4" }}
                  liveData={true}
                  customContent={
                    <div className="mt-4 space-y-2">
                      {familyMembers.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <CircleDot className={`w-2 h-2 ${member.status === 'online' ? 'text-green-500 animate-pulse' : 'text-gray-400'}`} />
                            <span className="text-sm font-medium text-gray-900">{member.name}</span>
                          </div>
                          <span className="text-xs text-gray-500">{member.lastActive}</span>
                        </div>
                      ))}
                    </div>
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;