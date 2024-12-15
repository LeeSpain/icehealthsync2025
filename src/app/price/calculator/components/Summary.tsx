import React from 'react';
import { ChevronRight, Download } from 'lucide-react';

interface SummaryProps {
  selectedPlan: any;
  selectedDevices: any[];
  selectedAddOns: any[];
  monthlyTotal: number;
  oneTimeTotal: number;
  annualTotal: number;
  onRequestQuote: () => void;
}

const Summary: React.FC<SummaryProps> = ({
  selectedPlan,
  selectedDevices,
  selectedAddOns,
  monthlyTotal,
  oneTimeTotal,
  annualTotal,
  onRequestQuote
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Summary</h2>
      
      <div className="space-y-6 mb-8">
        {selectedPlan && (
          <div>
            <div className="text-sm text-gray-500 mb-2">Selected Plan</div>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-900">{selectedPlan.name}</div>
                <div className="text-sm text-gray-600">Monthly subscription</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-[#008B8B]">€{selectedPlan.price}/mo</div>
              </div>
            </div>
          </div>
        )}

        {selectedDevices.length > 0 && (
          <div>
            <div className="text-sm text-gray-500 mb-2">Selected Devices</div>
            <div className="space-y-3">
              {selectedDevices.map((device) => (
                <div key={device.id} className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{device.name}</div>
                    <div className="text-sm text-gray-600">One-time purchase</div>
                  </div>
                  <div className="font-bold text-[#FF7F50]">€{device.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedAddOns.length > 0 && (
          <div>
            <div className="text-sm text-gray-500 mb-2">Selected Add-ons</div>
            <div className="space-y-3">
              {selectedAddOns.map((addon) => (
                <div key={addon.id} className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">{addon.name}</div>
                    <div className="text-sm text-gray-600">
                      {addon.monthly ? 'Monthly subscription' : 'One-time purchase'}
                    </div>
                  </div>
                  <div className="font-bold text-[#008B8B]">
                    €{addon.price}{addon.monthly ? '/mo' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Totals */}
      <div className="border-t border-gray-200 pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">Monthly Total</div>
          <div className="text-xl font-bold text-[#008B8B]">€{monthlyTotal.toFixed(2)}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600">One-time Payment</div>
          <div className="text-xl font-bold text-[#FF7F50]">€{oneTimeTotal.toFixed(2)}</div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-gray-900 font-medium">First Year Total</div>
          <div className="text-2xl font-bold text-gray-900">€{annualTotal.toFixed(2)}</div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-4">
        <button 
          onClick={onRequestQuote}
          className="w-full py-3 bg-[#008B8B] text-white rounded-xl font-medium hover:bg-[#20B2AA] transition-colors flex items-center justify-center gap-2"
        >
          Request Quote
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="w-full py-3 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          Download Price List
          <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Summary;