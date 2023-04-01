import BigTitle from "@/Components/BigTitle/BigTitle";
import { Col, Row, Space, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Radio } from "antd";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Image from "next/image";
import useFolderImageshook from "@/hooks/useFolderImageshook";
import { useRouter } from "next/router";

const { Text } = Typography;

const options = ["Culturals", "Acheivements", "Events", "Campus"];
const EventSection = (props) => {
  const [currTab, setCurrTab] = useState(options[0]);
  const [currImage, setCurrImage] = useState();
  const { getFolderImages } = useFolderImageshook();
  const router = useRouter();
  const homePageEventImages = useMemo(
    () => getFolderImages("HomePage Images2"),
    [getFolderImages]
  );

  useEffect(() => {
    const index = options.findIndex((item) => item === currTab);
    if (index !== -1) setCurrImage(homePageEventImages?.[index]);
  }, [currTab, homePageEventImages]);

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
              {currImage?.title}
            </Text>
            <Text
              style={{
                color: "var(--fontcolor-secondary)",
                fontSize: "var(--fontsize-lg)",
              }}
            >
              {currImage?.info}
            </Text>
            <CustomButton
              onClick={() => {
                let _route;
                if (currTab === options[0] || currTab === options[2])
                  _route = "/events";
                else if (currTab === options[1]) _route = "/acheivements";
                else _route = "/campus";
                router.push(_route);
              }}
              text={`View ${currTab}`}
              size="md"
            />
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
              borderRadius: "0.8rem",
            }}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            layout={"fill"}
            src={currImage?.image}
            alt={"image"}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default EventSection;
