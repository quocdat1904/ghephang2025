
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  const handleBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
        <Icon className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-sm opacity-90 h-10">{service.description}</p>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <ul className="space-y-3 mb-6 flex-grow">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 mb-2">Giá cước</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
          <Button onClick={handleBooking} className="w-full gradient-bg">
            Nhận Báo Giá
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
