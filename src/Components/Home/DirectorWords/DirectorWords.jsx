import BigTitle from "@/Components/BigTitle/BigTitle";
import Directors from "@/Components/Directors/Directors";
import { Col, Row, Space } from "antd";
import React from "react";

const DirectorWords = (props) => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", marginTop: 96 }}
    >
      <BigTitle
        title="A word from our Directors"
        subTitle={"Directors are awesome"}
        colorIndex={[4]}
      />
      <Row gutter={[72, 72]} justify="center" style={{ marginTop: 72 }}>
        <Col>
          <Directors
            image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            title="Naidu Bolisetti"
            subTitle="Director and vice president, MBBS FRCS"
            text="New methods in the teaching."
            paragraph="By encouraging curiosity, exploration, and a love of learning, we are empowering our students to achieve their full potential and make a positive impact on the world."
          />
        </Col>
        <Col>
          <Directors
            image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            title="Raviteja Sunkara"
            subTitle="Director and vice president, MBBS FRCS"
            text="New methods in the teaching."
            paragraph="By encouraging curiosity, exploration, and a love of learning, we are empowering our students to achieve their full potential and make a positive impact on the world."
          />
        </Col>
        <Col>
          <Directors
            image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            title="Kaushik ENE"
            subTitle="Director and vice president, MBBS FRCS"
            text="New methods in the teaching."
            paragraph="By encouraging curiosity, exploration, and a love of learning, we are empowering our students to achieve their full potential and make a positive impact on the world."
          />
        </Col>
      </Row>
    </Space>
  );
};

export default DirectorWords;
