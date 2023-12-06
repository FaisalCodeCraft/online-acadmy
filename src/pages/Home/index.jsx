import Layout from "components/Layout";
import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Sermon from "./Sermon/Sermon";

const Home = () => {
  return (
    <Layout>
      <Header />
      <About/>
      <Sermon/>
    </Layout>
  );
};
export default Home;
