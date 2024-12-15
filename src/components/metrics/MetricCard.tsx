// src/components/ui/MetricCard.tsx
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value?: string;
  change?: {
    value: string;
    direction: 'up' | 'down';
    color: string;
  };
  target?: string;
  icon?: LucideIcon;
  color?: string;
  bgColor?: string;
  vitals?: Array<{
    label: string;
    value: string;
    unit: string;
    icon: LucideIcon;
  }>;
  medication?: {
    nextDose: {
      time: string;
      name: string;
      amount: string;
    };
    dosellStatus: string;
    adherence: string;
    capacity: string;
  };
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  target, 
  icon: Icon, 
  color, 
  bgColor,
  vitals,
  medication 
}: MetricCardProps) {
  if (vitals) {
    return (
      <div className={`rounded-xl shadow-sm ${bgColor}`}>
        <div className="p-6">
          <h3 className="text-gray-800 font-medium mb-4">{title}</h3>
          <div className="space-y-4">
            {vitals.map((vital, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <vital.icon className="h-5 w-5 text-[#FF7F50] mr-3" />
                  <span className="text-gray-600">{vital.label}</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-gray-900">{vital.value}</span>
                  <span className="text-gray-500 ml-1">{vital.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (medication) {
    return (
      <div className={`rounded-xl shadow-sm ${bgColor}`}>
        <div className="p-6">
          <h3 className="text-gray-800 font-medium mb-4">{title}</h3>
          <div className="space-y-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">Next Dose</p>
                  <p className="font-medium">{medication.nextDose.name}</p>
                  <p className="text-sm text-gray-500">{medication.nextDose.amount}</p>
                </div>
                <span className="text-[#FF7F50] font-bold">{medication.nextDose.time}</span>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Dosell Status</span>
                <span className="text-green-500 text-sm">
                  {medication.dosellStatus}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Weekly Adherence</span>
                <span className="text-gray-900 font-medium">
                  {medication.adherence}
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Dispenser Capacity</span>
                <span className="text-[#FF7F50]">{medication.capacity}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#008B8B] to-[#FF7F50] h-2 rounded-full" 
                  style={{ width: medication.capacity }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl shadow-sm ${bgColor}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-gray-800 font-medium">{title}</h3>
          {Icon && (
            <div className={`p-2 rounded-lg ${color ? color.replace('text-', 'bg-') + '/10' : ''}`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
          )}
        </div>
        {value && (
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            {change && (
              <span className={`ml-2 text-sm ${change.color}`}>
                {change.direction === 'up' ? '↑' : '↓'} {change.value}
              </span>
            )}
          </div>
        )}
        {target && (
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Daily Target</span>
              <span className="text-[#FF7F50]">{target}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#008B8B] to-[#FF7F50] h-2 rounded-full" 
                style={{ width: `${parseInt(target.split('/')[0])}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}