
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold">Dịch vụ không tồn tại</h1>
        <p className="text-xl mt-4">Rất tiếc, chúng tôi không tìm thấy dịch vụ bạn yêu cầu.</p>
        <Button asChild className="mt-8 gradient-bg">
          <Link to="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Quay lại danh sách dịch vụ</Link>
        </Button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Vận Tải Dũng Ánh`}</title>
        <meta name="description" content={`${service.description} Tuyến Đà Nẵng - Quảng Nam và các tỉnh lân cận.`} />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className={`relative py-24 md:py-32 text-white ${service.color} bg-gradient-to-r`}>
           <div className="absolute inset-0 bg-black/20"></div>
           <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/services" className="inline-flex items-center gap-2 text-yellow-300 hover:text-white transition-colors mb-4">
                <ArrowLeft size={20} />
                <span>Tất cả dịch vụ</span>
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                    <Icon className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
              </div>
              <p className="text-xl md:text-2xl max-w-3xl opacity-90">{service.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{service.content.heading}</h2>
                {service.content.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 mb-6 leading-relaxed">{p}</p>
                ))}
                 <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-xl font-semibold text-blue-800">{service.content.cta}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-gray-50 rounded-xl shadow-lg p-8 sticky top-28">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Đặc điểm nổi bật</h3>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-6">
                     <p className="text-lg text-gray-600 mb-2">Giá cước:</p>
                    <p className="text-3xl font-bold text-blue-600 mb-6">{service.price}</p>
                    <Button asChild size="lg" className="w-full gradient-bg text-lg">
                       <a href="tel:0906511699">
                        <PhoneCall className="mr-2" /> Gọi Tư Vấn
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <BookingForm />
      </div>
    </>
  );
};

export default ServiceDetailPage;
