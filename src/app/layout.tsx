import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';  // Same path here
import NavHeader from '@/components/ui/NavHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ICEHealthSync',
  description: 'Advanced AI-powered health tracking with real-time insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavHeader />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}