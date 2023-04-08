import { Space } from "antd";
import { Typography } from "antd";
import { Input } from "antd";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./Contact.module.css";

const { TextArea } = Input;
const { Text, Paragraph } = Typography;
const Contact = ({ _isSmallScreen }) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        padding: _isSmallScreen ? "0 10%" : "0 30%",
      }}
    >
      <Input className={classes["input1"]} placeholder="Enter Your Name" />
      <Input
        className={classes["input1"]}
        placeholder="Enter Your Phone number or email"
      />
      <TextArea
        className={classes["textArea"]}
        rows={7}
        placeholder="Type your query here"
      />
    </Space>
  );
};

export default Contact;
