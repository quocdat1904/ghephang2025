import React from 'react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
const BookingForm = () => {
  return <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Yêu Cầu Báo Giá Qua Zalo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quét mã QR dưới đây để kết nối Zalo và nhận báo giá nhanh nhất!
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-800">Tranngocanh</p>
            <p className="text-gray-500">Vận Tải Dũng Ánh</p>
          </div>
          <div className="p-2 border-4 border-blue-500 rounded-lg">
            <img src="https://horizons-cdn.hostinger.com/7ce12260-0bb2-4743-b9a1-97e8fa680e0b/5d58d4e937af231676d71a6115da6551.jpg" alt="Zalo QR Code for Tranngocanh" className="w-64 h-64" />
          </div>
          <Button asChild className="w-full gradient-bg text-lg py-6">
            <a href="https://zalo.me/0906511699" target="_blank" rel="noopener noreferrer">
              <QrCode className="mr-2" /> Mở Zalo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default BookingForm;