import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { Space, Typography } from "antd";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const { Text } = Typography;
const AboutUsLanding = (props) => {
  const isSSR = typeof window === "undefined";
  const { title, subtitle, ytlink, fblink, videoUrl, description } = props;
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", marginTop: 96 }}
      size={48}
    >
      <BigTitle
        title={title}
        colorIndex={[0]}
        textSize="lg"
        subTitle={subtitle}
      />
      <CustomButton text="See Campus" />
      {/* This players casues hydration issues. Ignore it for now. */}
      <ReactPlayer
        width={"75vw"}
        height={"75vh"}
        controls={true}
        url={videoUrl}
      />
      <Text style={{ color: "var(--fontcolor-secondary)" }}>{description}</Text>
      <Space width={"50%"} direction="vertical">
        <CustomButton text="Follow us on Facebook" />
        <CustomButton text="Subscribe to our Youtube channel" />
      </Space>
    </Space>
  );
};

export default AboutUsLanding;
