
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Hotline 24/7 Dũng',
      content: '0901 445 772',
      link: 'tel:0901445772'
    },
    {
      icon: Phone,
      title: 'Hotline 24/7 Ánh',
      content: '0906 511 699',
      link: 'tel:0906511699'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'vantaidnqn@gmail.com',
      link: 'mailto:vantaidnqn@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Bãi Xe Đà Nẵng',
      content: 'Đường ABC, Q. Cẩm Lệ',
      link: 'https://www.google.com/maps?q=Cẩm Lệ, Đà Nẵng'
    },
    {
      icon: MapPin,
      title: 'Bãi Xe Quảng Nam',
      content: 'Tổ 2 Thôn Bàu Bính, Xã Bình Dương, Huyện Thăng Bình',
      link: 'https://www.google.com/maps/search/?api=1&query=Tổ+2+Thôn+Bàu+Bính,+Xã+Bình+Dương,+Huyện+Thăng+Bình'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thông Tin Liên Hệ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Luôn sẵn sàng phục vụ khi bạn cần.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
               <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                {info.content}
              </a>
            ) : (
              <span className="text-gray-700">{info.content}</span>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
