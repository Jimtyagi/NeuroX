import React from 'react';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Login from "../containers/Login";

function LoginPage() {
  return (
    <div style={{ overflowY: 'hidden' }}>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
