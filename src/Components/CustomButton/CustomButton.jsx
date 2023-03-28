import { Button } from "antd";
import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={classes["customButtonName"]}>
      <p>{text}</p>
    </div>
  );
};

export default CustomButton;
