import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { Space } from "antd";
import React from "react";

const EndWord = () => {
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
      <BigTitle
        title="Srivani Global School is committed to providing our students with the
      skills, knowledge, and opportunities they need to succeed in the future."
        colorIndex={[0, 1, 2]}
        subTitle="With a focus on innovation, creativity, and critical thinking, our
      school is helping to shape the next generation of leaders and innovators"
      />
      <CustomButton text={"Contact us to join your child"} size="lg" />
    </Space>
  );
};

export default EndWord;
