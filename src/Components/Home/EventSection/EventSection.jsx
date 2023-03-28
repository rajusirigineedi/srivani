import BigTitle from "@/Components/BigTitle/BigTitle";
import { Col, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { Radio } from "antd";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Image from "next/image";

const { Text } = Typography;

const EventSection = (props) => {
  const options = ["Culturals", "Acheivements", "Events", "Gallery"];
  const [currTab, setCurrTab] = useState(options[0]);

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", marginTop: 96 }}
      size={48}
    >
      <BigTitle
        title={
          "School that involves in various activities along with the studies to succeed in life"
        }
        colorIndex={[0, 5]}
        subTitle={
          "School that involves in various activities along with the studies to succeed"
        }
      />
      <Radio.Group
        options={options}
        onChange={({ target: { value } }) => {
          setCurrTab(value);
        }}
        size="large"
        value={currTab}
        optionType="button"
        buttonStyle="solid"
      />
      <Row style={{ padding: "0 10%" }}>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{
            height: "50vh",
            paddingRight: 96,
          }}
        >
          <Space
            direction="vertical"
            align="start"
            size={24}
            style={{
              paddingRight: 12,
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "var(--fontcolor-primary)",
                fontSize: "var(--fontsize-xl)",
              }}
            >
              Seventh class student cracked Microsoft with 69LPA
            </Text>
            <Text
              style={{
                color: "var(--fontcolor-secondary)",
                fontSize: "var(--fontsize-lg)",
              }}
            >
              We are proud of this student who cracked microsoft in just one
              attemp and bagged a package of 69LPA, that cant even a graduated
              enEgineer from IIT cant do. Yes it is possible because he is our
              student.
            </Text>
            <CustomButton text={`View ${currTab}`} size="md" />
          </Space>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{
            height: "50vh",
            paddingLeft: 12,
            backgroundColor: "green",
            // border: "0.8rem solid var(--primary-color)",
            borderRadius: "0.8rem",
          }}
        >
          <Image
            style={{
              backgroundColor: "red",
              borderRadius: "0.8rem",
            }}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            layout={"fill"}
            src={"https://picsum.photos/200/300"}
            alt={"image"}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default EventSection;
