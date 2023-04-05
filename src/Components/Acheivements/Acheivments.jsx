import useFolderImageshook from "@/hooks/useFolderImageshook";
import { Carousel, Col, Image, Row, Space, Typography } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";
import { MiniGallery } from "../MiniGallery/MiniGallery";
import classes from "./Acheivements.module.css";

const { Text } = Typography;
const Acheivments = (props) => {
  const { title, subtitle, images } = props;
  const _carouselImageList = images?.data?.map(
    (imageEntry) => imageEntry.attributes.image.data.attributes.url
  );

  return (
    <div style={{ position: "relative" }}>
      <Carousel autoplay>
        {_carouselImageList?.map((imageUrl, index) => (
          <div key={index}>
            <div className={classes["contentStyle"]}>
              <Image
                preview={false}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
                alt="imagepreview"
                src={imageUrl}
              />
            </div>
          </div>
        ))}
      </Carousel>

      <MiniGallery
        folder={"Student Acheivements"}
        title={title}
        subTitle={subtitle}
      />
    </div>
  );
};

export default Acheivments;
