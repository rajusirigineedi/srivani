import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { Space, Typography } from "antd";
import React from "react";
import dynamic from "next/dynamic";
import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const { Text } = Typography;
const AboutUsLanding = (props) => {
  const { _isSmallScreen } = useSmallScreenhook();
  const isSSR = typeof window === "undefined";
  const { bigTitle, ytlink, fblink, videoUrl, description } = props;
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", marginTop: 96, textAlign: "center" }}
      size={_isSmallScreen ? 36 : 48}
    >
      <BigTitle bigTitle={bigTitle} textSize={_isSmallScreen ? "md" : "lg"} />
      <CustomButton text="See Campus" />
      {/* This players casues hydration issues. Ignore it for now. */}
      <ReactPlayer
        width={_isSmallScreen ? "100vw" : "75vw"}
        height={_isSmallScreen ? "50vh" : "75vh"}
        controls={true}
        url={videoUrl}
      />
      <Text
        style={{
          color: "var(--fontcolor-secondary)",
        }}
      >
        {description}
      </Text>
      <Space width={"50%"} direction="vertical">
        <CustomButton text="Follow us on Facebook" />
        <CustomButton text="Subscribe to our Youtube channel" />
      </Space>
    </Space>
  );
};

export default AboutUsLanding;
