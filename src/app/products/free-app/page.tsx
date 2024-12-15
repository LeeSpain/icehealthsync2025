"use client";

import React from 'react';
import {
  Heart, Phone, Bell, Activity, Calendar, Clock,
  Check, ArrowRight, Star, Download, Smartphone, 
  Apple, AlertCircle, Users, Settings, Menu,
  PieChart, TrendingUp, Battery, User, Shield,
  Brain, Zap, LineChart, MessageCircle, Globe
} from 'lucide-react';

const AnimatedMetric = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-white/60 text-sm">{label}</div>
        <div className="text-white font-bold text-lg">{value}</div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, benefits }) => (
  <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008B8B]/10 to-[#20B2AA]/10 
      flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-[#008B8B]" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="space-y-2">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start gap-2">
          <Check className="w-4 h-4 text-[#008B8B] mt-1" />
          <span className="text-sm text-gray-600">{benefit}</span>
        </div>
      ))}
    </div>
  </div>
);

const Page = () => {
  const metrics = [
    { icon: Heart, label: "Active Users", value: "50,000+", color: "bg-rose-500" },
    { icon: Shield, label: "Emergency Assists", value: "15,000+", color: "bg-blue-500" },
    { icon: Activity, label: "Health Checks", value: "1M+", color: "bg-emerald-500" },
    { icon: Users, label: "Family Networks", value: "10,000+", color: "bg-purple-500" }
  ];

  const features = [
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Comprehensive health tracking with AI-powered insights",
      benefits: [
        "Real-time vital signs monitoring",
        "AI health pattern detection",
        "Personalized health insights",
        "Activity and sleep tracking"
      ]
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Quick access to emergency support when needed",
      benefits: [
        "One-touch emergency contact",
        "Location sharing during emergencies",
        "Medical info quick access",
        "Emergency service coordination"
      ]
    },
    {
      icon: Brain,
      title: "Smart AI Assistant",
      description: "Your personal health companion powered by AI",
      benefits: [
        "Health trend analysis",
        "Medication reminders",
        "Lifestyle recommendations",
        "Symptom checking"
      ]
    },
    {
      icon: Users,
      title: "Family Connection",
      description: "Keep your loved ones informed and connected",
      benefits: [
        "Family member updates",
        "Care coordination",
        "Shared calendar",
        "Emergency notifications"
      ]
    },
    {
      icon: LineChart,
      title: "Health Analytics",
      description: "Understand your health trends better",
      benefits: [
        "Visual health dashboards",
        "Progress tracking",
        "Custom health goals",
        "Monthly health reports"
      ]
    },
    {
      icon: Globe,
      title: "Connected Care",
      description: "Seamless integration with healthcare services",
      benefits: [
        "Healthcare provider sharing",
        "Medical history access",
        "Appointment management",
        "Prescription tracking"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008B8B] to-[#20B2AA] pt-32 pb-48 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-6 py-2 text-white mb-8">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  Trusted by 50,000+ Users
                  <Star className="w-4 h-4 text-yellow-300" />
                </span>
              </div>
              
              <h1 className="text-6xl font-bold text-white mb-6">
                Your Personal
                <span className="block mt-2 text-[#FF7F50]">Health Guardian</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                Experience the future of health monitoring with our AI-powered platform.
                Stay connected, protected, and informed about your health - all in one place.
              </p>

              {/* Download Buttons */}
              <div className="flex gap-4 mb-12">
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 
                  transition-all duration-300 flex items-center gap-2 group hover:scale-105">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-medium">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 
                  transition-all duration-300 flex items-center gap-2 group hover:scale-105">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <AnimatedMetric key={index} {...metric} />
                ))}
              </div>
            </div>

            {/* Right Column - App Preview */}
            <div className="relative hidden lg:block">
              {/* Add phone mockup with app preview */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative -mt-24 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;