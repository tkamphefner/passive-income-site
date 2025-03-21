import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SkillsGuide
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              Categories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <Link href="/categories/business-entrepreneurship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Business & Entrepreneurship
              </Link>
              <Link href="/categories/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Digital Marketing
              </Link>
              <Link href="/categories/programming-web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Programming & Web Development
              </Link>
              <Link href="/categories/data-science-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Data Science & Analytics
              </Link>
              <Link href="/categories/project-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Project Management
              </Link>
              <Link href="/categories/leadership-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                Leadership & Management
              </Link>
            </div>
          </div>
          <Link href="/resources" className="text-gray-700 hover:text-blue-600">
            Resources
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Search and Account */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 py-3">
              <button className="flex items-center justify-between text-gray-700 hover:text-blue-600">
                Categories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600">
                Resources
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <div className="flex space-x-4 pt-2">
                <button className="text-gray-700 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-gray-700 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
