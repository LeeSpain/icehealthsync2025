// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';  // Update to correct path
import NavHeader from '@/components/ui/NavHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ICEHealthSync',
  description: 'Advanced AI-powered health tracking with real-time insights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Member Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <NavHeader />
        {children}
      </body>
    </html>
  );
}