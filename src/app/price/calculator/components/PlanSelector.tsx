import React from 'react';
import { Check } from 'lucide-react';

interface PricingOption {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

interface PlanSelectorProps {
  plans: PricingOption[];
  selectedPlan: string;
  onSelect: (planId: string) => void;
}

const PlanSelector: React.FC<PlanSelectorProps> = ({
  plans,
  selectedPlan,
  onSelect
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Your Plan</h2>
      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => onSelect(plan.id)}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
              selectedPlan === plan.id
                ? 'border-[#008B8B] bg-[#008B8B]/5'
                : 'border-gray-200 hover:border-[#008B8B]/50'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#008B8B]">€{plan.price}</div>
                <div className="text-sm text-gray-500">/month</div>
              </div>
            </div>
            <div className="space-y-2">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008B8B]" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelector;