"use client";

import { useState, useEffect } from 'react';
import {
  Users,
  Activity,
  Shield,
  Bell,
  ArrowUp,
  ArrowDown,
  User,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart,
  Heart
} from 'lucide-react';

// Types
interface SystemMetrics {
  totalUsers: number;
  activeUsers: number;
  newUsersToday: number;
  totalRoles: number;
  activeDevices: number;
  systemUptime: string;
  alertsToday: number;
}

interface ActivityLog {
  id: string;
  type: 'user' | 'system' | 'alert' | 'device';
  action: string;
  description: string;
  timestamp: Date;
  user?: string;
  status?: 'success' | 'warning' | 'error';
}

// Sample Data
const sampleMetrics: SystemMetrics = {
  totalUsers: 1250,
  activeUsers: 892,
  newUsersToday: 23,
  totalRoles: 6,
  activeDevices: 450,
  systemUptime: "99.9%",
  alertsToday: 5
};

const sampleActivity: ActivityLog[] = [
  {
    id: '1',
    type: 'user',
    action: 'User Login',
    description: 'Dr. Sarah Wilson logged into the system',
    timestamp: new Date(),
    user: 'Dr. Sarah Wilson',
    status: 'success'
  },
  {
    id: '2',
    type: 'alert',
    action: 'High Priority Alert',
    description: 'Patient John Doe: Irregular heart rate detected',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    status: 'warning'
  },
  {
    id: '3',
    type: 'system',
    action: 'Role Updated',
    description: 'Administrator role permissions modified',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    user: 'Admin',
    status: 'success'
  },
  {
    id: '4',
    type: 'device',
    action: 'Device Offline',
    description: 'Heart rate monitor disconnected',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    status: 'error'
  }
];

function MetricCard({ title, value, icon: Icon, trend, trendValue }: {
  title: string;
  value: string | number;
  icon: any;
  trend?: 'up' | 'down';
  trendValue?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-50 rounded-lg">
            <Icon className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
        {trend && trendValue && (
          <div className={`flex items-center gap-1 text-sm
            ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? 
              <ArrowUp className="h-4 w-4" /> : 
              <ArrowDown className="h-4 w-4" />}
            {trendValue}
          </div>
        )}
      </div>
    </div>
  );
}

function ActivityList({ activities }: { activities: ActivityLog[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'user' ? 'bg-blue-50' :
                  activity.type === 'alert' ? 'bg-yellow-50' :
                  activity.type === 'system' ? 'bg-purple-50' :
                  'bg-gray-50'
                }`}>
                  {activity.type === 'user' ? <User className="h-4 w-4 text-blue-600" /> :
                   activity.type === 'alert' ? <Bell className="h-4 w-4 text-yellow-600" /> :
                   activity.type === 'system' ? <Shield className="h-4 w-4 text-purple-600" /> :
                   <Activity className="h-4 w-4 text-gray-600" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500">
                  {new Date(activity.timestamp).toLocaleTimeString()}
                </span>
                {activity.status && (
                  <span className={`text-xs ${
                    activity.status === 'success' ? 'text-green-600' :
                    activity.status === 'warning' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemStatus() {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900">API Services</span>
            </div>
            <span className="text-sm text-green-600">Operational</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900">Database</span>
            </div>
            <span className="text-sm text-green-600">Operational</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-900">Device Network</span>
            </div>
            <span className="text-sm text-yellow-600">Partial Outage</span>
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Last Updated</span>
              <span className="text-sm text-gray-900">2 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<SystemMetrics>(sampleMetrics);
  const [activities, setActivities] = useState<ActivityLog[]>(sampleActivity);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Users"
          value={metrics.totalUsers}
          icon={Users}
          trend="up"
          trendValue="12% this week"
        />
        <MetricCard
          title="Active Devices"
          value={metrics.activeDevices}
          icon={Activity}
          trend="up"
          trendValue="8% today"
        />
        <MetricCard
          title="System Uptime"
          value={metrics.systemUptime}
          icon={BarChart}
        />
        <MetricCard
          title="Active Alerts"
          value={metrics.alertsToday}
          icon={Bell}
          trend="down"
          trendValue="3 less than yesterday"
        />
      </div>

      {/* Activity and Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityList activities={activities} />
        </div>
        <div>
          <SystemStatus />
        </div>
      </div>
    </div>
  );
}