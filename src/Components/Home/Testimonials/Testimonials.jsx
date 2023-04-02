import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import DirectorCard from "@/Components/DirectorCard/DirectorCard";
import { Col, Row, Space } from "antd";
import React from "react";

const Testimonials = (props) => {
  return (
    <Space
      align="center"
      direction="vertical"
      style={{ width: "100%", marginTop: 96 }}
      size={72}
    >
      <BigTitle
        title="What parents and students say about us."
        subTitle="What parents and students say about us. here should be another text vro"
        colorIndex={[1, 3]}
      />
      <Row gutter={[24, 24]} justify="center" style={{ padding: "0 20%" }}>
        <Col>
          <DirectorCard
            title="Raviteja Sunkara"
            rolee="10th Class,Section A"
            description="IAm very lucky to join in srivani global schools because of srivani global schools i got AIR-7 in IIT Advanced.Thank you srivani schools."
          />
        </Col>
        <Col>
          <DirectorCard
            title="Raviteja Sunkara"
            rolee="10th Class,Section A"
            description="IAm very lucky to join in srivani global schools because of srivani global schools i got AIR-7 in IIT Advanced.Thank you srivani schools."
          />
        </Col>
        <Col>
          <DirectorCard
            title="Raviteja Sunkara"
            rolee="10th Class,Section A"
            description="IAm very lucky to join in srivani global schools because of srivani global schools i got AIR-7 in IIT Advanced.Thank you srivani schools."
          />
        </Col>
        <Col>
          <DirectorCard
            title="Raviteja Sunkara"
            rolee="10th Class,Section A"
            description="IAm very lucky to join in srivani global schools because of srivani global schools i got AIR-7 in IIT Advanced.Thank you srivani schools."
          />
        </Col>
        <Col>
          <DirectorCard
            title="Raviteja Sunkara"
            rolee="10th Class,Section A"
            description="IAm very lucky to join in srivani global schools because of srivani global schools i got AIR-7 in IIT Advanced.Thank you srivani schools."
          />
        </Col>
        <Col
          style={{
            alignSelf: "center",
            width: "32.5rem",
          }}
        >
          <Space
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CustomButton text="View More ..." />
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default Testimonials;
