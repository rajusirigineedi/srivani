import { Space } from "antd";
import { Typography } from "antd";
import React from "react";
import classes from "./BigTitle.module.css";

const { Text } = Typography;
const BigTitle = ({ title, subTitle, colorIndex }) => {
  return (
    <Space direction="vertical" className={classes["bigtitle"]} size={24}>
      <div>
        {title.split(" ").map((item, index) => {
          return (
            <Text
              key={index}
              className={classes["bigtitle--heading"]}
              style={{
                color:
                  index in colorIndex
                    ? "var(--primary-color)"
                    : "var(--fontcolor-primary)",
              }}
            >
              {item + " "}
            </Text>
          );
        })}
      </div>

      <div style={{ padding: "0 20%" }}>
        <Text className={classes["bigtitle--subheading"]}>{subTitle}</Text>
      </div>
    </Space>
  );
};

export default BigTitle;
