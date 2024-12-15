"use client";

// Previous imports remain the same...
import React, { useState, useEffect } from 'react';
import { 
  Heart, Activity, Brain, PieChart, Stethoscope,
  AlertTriangle, Shield, Phone, Radio, UserCheck,
  Users, Share2, MessageCircle, Clock,
  Smartphone, Wifi, CloudCog, Lock, BatteryFull,
  Check, ArrowRight, Bell, Globe, ChevronRight,
  Waves, Video, Zap, ScrollText, HeartPulse, 
  ShieldCheck, Clipboard, Battery, ThermometerSun, Gauge
} from 'lucide-react';

// Add HeroSection interface
interface HeroSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  features: Array<{
    icon: React.ElementType;
    label: string;
  }>;
}

// Previous interfaces remain the same...
interface MenuItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText: string;
  logoAbbr: string;
  menuItems: MenuItem[];
}

// ... other interfaces

// HeroSection Component with proper typing
const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  subtitle,
  ctaText,
  features
}) => {
  return (
    <section className="relative overflow-hidden bg-[#008B8B] pt-24 pb-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#008B8B] via-transparent to-[#008B8B] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#008B8B]/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-6">
            <div className="absolute -top-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FF7F50] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7F50]" />
              </div>
              <span className="text-white/90 text-sm font-medium">{badge}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {title}
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#FF7F50] text-white rounded-xl font-semibold transform hover:bg-[#FF7F50]/90 transition-all duration-200 flex items-center gap-2">
                {ctaText}
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors duration-200 flex items-center gap-2">
                <Video className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} 
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Update PageTemplate interface to use HeroSectionProps
interface PageTemplateProps {
  logoText: string;
  logoAbbr: string;
  menuItems: MenuItem[];
  heroContent: HeroSectionProps;
  showcaseContent: {
    sectionTitle: string;
    sectionBadge: string;
    sectionSubtitle: string;
    products: Product[];
    whyChooseUs: Array<{ icon: React.ElementType; label: string; }>;
    mission: Array<{ icon: React.ElementType; label: string; }>;
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  logoText,
  logoAbbr,
  menuItems,
  heroContent,
  showcaseContent
}) => {
  return (
    <main className="relative">
      <Navbar logoText={logoText} logoAbbr={logoAbbr} menuItems={menuItems} />
      <HeroSection {...heroContent} />
      <ProductShowcase {...showcaseContent} />
    </main>
  );
};

export default PageTemplate;