import React from 'react';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Register from "../containers/Register";

function RegisterPage() {
  return (
    <div style={{ overflowY: 'hidden' }}>
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterPage;
