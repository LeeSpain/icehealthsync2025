"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Droplet, Activity, Timer, Bell, 
  Shield, Wifi, Smartphone, Heart,
  Clock, ChevronRight, ArrowRight,
  Cloud, Share2, Lock, LineChart,
  Settings, Plus, CheckCircle
} from 'lucide-react';

export default function GlucoseMonitorPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4682B4] to-[#1E90FF]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4682B4] animate-pulse" />
                  <span className="text-sm font-medium">Continuous Glucose Monitoring</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                ICEHealthSync
                <span className="block text-[#FF7F50] mt-2">Glucose Monitor</span>
              </h1>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Advanced continuous glucose monitoring with real-time insights and predictive analytics for proactive diabetes management.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-white text-[#4682B4] rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                  Try Free
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 bg-[#4682B4]/50 backdrop-blur-sm text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#4682B4]/60 transition-colors">
                  Watch Demo
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Reading Interval", value: "5 min" },
                  { label: "Accuracy", value: "±5%" },
                  { label: "Sensor Life", value: "14 days" }
                ].map((stat, idx) => (
                  <div key={idx} className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Preview with Live Demo */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4682B4]/20 via-[#1E90FF]/10 to-[#4682B4]/20 blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="p-4">
                  {/* Live Glucose Reading Demo */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4682B4] animate-pulse" />
                        <span className="text-white/90 text-xs">Live Reading</span>
                      </div>
                      <span className="text-white/80 text-xs">Last update: Just now</span>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">5.6</div>
                    <div className="text-white/80 text-xs">mmol/L</div>
                    <div className="mt-3 h-12 relative overflow-hidden">
                      {/* Animated glucose graph would go here */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4682B4]/20 to-[#1E90FF]/20 rounded-lg" />
                    </div>
                  </div>

                  <Image
                    src="/images/glucose-monitor/device-preview.png"
                    alt="ICEHealthSync Glucose Monitor"
                    width={500}
                    height={300}
                    className="w-full rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Integration Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4682B4]/10 px-4 py-2 rounded-full mb-4">
              <Cloud className="w-4 h-4 text-[#4682B4]" />
              <span className="text-[#4682B4] font-medium">Cloud-Based Platform</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Seamless Data Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access your health data anywhere, anytime, with automatic syncing and real-time updates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Cloud Sync",
                description: "Automatic data synchronization across all your devices"
              },
              {
                icon: Share2,
                title: "Share Instantly",
                description: "Share readings with family and healthcare providers in real-time"
              },
              {
                icon: Lock,
                title: "Secure Access",
                description: "Enterprise-grade encryption and privacy controls"
              }
            ].map((feature, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-[#4682B4] to-[#1E90FF] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white rounded-2xl p-4 border border-[#4682B4]/10">
                  <div className="w-10 h-10 rounded-xl bg-[#4682B4]/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-[#4682B4]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gradient-to-b from-[#4682B4]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#4682B4]/10 px-4 py-2 rounded-full mb-4">
                <LineChart className="w-4 h-4 text-[#4682B4]" />
                <span className="text-[#4682B4] font-medium">Smart Analytics</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Insights
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Advanced analytics and predictive insights help you make informed decisions about your health.
              </p>

              <div className="space-y-4">
                {[
                  "Trend analysis and pattern recognition",
                  "Predictive glucose forecasting",
                  "Meal and activity impact tracking",
                  "Personalized insights and recommendations",
                  "Automated reports for healthcare providers"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#4682B4]/10 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-[#4682B4]" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4682B4]/20 via-[#1E90FF]/10 to-[#4682B4]/20 blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#4682B4]/10 overflow-hidden">
                <div className="p-4 border-b border-[#4682B4]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">Glucose Dashboard</h3>
                      <p className="text-xs text-gray-600">Real-time monitoring</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="relative">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#4682B4] rounded-full animate-ping" />
                      </button>
                      <button className="w-6 h-6 rounded-lg bg-[#4682B4]/10 flex items-center justify-center">
                        <Settings className="w-3 h-3 text-[#4682B4]" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#4682B4]/10 rounded-xl p-3">
                      <div className="text-xs text-[#4682B4] mb-1">Average Glucose</div>
                      <div className="text-xl font-bold text-gray-900">5.8 mmol/L</div>
                      <div className="text-xs text-gray-600">Past 7 days</div>
                    </div>
                    <div className="bg-[#4682B4]/10 rounded-xl p-3">
                      <div className="text-xs text-[#4682B4] mb-1">Time in Range</div>
                      <div className="text-xl font-bold text-gray-900">92%</div>
                      <div className="text-xs text-gray-600">Past 24 hours</div>
                    </div>
                  </div>

                  <Image
                    src="/images/glucose-monitor/dashboard-preview.png"
                    alt="Glucose Monitor Dashboard"
                    width={500}
                    height={250}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#4682B4] to-[#1E90FF] relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Take Control of Your Health Journey
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have transformed their diabetes management with ICEHealthSync.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-white text-[#4682B4] rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-[#4682B4]/50 backdrop-blur-sm text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#4682B4]/60 transition-colors">
                Watch Demo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}