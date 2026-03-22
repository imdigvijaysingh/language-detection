import React from 'react';
import Link from 'next/link';
import { Globe, Info, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <Globe className="h-8 w-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
            <Link href="/" className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              LangDetect
            </Link>
          </div>
          <div className="hidden sm:flex space-x-8">
            <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <Globe className="h-4 w-4" />
              Detect
            </Link>
            <Link href="/about" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <Info className="h-4 w-4" />
              About
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
