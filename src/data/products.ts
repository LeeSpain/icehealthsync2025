import { AlertTriangle, Droplet, Pill } from 'lucide-react';
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    icon: AlertTriangle,
    title: "SOS Pendant",
    price: "€100",
    description: "24/7 emergency response with GPS tracking and fall detection.",
    accentColor: "#FF7F50",
    gradient: "bg-gradient-to-r from-[#FF7F50] to-[#FF6347]",
    gradientBorder: "from-[#FF7F50] to-[#FF6347]",
    features: ["Fall Detection", "GPS Tracking", "Water Resistant", "Long Battery Life"],
    stats: [
      { value: "15s", label: "Response" },
      { value: "100m", label: "Range" },
      { value: "2yr", label: "Battery" }
    ]
  },
  {
    icon: Droplet,
    title: "Glucose Monitor",
    price: "€135",
    subscription: "€15/month",
    description: "Continuous glucose monitoring with real-time alerts and trend analysis.",
    accentColor: "#008B8B",
    gradient: "bg-gradient-to-r from-[#008B8B] to-[#20B2AA]",
    gradientBorder: "from-[#008B8B] to-[#20B2AA]",
    features: ["Real-time Monitoring", "Trend Analysis", "Custom Alerts", "14-day Sensor Life"],
    stats: [
      { value: "5s", label: "Reading Time" },
      { value: "99%", label: "Accuracy" },
      { value: "24/7", label: "Monitoring" }
    ]
  },
  {
    icon: Pill,
    title: "Med Dispenser",
    price: "€150",
    subscription: "€15/month",
    description: "Smart medication management system with automated dispensing and tracking.",
    accentColor: "#4CAF50",
    gradient: "bg-gradient-to-r from-[#4CAF50] to-[#45B7D1]",
    gradientBorder: "from-[#4CAF50] to-[#45B7D1]",
    features: ["Automated Dispensing", "Missed Dose Alerts", "Remote Monitoring", "Multi-user Support"],
    stats: [
      { value: "99%", label: "Accuracy" },
      { value: "30d", label: "Capacity" },
      { value: "8hr", label: "Battery" }
    ]
  }
];