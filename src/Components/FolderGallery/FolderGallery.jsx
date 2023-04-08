import { useSmallScreenhook } from "@/hooks/useSmallScreenhook";
import { Col, Image, Row, Space, Typography } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./FolderGallery.module.css";

const { Text } = Typography;
const FolderGallery = (props) => {
  const { imageFolders } = props;
  const { lg } = useSmallScreenhook();
  const [folderImagesWithTitles, setFolderImagesWithTitles] =
    useState(imageFolders);
  const [folderState, setFolderState] = useState();
  const [pageNum, setPageNum] = useState(0);
  const folderLimit = 3;

  useEffect(() => {
    const _folderImages = folderImagesWithTitles?.slice(
      pageNum * folderLimit,
      pageNum * folderLimit + folderLimit
    );
    if (_folderImages?.length < folderLimit) {
      setFolderState(folderImagesWithTitles?.slice(-folderLimit));
      return;
    }
    setFolderState(_folderImages);
  }, [pageNum, folderImagesWithTitles]);

  useEffect(() => {
    setFolderImagesWithTitles(imageFolders);
  }, [imageFolders]);

  const prevClickHandler = () => {
    if (pageNum === 0) return;
    setPageNum((prev) => prev - 1);
  };
  const nextClickHandler = () => {
    if (pageNum + 1 > folderImagesWithTitles?.length / folderLimit) return;
    setPageNum((prev) => prev + 1);
  };

  return (
    <Space
      direction="vertical"
      align="center"
      size={24}
      style={lg && { padding: "0 20%" }}
    >
      <Row>
        <Col
          style={{ height: "50vh", overflow: "hidden" }}
          xs={24}
          sm={24}
          md={14}
          lg={14}
        >
          <GalleryThumbnailImage
            folder={folderState?.[0]?.folder}
            image={folderState?.[0]?.image}
          />
        </Col>
        <Col xs={24} sm={24} md={10} lg={10}>
          <Row>
            <Col
              xs={12}
              sm={12}
              lg={24}
              md={24}
              style={{ height: "25vh", overflow: "hidden" }}
            >
              <GalleryThumbnailImage
                folder={folderState?.[1]?.folder}
                image={folderState?.[1]?.image}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              lg={24}
              md={24}
              style={{ height: "25vh", overflow: "hidden" }}
            >
              <GalleryThumbnailImage
                folder={folderState?.[2]?.folder}
                image={folderState?.[2]?.image}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col>
          <CustomButton text="Prev Album" onClick={prevClickHandler} />
        </Col>
        <Col>
          <CustomButton text="Next Album" onClick={nextClickHandler} />
        </Col>
      </Row>
    </Space>
  );
};

const GalleryThumbnailImage = ({ image, folder }) => {
  const router = useRouter();
  return (
    <div className={classes["thumbnail-image"]}>
      <div
        className={classes["thumbnail-overlay"]}
        onClick={() => {
          router.push({
            pathname: "/gallery",
            query: {
              albumName: folder,
            },
          });
        }}
      >
        <Text
          style={{
            color: "var(--primary-white)",
            fontWeight: "bold",
            fontSize: "var(--fontsize-xl)",
          }}
        >
          {folder}
        </Text>
      </div>
      <Image
        preview={false}
        height="100%"
        width="100%"
        style={{
          objectFit: "cover",
          cursor: "pointer",
          borderRadius: 8,
        }}
        alt="imagepreview"
        src={image ?? "/NoImage.jpg"}
      />
    </div>
  );
};
export default FolderGallery;
