import { Col, Image, Row, Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";
import Contact from "./Contact";
import Location from "./Location";

const ContactSection = (props) => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", marginTop: 72 }}
      size={48}
    >
      <BigTitle
        title="Contact Us"
        subTitle="You will get to know more about us by contacting us. "
        colorIndex={[1]}
      />
      <Contact />
      <Space
        style={{
          width: "100%",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <CustomButton text="Submit" />
      </Space>
      <BigTitle
        title="Visit Us"
        subTitle="You will get to know more about us by visiting us. "
        colorIndex={[1]}
      />
      <Location />
    </Space>
  );
};

export default ContactSection;
