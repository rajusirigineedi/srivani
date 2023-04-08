import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import { Col, Row, Space } from "antd";
import React from "react";
import CommentCard from "../../CommentCard/CommentCard";

const Testimonials = (props) => {
  const { bigTitle, comments } = props;
  const _comments = comments.map((imageEntry) => {
    return {
      title: imageEntry.title,
      subtitle: imageEntry.subtitle,
      comment: imageEntry.comment,
    };
  });
  return (
    <Space
      align="center"
      direction="vertical"
      style={{ width: "100%", padding: "0 20%", marginTop: 96 }}
      size={72}
    >
      <BigTitle bigTitle={bigTitle} />
      <Row gutter={[24, 24]} justify="center">
        {_comments.map((comment, index) => (
          <Col key={index}>
            <CommentCard
              mainTitle={comment.title}
              subTitle={comment.subtitle}
              description={comment.comment}
            />
          </Col>
        ))}

        <Col
          style={{
            alignSelf: "center",
            width: "34.5rem",
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
