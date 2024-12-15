'use client';

import React from 'react';
import { Bell, ChevronDown, User } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export const DashboardHeader = () => {
  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center space-x-6">
            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/member-dashboard" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                href="/member-dashboard/profile" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Profile
              </Link>
            </nav>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg relative"
                onClick={() => console.log('Notifications clicked')}
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-[#FF7F50] rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-[#008B8B]" />
                  </div>
                  <span className="text-sm text-gray-600">Sarah Johnson</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 hidden group-hover:block">
                  <Link 
                    href="/member-dashboard/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Profile
                  </Link>
                  <Link 
                    href="/member-dashboard/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <hr className="my-1" />
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;