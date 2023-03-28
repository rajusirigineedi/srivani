import CustomButton from "@/Components/CustomButton/CustomButton";
import { Col, Row, Space, Typography } from "antd";
import React from "react";
import classes from "./Landing.module.css";

const { Text } = Typography;
const Landing = (props) => {
  return (
    <div className={classes["home-landing"]}>
      <Row className={classes["home-landing-row"]} align="middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
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
          md={12}
          lg={12}
          className={classes["home-landing-columns"]}
        >
          Carousel
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
