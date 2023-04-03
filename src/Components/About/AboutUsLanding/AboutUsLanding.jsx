import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { Space, Typography } from "antd";
import React from "react";
import ReactPlayer from "react-player/lazy";

const { Text } = Typography;
const AboutUsLanding = (props) => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", marginTop: 96 }}
      size={48}
    >
      <BigTitle
        title="SRIVANI GLOBAL SCHOOL"
        colorIndex={[0]}
        textSize="lg"
        subTitle="The future belongs to our students, and we are dedicated to helping them realize their dreams and achieve their goals."
      />
      <CustomButton text="See Campus" />
      <ReactPlayer
        width={"75vw"}
        height={"75vh"}
        controls={true}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
      <Text style={{ color: "var(--fontcolor-secondary)" }}>
        The future belongs to our students, and we are dedicated to helping them
        realize their dreams and achieve their goals.
      </Text>
      <Space width={"50%"} direction="vertical">
        <CustomButton text="Follow us on Facebook" />
        <CustomButton text="Subscribe to our Youtube channel" />
      </Space>
    </Space>
  );
};

export default AboutUsLanding;
