import { LucideIcon } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
}

export interface Product {
  icon: LucideIcon;
  title: string;
  price: string;
  subscription?: string;
  description: string;
  accentColor: string;
  gradient: string;
  gradientBorder: string;
  features: string[];
  stats: Stat[];
}