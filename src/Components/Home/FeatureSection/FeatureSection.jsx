import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Features from "@/Components/Features/Features";
import { Col, Image, Row, Space, Typography } from "antd";
import React from "react";

const { Text } = Typography;
const FeatureSection = (props) => {
  return (
    <Space
      style={{ width: "100%", marginTop: 96 }}
      align="center"
      direction="vertical"
      size={72}
    >
      <BigTitle
        title="What Srivani Global School provides and Why we are special.."
        subTitle="The future belongs to our students, and we are dedicated to helping them realize their dreams and achieve their goals."
        colorIndex={[1, 2, 3]}
      />
      <div style={{ width: "50vw", height: "50vh" }}>
        <Image
          preview={false}
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
          }}
          alt="imagepreview"
          src={
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          }
        />
      </div>
      <Row justify={"center"}>
        <Col>
          <Features
            logo="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            text="Powered by LEAD.
            Bringing power to education"
            paragraph="Drag and drop elements - quickly and easily - from a comprehensive library of widgets and smart-shapes."
          />
        </Col>
        <Col>
          <Features
            logo="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            text="Powered by LEAD.
            Bringing power to education"
            paragraph="Drag and drop elements - quickly and easily - from a comprehensive library of widgets and smart-shapes."
          />
        </Col>
        <Col>
          <Features
            logo="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            text="Powered by LEAD.
            Bringing power to education"
            paragraph="Drag and drop elements - quickly and easily - from a comprehensive library of widgets and smart-shapes."
          />
        </Col>
      </Row>
      <CustomButton text="View testimonials" />
      <Text style={{ color: "var(--fontcolor-secondary)" }}>
        Overall 240+ happy students.
      </Text>
    </Space>
  );
};

export default FeatureSection;
