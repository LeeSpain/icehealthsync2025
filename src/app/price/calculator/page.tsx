"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, ChevronRight, Download, 
  Shield, Activity, Heart, 
  Package, CreditCard, Clock,
  Star, Info, Zap, Settings,
  Bell, BarChart, Truck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Types
interface Device {
  id: string;
  name: string;
  oneTimePrice: number;
  monthlySubscription: number;
  annualSubscription: number;
  description: string;
  features: string[];
  category: 'monitoring' | 'safety' | 'wellness';
}

interface DeviceSelection {
  id: string;
  purchaseType: 'oneTime' | 'subscription';
  billingCycle?: 'monthly' | 'annual';
}

// Constants
const SHIPPING_COST = 19.99;

// Enhanced base subscription with more features
const baseSubscription = {
  monthly: {
    price: 4.99,
    name: 'Basic Plan',
    description: 'Essential health monitoring features',
    features: [
      'Basic health monitoring',
      'Mobile app access',
      'Emergency alerts',
      'Basic reports',
      'Email support',
      'Data encryption'
    ]
  },
  annual: {
    price: 49.99,
    name: 'Basic Plan (Annual)',
    description: 'Essential health monitoring features with 20% annual discount',
    features: [
      'Basic health monitoring',
      'Mobile app access',
      'Emergency alerts',
      'Basic reports',
      'Email support',
      'Data encryption',
      '20% discount on annual billing',
      'Priority support'
    ]
  }
};

// Enhanced devices with categories
const healthDevices = [
  {
    id: 'glucose',
    name: 'Glucose Monitor',
    oneTimePrice: 150,
    monthlySubscription: 19.99,
    annualSubscription: 199.99,
    description: 'Continuous glucose monitoring device',
    category: 'monitoring',
    features: [
      'Real-time glucose tracking',
      'Automated readings',
      'Mobile sync',
      'Trend analysis',
      'Custom alerts'
    ]
  },
  {
    id: 'dispenser',
    name: 'Med Dispenser',
    oneTimePrice: 150,
    monthlySubscription: 19.99,
    annualSubscription: 199.99,
    description: 'Smart medication management system',
    category: 'safety',
    features: [
      'Automated dispensing',
      'Schedule management',
      'Compliance tracking',
      'Family notifications',
      'Refill alerts'
    ]
  },
  {
    id: 'vitals',
    name: 'Vitals Monitor',
    oneTimePrice: 199.99,
    monthlySubscription: 24.99,
    annualSubscription: 249.99,
    description: 'Complete vitals monitoring solution',
    category: 'monitoring',
    features: [
      'Heart rate monitoring',
      'Blood pressure tracking',
      'Temperature sensing',
      'SpO2 monitoring',
      'Wellness trends'
    ]
  }
];

const PriceCalculator = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedDevices, setSelectedDevices] = useState<DeviceSelection[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showComparison, setShowComparison] = useState(false);

  // Enhanced calculations including shipping and first payment
  const calculateTotals = () => {
    let monthly = baseSubscription[billingCycle].price;
    let oneTime = 0;
    let firstPaymentTotal = 0;

    // Calculate device costs
    selectedDevices.forEach(selection => {
      const device = healthDevices.find(d => d.id === selection.id);
      if (device) {
        // One-time device cost
        oneTime += device.oneTimePrice;
        
        // First month's subscription included with device
        monthly += device.monthlySubscription;
      }
    });

    // Add shipping cost if there are any devices
    if (selectedDevices.length > 0) {
      oneTime += SHIPPING_COST;
    }

    // Calculate first payment (one-time costs + first month's subscription)
    firstPaymentTotal = oneTime + monthly;

    return {
      monthly,
      oneTime,
      firstPaymentTotal
    };
  };

  const totals = calculateTotals();

  const handleDeviceSelect = (selection: DeviceSelection) => {
    setSelectedDevices(prev => {
      const existing = prev.findIndex(d => d.id === selection.id);
      if (existing >= 0) {
        const newSelections = [...prev];
        newSelections[existing] = selection;
        return newSelections;
      }
      return [...prev, selection];
    });
  };

  const DeviceIcon = ({ id, className = "w-6 h-6" }) => {
    switch(id) {
      case 'glucose':
        return <Activity className={`${className} text-teal-600`} />;
      case 'dispenser':
        return <Package className={`${className} text-teal-600`} />;
      case 'vitals':
        return <Heart className={`${className} text-teal-600`} />;
      default:
        return <Settings className={`${className} text-teal-600`} />;
    }
  };

  const filteredDevices = activeCategory === 'all' 
    ? healthDevices 
    : healthDevices.filter(device => device.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-500 pt-32 pb-48">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Smart Health Monitoring</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Health Device Calculator
              <span className="block text-orange-100 mt-4 text-3xl md:text-4xl">
                Customize Your Wellness Solution
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Build your personalized health monitoring package with our interactive calculator
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { icon: Shield, label: 'HIPAA Compliant', value: 'Secure Data' },
                { icon: Bell, label: '24/7 Monitoring', value: 'Always On Guard' },
                { icon: BarChart, label: 'Smart Analytics', value: 'Real-time Insights' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <feature.icon className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-medium">{feature.label}</div>
                      <div className="text-white/80 text-sm">{feature.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 mb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Cycle Selector */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Choose Your Billing Cycle
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-center gap-4">
                  {['monthly', 'annual'].map((cycle) => (
                    <button
                      key={cycle}
                      onClick={() => setBillingCycle(cycle)}
                      className={`
                        px-6 py-3 rounded-lg font-medium transition-all
                        flex items-center gap-2
                        ${billingCycle === cycle
                          ? 'bg-teal-600 text-white shadow-lg scale-105'
                          : 'text-gray-600 hover:bg-gray-100'
                        }
                      `}
                    >
                      <Clock className="w-4 h-4" />
                      {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                      {cycle === 'annual' && (
                        <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Save 20%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Base Plan */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Base Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="p-6 rounded-xl border-2 border-teal-600 bg-gradient-to-br from-teal-50/50 to-transparent">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {baseSubscription[billingCycle].name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {baseSubscription[billingCycle].description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-teal-600">
                        €{baseSubscription[billingCycle].price}
                      </div>
                      <div className="text-sm text-gray-500">
                        /{billingCycle === 'monthly' ? 'mo' : 'year'}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {baseSubscription[billingCycle].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/80">
                        <Check className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Device Selection */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Select Your Devices
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex space-x-4 mb-6">
                  {['all', 'monitoring', 'safety', 'wellness'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        px-4 py-2 rounded-lg font-medium transition-all
                        ${activeCategory === category
                          ? 'bg-teal-600 text-white shadow-lg scale-105'
                          : 'text-gray-600 hover:bg-gray-100'
                        }
                      `}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredDevices.map((device) => (
                    <div key={device.id} className="p-6 rounded-xl border-2 border-teal-600 bg-gradient-to-br from-teal-50/50 to-transparent">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {device.name}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {device.description}
                          </p>
                        </div>
                        <DeviceIcon id={device.id} className="w-8 h-8" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        {device.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/80">
                            <Check className="w-4 h-4 text-teal-600" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-700 font-medium">One-Time Purchase</span>
                          <span className="text-teal-600 font-bold">€{device.oneTimePrice}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-700 font-medium">Monthly Subscription</span>
                          <span className="text-teal-600 font-bold">€{device.monthlySubscription}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Annual Subscription</span>
                          <span className="text-teal-600 font-bold">€{device.annualSubscription}</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => handleDeviceSelect({ id: device.id, purchaseType: 'oneTime' })}
                          className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-all hover:bg-teal-700"
                        >
                          Buy Now
                        </button>
                        <button
                          onClick={() => handleDeviceSelect({ id: device.id, purchaseType: 'subscription', billingCycle })}
                          className="w-full bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-lg font-medium mt-2 transition-all hover:bg-teal-50"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="p-6 rounded-xl border-2 border-teal-600 bg-gradient-to-br from-teal-50/50 to-transparent">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Total Cost
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Includes base plan and selected devices
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-teal-600">
                        €{totals.firstPaymentTotal.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        First Payment
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Base Plan</span>
                      <span className="text-teal-600 font-bold">€{baseSubscription[billingCycle].price}</span>
                    </div>
                    {selectedDevices.map((selection) => {
                      const device = healthDevices.find(d => d.id === selection.id);
                      if (!device) return null;
                      return (
                        <div key={device.id} className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">{device.name}</span>
                          <span className="text-teal-600 font-bold">
                            {selection.purchaseType === 'oneTime'
                              ? `€${device.oneTimePrice}`
                              : `€${device[`${billingCycle}Subscription`]}`
                            }
                          </span>
                        </div>
                      );
                    })}
                    {selectedDevices.length > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Shipping</span>
                        <span className="text-teal-600 font-bold">€{SHIPPING_COST}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => setShowComparison(!showComparison)}
                      className="w-full bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-lg font-medium transition-all hover:bg-teal-50"
                    >
                      {showComparison ? 'Hide Comparison' : 'Show Comparison'}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            {showComparison && (
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-transparent">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    Comparison Table
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="p-6 rounded-xl border-2 border-teal-600 bg-gradient-to-br from-teal-50/50 to-transparent">
                    <table className="w-full text-left">
                      <thead>
                        <tr>
                          <th className="text-gray-700 font-medium pb-4">Feature</th>
                          <th className="text-gray-700 font-medium pb-4">Base Plan</th>
                          {selectedDevices.map((selection) => {
                            const device = healthDevices.find(d => d.id === selection.id);
                            if (!device) return null;
                            return (
                              <th key={device.id} className="text-gray-700 font-medium pb-4">{device.name}</th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {baseSubscription[billingCycle].features.map((feature, idx) => (
                          <tr key={idx}>
                            <td className="text-gray-700 font-medium py-2">{feature}</td>
                            <td className="text-teal-600 font-bold py-2">
                              <Check className="w-4 h-4" />
                            </td>
                            {selectedDevices.map((selection) => {
                              const device = healthDevices.find(d => d.id === selection.id);
                              if (!device) return null;
                              return (
                                <td key={device.id} className="text-teal-600 font-bold py-2">
                                  {device.features.includes(feature) ? <Check className="w-4 h-4" /> : '-'}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;