import React from "react";
import { Layout } from "antd";
import Header from '../components/Header';
import App from '../App';
import Footer from '../components/Footer';

export default () => {
    return (
      <>
        <Layout>
          <Header />
          <App />
          <Footer />
        </Layout>
      </>
    );
}
