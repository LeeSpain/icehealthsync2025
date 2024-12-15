"use client";

import React from 'react';
import { 
  ChevronRight, Brain, Bot, Shield, 
  Users, Activity, Heart, Clock,
  CheckCircle2, ArrowRight, Star 
} from 'lucide-react';

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
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
            
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
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-[#008B8B]" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-900">
      {title}
      <span className="text-[#FF6B35]">.</span>
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Statistic Component
const Statistic = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-white mb-1">
      {number}
      <span className="text-[#FF6B35]">+</span>
    </div>
    <div className="text-sm text-white/80">{label}</div>
  </div>
);

const Page = () => {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                The Future of Healthcare is 
                <span className="text-[#FF6B35]"> Self-Sustainable</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience revolutionary healthcare monitoring through our AI-driven platform that connects you with care professionals when needed.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#008B8B] px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
                  Explore Platform
                </button>
                <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#FF8255] transition-colors flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Statistic number="24/7" label="Automated Monitoring" />
              <Statistic number="100%" label="AI-Driven" />
              <Statistic number="85%" label="Cost Reduction" />
              <Statistic number="0" label="Human Operators" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Self-Sustainable
              <span className="text-[#FF6B35]"> Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform revolutionizes healthcare monitoring through advanced automation and AI technology.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Monitoring"
              description="Advanced algorithms provide continuous health monitoring and automated decision-making."
            />
            <FeatureCard
              icon={Bot}
              title="Zero Human Operators"
              description="Fully automated platform that scales efficiently without traditional operational overhead."
            />
            <FeatureCard
              icon={Shield}
              title="Intelligent Protection"
              description="24/7 automated emergency detection and response system for peace of mind."
            />
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Revolutionary
                <span className="text-[#FF6B35]"> Healthcare</span>
                <br />Platform
              </h2>
              <div className="space-y-4">
                {[
                  "24/7 Automated Health Monitoring",
                  "Real-time Emergency Response",
                  "Professional Care Connection",
                  "Family Dashboard Integration",
                  "Smart Device Ecosystem"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold mb-6">
                Platform
                <span className="text-[#FF6B35]"> Impact</span>
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Independence", desc: "Age in place with confidence" },
                  { title: "Peace of Mind", desc: "Continuous protection" },
                  { title: "Professional Care", desc: "On-demand access" },
                  { title: "Family Connection", desc: "Real-time updates" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Star className="w-5 h-5 text-[#FF6B35]" />
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the
            <span className="text-[#FF6B35]"> Future</span>
            ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing healthcare monitoring through intelligent automation.
          </p>
          <button className="bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#FF8255] transition-colors inline-flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;