'use client';

import React, { useState } from 'react';
import { 
  ChevronRight, Heart, Shield, Activity, Users, 
  Brain, Bell, Check, Settings, Star,
  MessageCircle, PhoneCall, LineChart,
  Smartphone, Lock, Medal, Sparkles,
  Wifi, Clock
} from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2 group">
    <div className="w-12 h-12 bg-gradient-to-br from-[#008B8B] via-[#008B8B] to-[#20B2AA] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
      <span className="text-white font-bold text-xl">ICE</span>
    </div>
    <span className="text-2xl font-bold text-gray-900">HealthSync</span>
  </div>
);

const Navbar: React.FC = () => (
  <nav className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center"><Logo /></a>
          <div className="hidden md:flex items-center ml-10 gap-6">
            <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-[#008B8B] transition-colors">Contact</a>
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

const LiveDemo: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <div className="absolute -inset-1 bg-green-400/30 rounded-full animate-ping" />
        </div>
        <span className="text-green-400 text-sm font-medium">Live Platform Demo</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-white/60 text-sm">
          <Wifi className="w-4 h-4" /><span>Connected</span>
        </div>
        <span className="text-white/60 text-sm">|</span>
        <div className="flex items-center gap-1 text-white/60 text-sm">
          <Clock className="w-4 h-4" /><span>Real-time</span>
        </div>
      </div>
    </div>

    {[
      { title: 'Heart Rate', value: '72', unit: 'BPM', icon: Heart, color: '#FF7F50' },
      { title: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Activity, color: '#008B8B' },
      { title: 'SpO2', value: '98', unit: '%', icon: Heart, color: '#4CAF50' }
    ].map((metric, idx) => (
      <div key={idx} className="bg-white/5 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
            <span className="text-white/90 font-medium">{metric.title}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white">{metric.value}</span>
            <span className="text-white/60 text-sm">{metric.unit}</span>
          </div>
        </div>
        <div className="h-2 bg-white/10 rounded-full">
          <div className="h-full rounded-full animate-pulse" style={{ backgroundColor: metric.color, width: '75%' }} />
        </div>
      </div>
    ))}

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="text-white/90 text-sm">System Active</span>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#FF7F50]" />
          <span className="text-white/90 text-sm">SOS Ready</span>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<{ icon: any; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#008B8B] to-[#20B2AA] rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
    <div className="relative bg-white rounded-xl p-6 h-full hover:shadow-xl transition-all">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-teal-50 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[#008B8B]" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#008B8B] transition-colors">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="grid grid-cols-4 gap-4 p-6">
      <div className="col-span-1"></div>
      {['Free', 'Premium', 'Premium+'].map(plan => (
        <div key={plan} className="text-center font-bold text-lg">{plan}</div>
      ))}
      {[
        {feature: 'Emergency Contacts', free: '1', premium: '5', premiumPlus: 'Unlimited'},
        {feature: 'Health Analytics', free: 'Basic', premium: 'Advanced', premiumPlus: 'Professional'},
        {feature: 'AI Insights', free: '-', premium: '✓', premiumPlus: '✓'},
        {feature: 'Family Access', free: '-', premium: '✓', premiumPlus: '✓'},
        {feature: 'Priority Support', free: '-', premium: '✓', premiumPlus: '✓'},
        {feature: '24/7 Monitoring', free: '-', premium: '-', premiumPlus: '✓'},
      ].map((row, idx) => (
        <React.Fragment key={idx}>
          <div className="font-medium">{row.feature}</div>
          <div className="text-center">{row.free}</div>
          <div className="text-center">{row.premium}</div>
          <div className="text-center">{row.premiumPlus}</div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What's included in the Premium plan?",
      answer: "Premium includes advanced analytics, multiple emergency contacts, family access portal, AI insights, and priority support."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your premium subscription at any time. No long-term commitment required."
    },
    {
      question: "How does family access work?",
      answer: "Family members can be added to your account to monitor your health status and receive alerts through our secure portal."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-xl shadow-md overflow-hidden"
          onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
        >
          <div className="p-6 cursor-pointer">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${
              activeIndex === idx ? 'block' : 'hidden'
            }`}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Metrics = () => (
  <div className="grid grid-cols-4 gap-8">
    {[
      { value: '50,000+', label: 'Active Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '24/7', label: 'Support' },
      { value: '4.9/5', label: 'User Rating' }
    ].map((metric, idx) => (
      <div key={idx} className="text-center">
        <div className="text-3xl font-bold text-[#008B8B]">{metric.value}</div>
        <div className="text-gray-600">{metric.label}</div>
      </div>
    ))}
  </div>
);

const DetailedFeatureCard = ({ title, benefits, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-teal-50">
          <Icon className="w-6 h-6 text-[#008B8B]" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-3">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#008B8B] mt-0.5" />
            <span className="text-gray-600">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PlanBreakdown = () => (
  <div className="bg-white rounded-xl shadow-lg p-8">
    <div className="flex justify-between items-start border-b pb-6 mb-6">
      <div>
        <h3 className="text-2xl font-bold text-[#008B8B] mb-2">Premium Plan</h3>
        <p className="text-gray-600">Complete health monitoring solution</p>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-[#008B8B]">€4.99</div>
        <div className="text-gray-600">per month</div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-semibold mb-4">Core Features</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Multiple Emergency Contacts (up to 5)</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Advanced Health Analytics Dashboard</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Family Access Portal</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Priority Support Access</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Additional Benefits</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>AI-Powered Health Insights</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Customizable Health Goals</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Device Connectivity Options</span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#008B8B]" />
            <span>Virtual Personal AI Nurse</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default function PremiumPlanPage() {
  const features = [
    {
      title: "Multiple Emergency Contacts",
      description: "Set up to 5 emergency contacts with customized notification preferences.",
      icon: Users
    },
    {
      title: "Advanced Analytics",
      description: "Access detailed health insights with historical data tracking and trend analysis.",
      icon: LineChart
    },
    {
      title: "Enhanced Dashboard",
      description: "Premium dashboard with customizable widgets and real-time health metrics.",
      icon: Activity
    },
    {
      title: "Family Portal",
      description: "Share health updates with family through a secure monitoring portal.",
      icon: Heart
    },
    {
      title: "Priority Support",
      description: "Get priority access to our customer support team with dedicated response times.",
      icon: Bell
    },
    {
      title: "AI Health Insights",
      description: "AI-powered health predictions and personalized recommendations.",
      icon: Brain
    }
  ];

  const detailedFeatures = [
    {
      title: "Health Analytics",
      icon: LineChart,
      benefits: [
        "Real-time vital signs monitoring",
        "Historical data tracking",
        "Trend analysis and reporting",
        "Custom health metrics",
        "Export capabilities"
      ]
    },
    {
      title: "Emergency Response",
      icon: Shield,
      benefits: [
        "Multiple emergency contacts",
        "Automated alert system",
        "Location tracking",
        "Custom emergency protocols",
        "24/7 monitoring options"
      ]
    },
    {
      title: "Family Access",
      icon: Users,
      benefits: [
        "Secure family portal",
        "Custom access levels",
        "Real-time notifications",
        "Shared calendar",
        "Care coordination tools"
      ]
    }
  ];

  return (
    <main className="relative">
      <Navbar />
      
      <section className="bg-[#008B8B] h-[560px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Medal className="w-4 h-4 text-[#FF7F50]" />
                <span className="text-white/90">Premium Features</span>
              </div>

              <h1 className="text-5xl font-bold text-white mb-6">
                Advanced Health
                <span className="block mt-2 text-[#FF7F50]">Monitoring Platform</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-xl mb-8">
                Experience comprehensive health monitoring with premium features.
              </p>

              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8">
                <div className="text-3xl font-bold text-white">
                  €4.99<span className="text-lg text-white/80 font-normal">/month</span>
                </div>
              </div>

              <button className="bg-[#FF7F50] text-white px-6 py-3 rounded-xl hover:bg-[#FF6347] transition-all flex items-center gap-2 group">
                Get Premium Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="hidden lg:block">
              <LiveDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Features & Benefits</h2>
            <p className="text-xl text-gray-600">Everything included in your premium subscription</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Plan Comparison</h2>
          <ComparisonTable />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Detailed Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <DetailedFeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Premium Plan Breakdown</h2>
          <PlanBreakdown />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Metrics</h2>
          <Metrics />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Premium Features?</h2>
          <button className="bg-white text-[#008B8B] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all">
            Get Started Now
            <ChevronRight className="inline-block ml-1 w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}