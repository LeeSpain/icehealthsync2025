import { 
    Shield, Heart, Activity, LineChart, Bell, Users, Timer,
    Video, Zap, Smartphone, Wifi
  } from 'lucide-react';
  import { FeatureProps, TechnologyCardProps } from '@/types/features';
  
  export const mainFeatures: FeatureProps[] = [
    {
      title: "Health Monitoring",
      icon: Heart,
      features: [
        {
          icon: Activity,
          title: "Vital Signs Tracking",
          description: "Continuous monitoring of key health metrics",
          metrics: ["Heart Rate", "Blood Pressure", "SpO2 Levels"]
        },
        // ... more features
      ]
    },
    // ... more categories
  ];
  
  export const technologies: TechnologyCardProps[] = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security for your health data",
      features: [
        "End-to-end encryption",
        "HIPAA compliance",
        "Regular security audits"
      ],
      color: "text-[#FF7F50]",
      bgColor: "bg-orange-50"
    },
    // ... more technologies
  ];