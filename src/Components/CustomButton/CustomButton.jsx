import { Button } from "antd";
import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ text, onClick, size, style }) => {
  const padding =
    size === "lg"
      ? "1.8rem 10.8rem"
      : size === "md"
      ? "1.6rem 8.2rem"
      : "1.2rem 3.2rem";
  return (
    <div
      onClick={onClick}
      className={classes["customButtonName"]}
      style={{ padding, ...style }}
    >
      <p>{text}</p>
    </div>
  );
};

export default CustomButton;
