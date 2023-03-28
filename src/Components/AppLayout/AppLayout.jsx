import React from "react";
import { Layout, Space } from "antd";

import classes from "./AppLayout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CustomHeader from "../Header/Header";

const AppLayout = (props) => {
  return (
    <Layout>
      <CustomHeader />
      {props.children}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
