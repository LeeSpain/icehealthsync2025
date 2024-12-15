"use client";

import React from 'react';
import { 
  Shield, Battery, Wifi, 
  Bell, Clock, Activity,
  Heart, ArrowRight, ChevronRight,
  Settings, Lock, Plus,
  CheckCircle
} from 'lucide-react';

export default function MedDispenserPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#20B2AA] to-[#008B8B]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#20B2AA] animate-pulse" />
                  <span className="text-sm font-medium">Smart Medication Management</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-4">
                ICEHealthSync
                <span className="block text-[#FF7F50] mt-2">Med Dispenser</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Revolutionizing medication management with AI-powered automation, ensuring safety, independence, and peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-8 py-3 bg-white text-[#20B2AA] rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 bg-[#20B2AA]/50 backdrop-blur-sm text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#20B2AA]/60 transition-colors">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Dispensing Accuracy", value: "99.99%" },
                  { label: "Capacity", value: "30 Days" },
                  { label: "Compliance Rate", value: "95%" }
                ].map((stat, idx) => (
                  <div key={idx} className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Preview */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#20B2AA]/20 via-[#008B8B]/10 to-[#20B2AA]/20 blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <img
                  src="/api/placeholder/600/400"
                  alt="Med Dispenser"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#20B2AA]/10 px-4 py-2 rounded-full mb-4">
              <Clock className="w-5 h-5 text-[#20B2AA]" />
              <span className="text-[#20B2AA] font-medium">How It Works</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Intelligent Medication Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Automated dispensing, real-time monitoring, and smart notifications ensure perfect medication compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Automated Dispensing",
                description: "Precise medication release at scheduled times with foolproof verification"
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Multi-channel alerts via device, mobile app, and SMS for medication times"
              },
              {
                icon: Shield,
                title: "Safety Net Alerts",
                description: "Immediate caregiver notifications for missed doses and low supplies"
              }
            ].map((feature, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-[#20B2AA] to-[#008B8B] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative bg-white rounded-2xl p-6 border border-[#20B2AA]/10">
                  <div className="w-12 h-12 rounded-xl bg-[#20B2AA]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#20B2AA]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#20B2AA]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Heart className="w-5 h-5 text-[#20B2AA]" />
              <span className="text-[#20B2AA] font-medium">Benefits</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Transform Healthcare Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Improved Health Outcomes",
                description: "Reduce medication-related hospitalizations through perfect adherence",
                stats: "45% reduction in errors"
              },
              {
                title: "Enhanced Independence",
                description: "Enable users to manage medications confidently and autonomously",
                stats: "90% user satisfaction"
              },
              {
                title: "Caregiver Relief",
                description: "Reduce supervision burden and provide peace of mind",
                stats: "6+ hours saved weekly"
              },
              {
                title: "Cost Savings",
                description: "Prevent expensive complications from medication non-compliance",
                stats: "60% cost reduction"
              },
              {
                title: "Real-time Monitoring",
                description: "Track adherence and receive instant notifications",
                stats: "24/7 oversight"
              },
              {
                title: "Data Insights",
                description: "Generate comprehensive reports for healthcare providers",
                stats: "100% transparency"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-[#20B2AA]/10 hover:border-[#20B2AA]/20 transition-colors">
                <div className="text-2xl font-bold text-[#20B2AA] mb-2">
                  {benefit.stats}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Integration Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#20B2AA]/10 px-4 py-2 rounded-full mb-4">
                <Activity className="w-5 h-5 text-[#20B2AA]" />
                <span className="text-[#20B2AA] font-medium">Smart Integration</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Seamless Dashboard Integration
              </h2>
              
              <p className="text-xl text-gray-600 mb-6">
                Monitor medication adherence, track health metrics, and manage settings directly from the ICEHealthSync dashboard.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time medication tracking",
                  "Customizable alert settings",
                  "Family access controls",
                  "Healthcare provider portal",
                  "Comprehensive analytics"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#20B2AA]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#20B2AA]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#20B2AA]/20 via-[#008B8B]/10 to-[#20B2AA]/20 blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#20B2AA]/10 overflow-hidden">
                <div className="p-4 border-b border-[#20B2AA]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Device Dashboard</h3>
                      <p className="text-sm text-gray-600">Real-time monitoring</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="relative">
                        <Bell className="w-5 h-5 text-gray-400" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#20B2AA] rounded-full animate-ping" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-[#20B2AA]/10 flex items-center justify-center">
                        <Settings className="w-4 h-4 text-[#20B2AA]" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#20B2AA]/10 rounded-xl p-3">
                      <div className="text-sm text-[#20B2AA] mb-1">Next Dose</div>
                      <div className="text-2xl font-bold text-gray-900">2h 15m</div>
                      <div className="text-sm text-gray-600">Medication A</div>
                    </div>
                    <div className="bg-[#20B2AA]/10 rounded-xl p-3">
                      <div className="text-sm text-[#20B2AA] mb-1">Compliance</div>
                      <div className="text-2xl font-bold text-gray-900">98%</div>
                      <div className="text-sm text-gray-600">This Week</div>
                    </div>
                  </div>

                  <img
                    src="/api/placeholder/600/300"
                    alt="Dashboard Preview"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#20B2AA] to-[#008B8B] relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Medication Management?
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied users who have revolutionized their healthcare routine with ICEHealthSync Med Dispenser.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-8 py-3 bg-white text-[#20B2AA] rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 bg-[#20B2AA]/50 backdrop-blur-sm text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#20B2AA]/60 transition-colors">
                Contact Sales
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}