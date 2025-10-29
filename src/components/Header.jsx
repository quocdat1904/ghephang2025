
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Dịch Vụ', path: '/services' },
    { name: 'Lịch Trình', path: '/#schedule' },
    { name: 'Liên Hệ', path: '/#contact' },
  ];

  const handleScrollTo = (path) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={`flex items-center gap-2 font-bold text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <Truck className="w-7 h-7 text-blue-500" />
            <span>Dũng Ánh</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleScrollTo(link.path)}
                className={`text-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <Button asChild className="hidden md:flex gradient-bg">
                <a href="tel:0906511699">
                    <Phone className="w-4 h-4 mr-2"/>
                    Gọi Ngay
                </a>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleScrollTo(link.path)}
                className="text-gray-700 font-semibold p-3 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
             <Button asChild className="w-full mt-2 gradient-bg">
                <a href="tel:0906511699">
                    <Phone className="w-4 h-4 mr-2"/>
                    Gọi Ngay
                </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
