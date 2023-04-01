import { useEffect, useState } from "react";

const { Space, Row, Col, Image, Typography } = require("antd");
const { default: BigTitle } = require("../BigTitle/BigTitle");
const { default: CustomButton } = require("../CustomButton/CustomButton");

const { Text } = Typography;

export const MiniGallery = ({ imageList, title, subTitle }) => {
  const [activeImage, setActiveImage] = useState();
  const [pageNum, setPageNum] = useState(0);
  const [galleryImages, setGalleryImages] = useState();
  const imagelimit = 7;

  useEffect(() => {
    const _imageList = imageList?.slice(
      pageNum * imagelimit,
      pageNum * imagelimit + imagelimit
    );
    if (_imageList?.length < imagelimit) {
      setGalleryImages(imageList?.slice(-imagelimit));
      return;
    }
    setGalleryImages(_imageList);
  }, [pageNum, imageList]);

  const prevClickHandler = () => {
    if (pageNum === 0) return;
    setPageNum((prev) => prev - 1);
  };

  const nextClickHandler = () => {
    if (pageNum + 1 > imageList?.length / imagelimit) return;
    setPageNum((prev) => prev + 1);
  };

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
                  // load previous 6 images. set Each galleryImages[i] = new Image.
                  // setTitle() if new block of images needed.
                  prevClickHandler();
                }}
              />
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[0]?.image}
                title={galleryImages?.[0]?.title}
              />
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[1]?.image}
                title={galleryImages?.[1]?.title}
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={24}>
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[2]?.image}
                title={galleryImages?.[2]?.title}
              />
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[3]?.image}
                title={galleryImages?.[3]?.title}
              />
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[4]?.image}
                title={galleryImages?.[4]?.title}
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={24}>
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[5]?.image}
                title={galleryImages?.[5]?.title}
              />
              <ImageBox
                onClick={onImageClick}
                imageUrl={galleryImages?.[6]?.image}
                title={galleryImages?.[6]?.title}
              />
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

const ImageBox = ({ buttonName, onClick, imageUrl, title }) => {
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
          src={imageUrl} // TODO: No image url ...
          onClick={() => {
            onClick({
              imageUrl,
              text: title,
            });
          }}
        />
      )}
    </div>
  );
};
