
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Schedule from '@/components/Schedule';
import BookingForm from '@/components/BookingForm';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Xe Tải Ghép Hàng Đà Nẵng - Quảng Nam & Tỉnh Lân Cận</title>
        <meta name="description" content="Dịch vụ xe tải ghép hàng, chuyển nhà, dọn trọ tuyến Đà Nẵng - Quảng Nam và các tỉnh lân cận. Nhanh chóng, an toàn, tiết kiệm chi phí. Gọi ngay!" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <Services />
        <Schedule />
        <About />
        <BookingForm />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
