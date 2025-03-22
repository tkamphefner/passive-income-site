"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo">
            Pulse<span>Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            <Link href="/categories/smart-security" className="nav-link">
              Smart Security
            </Link>
            <Link href="/categories/smart-speakers" className="nav-link">
              Smart Speakers
            </Link>
            <Link href="/categories/smart-lighting" className="nav-link">
              Smart Lighting
            </Link>
            <Link href="/categories/smart-plugs" className="nav-link">
              Smart Plugs
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/products/top-rated" className="cta-button">
            Top Products
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{display: 'none'}} // Hide for now, will implement mobile menu later
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Will be styled later */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t" style={{display: 'none'}}>
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 py-3">
              <Link href="/categories/smart-security" className="text-gray-700 hover:text-blue-600">
                Smart Security
              </Link>
              <Link href="/categories/smart-speakers" className="text-gray-700 hover:text-blue-600">
                Smart Speakers
              </Link>
              <Link href="/categories/smart-lighting" className="text-gray-700 hover:text-blue-600">
                Smart Lighting
              </Link>
              <Link href="/categories/smart-plugs" className="text-gray-700 hover:text-blue-600">
                Smart Plugs
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600">
                Resources
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
