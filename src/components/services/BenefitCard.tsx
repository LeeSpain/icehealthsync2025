'use client';

import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  features,
  className = ''
}) => {
  return (
    <div className={`bg-white/50 backdrop-blur-sm rounded-xl p-6 ${className}`}>
      <Icon className="h-8 w-8 text-[#008B8B] mb-4" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-gray-600 flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};