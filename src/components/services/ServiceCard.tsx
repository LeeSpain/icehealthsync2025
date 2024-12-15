// src/components/services/ServiceCard.tsx
'use client';

import { Check } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color?: string;
  isActive?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon: Icon,
  color = "bg-[#008B8B]",
  isActive = false
}) => {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all 
      ${isActive ? 'ring-2 ring-[#008B8B] ring-opacity-50' : ''}`}>
      <div className={`${color}/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={`h-7 w-7 ${color.replace('bg-', 'text-')}`} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mt-1 mr-3 shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};