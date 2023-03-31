import { useState } from "react";

const { Space, Row, Col, Image, Typography } = require("antd");
const { default: BigTitle } = require("../BigTitle/BigTitle");
const { default: CustomButton } = require("../CustomButton/CustomButton");

const { Text } = Typography;

export const MiniGallery = ({
  imageList,
  title,
  subTitle,
  prevClickHandler,
  nextClickHandler,
}) => {
  const [activeImage, setActiveImage] = useState();

  const onImageClick = (obj) => {
    setActiveImage(obj);
  };

  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        width: "100%",
        marginTop: 96,
      }}
      size={24}
    >
      <BigTitle
        title={title}
        subTitle={activeImage?.text ?? subTitle}
        colorIndex={[1]}
      />
      {activeImage ? (
        <Space
          width={"94.8rem"}
          height={"64.8rem"}
          style={{ position: "relative" }}
        >
          <div style={{ position: "absolute", zIndex: 99, top: 48, left: 48 }}>
            <CustomButton
              onClick={() => setActiveImage(undefined)}
              text="Back"
            />
          </div>
          <Image
            width={"94.8rem"}
            height={"64.8rem"}
            preview={true}
            style={{ objectFit: "cover" }}
            alt="imagepreview"
            src={activeImage.imageUrl}
          />
        </Space>
      ) : (
        <Row gutter={[24, 24]} justify="center">
          <Col>
            <Space direction="vertical" size={24}>
              <ImageBox
                buttonName="prev"
                onClick={() => {
                  // load previous 6 images. set Each imageList[i] = new Image.
                  // setTitle() if new block of images needed.
                  prevClickHandler();
                }}
              />
              <ImageBox onClick={onImageClick} imageUrl={imageList[0]} />
              <ImageBox onClick={onImageClick} imageUrl={imageList[1]} />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={24}>
              <ImageBox onClick={onImageClick} imageUrl={imageList[2]} />
              <ImageBox onClick={onImageClick} imageUrl={imageList[3]} />
              <ImageBox onClick={onImageClick} imageUrl={imageList[4]} />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={24}>
              <ImageBox onClick={onImageClick} imageUrl={imageList[5]} />
              <ImageBox onClick={onImageClick} imageUrl={imageList[6]} />
              <ImageBox
                buttonName="next"
                onClick={() => {
                  // load next 6 images. set Each imageList[i] = new Image.
                  nextClickHandler();
                }}
              />
            </Space>
          </Col>
        </Row>
      )}
      <Text style={{ color: "var(--fontcolor-secondary)" }}>
        The future belongs to our students, and we are dedicated to helping them
        realize their dreams and achieve their goals.
      </Text>
    </Space>
  );
};

const ImageBox = ({ buttonName, onClick, imageUrl }) => {
  return (
    <div
      style={{
        width: 300,
        height: 200,
        overflow: "hidden",
      }}
    >
      {buttonName && onClick ? (
        <div style={{ display: "grid", placeItems: "center", height: "100%" }}>
          <CustomButton size="md" text={buttonName} onClick={onClick} />
        </div>
      ) : (
        <Image
          preview={false}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover", cursor: "pointer" }}
          alt="imagepreview"
          src={imageUrl}
          onClick={() => {
            onClick({
              imageUrl,
              text: "our friedn bdc naidu won first place in not completing any task at a given time. some tesxt which is quite big and some long o",
            });
          }}
        />
      )}
    </div>
  );
};
