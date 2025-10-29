import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="absolute inset-0">
        <img class="w-full h-full object-cover opacity-20" alt="Truck driving on a highway at sunset" src="https://images.unsplash.com/photo-1509082806432-f945e11c4deb" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-5xl md:text-7xl font-bold mb-6">
            Xe Tải Ghép Hàng
            <br />
            <span className="text-yellow-300">Đà Nẵng - Quảng Nam</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl md:text-2xl mb-8 text-gray-100">
            Nhanh Chóng • An Toàn • Tiết Kiệm
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">Nhận vận chuyển hàng hóa, Chuyển nhà -Dọn trọ -Văn phòng - Công ty , Ghép Hàng hai chiều Đà Nẵng - Quảng Nam và các tỉnh lân cận với giá cước tốt nhất thị trường.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToBooking} className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Yêu Cầu Báo Giá
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
              <a href="tel:0906511699">
                <PhoneCall className="mr-2" /> Gọi Ngay (Ánh)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
              <a href="tel:0906511699">
                <PhoneCall className="mr-2" /> Nhận Giá Tốt Nhất
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>;
};
export default Hero;