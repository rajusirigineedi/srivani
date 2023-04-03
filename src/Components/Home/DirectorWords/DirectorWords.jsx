import BigTitle from "@/Components/BigTitle/BigTitle";
import Directors from "@/Components/Directors/Directors";
import { Col, Row, Space } from "antd";
import React from "react";

const DirectorWords = (props) => {
  const { title, subtitle, directorCards } = props;
  const directorsList = directorCards.map((imageEntry) => {
    return {
      title: imageEntry.title,
      subtitle: imageEntry.subtitle,
      imageUrl: imageEntry.image.data.attributes.url,
      name: imageEntry.name,
      degree: imageEntry.degree,
    };
  });
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", marginTop: 96 }}
    >
      <BigTitle title={title} subTitle={subtitle} colorIndex={[4]} />
      <Row gutter={[72, 72]} justify="center" style={{ marginTop: 72 }}>
        {directorsList.map((director, index) => (
          <Col key={index}>
            <Directors
              image={director.imageUrl}
              title={director.name}
              subTitle={director.degree}
              text={director.title}
              paragraph={director.subtitle}
            />
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default DirectorWords;
