import React from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react'; // Ensure you import the Activity icon

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-[#008B8B] to-[#FF7F50] rounded-lg 
                  transform rotate-45 group-hover:rotate-180 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="h-7 w-7 text-white transform -rotate-45 
                    group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-[#FF7F50]">ICE</span>
                <span className="text-[#008B8B]">Health</span>
                <span className="text-[#FF7F50]">Sync</span>
              </span>
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ICE Health Sync. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;