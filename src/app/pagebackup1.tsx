"use client";

import React from 'react';
import { ChevronRight, Heart, Moon, Pill, Stethoscope, Thermometer, Check, Scale, Award, ShieldCheck, ArrowDown, Quote, ThumbsUp, Zap, Phone, Clock, Mail, Shield, Wifi, UserCircle2, Layout, Calendar, Activity, Users, Download, Video, Star, MessageSquare, Brain, Bot, Globe, Share2, Settings, LineChart, ThermometerSun, LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  borderColor: string;
}

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  change: {
    value: number;
    trend: 'up' | 'down';
  };
}

// Button Component
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon: Icon }) => {
  const variants = {
    primary: 'bg-[#FF7F50] text-white hover:bg-[#FF6347]',
    secondary: 'bg-[#008B8B] text-white hover:bg-[#20B2AA]',
    outline: 'bg-white/10 text-white hover:bg-white/20'
  };

  return (
    <button className={`px-6 py-3 rounded-xl transition-all flex items-center gap-2 ${variants[variant]}`}>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

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
            <Button variant="outline">Login</Button>
            <Button variant="primary" icon={ChevronRight}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// AppDownloadDemo Component
const AppDownloadDemo: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white relative overflow-hidden">
      {/* Phone mockup */}
      <div className="relative z-10">
        {/* App Store Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs opacity-90">App Rating</span>
            </div>
            <div className="text-xl font-bold">4.9/5</div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1">
              <Download className="w-4 h-4 text-green-400" />
              <span className="text-xs opacity-90">Downloads</span>
            </div>
            <div className="text-xl font-bold">50K+</div>
            <div className="text-xs text-green-400">↑ 27% this month</div>
          </div>
        </div>

        {/* Phone Screen Preview */}
        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF7F50] rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Health Monitor</div>
                <div className="text-xs opacity-70">Real-time tracking</div>
              </div>
            </div>
            <div className="h-6 w-12 bg-green-400/20 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Mock Health Stats */}
          <div className="space-y-3">
            <div className="bg-white/5 rounded-xl p-2">
              <div className="flex justify-between items-center text-sm">
                <span>Heart Rate</span>
                <span className="font-medium">72 BPM</span>
              </div>
              <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-red-400 rounded-full" />
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-2">
              <div className="flex justify-between items-center text-sm">
                <span>Blood Pressure</span>
                <span className="font-medium">120/80</span>
              </div>
              <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <a href="#" className="bg-white/5 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2 hover:bg-white/10 transition-all">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs opacity-70">Download on the</div>
              <div className="text-sm font-medium">App Store</div>
            </div>
          </a>

          <a href="#" className="bg-white/5 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2 hover:bg-white/10 transition-all">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs opacity-70">Get it on</div>
              <div className="text-sm font-medium">Google Play</div>
            </div>
          </a>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-xl p-2 text-center">
            <div className="text-lg font-bold">24/7</div>
            <div className="text-xs opacity-70">Monitoring</div>
          </div>
          <div className="bg-white/5 rounded-xl p-2 text-center">
            <div className="text-lg font-bold">99.9%</div>
            <div className="text-xs opacity-70">Uptime</div>
          </div>
          <div className="bg-white/5 rounded-xl p-2 text-center">
            <div className="text-lg font-bold">15s</div>
            <div className="text-xs opacity-70">Response</div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF7F50] opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#008B8B] opacity-10 rounded-full blur-3xl animate-pulse delay-700" />
    </div>
  );
};

// Feature Section Component
const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: "Proactive Alerts",
      description: "Get advance warnings about potential health issues through our AI-powered early detection system.",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-100"
    },
    {
      icon: Layout,
      title: "Live Dashboard",
      description: "Real-time visualization of your health metrics with customizable widgets and instant insights.",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100"
    },
    {
      icon: LineChart,
      title: "Health Analytics",
      description: "Comprehensive health reports with personalized insights and trend analysis for better decisions.",
      color: "bg-gradient-to-br from-violet-50 to-purple-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-100"
    },
    {
      icon: Settings,
      title: "Smart Automation",
      description: "Customize automated responses and alerts based on your personal health thresholds.",
      color: "bg-gradient-to-br from-amber-50 to-yellow-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    {
      icon: Share2,
      title: "Care Network",
      description: "Connect with healthcare providers and loved ones in a secure, integrated communication platform.",
      color: "bg-gradient-to-br from-rose-50 to-pink-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-100"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Core Features</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="block mt-2 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Complete Health Monitoring
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${feature.color} ${feature.borderColor}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl backdrop-blur-sm" />
              </div>
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 ${feature.iconColor}`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <a 
                  href="#" 
                  className={`inline-flex items-center text-sm font-medium ${feature.iconColor} hover:opacity-80 transition-opacity`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-px -right-px w-24 h-24 opacity-10">
                <div className={`absolute inset-0 ${feature.color} rotate-45 transform origin-bottom-right`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const HomePage: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      icon: Download,
      title: "Download the App",
      description: "Get our free app from your device's app store and create your account in minutes."
    },
    {
      number: "02",
      icon: UserCircle2,
      title: "Set Up Your Profile",
      description: "Add your health information and emergency contacts to personalize your experience."
    },
    {
      number: "03",
      icon: Wifi,
      title: "Connect Your Devices",
      description: "Pair your health monitoring devices for comprehensive tracking."
    },
    {
      number: "04",
      icon: Shield,
      title: "Stay Protected",
      description: "Enjoy 24/7 monitoring and emergency response protection."
    }
  ];

  const stats: Stat[] = [
    { icon: Heart, label: 'Active Users', value: '50000', color: 'primary', change: { value: 5, trend: 'up' } },
    { icon: Shield, label: 'Emergency Responses', value: '15000', color: 'secondary', change: { value: 3, trend: 'up' } },
    { icon: Users, label: 'Family Networks', value: '12000', color: 'info', change: { value: 2, trend: 'down' } },
    { icon: Globe, label: 'Countries', value: '25', color: 'error', change: { value: 1, trend: 'up' } }
  ];

  const testimonials = [
    {
      quote: "ICEHealthSync gives me peace of mind knowing that my health is being monitored 24/7. The proactive alerts have been game-changing.",
      author: "Sarah Johnson",
      role: "Active User"
    },
    {
      quote: "The family access feature helps us stay connected and informed about our parents' health. It's exactly what we needed.",
      author: "Michael Chen",
      role: "Family Caregiver"
    },
    {
      quote: "As a healthcare provider, I'm impressed by the accuracy of the AI health insights and the comprehensive monitoring capabilities.",
      author: "Dr. Emily Rodriguez",
      role: "Healthcare Professional"
    }
  ];

  const contactMethods = [
    { icon: Mail, text: "support@icehealthsync.com", href: "mailto:support@icehealthsync.com", ariaLabel: "Email us" },
    { icon: Phone, text: "+1 (888) 123-4567", href: "tel:+18881234567", ariaLabel: "Call us" }
  ];

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
      icon: Thermometer,
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
    <main className="relative">
      <Navbar />
      
      {/* Hero Section - Updated to match template */}
      <section className="bg-[#008B8B] h-[560px] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm mb-8">
                <div className="w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FF7F50] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7F50]" />
                </div>
                <span className="text-sm font-medium">Trusted by 50,000+ Users</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Your Personal
                <span className="block mt-2 text-[#FF7F50]">Health Guardian</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
                Advanced health monitoring and emergency response system that keeps you and your loved ones safe, 24/7.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" icon={ChevronRight}>Get Started</Button>
                <Button variant="outline" icon={Video}>Watch Demo</Button>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="#" className="bg-white text-[#008B8B] px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download for iOS
                </a>
                <a href="#" className="bg-white text-[#008B8B] px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download for Android
                </a>
              </div>
            </div>

            {/* Right Column - App Download Demo */}
            <div className="h-full flex items-center">
              <AppDownloadDemo />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Dashboard and Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Future of Healthcare at Home
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Once connected to our dashboard, you gain access to a comprehensive suite of products and services designed to keep you and your loved ones healthy and safe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Dashboard Preview */}
            <div className="relative">
              <img src="/path/to/dashboard-screenshot.png" alt="Dashboard Preview" className="rounded-2xl shadow-lg" />
            </div>

            {/* Product Showcase */}
            <div>
              <div className="grid grid-cols-1 gap-8">
                {/* AI Devices */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Devices</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {aiDevices.slice(0, 2).map((device, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-[#008B8B]/10 text-[#008B8B]">
                            <device.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{device.name}</h4>
                            <p className="text-sm text-gray-500">{device.category}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {device.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#008B8B]" />
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Services */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {professionalServices.slice(0, 2).map((service, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-[#FF4500]/10 text-[#FF4500]">
                            <service.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{service.name}</h4>
                            <p className="text-sm text-gray-500">{service.category}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#FF4500]" />
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="primary" icon={ChevronRight}>Explore Dashboard</Button>
          </div>
        </div>
      </section>

      {/* Features Section - Updated positioning */}
      <FeatureSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#008B8B]/10 text-[#008B8B] text-sm font-medium mb-6">
              <ArrowDown className="w-4 h-4" />
              <span>Simple Setup</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to complete health protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-[#008B8B]/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#008B8B]" />
                    </div>
                    <span className="text-4xl font-bold text-[#008B8B]/10">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#008B8B]/10 text-[#008B8B] text-sm font-medium mb-6">
              <ThumbsUp className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users say about ICEHealthSync
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <Quote className="w-10 h-10 text-[#008B8B]/20 mb-6" />
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <UserCircle2 className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-gray-900">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#008B8B]" />
                <span className="font-semibold text-gray-900">Best Health App 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We envision a world where everyone has access to advanced health technology that enhances well-being and security. Our mission is to provide comprehensive health monitoring and emergency response solutions that empower individuals and families to live healthier, safer lives.
              </p>
              <div className="space-y-4">
                {[
                  "Advanced health monitoring technology for all",
                  "24/7 emergency response capabilities",
                  "Family-centered care coordination",
                  "Privacy and security first approach"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#008B8B]" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((contact, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#008B8B]/10 flex items-center justify-center group-hover:bg-[#008B8B]/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-[#008B8B]" />
                    </div>
                    <a href={contact.href} className="text-gray-700 hover:text-[#008B8B] transition-colors" aria-label={contact.ariaLabel}>
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#008B8B] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" icon={ChevronRight}>Get Started Now</Button>
            <Button variant="outline" icon={ChevronRight}>Contact Sales</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;