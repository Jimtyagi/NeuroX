import React from 'react';
import Service from '../components/home/Service';
import WhyUs from '../components/home/WhyUs';
import Footer from '../components/home/Footer';
import Banner from '../components/home/Banner';

function Home() {
  return (
    <div style={{ overflowY: 'hidden' }}>
      <Banner />
      <Service />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default Home;
