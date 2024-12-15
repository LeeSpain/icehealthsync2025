import { LucideIcon } from 'lucide-react';

export interface Appointment {
  title: string;
  date: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export interface QuickStat {
  label: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  trend?: {
    value: string;
    color: string;
  };
}