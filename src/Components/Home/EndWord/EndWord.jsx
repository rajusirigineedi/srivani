import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
import { Space } from "antd";
import React from "react";

const EndWord = (props) => {
  const { bigTitle } = props;
  const { _isSmallScreen } = useSmallScreenhook();
  return (
    <Space
      direction="vertical"
      align="center"
      size={24}
      style={{
        marginTop: 96,
        marginBottom: 96,
      }}
    >
      <BigTitle bigTitle={bigTitle} />
      <CustomButton
        text={"Contact us to join your child"}
        size={_isSmallScreen ? "md" : "lg"}
      />
    </Space>
  );
};

export default EndWord;
