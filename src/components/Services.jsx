
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Home } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Ghép Hàng 2 Chiều',
      description: 'Tối ưu chi phí vận chuyển bằng cách chia sẻ không gian xe với các khách hàng khác.',
      features: [
        'Giá cước siêu tiết kiệm',
        'Lịch trình linh hoạt',
        'Phù hợp hàng hóa nhỏ, lẻ',
        'Giao nhận tận nơi'
      ],
      price: 'Chỉ từ 50.000đ',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Home,
      title: 'Dọn Trọ, Chuyển Nhà',
      description: 'Dịch vụ chuyển nhà, dọn phòng trọ trọn gói, nhanh chóng và chuyên nghiệp.',
      features: [
        'Tháo lắp, đóng gói đồ đạc',
        'Bốc xếp chuyên nghiệp',
        'Vận chuyển an toàn',
        'Hỗ trợ sắp xếp tại nhà mới'
      ],
      price: 'Khảo sát báo giá',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Package,
      title: 'Thuê Xe Nguyên Chuyến',
      description: 'Dành cho khách hàng cần vận chuyển lượng hàng lớn, cần sự riêng tư và chủ động.',
      features: [
        'Chủ động thời gian',
        'Không gian xe riêng biệt',
        'Bảo mật hàng hóa',
        'Đa dạng tải trọng xe'
      ],
      price: 'Giá tốt nhất',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dịch Vụ Vận Tải
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải pháp vận chuyển linh hoạt và hiệu quả cho mọi nhu cầu của bạn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
