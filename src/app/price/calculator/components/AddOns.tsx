import React from 'react';
import { Check } from 'lucide-react';

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  monthly?: boolean;
}

interface AddOnsProps {
  addOns: AddOn[];
  selectedAddOns: string[];
  onToggleAddOn: (addonId: string) => void;
}

const AddOns: React.FC<AddOnsProps> = ({
  addOns,
  selectedAddOns,
  onToggleAddOn
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Add-ons</h2>
      <div className="space-y-4">
        {addOns.map((addon) => (
          <div
            key={addon.id}
            onClick={() => onToggleAddOn(addon.id)}
            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedAddOns.includes(addon.id)
                ? 'border-[#008B8B] bg-[#008B8B]/5'
                : 'border-gray-200 hover:border-[#008B8B]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{addon.name}</h3>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[#008B8B]">€{addon.price}</div>
                <div className="text-sm text-gray-500">{addon.monthly ? '/month' : 'one-time'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOns;