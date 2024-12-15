'use client';

import React, { useState } from 'react';
import { 
  ChevronRight, Heart, Shield, Activity, Users, 
  AlertTriangle, Bell, Video, Plus, Check,
  Brain, Globe, Smartphone, ArrowRight, Play,
  HeartPulse, ShieldCheck, Network, Wifi,
  MessageCircle, PhoneCall, Calendar, Clock, Thermometer, LineChart,
  Download
} from 'lucide-react';

// Interfaces
interface FeatureSectionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  reverse?: boolean;
}

// Logo Component
const Logo: React.FC = () => (
  <div className="flex items-center gap-2 group">
    <div className="w-12 h-12 bg-gradient-to-br from-[#008B8B] via-[#008B8B] to-[#20B2AA] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
      <span className="text-white font-bold text-xl">ICE</span>
    </div>
    <span className="text-2xl font-bold text-gray-900">HealthSync</span>
  </div>
);

// Navbar Component
const Navbar: React.FC = () => {
  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
            <div className="hidden md:flex items-center ml-10 gap-6">
              {navigationItems.map((item, idx) => (
                <a key={idx} href={item.href} className="text-gray-600 hover:text-[#008B8B] transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-[#008B8B] transition-colors">Login</button>
            <button className="bg-[#008B8B] text-white px-5 py-2 rounded-xl hover:bg-[#20B2AA] transition-colors">
              Get Started
              <ChevronRight className="inline-block ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// LiveDemo Component
const LiveDemo: React.FC = () => {
  const [heartRate, setHeartRate] = React.useState(72);
  const [bloodPressure, setBloodPressure] = React.useState({ sys: 120, dia: 80 });
  const [temperature, setTemperature] = React.useState(98.6);
  const [oxygen, setOxygen] = React.useState(98);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => prev + Math.sin(Date.now() / 1000) * 2);
      setBloodPressure(prev => ({
        sys: prev.sys + Math.sin(Date.now() / 1200) * 3,
        dia: prev.dia + Math.sin(Date.now() / 1200) * 2
      }));
      setTemperature(prev => prev + Math.sin(Date.now() / 1400) * 0.1);
      setOxygen(prev => Math.min(100, Math.max(95, prev + Math.sin(Date.now() / 1000))));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getWaveformPath = () => {
    const points = Array.from({ length: 40 }, (_, i) => {
      const x = (i + 1) * (100/40);
      const y = 50 + Math.sin((Date.now()/1000) + i) * 20;
      return `L${x},${y}`;
    }).join(' ');
    return `M0,50 ${points}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm opacity-90">Heart Rate</span>
          </div>
          <div className="text-2xl font-bold">{Math.round(heartRate)} BPM</div>
          <div className="mt-2">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-400 rounded-full transition-all duration-500"
                style={{ width: `${(heartRate / 200) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-sm opacity-90">Blood Pressure</span>
          </div>
          <div className="text-2xl font-bold">
            {Math.round(bloodPressure.sys)}/{Math.round(bloodPressure.dia)}
          </div>
          <div className="mt-2">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-400 rounded-full transition-all duration-500"
                style={{ width: `${(bloodPressure.sys / 180) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-5 h-5 text-orange-400" />
            <span className="text-sm opacity-90">Temperature</span>
          </div>
          <div className="text-2xl font-bold">{temperature.toFixed(1)}°F</div>
          <div className="mt-2">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-400 rounded-full transition-all duration-500"
                style={{ width: `${((temperature - 97) / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-sm opacity-90">Oxygen Level</span>
          </div>
          <div className="text-2xl font-bold">{Math.round(oxygen)}%</div>
          <div className="mt-2">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-400 rounded-full transition-all duration-500"
                style={{ width: `${oxygen}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm opacity-90">Live Monitoring</span>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
        </div>
        <div className="relative h-20">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path
              d={getWaveformPath()}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Feature Section Component
const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, icon: Icon, benefits, reverse = false }) => (
  <div className={`py-24 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-[#008B8B]">
            <Icon className="w-4 h-4" />
            <span className="font-medium">{title}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-teal-50">
                  <benefit.icon className="w-5 h-5 text-[#008B8B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`relative ${reverse ? 'lg:-order-1' : ''}`}>
          <div className="bg-gradient-to-r from-[#008B8B]/5 to-[#008B8B]/10 p-8 rounded-2xl">
            <div className="aspect-video bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="w-16 h-16 text-[#008B8B]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const features = [
  {
    title: "Health Monitoring",
    description: "Experience comprehensive health tracking with real-time monitoring of vital signs and advanced analytics that keep you informed about your well-being.",
    icon: HeartPulse,
    benefits: [
      {
        icon: Heart,
        title: "Real-time Vital Tracking",
        description: "Continuous monitoring of heart rate, blood pressure, oxygen levels, and other essential health metrics."
      },
      {
        icon: Brain,
        title: "AI-Powered Insights",
        description: "Advanced analytics predict potential health issues before they become critical."
      },
      {
        icon: Activity,
        title: "Trend Analysis",
        description: "Detailed health patterns and trends to help you make informed decisions."
      }
    ]
  },
  {
    title: "Emergency Response",
    description: "Our advanced emergency detection and response system provides peace of mind knowing help is always just a button press away.",
    icon: Shield,
    benefits: [
      {
        icon: AlertTriangle,
        title: "Instant Alert System",
        description: "Automated emergency detection with immediate response coordination."
      },
      {
        icon: Bell,
        title: "24/7 Professional Monitoring",
        description: "Round-the-clock monitoring by healthcare professionals."
      },
      {
        icon: Network,
        title: "Coordinated Response",
        description: "Seamless coordination between emergency services and healthcare providers."
      }
    ]
  },
  {
    title: "Family Care",
    description: "Keep your loved ones connected and informed with our comprehensive family care coordination platform.",
    icon: Users,
    benefits: [
      {
        icon: MessageCircle,
        title: "Real-time Updates",
        description: "Family members receive instant alerts about important health events."
      },
      {
        icon: Calendar,
        title: "Care Coordination",
        description: "Coordinate care tasks, appointments, and medications easily."
      },
      {
        icon: Shield,
        title: "Secure Sharing",
        description: "Share health information securely while maintaining privacy."
      }
    ]
  },
  {
    title: "AI Health Insights",
    description: "Leverage advanced artificial intelligence to understand your health patterns and receive personalized recommendations.",
    icon: Brain,
    benefits: [
      {
        icon: Activity,
        title: "Predictive Analytics",
        description: "Advanced algorithms analyze your health data to predict potential issues before they become serious."
      },
      {
        icon: Brain,
        title: "Personalized Recommendations",
        description: "Receive tailored health suggestions based on your unique health profile and lifestyle."
      },
      {
        icon: LineChart,
        title: "Trend Analysis",
        description: "Comprehensive analysis of your health patterns over time with actionable insights."
      }
    ]
  },
  {
    title: "Smart Device Integration",
    description: "Seamlessly connect with our range of health monitoring devices for enhanced tracking capabilities.",
    icon: Smartphone,
    benefits: [
      {
        icon: Shield,
        title: "Guardian Button",
        description: "One-touch emergency alert system with built-in fall detection and GPS tracking."
      },
      {
        icon: Activity,
        title: "Health Monitors",
        description: "Compatible with a wide range of health monitoring devices for comprehensive tracking."
      },
      {
        icon: Bell,
        title: "Automated Alerts",
        description: "Smart notification system based on your device readings and patterns."
      }
    ]
  },
  {
    title: "Global Coverage",
    description: "Stay protected anywhere with our worldwide network of healthcare providers and emergency services.",
    icon: Globe,
    benefits: [
      {
        icon: Shield,
        title: "Worldwide Access",
        description: "Access emergency services and healthcare support anywhere in the world."
      },
      {
        icon: Users,
        title: "International Network",
        description: "Connected to healthcare providers and emergency services globally."
      },
      {
        icon: MessageCircle,
        title: "Multi-language Support",
        description: "Break through language barriers with our multi-language emergency communication system."
      }
    ]
  }
];

const FeaturesPage: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section - Matching Homepage Style */}
      <section className="bg-[#008B8B] h-[560px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#008B8B]/20" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] bg-[#FF7F50] opacity-5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center pt-16">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm mb-8">
                <div className="w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FF7F50] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7F50]" />
                </div>
                <span className="text-sm font-medium">Advanced Features</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Complete Health
                <span className="block mt-2 text-[#FF7F50]">Monitoring Platform</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
                Experience comprehensive health tracking with real-time monitoring 
                of vital signs and advanced analytics.
              </p>

              <div className="flex gap-4">
                <button className="bg-[#FF7F50] text-white px-6 py-3 rounded-xl hover:bg-[#FF6347] transition-all flex items-center gap-2 group">
                  Explore Features
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="#" className="bg-white text-[#008B8B] px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download for iOS</a>
                <a href="#" className="bg-white text-[#008B8B] px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download for Android
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <LiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, idx) => (
        <FeatureSection
          key={idx}
          {...feature}
          reverse={idx % 2 !== 0}
        />
      ))}

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Advanced Health Monitoring?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already taken control of their health journey.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-[#008B8B] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all group">
              Get Started Now
              <ChevronRight className="inline-block ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all flex items-center gap-2">
              Learn More
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;