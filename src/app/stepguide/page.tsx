"use client";

import React from 'react';
import {
  Download,
  Star,
  Shield,
  Activity,
  Users,
  Pill,
  ThermometerIcon,
  Brain,
  Plus,
  Phone,
  Stethoscope,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Heart,
  HeartPulse
} from 'lucide-react';

// First define StepCard component
const StepCard = ({ step, index }) => (
  <div className="bg-white rounded-2xl p-8 border border-gray-200 relative">
    {/* Step Number */}
    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
      <span className="text-[#008B8B] font-bold">0{index + 1}</span>
    </div>

    {/* Header */}
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-[#008B8B]/10 rounded-xl flex items-center justify-center">
        <step.icon className="w-6 h-6 text-[#008B8B]" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>

    {/* Sub-steps if present */}
    {step.substeps && (
      <div className="space-y-4 mb-6">
        {step.substeps.map((substep, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#008B8B]/10 flex items-center justify-center mt-0.5">
              <span className="text-sm text-[#008B8B] font-medium">{idx + 1}</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{substep.title}</h3>
              <p className="text-sm text-gray-600">{substep.detail}</p>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Features if present */}
    {step.features && (
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {step.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    )}

    {/* Device Categories if present */}
    {step.deviceCategories && (
      <div className="space-y-6 mb-6">
        {step.deviceCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-4">{category.name}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-medium mb-2">{item.name}</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    <div>Device: €{item.oneTime}</div>
                    <div>Monthly: €{item.monthly}</div>
                  </div>
                  <div className="space-y-1">
                    {item.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#008B8B]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Services if present */}
    {step.services && (
      <div className="space-y-6 mb-6">
        {step.services.map((category, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-medium mb-2">{item.name}</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    {item.oneTime && <div>Device: €{item.oneTime}</div>}
                    <div>Monthly: €{item.monthly}</div>
                  </div>
                  <div className="space-y-1">
                    {item.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#008B8B]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Monthly Total Example if present */}
    {(step.monthlyTotal || step.monthlyExample) && (
      <div className="bg-[#008B8B]/5 rounded-xl p-4 mb-6">
        <h3 className="font-medium mb-2">
          {step.monthlyTotal?.title || step.monthlyExample?.title}
        </h3>
        <div className="space-y-1 text-sm text-gray-600">
          {(step.monthlyTotal?.example || step.monthlyExample?.items).map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
          <div className="text-[#008B8B] font-medium pt-2">
            {step.monthlyTotal?.total || step.monthlyExample?.total}
          </div>
        </div>
      </div>
    )}

    {/* Cost if present */}
    {step.cost && (
      <div className="text-sm text-gray-500 mt-4">
        {step.cost}
      </div>
    )}

    {step.monthlyCost && (
      <div className="bg-[#008B8B]/5 rounded-xl p-4">
        <div className="font-medium">€{step.monthlyCost.base}/month</div>
        <div className="text-sm text-gray-600">{step.monthlyCost.billing}</div>
        <div className="text-sm text-gray-600">{step.monthlyCost.includes}</div>
      </div>
    )}
  </div>
);

// Then define main component
const StepGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Start with Free App",
      icon: Download,
      description: "Download ICEHealthSync app from your device's app store",
      features: [
        "Basic health monitoring",
        "Single emergency contact",
        "Standard SOS alerts",
        "Basic dashboard"
      ],
      action: "Download Free",
      cost: "Free"
    },
    {
      step: 2,
      title: "Upgrade to Premium",
      icon: Star,
      description: "Unlock full platform capabilities with premium subscription",
      features: [
        "AI-powered health monitoring",
        "Up to 5 emergency contacts",
        "Advanced health analytics",
        "Access to all devices"
      ],
      action: "Upgrade Now",
      cost: "€4.99/month"
    },
    {
      step: 3,
      title: "Add Basic Monitoring",
      icon: Shield,
      description: "Essential devices for safety and basic health tracking",
      devices: [
        {
          name: "Guardian Button",
          price: "€59.99",
          subscription: "€1.99/month"
        },
        {
          name: "Heart Rate Monitor",
          price: "€89.99",
          subscription: "€1.99/month"
        },
        {
          name: "Family Dashboard",
          subscription: "€1.99/month per user"
        }
      ],
      action: "View Devices"
    },
    {
      step: 4,
      title: "Enhanced Health Monitoring",
      icon: Activity,
      description: "Additional devices for comprehensive health tracking",
      devices: [
        {
          name: "Smart Scales",
          price: "€99.99",
          subscription: "€1.99/month"
        },
        {
          name: "Thermometer",
          price: "€49.99",
          subscription: "€1.99/month"
        },
        {
          name: "Bed Sensor",
          price: "€149.99",
          subscription: "€19.99/month"
        }
      ],
      action: "Explore Devices"
    },
    {
      step: 5,
      title: "Professional Monitoring",
      icon: Pill,
      description: "Expert monitoring services for specialized care",
      services: [
        {
          name: "Med Dispenser",
          price: "€149.99",
          subscription: "€19.99/month",
          features: ["Photo verification", "Expert oversight", "24/7 monitoring"]
        },
        {
          name: "Glucose Monitor",
          price: "€149.99",
          subscription: "€19.99/month",
          features: ["Professional review", "Trend analysis", "Expert support"]
        }
      ],
      action: "Add Services"
    },
    {
      step: 6,
      title: "Premium Care Services",
      icon: Stethoscope,
      description: "Additional professional support services",
      services: [
        {
          name: "SOS Call Centre",
          subscription: "€19.99/month",
          features: ["24/7 emergency response", "Professional monitoring", "Priority handling"]
        },
        {
          name: "Personal Nurse",
          subscription: "€50.00/month",
          features: ["Dedicated nurse", "Virtual consultations", "Holistic care"]
        }
      ],
      action: "Explore Care"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join ICEHealthSync</h1>
          <p className="text-xl text-gray-600">Follow these steps to build your personalized health monitoring system</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
                <span className="text-[#008B8B] font-bold">0{step.step}</span>
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#008B8B]/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#008B8B]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Features if present */}
              {step.features && (
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Devices if present */}
              {step.devices && (
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {step.devices.map((device, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold mb-2">{device.name}</h3>
                      {device.price && (
                        <div className="text-sm text-gray-600">Device: {device.price}</div>
                      )}
                      <div className="text-sm text-gray-600">
                        Subscription: {device.subscription}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Services if present */}
              {step.services && (
                <div className="space-y-4 mb-6">
                  {step.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{service.name}</h3>
                        <div className="text-right">
                          {service.price && (
                            <div className="text-sm text-gray-600">Device: {service.price}</div>
                          )}
                          <div className="text-sm text-gray-600">
                            Service: {service.subscription}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, fidx) => (
                          <span key={fidx} className="text-sm bg-white px-2 py-1 rounded-md text-gray-600">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              <button className="bg-[#008B8B] text-white px-6 py-3 rounded-xl hover:bg-[#20B2AA] transition-colors flex items-center gap-2">
                {step.action}
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Cost if present */}
              {step.cost && (
                <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                  {step.cost}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold mb-4">Important Notes:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              Premium subscription (€4.99/month) required for all devices
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              Professional services can be subscribed independently
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              All devices include shipping and setup support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              No long-term commitments - cancel anytime
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepGuide;