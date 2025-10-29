import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

const Schedule = () => {
  const schedules = [
    {
      time: '6:00 Sáng',
      route: ['Thăng Bình', 'Đà Nẵng'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      time: '14:00 Chiều',
      route: ['Đà Nẵng', 'Điện Bàn', 'Hội An', 'Thăng Bình', 'Tam Kỳ'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      time: '14:00 Chiều',
      route: ['Đà Nẵng', 'Nam Phước', 'Quế Sơn', 'Thăng Bình', 'Tam Kỳ'],
      color: 'from-lime-500 to-green-500',
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lịch Trình Xe Chạy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Các tuyến xe cố định hàng ngày, đảm bảo hàng hóa của bạn luôn được vận chuyển đúng giờ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedules.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white flex items-center gap-4`}>
                <Clock className="w-10 h-10 flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl">{item.time}</p>
                  <p className="opacity-90">Khởi hành hàng ngày</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  Lộ trình di chuyển:
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {item.route.map((point, rIndex) => (
                    <React.Fragment key={rIndex}>
                      <span className="bg-white text-gray-700 font-semibold py-1 px-3 rounded-full shadow-sm">
                        {point}
                      </span>
                      {rIndex < item.route.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;