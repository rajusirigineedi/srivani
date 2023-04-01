import React, { useEffect, useState } from "react";
import { Breadcrumb, Drawer, Layout, Menu, Space, theme } from "antd";
import { Grid, Tag } from "antd";

const { useBreakpoint } = Grid;
import classes from "./Header.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { NavLinks } from "./NavLinks/NavLinks";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";

const CustomHeader = (props) => {
  const screens = useBreakpoint();
  const [showHamburger, setShowHamburger] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const { xl, xxl, sm, md, xs, lg } = screens;
    if (xxl || xl || lg) {
      setShowHamburger(false);
    } else if (md || sm || xs) {
      setShowHamburger(true);
    }
    console.log("current bc : ", screens);
  }, [screens]);

  return (
    <header className={classes["header"]}>
      {showHamburger && (
        <HeaderDrawer setShowDrawer={setOpenDrawer} showDrawer={openDrawer} />
      )}
      <Space align="center" className={classes["space"]}>
        <Logo />
        {!showHamburger && <NavLinks />}
        {showHamburger ? (
          <CustomButton text={"Menu"} onClick={() => setOpenDrawer(true)} />
        ) : (
          <CustomButton text={"Join now"} />
        )}
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
