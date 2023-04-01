import { Image, Space, Typography } from "antd";
import { useRouter } from "next/router";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";

const { Text } = Typography;
const CampusComponent = (props) => {
  const router = useRouter();
  return (
    <Space direction="vertical" align="center" size={48}>
      <BigTitle
        title="Srivani Global School Campus"
        colorIndex={[0, 1, 2]}
        subTitle="The future belongs to our students, and we are dedicated to helping them realize their dreams and achieve their goals."
      />
      <div style={{ width: "100vw", height: "60vh", backgroundColor: "green" }}>
        <Image
          preview={false}
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
          }}
          alt="imagepreview"
          src={
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          }
        />
      </div>
      <div
        style={{
          padding: "0px 20%",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            color: "var(--fontcolor-secondary)",
          }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Text>
      </div>

      <CustomButton
        onClick={() => {
          router.push({
            pathname: "gallery",
            query: {
              albumName: "Campus",
            },
          });
        }}
        text="View Campus Gallery"
      />
    </Space>
  );
};

export default CampusComponent;
