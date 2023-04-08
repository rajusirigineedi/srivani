import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
import { Space } from "antd";
import { Typography } from "antd";
import { Image } from "antd";
import React from "react";
import classes from "./Directors.module.css";

const { Text, Paragraph } = Typography;
const Directors = ({ image, title, subTitle, text, paragraph }) => {
  const { _isSmallScreen } = useSmallScreenhook();
  return (
    <Space
      direction="vertical"
      size="middle"
      style={_isSmallScreen && { textAlign: "center" }}
    >
      <Image
        style={{
          borderRadius: 8,
          objectFit: "cover",
        }}
        width="313px"
        height="200px"
        src="error"
        alt="errimg"
        preview={false}
        fallback={image}
      />
      <div>
        <Text className={classes["title"]}>{title}</Text>
        <br />
        <Text className={classes["subTitle"]}>{subTitle}</Text>
      </div>
      <Text className={classes["text"]}>{text}</Text>
      <Paragraph className={classes["paragraph"]}>{paragraph}</Paragraph>
    </Space>
  );
};

export default Directors;
