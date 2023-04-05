import { Col, Image, Row, Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";

const Location = (props) => {
  const { title, subtitle, image } = props;
  const _image = image.data.attributes.url;
  return (
    <Row align="center">
      <Col
        xs={24}
        sm={24}
        md={8}
        lg={8}
        style={{
          height: "40vh",
        }}
      >
        <Space
          size={24}
          align="center"
          direction="vertical"
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <BigTitle title={title} colorIndex={[0]} subTitle={subtitle} />
          <CustomButton text="View on GMaps" />
        </Space>
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} style={{ height: "40vh" }}>
        <Image
          preview={false}
          style={{
            objectFit: "cover",
          }}
          width={"100%"}
          height={"100%"}
          src={_image}
          alt={"image"}
        />
      </Col>
    </Row>
  );
};

export default Location;
