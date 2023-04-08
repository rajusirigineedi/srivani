import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Features from "@/Components/Features/Features";
import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
import { Col, Image, Row, Space, Typography } from "antd";
import React from "react";

const { Text } = Typography;
const FeatureSection = (props) => {
  const { bigTitle, fullImage, specialCard } = props;
  const { _isSmallScreen } = useSmallScreenhook();
  const _specialCards = specialCard.map((imageEntry) => {
    return {
      title: imageEntry.title,
      subtitle: imageEntry.subtitle,
      imageUrl: imageEntry.image.data.attributes.url,
    };
  });
  return (
    <Space
      style={{ width: "100%", marginTop: 96 }}
      align="center"
      direction="vertical"
      size={_isSmallScreen ? 36 : 72}
    >
      <BigTitle bigTitle={bigTitle} />
      <div style={{ width: _isSmallScreen ? "90vw" : "50vw", height: "50vh" }}>
        <Image
          preview={false}
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
          }}
          alt="imagepreview"
          src={fullImage.data.attributes.url}
        />
      </div>
      <Row justify={"center"}>
        {_specialCards.map((card, index) => {
          return (
            <Col key={index}>
              <Features
                logo={card.imageUrl}
                text={card.title}
                paragraph={card.subtitle}
              />
            </Col>
          );
        })}
      </Row>
      <CustomButton text="View testimonials" />
      <Text style={{ color: "var(--fontcolor-secondary)" }}>
        Overall 240+ happy students.
      </Text>
    </Space>
  );
};

export default FeatureSection;
