'use client';

import React from 'react';
import { 
  Users, Bell, Heart, Activity, Shield, 
  Phone, MessageCircle, Calendar, Clock, Settings,
  AlertTriangle, CheckCircle, ArrowRight, Share2,
  LineChart, Video, PlayCircle, UserPlus, Lock,
  Smartphone, Wifi, Zap
} from 'lucide-react';
import Link from 'next/link';

const FamilyFriendsPage = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div className="pt-32 pb-24 px-4 bg-gradient-to-br from-[#008B8B] to-[#20B2AA] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 backdrop-blur-[1px]">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF7F50]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#20B2AA]/20 rounded-full blur-3xl animate-pulse delay-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#FF7F50] rounded-full animate-pulse" />
            <span className="text-white/80">Connected Care Network</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Stay Connected with
            <span className="text-[#FF7F50] block mt-2">Your Loved Ones</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Monitor, support, and stay informed about your loved one's health with our comprehensive family care platform
          </p>

          {/* Feature Quick Links */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: Bell, label: 'Real-time Alerts', delay: 0 },
              { icon: LineChart, label: 'Health Insights', delay: 100 },
              { icon: Shield, label: 'Emergency Access', delay: 200 },
              { icon: MessageCircle, label: 'Care Chat', delay: 300 }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-all"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FF7F50] text-white px-6 py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:bg-[#FF7F50]/90 transition-all group">
              <UserPlus className="w-5 h-5" />
              <span>Join Care Network</span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              <Video className="w-5 h-5" />
              <span>Watch How It Works</span>
            </button>
          </div>
        </div>

        {/* Interactive Dashboard Preview */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#20B2AA]/20 via-[#FF7F50]/10 to-[#20B2AA]/20 blur-3xl" />
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF7F50]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#FF7F50]" />
                </div>
                <div>
                  <div className="text-white font-medium">Care Network</div>
                  <div className="text-white/60 text-sm">3 Connected Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>All Systems Normal</span>
                </div>
              </div>
            </div>

            {/* Member Cards */}
            <div className="grid gap-4 mb-6">
              {[
                {
                  name: "John Smith",
                  status: "Active",
                  lastUpdate: "2 mins ago",
                  metrics: {
                    heartRate: "72 BPM",
                    bloodPressure: "120/80",
                    activity: "Walking"
                  }
                },
                {
                  name: "Sarah Johnson",
                  status: "Resting",
                  lastUpdate: "5 mins ago",
                  metrics: {
                    heartRate: "68 BPM",
                    bloodPressure: "118/75",
                    activity: "Home"
                  }
                }
              ].map((member, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{member.name}</div>
                        <div className="text-white/60 text-sm">{member.status}</div>
                      </div>
                    </div>
                    <div className="text-white/60 text-sm">{member.lastUpdate}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-white text-sm font-medium">{member.metrics.heartRate}</div>
                      <div className="text-white/60 text-xs">Heart Rate</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-white text-sm font-medium">{member.metrics.bloodPressure}</div>
                      <div className="text-white/60 text-xs">Blood Pressure</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-white text-sm font-medium">{member.metrics.activity}</div>
                      <div className="text-white/60 text-xs">Activity</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Alerts */}
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-white font-medium">Recent Alerts</div>
                <Bell className="w-5 h-5 text-white/60" />
              </div>
              <div className="space-y-3">
                {[
                  {
                    type: "info",
                    message: "Daily health report available",
                    time: "10 mins ago"
                  },
                  {
                    type: "alert",
                    message: "Medication reminder",
                    time: "1 hour ago"
                  }
                ].map((alert, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.type === 'info' ? 'bg-blue-400' : 'bg-[#FF7F50]'
                      }`} />
                      <span className="text-white/80 text-sm">{alert.message}</span>
                    </div>
                    <span className="text-white/60 text-sm">{alert.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Care Network Features Section */}
    <div className="relative -mt-20 z-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF7F50]/10 to-[#FF6347]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-[#008B8B]/10 to-[#20B2AA]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#008B8B] animate-pulse" />
            <span className="text-[#008B8B] font-medium">Care Network Features</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#008B8B] to-[#20B2AA]">
            Connected Care Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed and connected with comprehensive monitoring and communication tools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Real-time Monitoring */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-6 right-6 text-gray-200 text-8xl font-bold opacity-10">01</div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF7F50] to-[#FF6347] p-0.5 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <Activity className="w-8 h-8 text-[#FF7F50]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with live health metrics and activity status of your loved ones
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#FF7F50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Vital Signs</div>
                    <div className="text-sm text-gray-600">Heart rate, BP, SpO2</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#FF7F50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Smart Alerts</div>
                    <div className="text-sm text-gray-600">Instant notifications</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-[#FF7F50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Health Trends</div>
                    <div className="text-sm text-gray-600">Long-term analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Care Coordination */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#008B8B] to-[#20B2AA] rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-6 right-6 text-gray-200 text-8xl font-bold opacity-10">02</div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#008B8B] to-[#20B2AA] p-0.5 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#008B8B]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Care Coordination</h3>
              <p className="text-gray-600 mb-6">
                Coordinate care efforts with family members and healthcare providers
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#008B8B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Care Chat</div>
                    <div className="text-sm text-gray-600">Secure messaging</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#008B8B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Care Calendar</div>
                    <div className="text-sm text-gray-600">Schedule management</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-[#008B8B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Task Sharing</div>
                    <div className="text-sm text-gray-600">Coordinate care tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Response */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#45B7D1] rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-6 right-6 text-gray-200 text-8xl font-bold opacity-10">03</div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#45B7D1] p-0.5 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-[#4CAF50]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Emergency Response</h3>
              <p className="text-gray-600 mb-6">
                Quick access to emergency services and instant family notifications
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">One-Touch SOS</div>
                    <div className="text-sm text-gray-600">Emergency activation</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Auto Alerts</div>
                    <div className="text-sm text-gray-600">Family notification</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location Sharing</div>
                    <div className="text-sm text-gray-600">Emergency location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Family Dashboard Preview */}
        <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] rounded-2xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Family Dashboard</h3>
                <p className="text-xl text-white/90 mb-8">
                  Monitor and manage your loved one's health with our intuitive family dashboard
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: Activity,
                      title: "Health Overview",
                      description: "Comprehensive view of vital signs and daily activities"
                    },
                    {
                      icon: Bell,
                      title: "Smart Notifications",
                      description: "Customizable alerts for important health events"
                    },
                    {
                      icon: Calendar,
                      title: "Care Schedule",
                      description: "Manage medications and appointments"
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                        <p className="text-white/80">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="bg-white text-[#008B8B] px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-all group">
                  <span>Try Dashboard Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#20B2AA]/20 via-[#FF7F50]/10 to-[#20B2AA]/20 blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20">
                  <div className="p-4">
                    <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Tools Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="inline-flex items-center justify-center gap-2 bg-[#008B8B]/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-[#008B8B] animate-pulse" />
              <span className="text-[#008B8B] font-medium">Stay Connected</span>
            </div>
            
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Communication Tools
            </h3>
            
            <p className="text-xl text-gray-600 mb-8">
              Keep everyone in the loop with integrated communication features
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: "Care Chat",
                  description: "Secure messaging between family members and caregivers",
                  features: ["Group chats", "Media sharing", "Message history"]
                },
                {
                  icon: Video,
                  title: "Video Check-ins",
                  description: "Face-to-face connections with your loved ones",
                  features: ["HD video calls", "Screen sharing", "Recording option"]
                },
                {
                  icon: Bell,
                  title: "Smart Updates",
                  description: "Automated updates and custom notifications",
                  features: ["Daily summaries", "Custom alerts", "Priority notifications"]
                }
              ].map((tool, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#008B8B]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-6 h-6 text-[#008B8B]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h4>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="flex gap-3">
                        {tool.features.map((feature, i) => (
                          <div key={i} className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-600">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Preview */}
          <div className="relative hidden lg:block">
            <div className="sticky top-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#20B2AA]/20 via-[#FF7F50]/10 to-[#20B2AA]/20 blur-3xl" />
                <div className="relative bg-white rounded-2xl shadow-xl p-6">
                  {/* Chat Interface Preview */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#008B8B]" />
                        </div>
                        <div>
                          <div className="font-medium">Family Care Group</div>
                          <div className="text-sm text-gray-500">3 members</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Video className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Settings className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      {[
                        {
                          sender: "Mom",
                          message: "Dad's blood pressure is normal today 👍",
                          time: "10:30 AM"
                        },
                        {
                          sender: "You",
                          message: "Great! I saw his morning walk activity too.",
                          time: "10:32 AM"
                        },
                        {
                          sender: "Sister",
                          message: "I'll stop by this afternoon with his medication.",
                          time: "10:35 AM"
                        }
                      ].map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] ${
                            msg.sender === 'You' 
                              ? 'bg-[#008B8B] text-white' 
                              : 'bg-white text-gray-900'
                          } rounded-xl p-3 shadow`}>
                            <div className="text-sm font-medium mb-1">{msg.sender}</div>
                            <div className="text-sm">{msg.message}</div>
                            <div className={`text-xs ${
                              msg.sender === 'You' ? 'text-white/80' : 'text-gray-500'
                            } mt-1`}>{msg.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-[#008B8B] text-white p-4 rounded-xl flex items-center gap-3 hover:bg-[#008B8B]/90 transition-colors">
                      <Video className="w-5 h-5" />
                      <span>Start Video Call</span>
                    </button>
                    <button className="bg-gray-100 text-gray-900 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-200 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share Update</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy & Security Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Lock className="w-4 h-4 text-[#008B8B]" />
              <span className="text-[#008B8B] font-medium">Privacy & Security</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy is Our Priority</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security measures to protect your family's health data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Data Encryption",
                description: "End-to-end encryption for all health data and communications",
                features: ["AES-256 encryption", "Secure data storage", "Regular security audits"]
              },
              {
                icon: Shield,
                title: "Access Control",
                description: "Granular permissions and role-based access control",
                features: ["Custom permissions", "Activity logging", "Two-factor auth"]
              },
              {
                icon: Users,
                title: "Privacy Settings",
                description: "Flexible privacy controls for sharing health information",
                features: ["Selective sharing", "Time-based access", "Revoke access"]
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-[#008B8B]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#008B8B]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#008B8B]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Start Your Care Network Today</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Set up your family care network in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Smartphone,
                title: "Download the App",
                description: "Get our mobile app from your device's app store",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: UserPlus,
                title: "Add Family Members",
                description: "Invite family members to join your care network",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Settings,
                title: "Customize Settings",
                description: "Set up notifications and sharing preferences",
                color: "bg-purple-50 text-purple-600"
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-gray-100">
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-gray-100" />
                  </div>
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon className="w-12 h-12" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] rounded-xl p-12 text-center">
            <h4 className="text-3xl font-bold text-white mb-6">
              Join Thousands of Connected Families
            </h4>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience peace of mind with our comprehensive family care platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#008B8B] px-8 py-4 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                <UserPlus className="w-5 h-5" />
                <span>Create Care Network</span>
              </button>
              <button className="bg-black/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:bg-black/30 transition-all">
                <Video className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FamilyFriendsPage;