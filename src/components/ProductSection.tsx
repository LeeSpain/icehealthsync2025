'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Activity,
  Check, 
  Bell, 
  Timer,
  Share2,
  Pill, 
  ArrowRight,
  LineChart
} from 'lucide-react';

interface ProductFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProductStat {
  value: string;
  label: string;
}

interface ProductProps {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  features: ProductFeature[];
  stats: ProductStat[];
  details: string[];
}

const ProductCard = ({ 
  title, 
  tagline, 
  description, 
  icon: Icon, 
  color, 
  gradientFrom, 
  gradientTo,
  features,
  stats,
  details
}: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}
          transform transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 text-white">
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{tagline}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all"
            >
              <feature.icon className={`h-6 w-6 text-${color} mb-2`} />
              <h4 className="font-medium mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className={`text-xl font-bold text-${color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`h-8 w-8 rounded-full flex items-center justify-center
              transition-all duration-300 ${
                showDetails 
                  ? `bg-${color}` 
                  : `bg-${color}/10 hover:bg-${color}`
              }`}
          >
            <ArrowRight className={`h-4 w-4 ${
              showDetails || isHovered ? 'text-white' : `text-${color}`
            }`} />
          </button>
        </div>

        {showDetails && (
          <div className="space-y-2 py-4 px-4 bg-gray-50 rounded-xl mb-6">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className={`h-5 w-5 text-${color} shrink-0 mt-0.5`} />
                <span className="text-sm text-gray-600">{detail}</span>
              </div>
            ))}
          </div>
        )}

        <Link 
          href={`/products/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className={`block text-center py-3 border-t border-gray-100 text-${color}
            font-medium hover:bg-${color}/5 transition-colors`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const products: ProductProps[] = [
  {
    title: "Smart Medication Manager",
    tagline: "Smart Device",
    description: "Advanced medication management ensuring accurate dosage with real-time monitoring.",
    icon: Pill,
    color: "[#008B8B]",
    gradientFrom: "[#008B8B]",
    gradientTo: "[#20B2AA]",
    features: [
      {
        icon: Timer,
        title: "Automated Dispensing",
        description: "Precise timing control"
      },
      {
        icon: Bell,
        title: "Smart Alerts",
        description: "Real-time notifications"
      }
    ],
    stats: [
      { value: "99.9%", label: "Accuracy" },
      { value: "24/7", label: "Monitoring" }
    ],
    details: [
      "Medical-grade dispensing mechanism",
      "Multi-user support for family care",
      "Automatic refill notifications",
      "Detailed medication history",
      "Healthcare provider integration"
    ]
  },
  {
    title: "Glucose Monitoring System",
    tagline: "Health Device",
    description: "Continuous glucose monitoring with real-time insights and trend analysis.",
    icon: Activity,
    color: "[#FF7F50]",
    gradientFrom: "[#FF7F50]",
    gradientTo: "[#FF6347]",
    features: [
      {
        icon: LineChart,
        title: "Real-time Tracking",
        description: "Continuous monitoring"
      },
      {
        icon: Share2,
        title: "Data Sharing",
        description: "Healthcare integration"
      }
    ],
    stats: [
      { value: "±0.1%", label: "Accuracy" },
      { value: "14d", label: "Sensor Life" }
    ],
    details: [
      "Real-time glucose readings",
      "Predictive trend analysis",
      "Customizable alerts",
      "Mobile app integration",
      "14-day sensor lifetime"
    ]
  }
];

export const ProductSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Integrated Medical Devices
            <span className="block text-[#008B8B] mt-2">Enhanced Health Monitoring</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional-grade medical devices seamlessly integrated with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;