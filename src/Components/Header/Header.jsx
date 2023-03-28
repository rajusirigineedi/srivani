import React from "react";
import { Breadcrumb, Layout, Menu, Space, theme } from "antd";

import classes from "./Header.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { NavLinks } from "./NavLinks/NavLinks";

const CustomHeader = (props) => {
  return (
    <header className={classes["header"]}>
      <Space align="center" className={classes["space"]}>
        <Logo />
        <NavLinks />
        <CustomButton text={"Join now"} />
      </Space>
    </header>
  );
};

export default CustomHeader;

const Logo = () => {
  return (
    <div
      style={{
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "2.4rem",
      }}
    >
      Srivani
    </div>
  );
};
