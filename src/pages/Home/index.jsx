import Layout from "components/Layout";
import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Sermon from "./Courses/Courses";
import WhyUs from "./WhyUs/WhyUs";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <Header />
      <About/>
      <Sermon/>
      <WhyUs/>
      <Testimonial/>
      <Services/>
    </Layout>
  );
};
export default Home;
