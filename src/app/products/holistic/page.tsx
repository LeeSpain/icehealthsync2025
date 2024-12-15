"use client";

import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 py-3">
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

// Page Component
const Page = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="bg-[#008B8B] h-[560px] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to HealthSync</h1>
          <p className="text-xl mb-8">Your health, synced.</p>
          <button className="bg-white text-[#008B8B] px-6 py-3 rounded-xl font-bold hover:bg-[#20B2AA] hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Holistic Care Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Based Solutions</h3>
              <p className="text-gray-600 mb-6">These services are automated or supported by AI technology and can operate independently or alongside manual care.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>AI Wellness Chatbot</strong>
                    <p className="text-gray-600">Provides lifestyle advice and answers common holistic health questions. Supports users in creating daily wellness routines.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Mindfulness and Meditation Support</strong>
                    <p className="text-gray-600">Guided meditations via audio or video. AI-driven stress level detection and personalized mindfulness exercises.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Nutrition Coaching</strong>
                    <p className="text-gray-600">AI-powered meal planning based on dietary preferences, allergies, and health goals. Suggestions for holistic diets (e.g., anti-inflammatory, gut health).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Fitness Guidance</strong>
                    <p className="text-gray-600">Tailored exercise routines based on user input and wearable data. AI tracking for fitness goals and real-time feedback during workouts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Symptom Tracking and Alerts</strong>
                    <p className="text-gray-600">AI tracks symptoms and behaviors, alerting when manual intervention may be needed. Includes journaling for stress, sleep, or dietary habits.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Mental Health Support</strong>
                    <p className="text-gray-600">Cognitive Behavioral Therapy (CBT) exercises guided by AI. AI-based journaling tools for mood tracking and emotional insights.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Educational Content Hub</strong>
                    <p className="text-gray-600">Curated holistic health articles, videos, and courses based on user preferences. AI recommends content tailored to individual wellness goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Energy and Stress Monitoring</strong>
                    <p className="text-gray-600">Integrates with wearable devices to detect heart rate variability, sleep quality, and stress levels. Provides tips to improve emotional well-being.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Scheduling and Reminders</strong>
                    <p className="text-gray-600">Automated reminders for yoga sessions, therapy calls, or holistic activities. Scheduling integrations for physical consultations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Digital Aromatherapy</strong>
                    <p className="text-gray-600">Guided exercises to pair with essential oil recommendations (user must have their own kit).</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Human Involvement Required</h3>
              <p className="text-gray-600 mb-6">These services rely on physical interactions or manual support and provide personalized care.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Personal Wellness Coaching</strong>
                    <p className="text-gray-600">Regular one-on-one calls or video sessions with a coach for lifestyle guidance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Mental Health Counseling</strong>
                    <p className="text-gray-600">Therapy sessions for stress, anxiety, or depression.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Yoga and Breathing Exercises</strong>
                    <p className="text-gray-600">Live guided classes or personalized one-on-one yoga sessions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Alternative Therapies</strong>
                    <p className="text-gray-600">Services like acupuncture, reflexology, or energy healing require hands-on expertise.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Nutritional Counseling</strong>
                    <p className="text-gray-600">Real-time consultations with a dietitian or holistic nutritionist.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Physical Therapy and Pain Management</strong>
                    <p className="text-gray-600">Guided sessions for recovery or managing chronic pain.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Customized Fitness Plans</strong>
                    <p className="text-gray-600">Personal trainers provide live support and adjustments for physical limitations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Social Connection Initiatives</strong>
                    <p className="text-gray-600">Weekly social calls to reduce loneliness and support mental well-being.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Spiritual Wellness Support</strong>
                    <p className="text-gray-600">Counseling for spiritual or emotional growth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="inline-block w-4 h-4 text-[#008B8B] mr-2" />
                  <div>
                    <strong>Workshops and Group Sessions</strong>
                    <p className="text-gray-600">Live group classes or events on topics like mindfulness, stress management, and holistic care.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;