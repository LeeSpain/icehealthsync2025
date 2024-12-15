'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Users, 
  Zap, 
  Shield, 
  Activity, 
  ArrowRight 
} from 'lucide-react';

const AboutPage = () => {
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
              About Us
              <span className="block text-[#FF7F50] mt-4">
                Empowering Health Through Innovation
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              We are a dedicated team of healthcare professionals and technology experts committed to revolutionizing health monitoring through advanced AI and real-time analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact"
                className="group bg-[#FF7F50] hover:bg-[#FF6347] text-white 
                  px-8 py-4 rounded-xl font-medium transition-all duration-300
                  hover:shadow-xl hover:shadow-[#FF7F50]/20 inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform 
                  group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/team"
                className="inline-flex items-center px-6 py-4 rounded-xl
                  bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm
                  transition-all duration-300 font-medium"
              >
                Meet Our Team
              </Link>
            </div>
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

      {/* Mission and Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower individuals and families with advanced health monitoring solutions that provide real-time insights and proactive care. We strive to make healthcare accessible, personalized, and efficient through cutting-edge technology.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                href="/mission"
                className="bg-[#008B8B] text-white px-8 py-4 rounded-xl font-medium inline-flex items-center group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-[#FF7F50] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                  <p className="text-gray-600">We are committed to continuous innovation in healthcare technology.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-[#008B8B] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
                  <p className="text-gray-600">We operate with the highest standards of integrity and transparency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-[#FF7F50] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Community</h3>
                  <p className="text-gray-600">We prioritize the well-being of our users and the communities we serve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is a blend of healthcare experts and technology innovators dedicated to improving health outcomes through intelligent monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {[
              {
                name: "Dr. Emily Carter",
                role: "Chief Medical Officer",
                image: "/images/emily-carter.jpg",
                description: "With over 20 years of experience in healthcare, Dr. Carter leads our medical strategy and ensures our solutions are clinically validated."
              },
              {
                name: "John Doe",
                role: "Chief Technology Officer",
                image: "/images/john-doe.jpg",
                description: "John brings a wealth of experience in AI and software development, driving our technological innovations."
              },
              {
                name: "Jane Smith",
                role: "Head of Product",
                image: "/images/jane-smith.jpg",
                description: "Jane oversees our product development, ensuring our solutions meet the highest standards of quality and usability."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#008B8B] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Whether you're a healthcare professional, a technology enthusiast, or someone passionate about improving health outcomes, we invite you to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/careers"
              className="group bg-white text-[#008B8B] px-8 py-4 rounded-xl 
                font-medium hover:bg-gray-50 transition-all duration-300
                hover:shadow-lg inline-flex items-center"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform 
                group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/contact"
              className="bg-[#FF7F50] text-white px-8 py-4 rounded-xl 
                font-medium hover:bg-[#FF6347] transition-all duration-300
                hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;