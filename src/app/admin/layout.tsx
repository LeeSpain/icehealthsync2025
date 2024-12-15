"use client";

import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  Bell,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Activity,
  HelpCircle,
  Heart
} from 'lucide-react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

interface AdminState {
  users: User[];
  roles: Role[];
  notifications: number;
  systemStatus: {
    apiHealth: boolean;
    dbHealth: boolean;
    lastUpdated: Date;
  };
}

interface AdminContextType extends AdminState {
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Role) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
}

// Create Context
const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Provider Component
function AdminProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [notifications, setNotifications] = useState(0);
  const [systemStatus, setSystemStatus] = useState({
    apiHealth: true,
    dbHealth: true,
    lastUpdated: new Date()
  });

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  const updateUser = (id: string, userUpdate: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...userUpdate } : user
    ));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const addRole = (role: Role) => {
    setRoles(prev => [...prev, role]);
  };

  const updateRole = (id: string, roleUpdate: Partial<Role>) => {
    setRoles(prev => prev.map(role => 
      role.id === id ? { ...role, ...roleUpdate } : role
    ));
  };

  const deleteRole = (id: string) => {
    setRoles(prev => prev.filter(role => role.id !== id));
  };

  const value = {
    users,
    roles,
    notifications,
    systemStatus,
    addUser,
    updateUser,
    deleteUser,
    addRole,
    updateRole,
    deleteRole
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

// Custom Hook
function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: Users,
    },
    {
      name: 'Roles',
      href: '/admin/roles',
      icon: Shield,
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: Activity,
    },
    {
      name: 'Health Monitoring',
      href: '/admin/health',
      icon: Heart,
    },
  ];

  const secondaryNavigation = [
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
    },
    {
      name: 'Help',
      href: '/admin/help',
      icon: HelpCircle,
    },
  ];

  const isCurrentPath = (path: string) => pathname === path;

  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            <Link href="/admin/dashboard" className="flex items-center">
              <Shield className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">HealthGuard</span>
            </Link>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="p-4">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isCurrentPath(item.href)
                        ? 'bg-teal-50 text-teal-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Secondary Navigation */}
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Support
              </h3>
              <nav className="mt-2 space-y-1">
                {secondaryNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isCurrentPath(item.href)
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* User Menu */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200">
            <div className="p-4">
              <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-teal-600">AD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">Admin User</div>
                  <div className="text-xs text-gray-500 truncate">admin@healthguard.com</div>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sidebar toggle */}
        <div className="fixed top-0 left-0 right-0 z-40 lg:hidden">
          <div className="h-16 flex items-center bg-white border-b border-gray-200 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className={`${isSidebarOpen ? 'hidden' : 'block'}`}
            >
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <div className="ml-4">
              <Shield className="h-8 w-8 text-teal-600" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`lg:pl-64 flex flex-col min-h-screen`}>
          {/* Top bar */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
            <h1 className="text-xl font-semibold text-gray-900">Admin Portal</h1>
            <div className="flex items-center gap-4">
              <button className="p-1 rounded-lg hover:bg-gray-50 relative">
                <Bell className="h-6 w-6 text-gray-500" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/admin/settings" className="p-1 rounded-lg hover:bg-gray-50">
                <Settings className="h-6 w-6 text-gray-500" />
              </Link>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}