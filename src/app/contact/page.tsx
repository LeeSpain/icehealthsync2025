'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send, 
  ArrowRight 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#008B8B] pt-24 pb-36 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}/>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7F50]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#008B8B]/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
              <span className="block text-[#FF7F50] mt-4">
                Get in Touch
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
            </p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,
              160,480,128,576,112C672,96,768,96,864,106.7C960,117.3,1056,
              138.7,1152,138.7C1248,138.7,1344,117.3,1392,106.7L1440,96L1440,
              320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,
              320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,
              320,48,320L0,320Z" 
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#FF7F50] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@icehealthsync.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#008B8B] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#FF7F50] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Health Street, Suite 456, City, Country</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Follow Us
            </h2>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="text-[#1877F2] hover:text-[#1459B3]">
                <Facebook className="h-8 w-8" />
              </Link>
              <Link href="https://twitter.com" className="text-[#1DA1F2] hover:text-[#0E71A6]">
                <Twitter className="h-8 w-8" />
              </Link>
              <Link href="https://instagram.com" className="text-[#E1306C] hover:text-[#C13584]">
                <Instagram className="h-8 w-8" />
              </Link>
              <Link href="https://linkedin.com" className="text-[#0077B5] hover:text-[#046293]">
                <Linkedin className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#008B8B]"
                required
              />
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-[#008B8B] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#20B2AA] 
                  transition-colors inline-flex items-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#008B8B] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join us in transforming healthcare through intelligent monitoring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/register"
              className="group bg-white text-[#008B8B] px-8 py-4 rounded-xl 
                font-medium hover:bg-gray-50 transition-all duration-300
                hover:shadow-lg inline-flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform 
                group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/contact"
              className="bg-[#FF7F50] text-white px-8 py-4 rounded-xl 
                font-medium hover:bg-[#FF6347] transition-all duration-300
                hover:shadow-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Links Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h3>
              <div className="space-y-4">
                <Link href="http://localhost:3000/landing" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Landing
                  </button>
                </Link>
                <Link href="http://localhost:3000/member-dashboard" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Member Dashboard
                  </button>
                </Link>
                <Link href="http://localhost:3000/SOSMonitoringDashboard" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    SOS Monitoring Dashboard
                  </button>
                </Link>
                <Link href="http://localhost:3000/admin/dashboard" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Admin Dashboard
                  </button>
                </Link>
                <Link href="http://localhost:3000/med-dispenser-admin" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Med Dispenser Admin
                  </button>
                </Link>
                <Link href="http://localhost:3000/mobilecare" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Mobile Care
                  </button>
                </Link>
                <Link href="http://localhost:3000/financialdasboard" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Financial Dashboard
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pages</h3>
              <div className="space-y-4">
                <Link href="http://localhost:3000/family-friends" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Family & Friends
                  </button>
                </Link>
                <Link href="http://localhost:3000/products/free-app" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Free App
                  </button>
                </Link>
                <Link href="http://localhost:3000/products/premium" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Premium
                  </button>
                </Link>
                <Link href="http://localhost:3000/stepguide" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Step Guide
                  </button>
                </Link>
                <Link href="http://localhost:3000/products/holistic" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Holistic
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Others</h3>
              <div className="space-y-4">
                <Link href="http://localhost:3000/calculator" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Calculator
                  </button>
                </Link>
                <Link href="http://localhost:3000/global-presence" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <button className="bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20B2AA] transition-colors">
                    Global Presence
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;