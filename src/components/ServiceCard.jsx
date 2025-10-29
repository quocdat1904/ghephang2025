
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className={`p-6 text-white bg-gradient-to-r ${service.color}`}>
        <Icon className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold mb-2 h-16">{service.title}</h3>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-600 mb-4 h-12">{service.description}</p>
        
        <ul className="space-y-3 mb-6 flex-grow">
          {service.features.slice(0, 2).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full mt-auto gradient-bg">
          <Link to={`/services/${service.id}`}>
            Xem Chi Tiết <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
