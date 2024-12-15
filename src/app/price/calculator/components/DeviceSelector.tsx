import React from 'react';
import { Check } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

interface DeviceSelectorProps {
  devices: Device[];
  selectedDevices: string[];
  onToggleDevice: (deviceId: string) => void;
}

const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  devices,
  selectedDevices,
  onToggleDevice
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Your Devices</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
              selectedDevices.includes(device.id)
                ? 'border-[#FF7F50] bg-[#FF7F50]/5'
                : 'border-gray-200 hover:border-[#FF7F50]/50'
            }`}
            onClick={() => onToggleDevice(device.id)}
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
              <div className="text-xl font-bold text-[#FF7F50] mt-1">€{device.price}</div>
              <p className="text-gray-600 text-sm mt-2">{device.description}</p>
            </div>
            <div className="space-y-2">
              {device.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF7F50]" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceSelector;