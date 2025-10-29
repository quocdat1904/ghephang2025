
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Dịch Vụ Vận Tải Đà Nẵng - Quảng Nam | Vận Tải Dũng Ánh</title>
        <meta name="description" content="Cung cấp dịch vụ xe tải ghép hàng, chuyển nhà trọn gói, thuê xe nguyên chuyến tuyến Đà Nẵng Quảng Nam. Chuyên nghiệp, uy tín, giá tốt." />
      </Helmet>
      <div className="pt-20 bg-gray-50">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Dịch Vụ Vận Tải
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vận Tải Dũng Ánh cung cấp các giải pháp vận chuyển linh hoạt và hiệu quả, đáp ứng mọi nhu cầu của bạn trên tuyến Đà Nẵng - Quảng Nam và các tỉnh lân cận.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="service-card bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className={`p-8 text-white bg-gradient-to-r ${service.color}`}>
                      <Icon className="w-12 h-12 mb-4" />
                      <h2 className="text-2xl font-bold mb-2 h-20">{service.title}</h2>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                      
                      <Button asChild className="w-full gradient-bg">
                        <Link to={`/services/${service.id}`}>
                          Xem Chi Tiết <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
