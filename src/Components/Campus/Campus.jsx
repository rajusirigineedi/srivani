import { Image, Space, Typography } from "antd";
import { useRouter } from "next/router";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";

const { Text } = Typography;
const CampusComponent = (props) => {
  const { bigTitle, image, description } = props;
  const router = useRouter();
  return (
    <Space
      direction="vertical"
      align="center"
      size={48}
      style={{ marginTop: 72 }}
    >
      <BigTitle bigTitle={bigTitle} />
      <div style={{ width: "100vw", height: "60vh" }}>
        <Image
          preview={false}
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
          }}
          alt="imagepreview"
          src={image.data.attributes.url}
        />
      </div>
      <div
        style={{
          padding: "0px 20%",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            color: "var(--fontcolor-secondary)",
          }}
        >
          {description}
        </Text>
      </div>

      <CustomButton
        onClick={() => {
          router.push({
            pathname: "gallery",
            query: {
              albumName: "Campus",
            },
          });
        }}
        text="View Campus Gallery"
      />
    </Space>
  );
};

export default CampusComponent;
