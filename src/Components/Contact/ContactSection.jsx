import { Col, Image, Row, Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";
import Contact from "./Contact";
import Location from "./Location";

const ContactSection = (props) => {
  const { contactTitle, locationTitle, locationImage } = props;
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", marginTop: 72 }}
      size={48}
    >
      <Location bigTitle={locationTitle} image={locationImage} />
      <BigTitle bigTitle={contactTitle} />
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
    </Space>
  );
};

export default ContactSection;
