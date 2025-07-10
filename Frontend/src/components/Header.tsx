import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Heart, User } from 'lucide-react';
import { AuthModal } from './AuthModal';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
  onNavigate?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'Skincare', href: 'skincare' },
    { name: 'Makeup', href: 'makeup' },
    { name: 'Fragrance', href: 'fragrance' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-pink-500">Luxe</span>Beauty
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center max-w-xs w-full mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <Heart className="h-6 w-6" />
            </button>
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate('profile');
                } else {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }
              }}
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              <User className="h-6 w-6" />
            </button>
            <button
              onClick={onCartClick}
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 relative"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-pink-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
};