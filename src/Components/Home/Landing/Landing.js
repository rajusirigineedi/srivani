import CustomButton from "@/Components/CustomButton/CustomButton";
import useFolderImageshook from "@/hooks/useFolderImageshook";
import { Carousel, Col, Image, Row, Space, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import classes from "./Landing.module.css";

const contentStyle = {
  height: "70vh",
  width: "100%",
  display: "grid",
  placeItems: "center",
  borderRadius: "1.2rem",
};

const { Text } = Typography;
const Landing = (props) => {
  const { getFolderImages, getFolderThumbnails } = useFolderImageshook();
  const [hell, setHell] = useState();

  const imageList = useMemo(
    () => getFolderImages("HomePage"),
    [getFolderImages]
  );

  const allThumbnails = getFolderThumbnails();

  useEffect(() => {
    setHell(imageList);
  }, [imageList, allThumbnails]);

  return (
    <div className={classes["home-landing"]}>
      <Row className={classes["home-landing-row"]} align="middle">
        <Col
          xs={24}
          sm={24}
          md={9}
          lg={9}
          className={classes["home-landing-columns"]}
        >
          <Space direction="vertical" align="start" size={24}>
            <Space direction="vertical" size={0}>
              <Text
                className={classes["landing-text--primary"]}
                style={{ color: "var(--primary-color)" }}
              >
                Srivani Global School
              </Text>
              <Text className={classes["landing-text--primary"]}>
                Enlighting the future 🚀
              </Text>
            </Space>
            <Text className={classes["landing-text--secondary"]}>
              Our mission is to ikkda emojis vasthey baaguntaay emo?? choodu
              kkda emojis vasthey baaguntaay emo?? choodu elaa untaayo 🚘
            </Text>
            <Space direction="vertical" style={{ textAlign: "center" }}>
              <CustomButton text={"Join today !"} size="lg" />
              <Text className={classes["landing-text--paragraph"]}>
                Admissions are open
              </Text>
            </Space>
          </Space>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={15}
          lg={15}
          style={{
            paddingTop: "5vh",
            paddingBottom: "5vh",
            height: "80vh",
          }}
          // className={classes["home-landing-columns"]}
        >
          <Carousel autoplay>
            {imageList?.map((imageUrl, index) => (
              <div key={index}>
                <div style={contentStyle}>
                  <Image
                    preview={false}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                    alt="imagepreview"
                    src={imageUrl.image}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <div className={classes["home-landing-bottombar"]}>
        <div className={classes["home-landing-bottombar-text"]}>
          <Text style={{ color: "var(--primary-white)" }}>
            Our goal is to prepare our students for the challenges and
            opportunities that lie ahead, so that they can thrive in a rapidly
            changing world
          </Text>
        </div>
        <div className={classes["home-landing-bottombar-down"]}>V</div>
      </div>
    </div>
  );
};

export default Landing;
