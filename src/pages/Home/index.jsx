import Layout from "components/Layout";
import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Sermon from "./Sermon/Sermon";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <Layout>
      <Header />
      {/* <About/> */}
      <Sermon/>
      <WhyUs/>
    </Layout>
  );
};
export default Home;
