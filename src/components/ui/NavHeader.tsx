// src/components/NavHeader.tsx
"use client";

import React, { useState } from 'react';
import { 
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import Logo from './Logo';

interface NavLink {
  href: string;
  label: string;
}

interface AuthButton {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
}

const navLinks: NavLink[] = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const authButtons: AuthButton[] = [
  { 
    href: '/auth/login', // Updated to match our auth system path
    label: 'Login',
    variant: 'secondary'
  },
  { 
    href: '/auth/register', // Updated to match our auth system path
    label: 'Get Started',
    variant: 'primary'
  }
];

const NavLink = ({ href, label }: NavLink) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {label}
  </a>
);

const AuthButton = ({ href, label, variant }: AuthButton) => {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        className="bg-[#008B8B] hover:bg-[#20B2AA] text-white px-6 py-2 
          rounded-lg transition-colors font-medium flex items-center gap-2 group"
      >
        {label}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <a 
      href={href} 
      className="text-[#008B8B] hover:text-[#20B2AA] font-medium transition-colors"
    >
      {label}
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  label, 
  onClick 
}: NavLink & { onClick: () => void }) => (
  <a
    href={href}
    className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
    onClick={onClick}
  >
    {label}
  </a>
);

const MobileAuthButton = ({ 
  href, 
  label, 
  variant,
  onClick 
}: AuthButton & { onClick: () => void }) => {
  const baseClasses = "block px-4 py-2 rounded-lg transition-colors font-medium";
  const variantClasses = variant === 'primary'
    ? "bg-[#008B8B] hover:bg-[#20B2AA] text-white"
    : "text-[#008B8B] hover:text-[#20B2AA] hover:bg-[#008B8B]/5";

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

const NavHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <a href="/">
              <Logo />
            </a>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {authButtons.map((button) => (
              <AuthButton key={button.href} {...button} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <MobileNavLink 
              key={link.href} 
              {...link} 
              onClick={closeMobileMenu} 
            />
          ))}
          <div className="border-t border-gray-100 my-2 py-2 space-y-2">
            {authButtons.map((button) => (
              <MobileAuthButton 
                key={button.href} 
                {...button} 
                onClick={closeMobileMenu} 
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;