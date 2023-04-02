import { Col, Image, Row, Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";

const Location = (props) => {
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
          <BigTitle
            title="Location"
            colorIndex={[0]}
            subTitle="We are on the only way this can show me the map
            on the only way that"
          />
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
          src={
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          }
          alt={"image"}
        />
      </Col>
    </Row>
  );
};

export default Location;
