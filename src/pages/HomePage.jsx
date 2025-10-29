
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Schedule from '@/components/Schedule';
import BookingForm from '@/components/BookingForm';
import About from '@/components/About';
import Contact from '@/components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Xe Tải Ghép Hàng Đà Nẵng Quảng Nam | Vận Tải Dũng Ánh</title>
        <meta name="description" content="Vận Tải Dũng Ánh chuyên dịch vụ xe tải ghép hàng Đà Nẵng Quảng Nam, chuyển nhà, dọn trọ giá rẻ. Hotline gọi ngay để nhận giá tốt nhất!" />
      </Helmet>
      <Hero />
      <Services />
      <Schedule />
      <About />
      <BookingForm />
      <Contact />
    </>
  );
};

export default HomePage;
