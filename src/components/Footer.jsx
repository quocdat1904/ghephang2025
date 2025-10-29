
import React from 'react';
import { Truck, Facebook, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">Vận Tải Dũng Ánh</span>
            </div>
            <p className="text-gray-400">
              Xe tải ghép hàng Đà Nẵng Quảng Nam. Nhanh chóng, an toàn, tiết kiệm.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch Vụ Chính</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Ghép Hàng 2 Chiều</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dọn Trọ, Chuyển Nhà</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Thuê Xe Nguyên Chuyến</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Hotlines */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hotline 24/7</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:0901445772" className="hover:text-white transition-colors">Dũng: 0901.445.772</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:0906511699" className="hover:text-white transition-colors">Ánh: 0906.511.699</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kết Nối</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://zalo.me/0906511699" target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Vận Tải Dũng Ánh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
