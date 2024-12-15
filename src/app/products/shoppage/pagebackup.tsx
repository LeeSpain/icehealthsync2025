"use client";

import React from 'react';
import Link from 'next/link';
import {
  Shield, Activity, Heart, Users, Pill, ThermometerIcon, Brain,
  Check, ArrowRight, Star, Plus, Info, ShoppingCart, Download,
  Stethoscope, Phone, Bot, Scale, Bell, Moon
} from 'lucide-react';
import { Feature, ProductCard } from './shop-page-components';

const ShopPage = () => {
  const aiDevices = [
    {
      name: "Guardian Button",
      price: "59.99",
      monthlyFee: "1.99",
      icon: Shield,
      category: "Safety",
      features: [
        "One-touch emergency alerts",
        "Real-time GPS tracking",
        "Fall detection",
        "Two-way communication",
        "Waterproof design",
        "Long battery life"
      ],
      moreInfoLink: "/products/guardian-button"
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
      ],
      moreInfoLink: "/products/heart-rate-monitor"
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
      ],
      moreInfoLink: "/products/smart-scales"
    },
    {
      name: "Thermometer",
      price: "49.99",
      monthlyFee: "1.99",
      icon: ThermometerIcon,
      category: "Health",
      features: [
        "Quick readings",
        "Non-contact design",
        "History tracking",
        "Multiple profiles",
        "Easy cleaning"
      ],
      moreInfoLink: "/products/thermometer"
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
      ],
      moreInfoLink: "/products/bed-sensor"
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
        "Activity tracking"
      ],
      moreInfoLink: "/products/family-dashboard"
    }
  ];

  const professionalServices = [
    {
      name: "Med Dispenser",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Pill,
      category: "Professional Monitoring",
      requiresPro: true,
      features: [
        "Professional photo verification",
        "Expert medication management",
        "Real-time compliance tracking",
        "24/7 monitoring team",
        "Automated dispensing",
        "Refill coordination"
      ],
      moreInfoLink: "/products/med-dispenser"
    },
    {
      name: "Glucose Monitor",
      price: "149.99",
      monthlyFee: "19.99",
      icon: Activity,
      category: "Professional Monitoring",
      requiresPro: true,
      features: [
        "Professional measurement review",
        "24/7 monitoring team",
        "Expert health oversight",
        "Trend analysis",
        "Real-time support",
        "Healthcare provider sharing"
      ],
      moreInfoLink: "/products/glucose-monitor"
    },
    {
      name: "SOS Call Centre",
      monthlyFee: "19.99",
      icon: Phone,
      category: "Emergency Services",
      requiresPro: true,
      features: [
        "24/7 emergency response",
        "Professional call center team",
        "Priority handling",
        "Medical data access",
        "Emergency contact coordination",
        "Multilingual support"
      ],
      moreInfoLink: "/products/sos-call-centre"
    },
    {
      name: "Personal Nurse Service",
      monthlyFee: "50.00",
      icon: Stethoscope,
      category: "Premium Care",
      requiresPro: true,
      features: [
        "Dedicated personal nurse",
        "Daily video check-ins",
        "24/7 call-back support",
        "Personalized care plans",
        "Health & wellness guidance",
        "Therapeutic support"
      ],
      moreInfoLink: "/products/personal-nurse-service"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#008B8B] to-[#20B2AA] pt-32 pb-48">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-6">
              Smart Health Monitoring
              <span className="block mt-2">For Your Peace of Mind</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Start with our free app and unlock premium features for complete health monitoring
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* App Tiers */}
        <div className="grid md:grid-cols-2 gap-8 -mt-24 mb-16 relative z-20">
          {/* Free App */}
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
                <p className="text-gray-600">Forever</p>
              </div>
              <div className="space-y-4 mb-6">
                <Feature text="Basic health monitoring" />
                <Feature text="Single emergency contact" />
                <Feature text="Standard SOS alerts" />
                <Feature text="Basic dashboard" />
              </div>
              <Link href="/products/free-app">
                <button className="w-full py-3 rounded-xl font-medium bg-gray-900 text-white">
                  More Information
                </button>
              </Link>
            </div>
          </div>

          {/* Premium App */}
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
              <Link href="/products/premium">
                <button className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white">
                  More Information
                </button>
              </Link>
            </div>
          </div>
        </div>

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
              <ProductCard key={index} product={device} />
            ))}
          </div>
        </div>

        {/* Professional Support Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500]/10 text-[#FF4500]">
              <Users className="w-4 h-4" />
              Professional Services
            </span>
            <h2 className="text-3xl font-bold mt-4">Expert Care Solutions</h2>
            <p className="text-gray-600 mt-2">Professional monitoring and support services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionalServices.map((service, index) => (
              <ProductCard key={index} product={service} />
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-16">
          <h3 className="font-bold text-gray-900 mb-4">Important Information</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
              <p className="text-gray-600">Premium subscription (€4.99/month) required for AI-powered devices</p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
              <p className="text-gray-600">Professional services can be subscribed to independently</p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
              <p className="text-gray-600">Device purchases are one-time fees plus monthly subscription</p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
              <p className="text-gray-600">Professional monitoring services available 24/7</p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-1" />
              <p className="text-gray-600">Shipping costs calculated at checkout</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Everything you need to know about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">How do professional services work?</h3>
              <p className="text-gray-600">Our professional services operate independently with dedicated monitoring teams. Each service provides specialized care and support, available 24/7.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">What's included in device monitoring?</h3>
              <p className="text-gray-600">Professional monitoring includes real-time oversight, expert review of data, and immediate response to alerts or concerns.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Can I combine different services?</h3>
              <p className="text-gray-600">Yes, all services can be combined. Each professional service operates independently, allowing you to choose what best fits your needs.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">How does the Personal Nurse Service differ?</h3>
              <p className="text-gray-600">The Personal Nurse Service provides dedicated one-on-one care with daily check-ins and personalized support, separate from device monitoring.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-2xl p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Begin your journey to better health monitoring with our free app. Upgrade anytime to access premium features and professional services.
          </p>
          <Link href="/products/free-app">
            <button className="bg-white text-[#008B8B] px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              More Information
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;