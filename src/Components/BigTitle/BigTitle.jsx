import { Space } from "antd";
import { Typography } from "antd";
import React from "react";
import classes from "./BigTitle.module.css";

const { Text } = Typography;
const BigTitle = ({ title, subTitle, colorIndex }) => {
  const splitWordMap = title.split(" ").map((word, index) => {
    return {
      word,
      index,
    };
  });
  return (
    <Space direction="vertical" className={classes["bigtitle"]} size={24}>
      <div>
        {splitWordMap.map((item) => {
          return (
            <Text
              key={item.index}
              className={classes["bigtitle--heading"]}
              style={{
                color:
                  colorIndex && colorIndex.includes(item.index)
                    ? "var(--primary-color)"
                    : "var(--fontcolor-primary)",
              }}
            >
              {item.word + " "}
            </Text>
          );
        })}
      </div>

      <div style={{ padding: splitWordMap.length > 5 ? "0 20%" : "0" }}>
        <Text className={classes["bigtitle--subheading"]}>{subTitle}</Text>
      </div>
    </Space>
  );
};

export default BigTitle;
