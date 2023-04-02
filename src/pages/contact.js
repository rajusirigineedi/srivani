import ContactSection from "@/Components/Contact/ContactSection";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { Space } from "antd";
import React from "react";

const contact = (props) => {
  return (
    <Space direction="vertical">
      <ContactSection />
      <EndWord />
    </Space>
  );
};

export default contact;
