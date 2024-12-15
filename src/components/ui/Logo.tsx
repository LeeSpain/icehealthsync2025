// src/components/ui/Logo.tsx
'use client';

import { Activity } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="flex items-center group">
    <div className="relative w-12 h-12 mr-2">
      <div className="absolute inset-0 bg-gradient-to-r from-[#008B8B] to-[#FF7F50] rounded-lg transform rotate-45 group-hover:rotate-180 transition-transform duration-500"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Activity className="h-7 w-7 text-white transform -rotate-45 group-hover:rotate-180 transition-transform duration-500" />
      </div>
    </div>
    <span className="text-2xl font-bold">
      <span className="text-[#FF7F50]">ICE</span>
      <span className="text-[#008B8B]">Health</span>
      <span className="text-[#FF7F50]">Sync</span>
    </span>
  </Link>
);

export default Logo;