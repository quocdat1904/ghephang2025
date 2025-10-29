import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, DollarSign, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Nhanh Chóng',
      description: 'Lịch trình xe chạy liên tục, đảm bảo hàng đi đúng hẹn.'
    },
    {
      icon: DollarSign,
      title: 'Giá Rẻ',
      description: 'Tối ưu chi phí, mang lại giá cước cạnh tranh nhất.'
    },
    {
      icon: ShieldCheck,
      title: 'An Toàn',
      description: 'Đội ngũ tài xế kinh nghiệm, hàng hóa được bảo quản cẩn thận.'
    },
    {
      icon: Clock,
      title: 'Linh Hoạt 24/7',
      description: 'Sẵn sàng phục vụ mọi lúc, mọi nơi theo yêu cầu của bạn.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Với nhiều năm kinh nghiệm trong lĩnh vực vận tải, chúng tôi tự tin là đối tác tin cậy cho mọi nhu cầu vận chuyển hàng hóa, chuyển nhà của bạn trên tuyến Đà Nẵng - Quảng Nam.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4"
                  >
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px]"
          >
            <img
              class="rounded-2xl shadow-2xl w-full h-full object-cover" 
              alt="Warehouse with packages and a truck"
             src="https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                    <p className="text-5xl font-bold text-blue-600">1000+</p>
                    <p className="text-gray-600">Chuyến Hàng</p>
                    <p className="text-gray-600">Thành Công</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;