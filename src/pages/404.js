import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { Space } from "antd";
import { useRouter } from "next/router";
import React from "react";

const Custom404 = (props) => {
  const router = useRouter();
  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        height: "60vh",
        justifyContent: "center",
      }}
      size={24}
    >
      <BigTitle
        title="No Page Found."
        colorIndex={[2]}
        subTitle="check the url or you might came from a wrong/old url"
      />
      <CustomButton
        onClick={() => {
          router.push("/");
        }}
        text="Go to home"
        size="md"
      />
    </Space>
  );
};

export default Custom404;
