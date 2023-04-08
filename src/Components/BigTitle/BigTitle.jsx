import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
import { Space } from "antd";
import { Typography } from "antd";
import React from "react";
import classes from "./BigTitle.module.css";

const { Text } = Typography;
const BigTitle = ({ bigTitle, textSize }) => {
  const { _isSmallScreen } = useSmallScreenhook();
  if (!bigTitle) return <h1>hi</h1>;
  const { title, subtitle, colorIndex } = bigTitle;
  const _colorIndex = colorIndex.map((color) => color.index);
  const splitWordMap = title?.split(" ").map((word, index) => {
    return {
      word,
      index,
    };
  });
  return (
    <Space direction="vertical" className={classes["bigtitle"]} size={24}>
      <div>
        {splitWordMap?.map((item) => {
          return (
            <Text
              key={item.index}
              className={`${
                textSize === "lg"
                  ? classes["bigtitle--heading-xl"]
                  : classes["bigtitle--heading"]
              }`}
              style={{
                color:
                  _colorIndex && _colorIndex.includes(item.index)
                    ? "var(--primary-color)"
                    : "var(--fontcolor-primary)",
              }}
            >
              {item.word + " "}
            </Text>
          );
        })}
      </div>

      <div
        style={{
          padding: _isSmallScreen
            ? 0
            : splitWordMap?.length > 5
            ? "0 20%"
            : "0",
        }}
      >
        <Text className={classes["bigtitle--subheading"]}>{subtitle}</Text>
      </div>
    </Space>
  );
};

export default BigTitle;
