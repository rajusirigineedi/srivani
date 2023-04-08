import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
import { Col, Image, Row, Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";
import Contact from "./Contact";
import Location from "./Location";

const ContactSection = (props) => {
  const { contactTitle, locationTitle, locationImage } = props;
  const { _isSmallScreen } = useSmallScreenhook();
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", marginTop: _isSmallScreen ? 24 : 72 }}
      size={_isSmallScreen ? 36 : 48}
    >
      <Location bigTitle={locationTitle} image={locationImage} />
      <BigTitle bigTitle={contactTitle} />
      <Contact _isSmallScreen={_isSmallScreen} />
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
