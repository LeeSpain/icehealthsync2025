"use client";

import React from 'react';
import {
  Check,
  Download,
  Star,
  Users,
  Bot,
  ShieldCheck,
  Heart,
  Scale,
  Thermometer,
  Moon,
  Pill,
  Activity,
  Phone,
  Stethoscope,
  ChevronRight,
  Tablet
} from 'lucide-react';

// Feature Component
const Feature = ({ text }) => (
  <div className="flex items-start gap-3 group p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#008B8B]/5 hover:to-transparent transition-all duration-300">
    <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-full p-1.5 group-hover:scale-110 transition-all duration-300">
      <Check className="w-4 h-4 text-white" />
    </div>
    <span className="text-gray-800 font-medium group-hover:text-[#008B8B] transition-colors duration-300">
      {text}
    </span>
  </div>
);

// Device Card Component
const DeviceCard = ({ device }) => (
  <div className="group bg-gradient-to-b from-white via-white to-[#008B8B]/5 rounded-xl p-6 border border-[#008B8B]/10 hover:border-[#008B8B]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#008B8B]/10">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-xl bg-gradient-to-br from-[#008B8B] to-[#20B2AA] text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg">
        {React.createElement(device.icon, { size: 24 })}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#008B8B] transition-colors duration-300">{device.name}</h3>
        <p className="text-sm text-[#008B8B]">{device.category}</p>
      </div>
    </div>
    <div className="space-y-3 mb-6">
      {device.features.map((feature, i) => (
        <Feature key={i} text={feature} />
      ))}
    </div>
    <div className="pt-6 border-t border-[#008B8B]/10">
      <div className="flex items-center justify-between mb-4 px-4 py-3 bg-gradient-to-r from-[#008B8B]/10 to-transparent rounded-lg">
        {device.price && (
          <div>
            <span className="text-2xl font-bold text-gray-900">€{device.price}</span>
            <span className="text-sm text-gray-600"> one-time</span>
          </div>
        )}
        <div>
          <span className="text-lg font-bold text-gray-900">€{device.monthlyFee}</span>
          <span className="text-sm text-gray-600">/month</span>
        </div>
      </div>
      <button 
        className="w-full py-3.5 rounded-lg font-medium bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white hover:opacity-90 transition-all duration-300"
        onClick={() => alert(`Selected: ${device.name}`)}
      >
        Learn More
      </button>
    </div>
  </div>
);

// Service Card Component
const ServiceCard = ({ service }) => (
  <div className="group bg-gradient-to-b from-white via-white to-[#FF0000]/5 rounded-xl p-6 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF0000]/10">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-xl bg-gradient-to-br from-[#FF0000] to-[#8B0000] text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg">
        {React.createElement(service.icon, { size: 24 })}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#FF0000] transition-colors duration-300">{service.name}</h3>
        <p className="text-sm text-[#FF0000]">{service.category}</p>
      </div>
    </div>
    <div className="space-y-3 mb-6">
      {service.features.map((feature, i) => (
        <Feature key={i} text={feature} />
      ))}
    </div>
    <div className="pt-6 border-t border-[#FF0000]/10">
      <div className="flex items-center justify-between mb-4 px-4 py-3 bg-gradient-to-r from-[#FF0000]/10 to-transparent rounded-lg">
        {service.price && (
          <div>
            <span className="text-2xl font-bold text-gray-900">€{service.price}</span>
            <span className="text-sm text-gray-600"> one-time</span>
          </div>
        )}
        <div>
          <span className="text-lg font-bold text-gray-900">€{service.monthlyFee}</span>
          <span className="text-sm text-gray-600">/month</span>
        </div>
      </div>
      <button 
        className="w-full py-3.5 rounded-lg font-medium bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white hover:opacity-90 transition-all duration-300"
        onClick={() => alert(`Selected: ${service.name}`)}
      >
        Learn More
      </button>
    </div>
  </div>
);

// Featured Product Component
const FeaturedProduct = () => (
  <div className="mb-24">
    <div className="bg-gradient-to-b from-white via-white to-[#008B8B]/5 rounded-2xl overflow-hidden border border-[#008B8B]/20 shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Info */}
        <div className="p-8 lg:p-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008B8B]/10 text-[#008B8B] font-medium text-sm">
            Featured Product
          </span>
          
          <h2 className="text-3xl font-bold mt-6 mb-4">
            HealthSync Dashboard Display
          </h2>
          
          <p className="text-gray-600 text-lg mb-6">
            Transform any surface into your personal health command center with real-time monitoring and alerts.
          </p>

          <div className="space-y-4 mb-8">
            <Feature text="10-inch HD touchscreen display" />
            <Feature text="Real-time health metrics dashboard" />
            <Feature text="Medication reminders and alerts" />
            <Feature text="Visual health trends and insights" />
            <Feature text="Emergency alert notifications" />
            <Feature text="Compatible with all HealthSync devices" />
          </div>

          <div className="bg-[#008B8B]/5 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-3xl font-bold text-gray-900">€199.99</span>
                <span className="text-gray-600 text-sm ml-2">One-time payment</span>
              </div>
              <div className="text-[#008B8B] text-sm font-medium">
                Optional Enhancement
              </div>
            </div>
            <button 
              className="w-full py-4 rounded-xl font-medium bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white hover:opacity-90 transition-all duration-300"
              onClick={() => alert('Display tablet selected')}
            >
              Add to Your Package
            </button>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0" />
              <p>Free software updates and new features</p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0" />
              <p>24/7 technical support included</p>
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative bg-gradient-to-br from-[#008B8B]/10 to-[#20B2AA]/10 p-8 lg:p-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,139,139,0.1)_1px,_transparent_0)] bg-[size:20px_20px]" />
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/api/placeholder/600/400" 
              alt="HealthSync Dashboard Display" 
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ShopPage Component
const ShopPage = () => {
  // Data objects
  const aiDevices = [
    {
      name: "Guardian Button",
      price: "59.99",
      monthlyFee: "1.99",
      icon: ShieldCheck,
      category: "Safety",
      features: [
        "One-touch emergency alerts",
        "Real-time GPS tracking",
        "Fall detection",
        "Two-way communication",
        "Waterproof design",
        "Long battery life"
      ]
    },
    {
      name: "Heart Rate Monitor",
      price: "89.99",
      monthlyFee: "1.99",
      icon: Heart,
      category: "Health",
      features: [
        "24/7 heart monitoring",
        "ECG functionality",
        "Arrhythmia detection",
        "Sleep tracking",
        "Exercise monitoring",
        "Mobile app integration"
      ]
    },
    {
      name: "Smart Scales",
      price: "99.99",
      monthlyFee: "1.99",
      icon: Scale,
      category: "Health",
      features: [
        "Weight tracking",
        "Body composition analysis",
        "BMI calculation",
        "Multiple user profiles",
        "Trend tracking",
        "Smart device sync"
      ]
    },
    {
      name: "Thermometer",
      price: "49.99",
      monthlyFee: "1.99",
      icon: Thermometer,
      category: "Health",
      features: [
        "Quick readings",
        "Non-contact design",
        "History tracking",
        "Multiple profiles",
        "Easy cleaning"
      ]
    },
    {
      name: "Bed Sensor",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Moon,
      category: "Health",
      features: [
        "Sleep tracking",
        "Heart rate monitoring",
        "Movement detection",
        "Fall alerts",
        "Sleep quality scoring"
      ]
    },
    {
      name: "Family Dashboard",
      monthlyFee: "1.99",
      perUser: true,
      icon: Users,
      category: "Family",
      features: [
        "Multiple user profiles",
        "Real-time health updates",
        "Customizable alerts",
        "Emergency contacts",
        "Data sharing options",
      ]
    }
  ];

  const professionalServices = [
    {
      name: "Med Dispenser",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Pill,
      category: "Professional Monitoring",
      features: [
        "Professional photo verification",
        "Expert medication management",
        "Real-time compliance tracking",
        "24/7 monitoring team",
        "Automated dispensing",
        "Refill coordination"
      ]
    },
    {
      name: "Glucose Monitor",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Activity,
      category: "Professional Monitoring",
      features: [
        "Professional measurement review",
        "24/7 monitoring team",
        "Expert health oversight",
        "Trend analysis",
        "Real-time support",
        "Healthcare provider sharing"
      ]
    },
    {
      name: "SOS Call Centre",
      monthlyFee: "19.99",
      icon: Phone,
      category: "Emergency Services",
      features: [
        "24/7 emergency response",
        "Professional call center team",
        "Priority handling",
        "Medical data access",
        "Emergency contact coordination",
        "Multilingual support"
      ]
    },
    {
      name: "Personal Nurse Service",
      monthlyFee: "50.00",
      icon: Stethoscope,
      category: "Premium Care",
      features: [
        "Dedicated personal nurse",
        "Daily video check-ins",
        "24/7 call-back support",
        "Personalized care plans",
        "Health & wellness guidance",
        "Therapeutic support"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-md">
              Smart Health Monitoring
              <span className="block mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                For Your Peace of Mind
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Start with our free app and unlock premium features for complete health monitoring
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* App Tiers */}
        <div className="grid md:grid-cols-2 gap-8 -mt-16 mb-16 relative z-20">
          {/* Free App Card */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative h-48 bg-gradient-to-br from-[#008B8B] to-[#20B2AA]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Download className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Free App</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
              </div>
              <div className="space-y-4 mb-6">
                <Feature text="Basic health monitoring" />
                <Feature text="Single emergency contact" />
                <Feature text="Standard SOS alerts" />
                <Feature text="Realtime Notifications" />
                <Feature text="Basic dashboard" />
              </div>
              <button 
                onClick={() => window.location.href = '/products/free-app'}
                className="w-full py-3 rounded-xl font-medium bg-gray-900 text-white"
              >
                More Information
              </button>
            </div>
          </div>

          {/* Premium App Card */}
          <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#008B8B]">
            <div className="relative h-48 bg-gradient-to-br from-[#008B8B] to-[#20B2AA]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Star className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Premium App</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  €4.99
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <Feature text="All Basic features" />
                <Feature text="Access to all health devices" />
                <Feature text="Up to 5 emergency contacts" />
                <Feature text="Priority SOS response" />
                <Feature text="24/7 AI support" />
              </div>
              <button 
                onClick={() => window.location.href = '/products/premium'}
                className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white"
              >
                More Information
              </button>
            </div>
          </div>
        </div>

        {/* New Featured Product Section */}
        <FeaturedProduct />

        {/* AI-Supported Devices */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008B8B]/10 text-[#008B8B]">
              <Bot className="w-4 h-4" />
              AI-Powered Monitoring
            </span>
            <h2 className="text-3xl font-bold mt-4">Self-Monitoring Devices</h2>
            <p className="text-gray-600 mt-2">Requires €4.99/month Premium subscription</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiDevices.map((device, index) => (
              <DeviceCard key={index} device={device} />
            ))}
          </div>
        </div>

        {/* Professional Services Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF0000]/10 text-[#FF0000] font-medium">
              <Users className="w-4 h-4" />
              Professional Services
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-3">Expert Care Solutions</h2>
            <p className="text-gray-600">Professional monitoring and support services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionalServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Important Notes Section */}
        <div className="mb-24">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-bold text-xl text-gray-900 mb-6">Important Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
                <p className="text-gray-600">Premium subscription (€4.99/month) required for AI-powered devices</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
                <p className="text-gray-600">Professional services can be subscribed to independently</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
                <p className="text-gray-600">Device purchases are one-time fees plus monthly subscription</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
                <p className="text-gray-600">Professional monitoring services available 24/7</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
                <p className="text-gray-600">Shipping costs calculated at checkout</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-xl mb-4">How do professional services work?</h3>
              <p className="text-gray-600">Our professional services operate independently with dedicated monitoring teams. Each service provides specialized care and support, available 24/7.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-xl mb-4">What's included in device monitoring?</h3>
              <p className="text-gray-600">Professional monitoring includes real-time oversight, expert review of data, and immediate response to alerts or concerns.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-xl mb-4">Can I combine different services?</h3>
              <p className="text-gray-600">Yes, all services can be combined. Each professional service operates independently, allowing you to choose what best fits your needs.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-xl mb-4">How does the Personal Nurse Service differ?</h3>
              <p className="text-gray-600">The Personal Nurse Service provides dedicated one-on-one care with daily check-ins and personalized support, separate from device monitoring.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Begin your journey to better health monitoring with our free app. Upgrade anytime to access premium features and professional services.
            </p>
            <button 
              onClick={() => window.location.href = '/products/free-app'}
              className="bg-white text-[#008B8B] px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              More Information
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// Main Page Component
const Page = () => {
  return (
    <main className="relative">
      <ShopPage />
    </main>
  );
};

export default Page;