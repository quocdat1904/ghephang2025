
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Dịch Vụ', id: 'services' },
    { name: 'Lịch Trình', id: 'schedule' },
    { name: 'Về Chúng Tôi', id: 'about' },
    { name: 'Liên Hệ', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Vận Tải Dũng Ánh
          </motion.div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('booking')} className="gradient-bg">
              Báo Giá Nhanh
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white pb-4"
        >
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-semibold text-gray-600 hover:text-blue-600 py-2"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => scrollToSection('booking')} className="gradient-bg w-4/5">
              Báo Giá Nhanh
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
